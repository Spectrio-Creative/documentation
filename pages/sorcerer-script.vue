<template>
  <div>
    <BaseNav :navLinks="navLinks" />
    <BaseTop
      heading="The Sorcerer’s Apprentice"
      subheading="For templating projects like telling brooms to fill buckets"
    />
    <div class="container" id="main-content">
      <NuxtChild />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const baseUrl: string = "/creative/documentation/sorcerer-script";

export default Vue.extend({
  layout: "docs",
  head() {
    return {
      title: "The Docs: The Sorcerer’s Apprentice"
    };
  },
  data() {
    return {
      navLinks: [
        {
          title: "Home",
          link: baseUrl
        },
        {
          title: "Introduction",
          link: `${baseUrl}/introduction/`,
          children: [
            { title: "Installation" },
            { title: "Project Setup" },
            { title: "Comp Setup" },
            { title: "Group Tag" },
            { title: "Color Control" },
            { title: "Font Style Tag" }
          ]
        },
        {
          title: "Text Layer",
          link: `${baseUrl}/text-layer/`,
          children: [
            { title: "Single Line Text" },
            { title: "Multiline Text" },
            { title: "Visibility Tag" },
            { title: "Using Font Styles" },
            { title: "Making a Font Reference" },
            { title: "Point Text" }
          ]
        },
        {
          title: "Image Layer",
          link: `${baseUrl}/image-layer/`,
          children: [
            { title: "Visibility Tag" },
            { title: "Background Sizing" },
            { title: "Fill Sizing" },
            { title: "No Scale Sizing" },
            { title: "Scale Down Sizing" }
          ]
        },
        {
          title: "Audio Layer",
          link: `${baseUrl}/audio-layer/`,
          children: [{ title: "Visibility Tag" }]
        },
        {
          title: "Pre Comps",
          link: `${baseUrl}/pre-comps/`,
          children: [
            { title: "Linking" },
            { title: "Nesting" },
            { title: "Visibility Tag" },
            { title: "Text Linking" }
          ]
        },
        { title: "Downloads", link: `${baseUrl}/downloads/` }
      ]
    };
  }
});
</script>

<style lang="sass" scoped></style>
