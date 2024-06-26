<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { Repository } from "../types/Response/GitHub"

interface Project {
  title: string
  description: string
  href?: string
  to?: string
  icon?: string
}

interface Experience {
  title: string
  url: string
  position: string
  date: string
  isHidden?: boolean
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

export default Vue.extend({
  data() {
    return {
      showModal: false,
      showExtra: {
        jobs: false,
        education: false,
      },
      repos: [] as Repository[],
      experiences: {
        jobs: [
          {
            title: "Laryssa Costa",
            url: "https://www.massagealternativa.com/",
            position: "Database Administrator",
            date: "2022 - Present",
          },
          {
            title: "Yuri Cunha",
            url: "https://yuricunha.com",
            position: "Database and IT Infrastructure Administrator",
            date: "2022 - Present",
          },
          {
            title: "DivinoBit (now 'Aonde Role')",
            url: "https://aonderole.com/",
            position: "Database Administrator",
            date: "2021 - 2023",
          },
          {
            title: "Geosiga",
            url: "http://www.geosiga.com.br/",
            position: "Database Administrator",
            date: "2020 - 2021",
          },
          {
            title: "Lúmen Centro de Diagnósticos",
            url: "https://www.lumendiagnosticos.com.br/",
            position: "Intern",
            date: "2016 - 2017",
          },
        ],
        education: [
          {
            title: "Estácio",
            url: "http://www.estacio.br/",
            position: "Data Modeling/Warehousing and Database Administration",
            date: "2021 - present",
          },
          {
            title: "Cisco",
            url: "https://www.credly.com/badges/8ccf9387-ee4f-4580-9cad-6afe0ee5226c/linked_in_profile",
            position: "English at CEFR B2 level",
            date: "2023",
          },
          {
            title: "Harvard University",
            url: "https://www.harvard.edu/",
            position: "CS50/CS50X",
            date: "2021",
          },
        ],
      } as ExperienceObject,
      cards: {
        me: [
          {
            title: "Repositories",
            description:
              "Peek under the hood! Here's where the code magic happens.",
            href: "/me/repos",
          },
          {
            title: "Songs",
            description:
              "Let's get down! See if our musical tastes are a match made in audio heaven.",
            href: "/me/songs",
          },
          {
            title: "Contact",
            description: "Got a question or just wanna chat? Hit me up!",
            href: "/me/contact",
          },
        ],
        pages: [
          {
            title: "Blog",
            description:
              "I'm the DBA that'll make you laugh, cry, and learn about technology.",
            href: "/blog",
          },
          {
            title: "Projects",
            description:
              "In my spare time, I like to play god with data. It's like a board game, but with more lines of code.",
            href: "/projects",
          },
          {
            title: "Daily Songs",
            description:
              "Your daily dose of musical awesome, hand-picked by yours truly!",
            href: "/daily",
          },
          {
            title: "Donate",
            description:
              "Fuel the creative fire! Your support helps me make even cooler stuff.",
            href: "/donate",
          },
        ],
      },
      skills: [
        {
          title: "Development",
          items: [
            "SQL",
            "Vercel",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Sass",
          ],
        },
        {
          title: "Apps",
          items: [
            {
              title: "VS Code",
              iconPack: "IconBrand",
            },
            {
              title: "Raycast",
              image: "https://i.imgur.com/NBc0C4j.png",
            },
            {
              title: "Figma",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              title: "GitHub",
              iconPack: "IconBrand",
            },
            {
              title: "Firebase",
            },
            {
              title: "Vercel",
              iconPack: "IconBrand",
            },
            {
              title: "MongoDB",
            },
          ],
        },
      ],
    }
  },
  head: {
    title: "Yuri Cunha",
  },
  methods: {
    async scrollToSection(id: string) {
      if (this.$route.hash === id)
        await this.$router.replace({
          hash: "",
        })

      await this.$router.replace({
        hash: id,
      })
    },
  },
})
</script>

<template>
  <div class="space-y-24 mb-10">
    <header
      class="rounded-md flex flex-col-reverse my-16 py-10 md:(flex-row items-center justify-between) justify-center"
    >
      <div class="md:w-8/12">
        <div class="space-y-8">
          <div class="lg:space-y-4">
            <h1
              class="font-semibold text-center text-lg md:(text-xl text-left) text-black/50 dark:text-white/50"
            >
              Hi, I am
              <span class="text-black/90 dark:text-white/90">Yuri Cunha</span>
            </h1>

            <h1
              class="font-semibold text-center text-4xl md:(text-6xl text-left) text-black/90 leading-normal dark:text-white/90"
            >
              Database Administrator
            </h1>
          </div>

          <div
            class="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap"
          >
            <Button
              v-for="item in ['SQL', 'Vercel', 'React.js']"
              :key="item"
              class="inline-block"
            >
              <IconDev :brand="item" class="h-5 w-5" />
            </Button>

            <Button
              v-tippy="{ content: 'More', placement: 'bottom' }"
              @click.native="scrollToSection('#technologies')"
            >
              <IconEllipsis class="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div class="rounded-full mx-auto mb-4 md:mb-0">
        <SmartImage
          src="/assets/images/picture.png"
          class="rounded-full h-50 w-50"
        />
      </div>
    </header>

    <section id="pages">
      <Title>Pages</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.pages"
          :key="`card-p-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="me">
      <Title>Me</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.me"
          :key="`card-m-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="experiences" class="grid gap-x-8 gap-y-24 md:grid-cols-2">
      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title>Experience</Title>
          <button
            type="button"
            class="text-black/50 text-sm hover:underline dark:text-white/30"
            @click="showExtra.jobs = !showExtra.jobs"
          >
            {{ showExtra.jobs ? "show less" : "show more" }}
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.jobs"
            v-show="experience.isHidden ? showExtra.jobs : true"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :hidden-badge="experience.isHidden"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title>Education</Title>
          <button
            type="button"
            class="text-black/50 text-sm hover:underline dark:text-white/30"
            @click="showExtra.education = !showExtra.education"
          >
            {{ showExtra.education ? "show less" : "show more" }}
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            v-show="experience.isHidden ? showExtra.education : true"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :hidden-badge="experience.isHidden"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <section id="technologies">
      <Title>Technologies I use</Title>

      <div class="flex flex-col space-y-6 mt-8">
        <section v-for="category in skills" :key="category.title">
          <h5
            class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:(text-white/30 border-white/5)"
          >
            {{ category.title }}
          </h5>

          <div
            class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2"
          >
            <CardSkill
              v-for="(skill, index) in category.items"
              :key="`skill-${index}`"
              v-bind="typeof skill === 'object' ? skill : { title: skill }"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.description-link {
  @apply border-neutral-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>
