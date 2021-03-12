<template>
  <div class="wrapper">
    <Nuxt />
    <div class="footer">last updated {{ dateModified }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  data() {
    return {
      dateModified: ""
    };
  },
  methods: {
    getCurrentDate(): string {
      // const current = this.$toolbox.moment();
      // console.log(this);
      // console.log(moment());
      return moment().format("MMMM Do, YYYY");
    }
  },
  created() {
    this.dateModified = this.getCurrentDate();
  }
});
</script>

<style lang="sass">

@import "../assets/sass/dark-docs"
</style>
