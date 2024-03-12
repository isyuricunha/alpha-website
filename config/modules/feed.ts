const Feed = () => {
  const baseUrlArticles = "https://alpha.yuricunha.com/blog"

  const feedFormats = {
    rss: { type: "rss2", file: "rss.xml" },
    json: { type: "json1", file: "feed.json" },
  }

  const { $content } = require("@nuxt/content")

  const createFeedArticles = async function (feed: any) {
    feed.options = {
      title: "Yuri Cunha Blog",
      description:
        "I'm the DBA that'll make you laugh, cry, and learn about technology.",
      link: baseUrlArticles,
    }

    const articles = await $content("blog").fetch()

    articles.forEach((article: any) => {
      const url = `${baseUrlArticles}/${article.slug}`

      const hostName =
        process.env.NODE_ENV === "production"
          ? "https://alpha.yuricunha.com"
          : "http://localhost:3000"

      const postImagesPath = `${hostName}/assets/images/posts`

      feed.addItem({
        title: article.title,
        slug: article.slug,
        link: url,
        image: article.image
          ? `${hostName}${article.image}`
          : `${postImagesPath}/${url?.split("/")?.at(-1)}.jpg`,
        date: new Date(article.createdAt),
        description: article.description,
        content: article.summary,
      })
    })
  }

  return Object.values(feedFormats).map(({ file, type }) => ({
    path: `${file}`,
    create: createFeedArticles,
    type,
  }))
}

export default Feed
