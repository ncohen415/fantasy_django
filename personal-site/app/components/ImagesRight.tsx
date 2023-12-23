"use client"
import React, { useState, useEffect } from "react"
import styles from "@/app/styles/imagesRight.module.css"
import { Red_Hat_Text } from "next/font/google"

interface ImagesRightProps {
  aboutText: string
  startIndex: number
  images: Array<Object>
}

const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "700"] })

const ImagesRight: React.FC<ImagesRightProps> = ({
  images,
  aboutText,
  startIndex,
}) => {
  const [imageIndex, setImageIndex] = useState(startIndex)
  const [changeImage, setChangeImage] = useState(true)
  const [loading, setLoading] = useState(false)

  const switchImage = () => {
    setLoading(true)
    if (imageIndex === images.length - 1) {
      setImageIndex(0)
      setChangeImage(!changeImage)
    } else {
      setImageIndex(imageIndex + 1)
      setChangeImage(!changeImage)
    }
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      switchImage()
    }, 4000)
  }, [changeImage])

  return (
    <div className={styles.right}>
      <h3 className={`${styles.aboutHeading} ${redHatText.className}`}>
        About
      </h3>
      <p className={`${styles.aboutText} ${redHatText.className}`}>
        {aboutText}
      </p>
      <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${redHatText.className}`}>
          See More
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className={styles.image}
          style={{
            flex: "0 1 60%",
            borderRadius: "15px",
            padding: "2rem",
            margin: "3px",
            backgroundAttachment: "fixed",
            backgroundPosition: "bottom right",
            backgroundSize: "auto",
            backgroundImage: `url(${
              !loading && images[imageIndex]?.image.url
            })`,
            WebkitBackgroundSize: "1086px 724px",
          }}
        />
        <div
          className={styles.image}
          style={{
            flex: "0 1 40%",
            borderRadius: "15px",
            padding: "2rem",
            margin: "3px",
            backgroundAttachment: "fixed",
            backgroundPosition: "bottom right",
            backgroundSize: "auto",
            backgroundImage: `url(${
              !loading && images[imageIndex]?.image.url
            })`,
            WebkitBackgroundSize: "1086px 724px",
          }}
        />
      </div>
    </div>
  )
}

export default ImagesRight
