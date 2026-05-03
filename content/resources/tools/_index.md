---
# Course title, summary, and position.
linktitle: Research Tools
summary: Research software used for neuroimaging, electrophysiology, fNIRS, MRS, meta-analysis, behavioural, and physiological data workflows.
weight: 2

# Page metadata.
title: Research Tools
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Overview.
# - weight: 1

---

At Clinical Brain Lab, we use open and widely adopted research software to preprocess, analyze, visualize, and synthesize behavioural, physiological, and brain imaging data.

## MRI Signal Analysis

MRI analysis often involves several steps: converting scanner data into research-ready formats, quality control, anatomical segmentation, spatial registration, task or resting-state modeling, diffusion modeling, and group-level statistics. The lab draws on established MRI toolboxes depending on the study design, modality, and analysis question.

<div class="cbl-tool-list">
  <a class="cbl-tool-row" href="https://www.fil.ion.ucl.ac.uk/spm/" target="_blank" rel="noopener" aria-label="SPM">
    <span class="cbl-tool-logo-mark">
      <img src="/resources/tools/spm.PNG" alt="SPM logo">
    </span>
    <span>MATLAB-based analysis for fMRI, PET, EEG, and MEG. SPM is commonly used for image preprocessing, spatial normalization, statistical parametric mapping, general linear modeling, and group-level inference across task-based and structural imaging studies.</span>
  </a>
  <a class="cbl-tool-row" href="https://fsl.fmrib.ox.ac.uk/fsl/docs/" target="_blank" rel="noopener" aria-label="FSL">
    <span class="cbl-tool-logo-mark">
      <img src="/media/tools/fsl-logo.jpg" alt="FSL logo">
    </span>
    <span>FSL provides tools for structural MRI, task fMRI, resting-state fMRI, diffusion MRI, registration, segmentation, statistics, and visualization. It is useful for robust preprocessing and analysis pipelines across several MRI modalities.</span>
  </a>
  <a class="cbl-tool-row" href="https://afni.nimh.nih.gov/" target="_blank" rel="noopener" aria-label="AFNI">
    <span class="cbl-tool-logo-mark">
      <img src="/media/tools/afni-logo.png" alt="AFNI logo">
    </span>
    <span>AFNI is a suite for anatomical, functional, and diffusion MRI processing, analysis, quality control, and display. It is especially useful for interactive data inspection, flexible command-line workflows, and detailed fMRI preprocessing and modeling.</span>
  </a>
  <a class="cbl-tool-row" href="https://fmriprep.org/en/stable/" target="_blank" rel="noopener" aria-label="fMRIPrep">
    <span class="cbl-tool-logo-mark cbl-tool-logo-text">fMRIPrep</span>
    <span>fMRIPrep is a standardized, reproducible preprocessing pipeline for task-based and resting-state functional MRI. It integrates tools from packages such as FSL, ANTs, FreeSurfer, and AFNI to generate analysis-ready outputs with quality reports.</span>
  </a>
  <a class="cbl-tool-row" href="https://nimare.readthedocs.io/en/latest/" target="_blank" rel="noopener" aria-label="NiMARE">
    <span class="cbl-tool-logo-mark cbl-tool-nimare-mark">
      <img src="/media/tools/nimare-spider-only.png" alt="NiMARE spider logo">
    </span>
    <span>NiMARE is a Python environment for coordinate- and image-based neuroimaging meta-analysis. It supports meta-analytic workflows, annotation, decoding, coactivation modeling, and reproducible synthesis of neuroimaging findings.</span>
  </a>
  <a class="cbl-tool-row" href="https://www.diedrichsenlab.org/imaging/suit.htm" target="_blank" rel="noopener" aria-label="SUIT template">
    <span class="cbl-tool-logo-mark">
      <img src="/media/tools/suit-logo.gif" alt="SUIT logo">
    </span>
    <span>SUIT is an SPM add-on for cerebellar and brainstem imaging analysis. It supports cerebellar isolation, normalization to SUIT space, atlas-based summaries, and flatmap visualization for studies that require more precise cerebellar anatomy.</span>
  </a>
</div>

## Magnetic Resonance Spectroscopy (MRS) Analysis

MRS analysis focuses on spectral preprocessing, fitting, quantification, tissue correction, and reporting of metabolite estimates. The right tool depends on the sequence, vendor format, reproducibility needs, and whether the workflow is single-voxel, MRSI, edited MRS, or functional MRS.

- [FSL-MRS](https://fsl.fmrib.ox.ac.uk/fsl/docs/utilities/fsl_mrs.html) is an end-to-end spectroscopy toolbox for conversion, preprocessing, basis simulation, fitting, quantification, and visualization.
- [LCModel](https://www.lcmodel.com/lcmodel.shtml) is a long-standing package for automatic quantification of in vivo proton MR spectra.
- [jMRUI](https://www.jmrui.eu/) provides time-domain analysis and quantification tools for clinical and biomedical MRS and MRSI data.
- [Osprey](https://github.com/schorschinho/osprey) is an open-source toolbox for processing, modeling, quantification, and visualization of in vivo MRS data.
- [TARQUIN](https://www.nitrc.org/projects/tarquin/) provides automated quantification for in vivo proton MRS and related NMR spectroscopy data.

## Neuroimaging Meta-Analysis

Coordinate-based and image-based meta-analysis tools help synthesize findings across published neuroimaging studies. These tools are useful when the research question depends on convergence across many independent experiments rather than a single dataset.

- [GingerALE](https://brainmap.org/ale/) is BrainMap's application for activation likelihood estimation (ALE) meta-analysis of coordinates in Talairach or MNI space.
- [BrainMap](https://www.brainmap.org/) maintains databases and software resources for coordinate-based meta-analysis of human brain function and structure.
- [Neurosynth](https://www.neurosynth.org/) supports large-scale automated synthesis of published fMRI studies and downloadable term-based meta-analytic maps.
- [NiMARE](https://nimare.readthedocs.io/en/latest/) supports programmable neuroimaging meta-analysis, annotation, decoding, and meta-analytic coactivation modeling in Python.

## EEG Analysis

EEG analysis often includes filtering, artefact rejection, independent component analysis, epoching, event-related potential analysis, and spectral or time-frequency analysis.

- [EEGLAB](https://eeglab.org/) is a widely used MATLAB environment for EEG and related electrophysiological data, including ICA, time-frequency analysis, artefact rejection, and group-level workflows.
- [SPM](https://www.fil.ion.ucl.ac.uk/spm/) includes EEG analysis tools and supports statistical modeling across multiple imaging modalities.
- [FieldTrip](https://www.fieldtriptoolbox.org/) is also commonly used for advanced EEG, MEG, and iEEG analysis, including source reconstruction, time-frequency analysis, and non-parametric statistics.

## fNIRS Analysis

Functional near-infrared spectroscopy analysis typically includes signal quality checks, motion correction, conversion from light intensity to haemoglobin concentration changes, statistical modeling, and group-level summaries.

- [Homer3](https://openfnirs.org/software/homer/homer3/) is an open-source MATLAB application for fNIRS analysis, including subject- and group-level processing workflows.
- [AtlasViewer](https://openfnirs.org/software/homer/) supports fNIRS probe registration, sensitivity visualization, and image reconstruction workflows alongside Homer.

## MEG Analysis

MEG analysis requires careful preprocessing, sensor-level analyses, forward models, source reconstruction, time-frequency analysis, and statistics. Mainstream MEG workflows often use MATLAB- or Python-based toolboxes depending on the lab's analysis pipeline.

- [SPM](https://www.fil.ion.ucl.ac.uk/spm/) supports MEG analysis within the same statistical framework used for MRI and EEG.
- [FieldTrip](https://www.fieldtriptoolbox.org/) is a mainstream MATLAB toolbox for MEG, EEG, and iEEG, with strong support for source reconstruction and time-frequency analysis.
- [MNE-Python](https://mne.tools/stable/index.html) is a widely used Python package for MEG and EEG preprocessing, visualization, source estimation, connectivity, machine learning, and statistics.

## Behavioural and General Data Analysis

Behavioural and physiological workflows also use general-purpose research tools for experiment delivery, data cleaning, modeling, visualization, and reproducible reporting.

- [E-Prime](/resources/tools/eprime/) is used for behavioural experiment design and stimulus presentation.
- [Python](/resources/tools/python/) supports experiment scripting, data wrangling, statistics, visualization, and neuroimaging workflows.
- [R](/resources/tools/r/) supports statistical modeling, visualization, reproducible reports, and behavioural data analysis.
