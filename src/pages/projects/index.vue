<script>
export default {
  head() {
    const title = "Projects"
    const description = "My code builds dreams. See it in action!"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
      }),
    }
  },
  data: () => ({
    projects: [
      {
        client: "",
        name: "Rain for relax",
        description: "A simple website with rain sound to relax.",
        image:
          "https://best-old-website.yuricunha.com/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fisyuricunha%2Fwebsite%2F42f264115965e0e0abbd4e19c28cb7873eb18382%2Fpublic%2Fstatic%2Fimages%2FforDemo%2Frain-for-relax.png&w=1920&q=75",
        buttons: [
          {
            text: "Visit",
            link: "https://www.rain-for-relax.yuricunha.com/",
            icon: "IconLink",
          },
          {
            text: "GitHub",
            link: "https://github.com/isyuricunha/rain-for-relax",
            icon: "IconBrand:github",
          },
        ],
      },
      {
        client: "",
        name: "Massage Alternativa",
        description:
          "A website for a massage therapist. It was built using HTML, CSS and JavaScript. It is fully responsive and has a contact form. SQL Server, Linux and Firebase in backend.",
        image:
          "https://best-old-website.yuricunha.com/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fisyuricunha%2Fwebsite%2Fmain%2Fpublic%2Fstatic%2Fimages%2FforDemo%2Fmassage-alternativa.png&w=1920&q=75",
        buttons: [
          {
            text: "Visit",
            link: "https://massagealternativa.com/",
            icon: "IconLink",
          },
          {
            text: "GitHub",
            link: "https://github.com/isyuricunha/massage-alternativa",
            icon: "IconBrand:github",
          },
        ],
      },
      {
        client: "",
        name: "Paris Pharma",
        description:
          "A website for a Paris Pharma. It was built using HTML, CSS and JavaScript.",
        image:
          "https://best-old-website.yuricunha.com/static/images/cloud/parispharma.png",
        buttons: [
          {
            text: "Visit",
            link: "https://parispharmadrogarias.com.br/",
            icon: "IconLink",
          },
          {
            text: "GitHub",
            link: "https://github.com/isyuricunha/paris-pharma",
            icon: "IconBrand:github",
          },
        ],
      },
      {
        client: "",
        name: "System Solution Automation",
        description:
          "A website for a ssautomation. It was built using HTML, CSS and JavaScript. It is fully responsive and has a contact form. SQL Server, Linux and Firebase in backend.",
        image:
          "https://best-old-website.yuricunha.com/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fisyuricunha%2Fwebsite%2Fmain%2Fpublic%2Fstatic%2Fimages%2FforDemo%2Fssautomation.png&w=1920&q=75",
        buttons: [
          {
            text: "Visit",
            link: "https://www.ssautomation.yuricunha.com/",
            icon: "IconLink",
          },
          {
            text: "GitHub",
            link: "https://github.com/isyuricunha/solution-system-autmation",
            icon: "IconBrand:github",
          },
        ],
      },
      // {
      //   client: "Japan",
      //   name: "SWY35 Message Board",
      //   description:
      //     "A private social media platform for SWY35 participants. Built with Next.js, Firebase and Tailwind CSS.",
      //   image: "https://i.imgur.com/swrQwS1.png",
      //   buttons: [
      //     {
      //       text: "Video",
      //       link: "https://youtu.be/T8YuEpy3sxw",
      //       icon: "IconPlay",
      //     },
      //   ],
      // },
      // {
      //   client: "Muş Alparslan University",
      //   name: "MAUN Mobile",
      //   description: "Mobile application for Mus Alparslan University.",
      //   image: "https://i.imgur.com/4xRqunq.png",
      // },
      // {
      //   client: "Ankara Büyükşehir Belediyesi",
      //   name: "Plant App",
      //   description:
      //     "An app to display plant information that will be placed on a local museum of plants.",
      //   image: "https://i.imgur.com/PmmO69d.png",
      // },
      // {
      //   client: "Historia Mall",
      //   name: "Historia Floor Plan",
      //   description:
      //     "A floor plan kiosk app for Historia Shopping and Life Center in Fatih, Istanbul.",
      //   image: "https://i.imgur.com/gwxvO4o.jpg",
      // },
      // {
      //   client: "GDSC Solution Challenge 2023",
      //   name: "Recyling Platform",
      //   description:
      //     "A platform to help people recycle and be responsible consumers for the good of our environment.",
      //   image: "https://i.imgur.com/K0UmgZw.jpeg",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://recycling.is-important.net/",
      //       icon: "IconLink",
      //     },
      //   ],
      // },
      // {
      //   note: "Acquired!",
      //   name: "Discord Server Templates",
      //   description:
      //     "A website to browse Discord server templates and create your own.",
      //   image: "https://i.imgur.com/m64yr7b.jpg",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://discords.com/templates",
      //       icon: "IconLink",
      //     },
      //   ],
      // },
      // {
      //   name: "PreMiD",
      //   description:
      //     "A free, open-source, and community-driven rich presence system.",
      //   image: "https://i.imgur.com/1Yc1HB0.png",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://premid.app",
      //       icon: "IconLink",
      //     },
      //     {
      //       text: "PreMiD Pages",
      //       link: "/projects/premid",
      //       icon: "IconLink",
      //     },
      //     {
      //       text: "GitHub",
      //       link: "https://github.com/PreMiD/PreMiD",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
      // {
      //   name: "Discord Steam Verification",
      //   description:
      //     "A Discord bot to verify if a user owns a specific item on Steam and give them roles!",
      //   image: "https://i.imgur.com/D6SDCdC.png",
      //   buttons: [
      //     {
      //       text: "GitHub",
      //       link: "https://github.com/isyuricunha/discord-steam-verification",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
      // {
      //   name: "Unblock Please",
      //   description:
      //     "Free to use Chrome extension to unblock Imgur and Pastebin restrictions.",
      //   image: "https://i.imgur.com/w5wLpFS.jpg",
      //   buttons: [
      //     {
      //       text: "Add to Chrome",
      //       link: "https://chrome.google.com/webstore/detail/unblock-please/lpngbkmgnehdkkobdbieckjpphkohffd",
      //       icon: "IconInbox",
      //     },
      //     {
      //       text: "GitHub",
      //       link: "https://github.com/isyuricunha/unblock-please",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
      // {
      //   name: "Lanyard Visualizer",
      //   description:
      //     "A web app to visualize your Discord status with Lanyard API.",
      //   image: "https://i.imgur.com/XMfWJlL.jpg",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://visualizer.yuricunha.com",
      //       icon: "IconLink",
      //     },
      //     {
      //       text: "GitHub",
      //       link: "https://github.com/isyuricunha/lanyard-visualizer",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
      // {
      //   name: "Lanyard Web",
      //   description:
      //     "A website concept for Lanyard API, a real-time Discord status widget.",
      //   image: "https://i.imgur.com/V8A5H8f.png",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://lanyard.yuricunha.com",
      //       icon: "IconLink",
      //     },
      //     {
      //       text: "GitHub",
      //       link: "https://github.com/isyuricunha/lanyard-web",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
      // {
      //   client: "Kuka Sahne",
      //   name: "Kuka Sahne Website",
      //   description: "A website for a local theatre company.",
      //   image: "https://i.imgur.com/uUb3Psk.jpeg",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://kukasahne.com",
      //       icon: "IconLink",
      //     },
      //   ],
      // },
      // {
      //   name: "Family Feud Game",
      //   description:
      //     "An interactive browser game with real-time (v2) remote control to play within your community!",
      //   image: "https://i.imgur.com/1sQQPPH.png",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://associative-words.netlify.app/",
      //       icon: "IconLink",
      //     },
      //     {
      //       text: "GitHub (v2)",
      //       link: "https://github.com/isyuricunha/find-associative-words/tree/socket",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
      // {
      //   name: "Movie App",
      //   description:
      //     "A movie website/app concept built with TMDb API, Next.js and Tailwind CSS.",
      //   image: "https://i.imgur.com/EQfaqte.jpg",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://movie-app-eggsy.netlify.app/",
      //       icon: "IconLink",
      //     },
      //     {
      //       text: "GitHub",
      //       link: "https://github.com/isyuricunha/movie-app",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
      // {
      //   name: "Marmaris Palace Website",
      //   description:
      //     "A website concept for a 5-star hotel in Marmaris, Türkiye.",
      //   image: "https://i.imgur.com/BJ2luOh.jpg",
      //   buttons: [
      //     {
      //       text: "Visit",
      //       link: "https://marmaris-palace.netlify.app/",
      //       icon: "IconLink",
      //     },
      //     {
      //       text: "GitHub",
      //       link: "https://github.com/isyuricunha/marmaris-palace-website",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
      // {
      //   note: "You are here!",
      //   name: "yuricunha.com",
      //   description:
      //     "My personal website, built with Nuxt.js, Windi CSS and Firebase!",
      //   image: "https://i.imgur.com/J4bqPcs.png",
      //   buttons: [
      //     {
      //       text: "GitHub",
      //       link: "https://github.com/isyuricunha/website",
      //       icon: "IconBrand:github",
      //     },
      //   ],
      // },
    ],
  }),
  mounted() {
    this.$applyMediumZoom()
  },
}
</script>

<template>
  <PageLayout title="My Projects" description="Get inspired by my projects!">
    <section class="flex items-center flex-wrap gap-2">
      <span class="text-sm">Jump to:</span>
      <Button
        v-for="(project, index) in projects"
        :key="`skipto-button-${index}`"
        :href="`#${project.name.toLowerCase().split(' ').join('-')}`"
      >
        {{ project.name }}
      </Button>
    </section>

    <section
      v-for="(project, index) in projects"
      :key="`project-${index}`"
      :id="project.name.toLowerCase().split(' ').join('-')"
      class="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      :class="index === 0 ? 'mt-24 mb-42' : 'my-42'"
    >
      <div class="space-y-4">
        <span
          v-if="project.client"
          class="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:(bg-white/5 text-white/30)"
        >
          {{ project.client }}
        </span>

        <span
          v-if="project.note"
          class="bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:(bg-white/5 text-white/30)"
        >
          {{ project.note }}
        </span>

        <h2 class="text-4xl text-black/90 font-bold dark:text-white/90">
          {{ project.name }}
        </h2>

        <p>
          {{ project.description }}
        </p>

        <div v-if="project.buttons" class="flex flex-wrap gap-2">
          <Button
            v-for="(button, index) in project.buttons"
            :key="`button-${index}`"
            :href="button.link"
            :blank="!button.link.startsWith('/')"
          >
            <template #icon>
              <component
                v-if="button.icon"
                :is="button.icon.split(':')[0]"
                v-bind="{
                  brand: button.icon.split(':')[1],
                }"
                class="h-4 w-4"
              />
            </template>

            {{ button.text }}
          </Button>
        </div>
      </div>

      <SmartFigure
        v-if="project.image"
        :src="project.image"
        border
        :class="index % 2 === 0 && 'md:order-first'"
      />
    </section>
  </PageLayout>
</template>
