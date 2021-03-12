<template>
  <div>
    <doc-section title="Visibility Tag">
      <p>Image Subtag &lsquo;v&rsquo; [<span class="source">!Iv</span>]</p>
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
      title="Background Sizing Property"
      menu-title="Background Sizing"
      :photos="[
        {
          caption: 'Image placeholder in template comp.',
          src: `${route}images/sorcerer/Ib_original.jpg`
        },
        {
          caption: 'Resulting image, scaled to fill the bg, in final comp.',
          src: `${route}images/sorcerer/Ib.jpg`
        }
      ]"
    >
      <p>Image Subtag 'b' [<span class="source">!Ib</span>]</p>
      <p>
        The Background Sizing Property tells the script that you want to fill
        the placeholder space with the image you've chosen as a replacement.
        This works similarly to the css
        <span class="source">background-size</span> property
        <span class="source">cover</span>. It is intended for background images
        (hence the name) and therefore overflow is visible. If you wish to crop
        the image, use the <a href="#Fill-Sizing">Fill Sizing Property</a>
      </p>
      <p>
        In the example below, the placeholder [<span class="source"
          >1920, 1080px</span
        >] is proportionally wider than the image [<span class="source"
          >898px, 1080px</span
        >], so the image is scaled up to be the same width as the placeholder
        [<span class="source">1920px</span>].
      </p>
    </doc-section>
    <doc-section
      title="Fill Sizing Property"
      menu-title="Fill Sizing"
      :photos="[
        {
          caption: 'Image placeholder in template comp.',
          src: `${route}images/sorcerer/I_original.jpg`
        },
        {
          caption: 'Resulting image, masked and cropped, in final comp.',
          src: `${route}images/sorcerer/If.jpg`
        }
      ]"
    >
      <p>Image Subtag 'f' [<span class="source">!If</span>]</p>
      <p>
        The Fill Sizing Property works exactly like the
        <a href="#Background-Sizing">Background Sizing Property</a> except that,
        after scaling the image to fit the placeholder, it then uses a mask to
        crop the image to shape of the placeholder.
      </p>
      <p>
        In the example below, the placeholder [<span class="source"
          >500px, 500px</span
        >] is proportionally wider than the image [<span class="source"
          >898px, 1080px</span
        >], so the image is scaled down to be the same width as the placeholder
        [<span class="source">500px</span>] then cropped to also be the same
        height as the placeholder [<span class="source">500px</span>].
      </p>
    </doc-section>
    <doc-section
      title="No Scale Sizing Property"
      menu-title="No Scale Sizing"
      :photos="[
        {
          caption: 'Image placeholder in template comp.',
          src: `${route}images/sorcerer/I_original.jpg`
        },
        {
          caption: 'Resulting image, centered, in final comp.',
          src: `${route}images/sorcerer/In.jpg`
        }
      ]"
    >
      <p>Image Subtag 'n' [<span class="source">!In</span>]</p>
      <p>
        The No Scale Sizing Property is for when you have an image that you do
        not want to scale at all. The image is simply centered on center of the
        placeholder and pulled in at its original size.
      </p>
      <p>
        In the example below, the placeholder is centered on the template comp,
        so the image is centered on the final comp at its original size [<span
          class="source"
          >898px, 1080px</span
        >].
      </p>
      <p class="note">
        Note: in future, I plan to set it to align the image based on the anchor
        point (such that you could align the image top-left by placing the achor
        point at the top, left of the placeholder). So to future proof your
        templates using the current script, insure that your anchor points are
        set to the center of your placeholder comps
      </p>
    </doc-section>
    <doc-section
      title="Scale Down Sizing Property"
      menu-title="Scale Down Sizing"
      :photos="[
        {
          caption: 'Image placeholder in template comp.',
          src: `${route}images/sorcerer/I_original.jpg`
        },
        {
          caption: 'Resulting image, centered, in final comp.',
          src: `${route}images/sorcerer/Is.jpg`
        }
      ]"
    >
      <p>Image Subtag 's' [<span class="source">!Is</span>]</p>
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
