<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: false,
      default: null,
    },
    stars: {
      type: [String, Number],
      required: true,
    },
    top: {
      type: Boolean,
      required: false,
      default: false,
    },
    license: {
      type: String,
      required: false,
      default: null,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    /**
     * Returns proper name for the language icon.
     * @returns {string}
     */
    getLanguageIcon(): string {
      const icons = {
        Vue: "Vue.js",
      }

      // @ts-ignore-next-line
      return icons[this.language] || this.language
    },
    /**
     * Returns proper license name or "Personal License" if not recognized.
     * @returns {string}
     */
    getFormattedLicense(): string {
      const recognizedLicenses = ["MIT", "Apache", "GPL", "BSD"]

      if (this.license && recognizedLicenses.includes(this.license)) {
        return this.license
      } else {
        return "Personal License"
      }
    },
  },
})
</script>

<template>
  <div class="rounded-lg card-base">
    <div class="space-y-2">
      <div :class="top && 'flex justify-between space-x-2'">
        <h3
          class="text-black/90 dark:text-white/90 items-center truncate space-x-1"
        >
          <span class="text-black/50 dark:text-white/30">isyuricunha/</span
          ><span>{{ name }}</span>
        </h3>

        <IconStar
          v-if="top === true"
          class="h-6 text-yellow-600 w-6"
          title="Top repository"
          filled
        />
      </div>

      <p class="text-black/50 dark:text-white/30 line-clamp-2">
        {{ description }}
      </p>
    </div>

    <div class="mt-4">
      <div
        class="flex items-center justify-between text-black/50 dark:text-white/30"
      >
        <span>Stars:</span>
        <span>{{ stars }}</span>
      </div>

      <div
        class="flex items-center justify-between text-black/50 dark:text-white/30"
      >
        <span>Language:</span>
        <IconDev :brand="getLanguageIcon" class="h-5 w-5" />
      </div>

      <div
        class="flex items-center justify-between text-black/50 dark:text-white/30"
      >
        <span>License:</span>
        <span>{{ getFormattedLicense }}</span>
      </div>
    </div>
  </div>
</template>
