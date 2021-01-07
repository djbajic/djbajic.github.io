---
title: "Research interests"
layout: splash
permalink: /research/
date: 2019-02-01
header:
  #overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: koreni.jpg
  caption: ""

feature_row1:
  - image_path: hierarchies.jpg
    title: "Metabolic specialization in microbes"
    alt: "Placeholder Image Right Aligned" 
    excerpt: The use of different available resources represents one of the main ways in which microbes interact with other organisms, such as plants or other microbes. For instance, if two microbes compete for the same nutrient, one of them might exclude the other, but if they use different nutrients they might be able to coexist. My main current research interests focus on understanding how does the structure of metabolic networks determine specialization on different nutrients, and how this shapes the structure of microbial communities. For a sneak peek, see our recent [review](https://www.sciencedirect.com/science/article/pii/S0958166919300722).
    url: "https://www.sciencedirect.com/science/article/pii/S0958166919300722"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row2:
  - image_path: comets_code.png
    title: "Genome scale metabolic modeling of microbial communities"
    alt: "Placeholder Image Left Aligned"
    excerpt: 'Genome-scale metabolic modeling, and in particular Flux Balance Analysis (FBA), has become one of the most popular platforms for simulation of cellular growth from metabolic networks. Given its realistic prediction of growth from genotype, it can be used, for example, for studying genetic networks or exploring fitness landscapes. In collaboration with the groups of [Daniel Segre](https://www.bu.edu/segrelab/) and [Will Harcombe](http://www.wrharcombe.org/) I have co-led the development of [COMETS](https://arxiv.org/abs/2009.01734), a platform for the "Computation of Microbial Ecosystems in Time and Space" that extends FBA to diverse ecological and evolutionary scenarios. COMETS will allow us to simulate and predict phenomena such as community assembly or clonal evolution within realistic ecological settings and based on an empirically calibrated genotype-phenotype map.' 
    url: "https://arxiv.org/abs/2009.01734"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row3:
  - image_path: crossfeeding.png
    title: "The effects of cross-feeding on microbial community assembly"
    alt: "Placeholder Image Right Aligned"
    excerpt: 'The secretion of metabolites, for example metabolic byproducts, is also a critical factor shaping ecological interactions of microbes. For example, the metabolites released by one species could be used for growth by others, potentially leading to commensal or mutualistic interactions. During my collaboration in a [recent project](http://science.sciencemag.org/content/361/6401/469) studying microbial community assembly, I was surprised to discover that in small communities assembled in simple environments with a single source of carbon, the exchange of nutrients between coexistingf species seems to be widespread. This suggests that metabolic exchanges play an important role in determining the assembly of microbial communities. I am currently collaborating with [Chang-Yu Chang](https://www.changyuchang.name/) on examining more closely how the interplay of competition and cross-feeding structures the interactions between coexisting microbes.'
    url: "/publications/"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row4:
  - image_path: noncommutative.png
    title: "Environment building and the deformability of fitness landscapes"
    alt: "Placeholder Image Left Aligned"
    excerpt: Besides their ecological effects, microbial secretion of metabolic byproducts can also impact evolution by altering the fitness effects of new mutations that appear in the population. For instance, some mutants could be able to use the byproducts released by their ancesor for growth. This means that organisms dont only evolve by adapting to the environment, but also transform it and "set the stage for their own evolution" as recognized by Levins and Lewontin [several decades ago](http://www.hup.harvard.edu/catalog.php?isbn=9780674202832). Together with [Jean Vila], [Zacchary Blount](https://www.blount-lab.org/) and [Alvaro Sanchez](http://www.sanchezlaboratory.com/), we examined the consequences of this phenomenon at the genome scale by combining experiments with COMETS simulations. We are working on follow ups, so stay tuned!
    url: "https://www.pnas.org/content/115/44/11286"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row5:
  - image_path: starch_epsilon.png
    title: "High-order interactions in functional landscapes of starch-degrading microbial consortia"
    alt: "Placeholder Image Right Aligned"
    excerpt: 'When an interaction among two organisms is modified by other nearby species, this interaction cannot be defined as pairwise anymore. I am interested in how such "high-order" interactions affect microbial community structure and function. Recently, we quantitatively examined this issue in consortia of starch-degrading Bacilli by applying the theoretical framework of fitness landscapes. The [study](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000550) was done together with [Alicia Sanchez-Gorostiaga](https://scholar.google.com/citations?user=gTO4fx0AAAAJ&hl=en), Melisa Osborne, [Juan Poyatos](http://wwwuser.cnb.csic.es/~jpoyatos/) and [Alvaro Sanchez](http://www.sanchezlaboratory.com/). Subsequently, in collaboration with [Felipe Lino](https://scholar.google.com/citations?user=zkh49WQAAAAJ&hl=pt-BR) and [Morten Sommmer](http://www.savingtheworldwithscience.com/) we also combined this framework with COMETS to disentangle how complex ecological interactions affect biofuel production in sugar-cane fermenters ([preprint](https://assets.researchsquare.com/files/rs-38002/v1/Complexyeastbacteriainteractionsshapetheyieldofindustrialethanolfermentations.pdf))'
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
