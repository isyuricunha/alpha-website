<script lang="ts">
import Vue from "vue"

// Interface
interface Link {
  url: string
  title: string
  description: string
  icon: string
}

export default Vue.extend({
  data() {
    return {
      pageLoaded: false,
    }
  },
  head() {
    const title = "Contact"
    const description =
      "Need to get in touch with me? Have any questions? Want to join my Discord server? Click here!"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
      }),
    }
  },
  computed: {
    getLinks(): Link[] {
      const social = this.$config.social

      const titles = {
        discord: "Hang out with me on Discord!",
        twitter: "Stay up-to-date, follow me on Twitter!",
        x: "Connect on X!",
        github: "Fork my projects on GitHub!",
        instagram: "See my world on Instagram!",
        trello: "Peek at my Trello board!",
        linkedIn: "Let's connect on LinkedIn!",
      }

      const array: Link[] = []

      for (const item in social) {
        if (item === "email") continue

        array.push({
          // @ts-ignore-next-line
          url: social[item],
          title: item?.[0]?.toUpperCase() + item.slice(1),
          // @ts-ignore-next-line
          description: titles[item],
          icon: item,
        })
      }

      return array
    },
  },
  mounted() {
    this.pageLoaded = true
  },
})
</script>

<template>
  <PageLayout
    title="Contact"
    description="Have a question that'll blow my mind? Ask away!"
  >
    <div class="grid gap-4 md:grid-cols-2">
      <Card
        v-for="(contact, index) in getLinks"
        :key="index"
        :title="contact.title"
        :href="contact.url"
        blank
      >
        <template #icon>
          <IconBrand :brand="contact.icon" class="h-8 w-8" />
        </template>

        <span class="text-black/50 dark:text-white/30">{{
          contact.description
        }}</span>
      </Card>

      <Card
        title="Email"
        :href="pageLoaded ? `mailto:${$config.social.email}` : false"
        icon="IconAt"
        :utm="false"
      >
        <template #icon>
          <IconAt class="h-8 w-8" />
        </template>

        Let's chat by email!
      </Card>
    </div>
  </PageLayout>
</template>
