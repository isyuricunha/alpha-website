import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://yuricunha.com/icon.png"
const description =
  "Young JavaScript developer from Turkey, interested in languages, gaming, and programming, trying to improve his JavaScript skills!"

const Head: NuxtOptionsHead = {
  title: "yuricunha.com",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@eggsydev",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@eggsydev",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "yuricunha.com",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "yuricunha.com",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#171717",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://yuricunha.com/assets/icons/icon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "EGGSY's Blog",
      href: "https://yuricunha.com/opensearch.xml",
    },
  ],
}

export default Head
