import React from 'react' 
import './css/main.css'
//TODO -- inject this css link in the final html string

//TODO: depending on acitivity type, choose and render top bar
//create portable text renders for different types
//figure out how to expel to xhtml
//expel to PDF with diff background
export const EpubPreview = ({ document }) => {
  const toPresent = document.draft ?? document.displayed
  return (
    // <html xmlns:m="http://www.w3.org/1998/Math/MathML" xmlns:svg="http://www.w3.org/2000/svg" xmlns:epub="http://www.idpf.org/2007/ops" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" epub:prefix="index: http://www.index.com/">
    <html>
      <head>
        <meta name="dcterms.conformsTo" content="PXE Basic 1.0" />
        <meta name="generator" content="PXE Tools version 1.39.135" />
        <meta name="format-detection" content="telephone=no" />
        <title>{ toPresent.title }</title>
        <link rel="stylesheet" type="text/css" title="day" href="../css/main.css" />
        <link rel="alternate stylesheet" type="text/css" title="night" href="../css/night.css" />
        <link rel="alternate stylesheet" type="text/css" title="sepia" href="../css/sepia.css" />
        <script type="text/javascript" src="../xhtml/js/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="../xhtml/js/myv.bundle.js"></script>
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=MML_HTMLorMML">
         </script>
    </head>

    <body class="ls_sch_grade-4" role="main">
    {/* <body class="ls_sch_grade-4" epub:type="bodymatter" role="main"> */}
    <section class="module module_ls_myv20_intro">
      <header class="ls_sch_toc-only">
        <h1 class="title">
        {/* <h1 class="title" epub:type="title"> */}
          <span class="label label_ls_sch_tier1">Unit Introduction:</span>
          <span class="ls_sch_title-tier1">Activities</span>
        </h1>
       </header>
    <section class="frontmatter">
    <section class="ls_sch_fm-wrapper">
      <header>
        <h1 class="title">
        {/* <h1 class="title" epub:type="title"> */}
          <span class="label label_ls_sch_tier2">
            Introduction
          </span>
         </h1>
      </header>
      <figure aria-hidden="true" class="opener">
        <img alt="" class="design-icon" height="120" width="1322" src="../images/rdg-20-se-x-000-gr-4-unitwk-ui-banner-blue-rrat2x.png" />
      </figure>
    </section>
    <div class="lc_quicklinks lc_tablist lc_toggleable-tabs lc_do-not-open-on-key">
    <div class="lc_quicklinks-tablist" role="tablist"></div>
    <div class="lc_tabpanel-wrapper"></div></div>
    </section>
    <section tabindex="-1" class="bodymatter">
      <div class="instructions">
      <section class="ls_myv20_opener-essential">
        <div class="ls_sch_simple-audioplayer">
          <audio>
            <source src="{MP3 HERE}" type="audio/mpeg" data-offline-package="true" data-offline-type="single"></source>
            <div class="fallback">
              <p>
                Sorry, it appears your system either does not support audio playback or cannot play the MP3 format or OGG format provided.
              </p>
            </div>
          </audio>
          <div class="ls_sch_audioplayer-custom-controls">
            <button aria-label="Toggle Play" aria-pressed="false" class="ls_sch_audioplayer-play-toggle lc_paused" title="Toggle Play"></button>
          </div>
        </div>
        <header>
          <h2 class="title">
            Essential Question
          </h2>
        </header>
        <p>{ toPresent.essentialQuestion }</p>
      </section>
      </div>
      <section class="ls_myv20_opener-discussion">
    <div class="ls_myv20_video-sco">
      <iframe class="gadget" height="530" src="https://us-school.pk12ls.com/school/84524265-d51e-4c4b-ae75-781520dc33ec/A0621736/player.html?tc=y&amp;pr=sp" title="Activity 1" data-offline-package="true" data-offline-type="bundle" data-offline-src="https://us-school.pk12ls.com/school/84524265-d51e-4c4b-ae75-781520dc33ec/A0621736.zip"></iframe>
    </div>
    <section class="practice ls_myv20_turn-and-talk">
    {/* <section class="practice ls_myv20_turn-and-talk" epub:type="practice"> */}
    <div class="ls_sch_simple-audioplayer">
      <audio>
        <source src="https://us-school.pk12ls.com/school/e3bf3a67-fdcc-4966-959c-c9f2d763f88f/AVA674523_1.mp3" type="audio/mpeg" data-offline-package="true" data-offline-type="single"></source>
        <div class="fallback">
          <p>
            Sorry, it appears your system either does not support audio playback or cannot play the MP3 format or OGG format provided.
          </p>
        </div>
      </audio>
      <div class="ls_sch_audioplayer-custom-controls">
        <button aria-label="Toggle Play" aria-pressed="false" class="ls_sch_audioplayer-play-toggle lc_paused" title="Toggle Play"></button>
      </div>
    </div>
    <header>
      <h2 class="title">THIS WILL BE A THING Turn and Talk</h2>
    </header>
    <div class="question fx-notebook-item" data-notebook-item-type="Question">
      <p>THIS WILL BE A THING How do you travel to different places in your community?</p>
    </div>
    <a class="xref fx-notebook-launch" href="#P7001014883000000000000000000E46">Notebook</a>
  </section>
  </section>
  <section class="ls_myv20_unit-goals">
    <header>
      <h2 class="title">Unit Goals</h2>
    </header>
    <div class="ls_myv20_general-sco">
      <iframe class="gadget" height="700" src="https://us-school.pk12ls.com/school/cec642e0-e1eb-492c-b9d3-de1c375b30e1/A0621774/player.html?tc=y&amp;pr=sp" title="Activity 2" width="450" data-offline-package="true" data-offline-type="bundle" data-offline-src="https://us-school.pk12ls.com/school/cec642e0-e1eb-492c-b9d3-de1c375b30e1/A0621774.zip"></iframe>
    </div>
  </section>
  <section class="ls_myv20_academic-vocab">
    <div class="ls_sch_simple-audioplayer" >
      <audio>
        <source src="https://us-school.pk12ls.com/school/5418285e-de88-4b80-bce2-931456169d49/AVA674523_2.mp3" type="audio/mpeg" data-offline-package="true" data-offline-type="single"></source>
        <div class="fallback" id="P700101488300000000000000003B848"><p id="P700101488300000000000000003B849">Sorry, it appears your system either does not support audio playback or cannot play the MP3 format or OGG format provided.</p></div>
      </audio>
      <div class="ls_sch_audioplayer-custom-controls">
        <button aria-label="Toggle Play" aria-pressed="false" class="ls_sch_audioplayer-play-toggle lc_paused" title="Toggle Play"></button>
      </div>
    </div>
    <header>
      <h2 class="title">
        THIS WILL BE A THING Academic Vocabulary
       </h2>
    </header>
    <p>
      THIS WILL BE A THING Use these vocabulary words to talk and write about this unit’s theme, <i>Networks: <a class="keyword" data-foobar="3" data-href="glossterm" href="glossary.xhtml#P7001014883000000000000000003632">contribute</a>, <a class="keyword" data-foobar="3" data-href="glossterm" href="glossary.xhtml#P700101488300000000000000000363A">exposed</a>, <a class="keyword" data-foobar="3" data-href="glossterm"  href="glossary.xhtml#P7001014883000000000000000003642">habit</a>, <a class="keyword" data-foobar="3" data-href="glossterm" href="glossary.xhtml#P700101488300000000000000000364A">severe</a></i>, and <i><a class="keyword" data-foobar="3" data-href="glossterm" href="glossary.xhtml#P7001014883000000000000000003652">significant</a></i>.
    </p>
    <div class="ls_myv20_turn-talk-my-notes-box">
      <section class="practice ls_myv20_turn-and-talk">
        <header>
          <h3 class="title">Turn and Talk</h3>
        </header>
        <div class="ls_myv20_general-sco">
          <iframe class="gadget" height="510" src="https://us-school.pk12ls.com/school/24d113d5-77ef-4b29-ab0d-28a6fcb50d00/A0623556/player.html?tc=y&amp;pr=sp" title="Activity 3" width="450" data-offline-package="true" data-offline-type="bundle" data-offline-src="https://us-school.pk12ls.com/school/24d113d5-77ef-4b29-ab0d-28a6fcb50d00/A0623556.zip"></iframe>
        </div>
      </section>
    </div>
    </section>
   </section> 
   </section>
    </body>
   </html>
    )

}
