<template>
  <div class="heading">
    <h1>
      {{ heading }}
      <span style="font-weight: normal">({{ parenthetical }})</span>
    </h1>
    <p v-if="subheading">{{ subheading }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    heading: { type: String, required: true },
    parenthetical: { type: String, default: "the docs" },
    subheading: { type: String }
  }
});
</script>

<style lang="sass" scoped></style>
