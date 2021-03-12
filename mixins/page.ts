import Vue from "vue";

export default Vue.extend({
  computed: {
      route() {
          return this.$router.options.base;
      }
  }
});