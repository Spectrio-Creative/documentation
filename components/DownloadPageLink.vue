<template>
  <div class="download-link">
    <div>
      <a
        v-if="linkType === 'git'"
        :href="
          `https://github.com/Spectrio-Creative/sorcercers-apprentice/releases/tag/${version}`
        "
        download
        >Version {{ version }}</a
      >
      <a
        v-else-if="linkType === 'local'"
        :href="`${route}script/sorcerers_${version.replaceAll('.', '_')}.zip`"
        download
        >Version {{ version }}</a
      >

      <template v-if="details">|</template>
      <template v-else>&nbsp;&nbsp;</template>
    </div>
    <div class="details">{{ details }}<br v-if="note" />
      <div v-if="note" v-html="note" class="note"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "~/mixins/page";

export default Vue.extend({
  props: {
    linkType: {
      type: String,
      default: "git",
      validator: (value: string): boolean => {
        return /(^git$|^local$)/.test(value);
      }
    },
    version: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return /[0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2}/.test(value);
      }
    },
    details: String,
    note: String
  },
  mixins: [Page]
});
</script>

<style lang="sass" scoped>
.download-link
    display: grid
    grid-template-columns: 1fr 6fr
    grid-gap: 5px
    text-align: right
    margin-bottom: 5px
</style>
