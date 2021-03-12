<template>
  <div>
    <doc-section title="Installation">
      <p>
        Installed like any other AE script; download the both the script and the
        UI Panel from the <a href="../downloads/">downloads page</a>, then add
        the unzipped script file to your AE Scripts folder (<span class="source"
          >Applications⁩/Adobe After Effects &lt;version&gt;⁩/Scripts</span
        >
        on a mac and
        <span class="source"
          >Program Files\Adobe\Adobe After Effects &lt;version&gt;\Support
          Files\Scripts</span
        >
        on a windows) and the unziped UI Panel file to the
        <span class="source">ScriptUI Panels</span> subfolder.
      </p>
      <p>
        Once both the script and the UI Panel are installed, restart AE (if
        it&rsquo;s open) and open the
        <span class="source">Sorcerer&rsquo;s Apprentice.jsx</span> from the
        bottom of the &lsquo;Window&rsquo; menu. You can then doc the panel
        wherever works for you and run the script from young Mickey&rsquo;s
        magic button.
      </p>
      <p>
        Starting with version 2.3.0, you must also install the Google “dwebp”
        CLI app. You can do so by
        <a
          href="/creative/tools/sorcerer-script/includes/assets/script/dwebp_<?php echo get_operating_system(); ?>.zip"
          download
          >Downloading it</a
        >
        and placing it in the same folder as the main script file.
      </p>
      <p class="note">
        In order for the script to be able to troubleshoot problematic image
        files (a common problem with MDS projects), you must give it permission
        to write files. You can do this my going to
        <span class="source">Preferences > Scripting &amp; Expressions</span> in
        After Effects and checking the “Allow Scripts to Write Files and Access
        Network” box.
      </p>
    </doc-section>
    <doc-section
      title="Project Setup"
      :photos="[
        {
          caption: 'Example project with 4 templates in one templates folder.',
          src: '/images/sorcerer/projectsetup.jpg'
        },
        {
          caption:
            'Example project with 4 templates split between two folders.',
          src: '/images/sorcerer/projectsetup2.jpg'
        }
      ]"
    >
      <p>
        To tell the script that you have templates to load, you have to organise
        your projects in a semi-specific way. The templates you would like it to
        load must be in a folder located at the root of your project which has a
        name that includes the word &lsquo;Templates&rsquo;. All of your
        templates do not have to be in the same folder but all template
        directories music include the word &lsquo;Templates&rsquo;.
      </p>
      <p>
        The templates themselves also must be structured in a specific way. They
        must be a Composition inside a Directory of the same name. In the
        examples below, you&rsquo;ll see the highlighted template is a
        Composition called &lsquo;DEX Template 1&rsquo; inside of a Directory
        also called &lsquo;DEX Template 1&rsquo;. If your template includes
        precomps, they must be located inside a subfolder of thier template
        directory which includes the name &lsquo;Precomps&rsquo;. The name of
        the precomp folder can include other words as well but, unlike the main
        templates folder, you may not have more than one precomps folder within
        one template folder.
      </p>
      <p>
        In both of the examples below, all four of the templates would be loaded
        into the script and checked for editable layers.
      </p>
    </doc-section>
    <doc-section
      title="Composition Setup"
      menu-title="Comp Setup"
      :photos="[
        {
          caption: 'Example comp with 6 editable layers.',
          src: '/images/sorcerer/layersetup.jpg'
        },
        {
          caption: 'Resulting menu when script is run on example comp.',
          src: '/images/sorcerer/layersetup_demo.jpg'
        }
      ]"
    >
      <p>
        Within your template composition, you must specify which layers you wish
        to be editable by the script. To do so, you must tag them with with an
        exclaimation point followed by the media type indicator. The media types
        and tags are as follows:
      </p>
      <p>
        <span class="source">!T</span>: for
        <nuxt-link to="/sorcerer-script/text-layer/">Text Layers</nuxt-link
        ><br />
        <span class="source">!I</span>: for
        <nuxt-link to="/sorcerer-script/image-layer/">Image Layers</nuxt-link
        ><br />
        <span class="source">!V</span>: for
        <nuxt-link to="/sorcerer-script/image-layer/#Video-Layer"
          >Video Layers</nuxt-link
        ><br />
        <span class="source">!C</span>: for
        <a href="#Color-Control">Color Control Layers</a><br />
        <span class="source">!A</span>: for
        <nuxt-link to="/sorcerer-script/audio-layer">Audio Layers</nuxt-link
        ><br />
      </p>
      <p>
        After indicating which type of media the editable layer contains, the
        rest of the layer&rsquo;s name determines where and how it will appear
        in the script menu. You can organise it into a menu tab with brackets
        and the rest of the layer name will be used as the name of the
        corresponding menu item. For example, a layer named
        <span class="source">!Is [Intro] Logo</span> would first tell the script
        that the layer is an image which you would like to
        <a href="../image-layer/#Scale-Down-Sizing">scale down to fit</a> and
        second that it should be editable in the menu by the field title
        &lsquo;Logo&rsquo; organised under the tab &lsquo;Intro&rsquo;.
      </p>
      <p>
        In the example below, the &lsquo;Image Demo&rsquo; comp has seven
        layers, six of which are editable. They are broken up into two
        tabs—&lsquo;Outro&rsquo; and &lsquo;Intro&rsquo;—and tagged as Images
        and Text with a variety of subtags.
      </p>
      <p class="note">
        Note: layers and tabs are added to the menu in the order in which they
        appear in the composition (with precomp layers and tabs added after all
        layers in the main composition). If you would like to further control
        the organisation of the menu tabs (for instance, putting the
        &lsquo;Intro&rsquo; tab first instead of the &lsquo;Outro&rsquo; tab in
        the below example), you should use the
        <a href="#Group-Tag">Group Tag</a>.
      </p>
    </doc-section>
    <doc-section
      title="Group Tag"
      :photos="[
        {
          caption: 'Example comp with group layers to organise menu.',
          src: '/images/sorcerer/groupsetup.jpg'
        },
        {
          caption: 'Resulting menu when script is run.',
          src: '/images/sorcerer/groupsetup_demo.jpg'
        }
      ]"
    >
      <p>Layer tag &lsquo;G&rsquo; [<span class="source">!G</span>]</p>
      <p>
        In order to organise the template menu in a way that makes sense to you,
        you can use the Group Tag on layers at the top of your project ordered
        the way you would like the menu tabs to be ordered. These layers are not
        processed as editable layers and will not, themselves, appear in the
        menu, so they may technically any type of layer. For best organisation
        without compromising project performance, however, either an empty null
        object or empty adjustment layer is recommended.
      </p>
      <p>
        The example below takes the project from the
        <a href="#Comp-Setup">Comp Setup</a> section and adds two null objects
        tagged, respectively, as <span class="source">!G [Intro]</span> and
        <span class="source">!G [Outro]</span> which moves the
        &lsquo;Intro&rsquo; tab before the &lsquo;Outro&rsquo; tab. It&rsquo;s
        worth mentioning that, in this example, the addition of the
        <span class="source">!G [Outro]</span> layer did nothing to the
        appearance of the menu, but adds to the clarity &amp; organisation of
        the template comp.
      </p>
    </doc-section>
    <doc-section title="Color Control Layer" menu-title="Color Control">
      <p>Layer tag &lsquo;C&rsquo; [<span class="source">!C</span>]</p>
      <p>
        You can control the colors of fonts and shapes in your template by
        setting up a color control layer then adding a fill effect with an
        expression to the layers you want to control.
      </p>
      <p>
        First, to setup the color control layer, create a null layer &amp; add
        one or more 'Color Control' effects to it. Especially if you are using
        more than one color control effect, it’s very helpful to then rename the
        layers to something memorable/helpful, like ‘Primary Color’.
      </p>
      <p>
        With the color control layer setup, you can then link that to whichever
        layers you would like to use that color. On the layer which you want to
        follow the color rule, add a ‘Fill’ effect then
        <span class="source">alt + click</span> on the stopwatch of the effect’s
        ‘Color’ attribute to add an expression. If your layer is in same comp as
        your color control layer, type
        <span class="source"
          >layer("<i>Name of Your CC Layer</i>").effect("<i
            >Name of Your CC Effect</i
          >")("Color")</span
        >, if your layer is in a precomp, then you must include a link to the
        main comp
        <span class="source"
          >comp("<i>Name of Your Template Comp</i>").layer("<i
            >Name of Your CC Layer</i
          >").effect("<i>Name of Your CC Effect</i>")("Color")</span
        >.
      </p>
      <p class="note">
        All layers linking to a Color Control layer in the main template comp
        will be automatically relinked when the script is run to the new project
        folder. However if the layer is instead linked to a Color Control layer
        inside a precomp, when the script is run, the new project will stil be
        linked to the CC layer in the template and will have to be manually
        relinked. Future versions of the script should address this issue.
      </p>
    </doc-section>
    <doc-section
      title="Font Style Layer"
      menu-title="Font Style Tag"
      :photos="[
        {
          caption: 'Example comp with 2 font style layers.',
          src: '/images/sorcerer/fs_project.jpg'
        },
        {
          caption: 'Resulting menu when script is run.',
          src: '/images/sorcerer/fs_output.jpg'
        }
      ]"
    >
      <p>Layer tag &lsquo;F&rsquo; [<span class="source">!F</span>]</p>
      <p>
        Starting with version 2.6.0, the script supports font styling for
        creating more flexibile templates.
      </p>
      <p>
        The name of the font style layer is used as the universal reference for
        that font style. So, for instance, if the layer’s name is
        <span class="source">!F [Setup] Header</span> then any text layer tagged
        with <span class="source">(Heading)</span> will be styled according to
        the style of this layer.
      </p>
      <p class="note">
        Note: the font style name can include spaces but should not include
        special characters or parentheses.
      </p>
      <p>
        Like the <span class="source">!G</span> layers,
        <span class="source">!F</span> layers are not processed as editable
        layers so they may be any kind of layer. You’ll notice that in the
        example below one of the layers is a font layer and the other is a null
        object layer. The one difference between them is how the generated menu
        initially fills the font style field. For the null object (<span
          class="source"
          >!F [Setup] Heading</span
        >), the field is filled by the font of the first instance of a ‘Heading’
        and for the font layer (<span class="source">!F [Setup] Heading</span>)
        the field is filled by the font of that layer.
      </p>
      <p class="note">
        More on the usage of font style in the
        <a href="../text-layer/#Using-Font-Styles">Using Font Styles</a>
        section.
      </p>
    </doc-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
