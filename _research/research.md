---
title: "Research interests"
layout: splash
permalink: /research/
date: 2019-02-01
header:
  #overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: beograd1.jpg
  caption: ""

feature_row1:
  - image_path: specialization.png
    title: "Metabolic specialization in microbes"
    alt: "Placeholder Image Right Aligned"
    excerpt: 'One of the main activities of microbes is eating. What they eat, and how, is one of the main ways in which they interact with other microbes. For instance, if two species compete for the same nutrient, one of them might exclude the other, which will become extinct. However, if two species consume different nutrients, they could be able to coexist. One of my current projects involves understanding how microbes evolve to become specialists on different nutrients, and how this shapes the structure of microbial communities.'
    url: "https://www.sciencedirect.com/science/article/pii/S0958166919300722"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row2:
  - image_path: crossfeeding.png
    title: "The effects of cross-feeding on microbial community assembly"
    alt: "Placeholder Image Left Aligned"
    excerpt: 'Apart from eating, another important activity of microbes is ... you guessed it: secreting molecules to the environment, notably metabolic byproducts. These molecules might, however, be used (for example as food) by other nearby species. During my collaboration in a [recently finished  project](http://science.sciencemag.org/content/361/6401/469) studying microbial community assembly, I was surprised to discover that in one small example community, all of its members appeared to cross-feed each other. This suggested that such exchange is more important to microbial community assembly than previously thought. I am currently collaborating with [Chang-Yu Chang](https://www.changyuchang.name/) on examining this issue more closely.'
    url: "/publications/"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row3:
  - image_path: noncommutative.png
    title: "Environment building on fitness landscapes"
    alt: "Placeholder Image Right Aligned"
    excerpt: 'One of the obvious effects of microbial secretion of metabolic byproducts is altering the environment. This can alter the fitness effects of new mutations that appear in the population. For instance, some mutants could be able to take advantage of the byproducts released by their ancesor. In such way, organisms dont only evolve by adapting to the given environment, but also "set the stage for their own evolution" as recognized by Levins and Lewontin [several decades ago](http://www.hup.harvard.edu/catalog.php?isbn=9780674202832). Together with [Jean Vila], [Zacchary Blount](https://www.blount-lab.org/) and [Alvaro Sanchez](http://www.sanchezlaboratory.com/), we recently examined this phenomenon at the genome scale, using both experiments and computational models ([COMETS](http://www.bu.edu/segrelab/comets/), see below). We are also working on follow ups, so stay tuned!'
    url: "https://www.pnas.org/content/115/44/11286"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row4:
  - image_path: comets_code.png
    title: "Genome scale metabolic modeling of microbial communities"
    alt: "Placeholder Image Left Aligned"
    excerpt: 'Genome-scale metabolic modeling, aka Flux Balance Analysis (FBA), has become one of the most popular platforms for simulation of cellular growth from metabolic networks. Given its realistic prediction of growth (and therfore, fitness), it can be used, for example, for studying genetic networks or exploring fitness landscapes. In collaboration with the group of [Daniel Segre](https://www.bu.edu/segrelab/), I am currently participating in the development of [COMETS](http://www.bu.edu/segrelab/comets/), a platform that uses dynamic FBA to introduce ecological aspects in simulating microbial growth. This will enable us to simulate and predict phenomena such as community assembly or clonal evolution within a realistic ecological setting.' 
    url: "/publications/"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row5:
  - image_path: starch_epsilon.png
    title: "High-order interactions in functional landscapes of microbial consortia"
    alt: "Placeholder Image Right Aligned"
    excerpt: 'When an interaction among organisms is affected by other nearby species, this interaction cannot be defined as pairwise anymore. I am interested in how such "high-order" interactions affect microbial community structure and function. Recently, we quantitatively examined this issue in consortia of starch-degrading Bacilli. We applied tools borrowed from the field of fitness andscapes and genetic interactions to ask how do high-order interactions affect community funcion. The study was done together with [Alicia Sanchez-Gorostiaga](https://scholar.google.com/citations?user=gTO4fx0AAAAJ&hl=en), Melisa Osborne, [Juan Poyatos](http://wwwuser.cnb.csic.es/~jpoyatos/) and [Alvaro Sanchez](http://www.sanchezlaboratory.com/).'
    url: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000550"
    btn_label: "Read More"
    btn_class: "btn--inverse"

---

{% include feature_row %}

{% include feature_row id="feature_row1" type="right" %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="left" %}

{% include feature_row id="feature_row5" type="right" %}
