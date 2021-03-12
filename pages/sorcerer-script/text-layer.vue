<template>
  <div>
    <doc-section
      title="Single Line Text"
      :photos="[
        {
          src: `${route}images/sorcerer/t_single.jpg`,
          caption: 'Image placeholder in template comp.'
        },
        {
          src: `${route}images/sorcerer/t_single_demo.jpg`,
          caption: 'Resulting image, centered, in final comp.'
        }
      ]"
    >
      <p>
        By default, if the bounds of the text box is shorter than two lines long
        (as defined by the leading), text is handled as a single line. When
        single-line text needs to be resized in order to fit within the bounds
        of the template textbox,
      </p>
    </doc-section>
    <doc-section
      title="Multiline Text"
      :photos="[
        {
          caption: 'Image placeholder in template comp.',
          src: `${route}images/sorcerer/Tm.jpg`
        },
        {
          caption: 'Resulting image, centered, in final comp.',
          src: `${route}images/sorcerer/Tm_demo.jpg`
        }
      ]"
    >
      <p>
        The Scale Down Sizing Property—best used for logo zones, ect—is used for
        setting a maximum image size. If the image is smaller than the
        placeholder, it acts like the
        <a href="#No-Scale-Sizing">No Scale Sizing Property</a> and, if the
        image is larger than the placeholder, it falls back to the
        <a href="#Default">Default Sizing</a>.
      </p>
      <p>
        In the example below, the placeholder [<span class="source"
          >500px, 500px</span
        >] is centered on the template comp and is larger than the image [<span
          class="source"
          >333px, 400px</span
        >], so the image is centered on the final comp at its original size.
      </p>
      <p class="note">
        Note: in future, I plan to set it to align the image based on the anchor
        point (such that you could align the image top-left by placing the achor
        point at the top, left of the placeholder). So to future proof your
        templates using the current script, insure that your anchor points are
        set to the center of your placeholder comps
      </p>
    </doc-section>
    <doc-section title="Visibility Tag">
      <p>Text Subtag &lsquo;v&rsquo; [<span class="source">!Tv</span>]</p>
      <p>
        The visibility tag adds a checkbox to the menu field in the script which
        allows you to turn the layer on and off from the script. This is
        especially useful for adding options into your templates. For example,
        you might have a logo zone that you might want to replace with text if
        the client doesn&rsquo;t have a logo.
      </p>
      <p class="note">
        Future versions of the script should include some sort of visibility tag
        for precomps, so that you can toggle whole sections within one template
      </p>
    </doc-section>
    <doc-section
      title="Using Font Styles"
      :photos="[
        {
          caption: 'Template comp with Heading style.',
          src: `${route}images/sorcerer/ufs_original.jpg`
        },
        {
          caption: 'Resulting comp when script is run.',
          src: `${route}images/sorcerer/ufs_output.jpg`
        }
      ]"
    >
      <p>
        A font style can be attached to a layer with a parenthetical reference
        immediately following the main tag, such as
        <span class="source">!Fm(P1) [First Slide] Body Text</span>. It’s
        important to note that the font style only controls the typeface being
        used. The size is controlled by the size of the
        <a href="#Point-Text">text box</a> and the color can be controlled by
        setting up a
        <a :href="`${route}introduction/#Color-Control`">Color Control</a> layer.
      </p>
      <p>
        In the example below the font style is <a>setup</a> in the main comp
        with the layer labeled
        <span class="source">!F [Setup] Heading</span> then attached to the text
        layer by labeling it
        <span class="source">!T(Heading) [First Slide] Heading</span>. Upon
        replacing the style <span class="source">OpenSans-Extrabold</span> with
        <span class="source">OpenSansLight-Italic</span> and running the script,
        all layers with the attached, ‘Header’, style (in this case just the
        one) are changed to Open Sans Light Italic.
      </p>
      <p class="note">
        You may think ‘“OpenSansLight-Italic” is a really weird way to format
        that… do I have to type that in exactly?’ The answer, sadly, is ‘Yes’.
        So I recommend you make a
        <a href="#Making-a-Font-Reference">Font Reference</a> template.
      </p>
    </doc-section>
    <doc-section
      title="Making a Font Reference"
      :photos="[
        {
          caption: 'Template comp with font layers.',
          src: `${route}images/sorcerer/font-reference-layers.jpg`
        },
        {
          caption: 'Resulting menu when script is run.',
          src: `${route}images/sorcerer/font-reference.jpg`
        }
      ]"
    >
      <p>
        Unfortunately, After Effects doesn’t reference fonts by very predictable
        names. For instance, Open Sans Light Italic, you may have noticed in the
        <a href="#Using-Font-Styles">Using Font Styles</a> section about is
        referenced as ‘OpenSansLight-Italic’ even though it’s pulling from the
        file ‘OpenSans-LightItalic.ttf’. You might then think that Open Sans
        Light would be, then, called by ‘OpenSansLight’ but AE proves
        inconsistent here again by, in this case, going along with the filename
        ‘OpenSans-Light’.
      </p>
      <p>
        Though I hope to find a way around this at some point and provide a
        dropdown list of the system fonts, in the meantime I would suggest
        making a template to use as a font reference.
      </p>
      <p>
        Making one is quite simple. First,
        <a :href="`${route}introduction/#Project-Setup`">create a blank template</a>,
        then simply create a font layer for each font you’d like to be able to
        easily reference and name them as
        <span class="source">!F [Font Family] Font Style</span>. The below
        example shows a template with select styles from Open Sans and
        Montserrat.
      </p>
    </doc-section>
    <doc-section title="Area Text vs Point Text" menu-title="Point Text">
      <h2></h2>
      <p>
        The script was developed in such a way that it used the bounds of a text
        box to set the potential area of the new text. That said, for any text
        you wish to make editable in the template, it is recommended that you
        use Area Text instead of Point Text (ie: when creating a text field,
        click &amp; drag out a box instead of simply clicking and then typing).
        If you use Point text, the text will still be editable but it will not
        resize and could present other possible other issues with the current
        script.
      </p>
    </doc-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "~/mixins/page";

export default Vue.extend({
  mixins: [Page]
});
</script>

<style scoped></style>
