<template>
  <div class="example">
    <CoolLightBox
      class="light-box"
      :items="imageList"
      :index="imageIndex"
      @close="imageIndex = null"
    />
    <div
      v-for="(photo, index) in photos"
      :key="index"
      @click="imageIndex = index"
      class="photo caption"
    >
      <img :src="photo.src" />{{ photo.caption }}
    </div>
  </div>
</template>

<script lang="ts">
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Vue, { PropOptions } from "vue";

interface Photo {
  src: string;
  caption?: string;
}

export default Vue.extend({
  components: { CoolLightBox },
  data() {
    return {
      imageIndex: null
    };
  },
  props: {
    photos: <PropOptions<Photo[]>>{
      type: Array,
      required: true,
      validator: function(navLinks: Photo[]): boolean {
        for (let i = 0; i < navLinks.length; i++) {
          let photo = navLinks[i];
          if (!photo.src || typeof photo.src !== "string") return false;
          if (photo.caption && typeof photo.caption !== "string") return false;
        }
        return true;
      }
    }
  },
  computed: {
    imageList() {
      const imageList: string[] = this.photos.map(photo => photo.src);
      return imageList;
    }
  }
});
</script>
