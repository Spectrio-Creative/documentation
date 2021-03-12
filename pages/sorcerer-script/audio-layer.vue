<template>
  <div>
    <doc-section title="Audio Tag" menu-title="Visibility Tag">
      <p>Image Subtag &lsquo;v&rsquo; [<span class="source">!Av</span>]</p>
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
