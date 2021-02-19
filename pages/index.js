import { NextSeo } from "next-seo"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import dynamic from "next/dynamic"
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false })

export default function Home() {
  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject)
    if (typeof navigator !== "undefined" && "clipboard" in navigator) {
      navigator.clipboard.writeText(emojiObject.emoji)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Emoji Picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Emoji Picker"
        description="Copy emoji to your clipboard."
      />

      <main>
        <p>Click an emoji to copy it to your clipboard.</p>
        <Picker
          onEmojiClick={onEmojiClick}
          disableAutoFocus
          native
          pickerStyle={{ height: "80vh" }}
        />
      </main>
      <footer>
        <p>
          Site by <a href="https://twitter.com/steveruizok">@steveruizok</a>.{" "}
          <a href="https://www.npmjs.com/package/emoji-picker-react">Picker</a>{" "}
          by <a href="https://twitter.com/alushevyatar">alush</a>.
        </p>
      </footer>
    </div>
  )
}
