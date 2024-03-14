import { VercelRequest, VercelResponse } from "@vercel/node"
import LastFMTyped from "lastfm-typed"

const LASTFM_API_KEY = process.env.LASTFM_API_KEY
const username = "yuricunha"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!LASTFM_API_KEY) {
    return res.status(401).json({ error: "LASTFM_API_KEY is not set" })
  }

  try {
    const lastFm = new LastFMTyped(LASTFM_API_KEY)

    const [info, topTracks, topArtists, recentTracks] = await Promise.all([
      lastFm.user.getInfo(username),
      lastFm.user.getTopTracks(username, { limit: 6, period: "7day" }),
      lastFm.user.getTopArtists(username, { limit: 4, period: "7day" }),
      lastFm.user.getRecentTracks(username, { limit: 15 }),
    ])

    // Map track function
    const mapTrack = (track: any) => {
      const artist =
        typeof track.artist === "string" ? track.artist : track.artist.name

      const object: any = {
        artist,
        name: track.name,
        image: track.image.find((image: any) => image.size === "large")?.url,
        url: track.url,
        date: track.date?.uts,
        nowPlaying: track.nowplaying,
      }

      if (track.playcount) object.plays = track.playcount

      return object
    }

    // Map artist function
    const mapArtist = (artist: any) => {
      const object: any = {
        name: artist.name,
        image: artist.image.find((image: any) => image.size === "large")?.url,
        url: artist.url,
      }

      if (artist.playcount) object.plays = artist.playcount

      return object
    }

    // Formatted user info
    const formattedUserInfo = {
      name: info.name,
      image: info.image.find((image: any) => image.size === "large")?.url,
      url: info.url,
      totalPlays: info.playcount,
      registered: info.registered,
    }

    // Return
    res.status(200).json({
      user: formattedUserInfo,
      recentTracks: recentTracks?.tracks?.map(mapTrack) || [],
      topTracks: topTracks?.tracks?.map(mapTrack) || [],
      topArtists: topArtists?.artists?.map(mapArtist) || [],
    })
  } catch (error: any) {
    console.error("Error fetching Last.fm data:", error)
    res
      .status(error.statusCode || 500)
      .json({ error: error.message || "Internal Server Error" })
  }
}
