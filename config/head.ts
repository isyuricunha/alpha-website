import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://alpha.yuricunha.com/icon.png"
const description =
  "Not just a DBA, but a data craftsman building digital legacies."

const Head: NuxtOptionsHead = {
  title: "Yuri Cunha",
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
      content: "@isyuricunha",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@isyuricunha",
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
      href: "https://alpha.yuricunha.com/assets/icons/yuricunha.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Yuri Cunha Blog",
      href: "https://alpha.yuricunha.com/opensearch.xml",
    },
  ],
}

export default Head
