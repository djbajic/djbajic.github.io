// A small, dependency-free "function landscape": a viridis height field floating
// above a network of genotypes/communities, drifting slowly. ~3 KB, canvas 2D.
const VIR = [
  [68, 1, 84], [72, 40, 120], [62, 74, 137], [49, 104, 142], [38, 130, 142],
  [31, 158, 137], [53, 183, 121], [109, 205, 89], [180, 222, 44], [253, 231, 37],
];
function viridis(t: number, a = 1) {
  t = Math.min(1, Math.max(0, t)) * (VIR.length - 1);
  const i = Math.min(VIR.length - 2, Math.floor(t)), f = t - i;
  const c = VIR[i].map((v, k) => Math.round(v + (VIR[i + 1][k] - v) * f));
  return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
}

type Opts = { dark?: boolean; layers?: number; network?: boolean; speed?: number; interactive?: boolean; tilt?: number };

export function mountLandscape(canvas: HTMLCanvasElement, opts: Opts = {}) {
  const { dark = false, layers = 1, network = true, speed = 1, interactive = true, tilt = 0.52 } = opts;
  const ctx = canvas.getContext('2d')!;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const N = 34;
  // deterministic pseudo-random
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const bumps = Array.from({ length: 11 }, () => ({
    x: rnd() * 1.6 - 0.8, y: rnd() * 1.6 - 0.8, s: 0.14 + rnd() * 0.22, h: (rnd() * 0.55 + 0.25) * (rnd() < 0.25 ? -0.6 : 1),
    px: rnd() * 6.28, py: rnd() * 6.28, w: 0.25 + rnd() * 0.35,
  }));
  const nodes = Array.from({ length: 46 }, () => ({ x: rnd() * 1.9 - 0.95, y: rnd() * 1.9 - 0.95 }));
  const edges: [number, number][] = [];
  nodes.forEach((a, i) => {
    const d = nodes.map((b, j) => [Math.hypot(a.x - b.x, a.y - b.y), j]).sort((p, q) => p[0] - q[0]);
    for (let k = 1; k <= 2; k++) if (i < d[k][1]) edges.push([i, d[k][1]]);
  });

  let W = 0, H = 0, dpr = 1, yaw = -0.62, targetYaw = yaw, raf = 0, t0 = performance.now(), visible = true;
  const resize = () => {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const height = (x: number, y: number, t: number) => {
    let z = 0;
    for (const b of bumps) {
      const bx = b.x + 0.12 * Math.sin(t * b.w + b.px), by = b.y + 0.12 * Math.cos(t * b.w * 0.8 + b.py);
      z += b.h * Math.exp(-((x - bx) ** 2 + (y - by) ** 2) / (2 * b.s * b.s));
    }
    return z;
  };
  const project = (x: number, y: number, z: number) => {
    const c = Math.cos(yaw), s = Math.sin(yaw);
    const X = x * c - y * s, Y = x * s + y * c;
    const scale = Math.min(W * 0.34, H * 0.6);
    return [W / 2 + X * scale, H * 0.52 + Y * scale * tilt - z * scale * 0.34, Y] as const;
  };

  const draw = (now: number) => {
    const t = reduce ? 2 : ((now - t0) / 1000) * 0.35 * speed;
    yaw += (targetYaw - yaw) * 0.05;
    ctx.clearRect(0, 0, W, H);
    const floorZ = -0.85;
    // floor plane + network
    if (network) {
      const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => project(x, y, floorZ));
      ctx.beginPath(); corners.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath();
      ctx.fillStyle = dark ? 'rgba(255,255,255,0.03)' : 'rgba(17,19,24,0.035)'; ctx.fill();
      ctx.strokeStyle = dark ? 'rgba(255,255,255,0.18)' : 'rgba(17,19,24,0.22)'; ctx.lineWidth = 1; ctx.stroke();
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = dark ? 'rgba(255,255,255,0.28)' : 'rgba(17,19,24,0.35)';
      ctx.beginPath();
      for (const [i, j] of edges) {
        const a = project(nodes[i].x, nodes[i].y, floorZ), b = project(nodes[j].x, nodes[j].y, floorZ);
        ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
      }
      ctx.stroke(); ctx.setLineDash([]);
      for (const n of nodes) {
        const [x, y] = project(n.x, n.y, floorZ);
        ctx.beginPath(); ctx.arc(x, y, 2.6, 0, 6.283);
        ctx.fillStyle = dark ? '#0d0f1a' : '#fff'; ctx.fill();
        ctx.strokeStyle = dark ? 'rgba(255,255,255,0.7)' : 'rgba(17,19,24,0.75)'; ctx.stroke();
      }
    }
    // surfaces, back-to-front
    for (let L = layers - 1; L >= 0; L--) {
      const off = L * 0.3, alpha = layers > 1 ? 0.55 + 0.45 * (1 - L / layers) : 0.94;
      const quads: { d: number; p: (readonly [number, number, number])[]; z: number }[] = [];
      const Z: number[][] = [];
      for (let i = 0; i <= N; i++) {
        Z[i] = [];
        for (let j = 0; j <= N; j++) Z[i][j] = height(-1 + (2 * i) / N, -1 + (2 * j) / N, t + L * 0.9) * (1 - L * 0.12) + off;
      }
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
        const xs = [i, i + 1, i + 1, i], ys = [j, j, j + 1, j + 1];
        const p = xs.map((ii, k) => project(-1 + (2 * ii) / N, -1 + (2 * ys[k]) / N, Z[ii][ys[k]]));
        const z = (Z[i][j] + Z[i + 1][j] + Z[i + 1][j + 1] + Z[i][j + 1]) / 4;
        quads.push({ d: p.reduce((s, q) => s + q[2], 0), p, z });
      }
      quads.sort((a, b) => a.d - b.d);
      for (const q of quads) {
        ctx.beginPath(); q.p.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath();
        const col = viridis((q.z - off + 0.5) / 1.75, alpha);
        ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 0.6; ctx.fill(); ctx.stroke();
      }
    }
    if (!reduce && visible) raf = requestAnimationFrame(draw);
  };

  resize();
  new ResizeObserver(() => { resize(); if (reduce) draw(0); }).observe(canvas);
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
  }).observe(canvas);
  if (interactive && !reduce) {
    const host = canvas.parentElement ?? canvas;
    host.addEventListener('pointermove', (e) => {
      const r = host.getBoundingClientRect();
      targetYaw = -0.62 + ((e.clientX - r.left) / r.width - 0.5) * 0.7;
    });
    host.addEventListener('pointerleave', () => (targetYaw = -0.62));
  }
  raf = requestAnimationFrame(draw);
}
