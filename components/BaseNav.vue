<template>
  <div>
    <div id="mobile-menu">
      <div id="menu-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="nav-container">
      <ul class="nav nav-pills">
        <li
          v-for="(link, navIn) in navLinks"
          :key="navIn"
          :class="`nav-item  ${open[navIn] ? 'open' : ''}`"
        >
          <template v-if="!link.children">
            <a
              :class="`nav-link ${isActive(link.link) ? 'active' : ''}`"
              :href="link.link"
              >{{ link.title }}</a
            >
          </template>
          <template v-else>
            <a
              :class="`nav-link split ${isActive(link.link) ? 'active' : ''}`"
              :href="link.link"
              >{{ link.title }}</a
            >
            <a
              :class="`extendable split ${isActive(link.link) ? 'active' : ''}`"
              @click="toggleOpen(navIn)"
              >{{ open[navIn] ? "-" : "+" }}</a
            >
            <ul class="split">
              <li v-for="(child, childIn) in link.children" :key="childIn">
                <a :href="`${link.link}#${child.title.replaceAll(' ', '-')}`">{{
                  child.title
                }}</a>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface TitleLink {
  title: string;
}

interface NavLink extends TitleLink {
  link: string;
  children: TitleLink[];
}

export default Vue.extend({
  data() {
    return {
      open: [] as Boolean[]
    };
  },
  props: {
    navLinks: <PropOptions<NavLink[]>>{
      type: Array,
      required: true,
      validator: function(navLinks: NavLink[]): boolean {
        for (let i = 0; i < navLinks.length; i++) {
          let link = navLinks[i];
          if (!link.link || !link.title) return false;
          if (link.children) {
            for (let ii = 0; ii < link.children.length; ii++)
              if (!link.children[ii].title) return false;
          }
        }
        return true;
      }
    }
  },
  methods: {
    toggleOpen(i: number, force?: boolean): void {
      let open = [...this.open];
      open[i] = this.open[i] ? false : true;
      if (force !== undefined) open[i] = force;
      this.open = open;
      //   this.fish = (Math.floor(Math.random() * 30) + 1).toString();
    },
    isActive(link: string): boolean {
      const currentPath: string = this.$route.path.replace(/\/+$/, "");
      if (RegExp(currentPath + "\/*$").test(link)) return true;
      return false;
    }
  },

  mounted() {
    this.navLinks.forEach((link: NavLink, i:number) => {
      if (this.isActive(link.link)) this.toggleOpen(i, true);
    });
  }
});
</script>

<style scoped></style>
