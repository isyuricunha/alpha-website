<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { SponsorLinks } from "~/@types/runtimeConfig"
import type { ISponsor } from "@/types/Response/Sponsors"

export default Vue.extend({
  data() {
    return {
      sponsors: [] as ISponsor[],
      accounts: [
        {
          image: "https://thumbs2.imgbox.com/80/32/o8zokzji_t.png",
          name: "99 Pay",
          pix: "53d8b06b-68a6-4662-a60a-969f7ff95f47",
          revealed: false,
        },
        {
          image: "https://thumbs2.imgbox.com/cb/21/XlLTBach_t.png",
          name: "NuBank",
          pix: "54963736-9cc5-4347-bdf9-7d249a856ce7",
          revealed: false,
        },
        {
          image: "https://thumbs2.imgbox.com/bf/68/ifRWI8Sb_t.png",
          name: "PayPal",
          pix: "@isyuricunha or isyuricunha@duck.com",
          revealed: false,
        },
      ],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const { data } = await this.$axios.get(
      "https://raw.githubusercontent.com/eggsy/.github/main/sponsors.json"
    )

    this.sponsors = data
  },
  head() {
    const title = "Donate"
    const description =
      "Every contribution makes a difference. Donate to keep me going!"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "donate",
        url: "https://yuricunha.com/donate",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://yuricunha.com/donate",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the Sponsor object in runtime config.
     * @returns {SponsorLinks}
     */
    getSponsorLinks(): SponsorLinks {
      return this.$config.sponsor as SponsorLinks
    },

    getSortedSponsors(): { oneTime: ISponsor[]; monthly: ISponsor[] } {
      const sponsors = this.sponsors

      const sortByPrice = (a: ISponsor, b: ISponsor) =>
        b.monthlyDollars - a.monthlyDollars

      return {
        oneTime: sponsors
          .filter((sponsor) => sponsor.isOneTime)
          .sort(sortByPrice),
        monthly: sponsors
          .filter((sponsor) => !sponsor.isOneTime)
          .sort(sortByPrice),
      }
    },
  },
})
</script>

<template>
  <PageLayout
    title="Donate"
    :description="[
      'Show your support with a donation! It means a lot to keep creating.',
      `P.S. Use 'Yuri Cunha' as the name of your transactions.`,
    ]"
    class="space-y-12"
  >
    <section class="space-y-4">
      <Title>Support Me On</Title>

      <div class="flex flex-wrap gap-x-4 gap-y-2">
        <Button :href="getSponsorLinks.github" blank>
          <template #icon>
            <IconBrand brand="github" class="h-5 w-5" />
          </template>

          GitHub Sponsors
        </Button>
      </div>
    </section>

    <section class="space-y-4">
      <Title :padding="false">Sponsors</Title>

      <div>
        <transition name="fade" mode="out-in">
          <SkeletonLoader
            v-if="$fetchState.pending"
            type="spinner"
            class="w-full py-4"
          />

          <p v-else-if="$fetchState.error !== null">An error occured.</p>
          <p
            v-else-if="
              !$fetchState.pending &&
              !$fetchState.error &&
              sponsors.length === 0
            "
          >
            No sponsors yet :(
          </p>

          <div v-else class="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <CardSponsor
              v-for="(item, index) in getSortedSponsors.monthly"
              :key="`sponsor-monthly-${index}`"
              :sponsor="item.sponsor"
              monthly
            />

            <CardSponsor
              v-for="(item, index) in getSortedSponsors.oneTime"
              :key="`sponsor-oneTime-${index}`"
              :sponsor="item.sponsor"
            />
          </div>
        </transition>
      </div>
    </section>

    <section class="space-y-4">
      <Title>Bank Accounts</Title>

      <div class="grid gap-4">
        <div
          v-for="(account, index) in accounts"
          :key="`account-${index}`"
          class="flex h-full space-x-4 items-center rounded-lg card-base"
        >
          <div class="rounded-lg">
            <SmartImage :src="account.image" class="rounded-lg h-12 w-12" />
          </div>

          <div class="rounded-tr rounded-br flex h-full">
            <div>
              <h3 class="font-medium text-lg">
                {{ account.name }}
              </h3>

              <span
                class="text-black/30 dark:text-white/30"
                :class="
                  !account.revealed &&
                  'hover:underline cursor-pointer select-none'
                "
                @click="account.revealed = true"
              >
                {{ account.revealed ? account.pix : "Click to Reveal" }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>
