import type { Plugin } from "@nuxt/types"

/* Import plugins */
import getReadableDate from "./Utils/getReadableDate"
import getReadingTime from "./Utils/getReadingTime"
import getBrazilTime from "./Utils/getBrazilTime"
import prepareMeta from "./Utils/prepareMeta"
import applyMediumZoom from "./Utils/applyMediumZoom"

/* Export and inject plugin */
const Util: Plugin = (_, inject) => {
  inject("getReadableDate", getReadableDate)
  inject("getReadingTime", getReadingTime)
  inject("getBrazilTime", getBrazilTime)
  inject("prepareMeta", prepareMeta)
  inject("applyMediumZoom", applyMediumZoom)
}

export default Util
