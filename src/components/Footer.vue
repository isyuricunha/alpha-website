<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    /**
     * Returns localized GitHub notice string in Portuguese/English according to current route.
     * @returns {string}
     */
    getLocalizedNotice(): string {
      if (this.$route.name?.includes("blog"))
        return "This website is open-source on GitHub"
      else return "This website is open-source on GitHub"
    },
  },
})
</script>

<template>
  <div
    class="bg-gray-100 text-sm w-full py-4 text-black/50 dark:(bg-white/5 text-white/30)"
  >
    <div class="responsive-screen">
      <div class="space-y-4 text-center sm:(space-y-0 space-x-6 text-left)">
        <span class="text-center">{{ "Build with 💙" }}</span>
      </div>
    </div>
  </div>
</template>
