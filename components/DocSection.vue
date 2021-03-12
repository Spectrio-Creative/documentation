<template>
  <div>
    <a :id="anchor"></a>
    <div class="doc-item">
      <h2>{{ title }}</h2>
      <slot></slot>
      <DocSectionPhotos v-if="photos" :photos="photos" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: { type: String, required: true },
    menuTitle: String,
    photos: Array
  },
  computed: {
    anchor() {
      if(this.menuTitle) return this.menuTitle.replaceAll(' ', '-');
      return this.title.replaceAll(' ', '-');
    }
  }
});
</script>

<style scoped></style>
