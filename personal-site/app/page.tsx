import Image from "next/image"
import styles from "@/app/styles/home.module.css"
import { Modak, Whisper, Red_Hat_Text } from "next/font/google"
import { getBackgroundImages, getPortraitImages } from "@/app/actions"
import { useEffect } from "react"
import ImagesLeft from "./components/ImagesLeft"
import ImagesRight from "./components/ImagesRight"

const modak = Modak({ subsets: ["latin"], weight: ["400"] })
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] })

export default async function Home() {
  // QUERIES
  const backgroundImages = await getBackgroundImages()
  const portraitImages = await getPortraitImages()

  return (
    <main>
      <div className={styles.headingContainer}>
        <div className={styles.nameWrapper}>
          <h1 className={`${modak.className} ${styles.heading}`}>Nate</h1>
          <h1
            className={`${whisper.className} ${styles.heading} ${styles.subHeading}`}
          >
            Cohen
          </h1>
        </div>
      </div>
      <div className={styles.palletContainer}>
        <div className={`${styles.pallet} bg-tintedBlack`} />
        <div className={`${styles.pallet} bg-paleBlack`} />
        <div className={`${styles.pallet} bg-shadedGray`} />
        <div className={`${styles.pallet} bg-tintedGray`} />
        <div className={`${styles.pallet} bg-paleGray`} />
      </div>
      <div className={styles.hero}>
        <ImagesLeft
          startIndex={0}
          bgImages={backgroundImages.data.allImages}
          portraitImages={portraitImages.data.allImages}
        />
        <ImagesRight
          startIndex={1}
          aboutText={`Vegan gluten-free meh, 8-bit ugh mixtape man braid yr +1 aesthetic
        letterpress. Try-hard edison bulb four dollar toast sriracha polaroid
        vape, authentic fam snackwave skateboard umami distillery next level.
        Small batch pitchfork fam meh, thundercats paleo jean shorts bicycle
        rights irony occupy try-hard flexitarian. Mlkshk cupping tilde chia
        truffaut vinyl bespoke cornhole ugh hammock locavore. Gorpcore lyft
        iceland, deep v asymmetrical vexillologist artisan fingerstache neutra
        tousled coloring book gochujang. Cornhole locavore ramps normcore,
        marxism tacos plaid you probably haven't heard of them tote bag viral
        lo-fi fanny pack.`}
          images={backgroundImages.data.allImages}
        />
      </div>
    </main>
  )
}
