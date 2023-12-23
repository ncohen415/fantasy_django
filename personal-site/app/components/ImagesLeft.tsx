"use client"
import React, { useState, useEffect } from "react"
import styles from "@/app/styles/imagesLeft.module.css"
import Image from "next/image"

interface ImagesLeftProps {
  bgImages: Array<Object>
  portraitImages: Array<Object>
  startIndex: number
}

const ImagesLeft: React.FC<ImagesLeftProps> = ({
  bgImages,
  portraitImages,
  startIndex,
}) => {
  const [imageIndex, setImageIndex] = useState(startIndex)
  const [pImageIndex, setPImageIndex] = useState(0)
  const [changeImage, setChangeImage] = useState(true)
  const [pChangeImage, setPChangeImage] = useState(true)
  const [loading, setLoading] = useState(1)

  const switchBgImage = () => {
    if (imageIndex === bgImages.length - 1) {
      setImageIndex(0)
      setChangeImage(!changeImage)
    } else {
      setImageIndex(imageIndex + 1)
      setChangeImage(!changeImage)
    }
  }

  const switchPImage = async () => {
    if (imageIndex === portraitImages.length - 1) {
      setPImageIndex(0)
      setPChangeImage(!pChangeImage)
    } else {
      setLoading(0)
      setTimeout(() => {
        setPImageIndex(imageIndex + 1)
        setPChangeImage(!pChangeImage)
        setLoading(1)
      }, 1000)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      switchBgImage()
    }, 5000)
  }, [changeImage])

  useEffect(() => {
    setTimeout(() => {
      switchPImage()
    }, 4250)
  }, [pChangeImage])

  return (
    <div className={styles.left}>
      <div style={{ display: "flex" }}>
        <div
          className={styles.image}
          style={{
            flex: "0 1 50%",
            borderRadius: "15px",
            padding: "2rem",
            margin: "3px",
            backgroundAttachment: "fixed",
            backgroundPosition: "bottom left",
            backgroundSize: "auto",
            backgroundImage: `url(${bgImages[imageIndex].image.url})`,
            WebkitBackgroundSize: "1086px 724px",
          }}
        />
        <div
          className={styles.image}
          style={{
            flex: "0 1 50%",
            borderRadius: "15px",
            padding: "2rem",
            margin: "3px",
            backgroundAttachment: "fixed",
            backgroundPosition: "bottom left",
            backgroundSize: "auto",
            backgroundImage: `url(${bgImages[imageIndex]?.image.url})`,
            WebkitBackgroundSize: "1086px 724px",
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <div
          className={styles.image}
          style={{
            flex: "0 1 100%",
            borderRadius: "15px",
            padding: "2rem",
            margin: "3px",
            position: "relative",
            backgroundAttachment: "fixed",
            backgroundPosition: "bottom left",
            backgroundSize: "auto",
            backgroundImage: `url(${bgImages[imageIndex]?.image.url})`,
            WebkitBackgroundSize: "1086px 724px",
          }}
        >
          <div style={{ opacity: loading, transition: "opacity 1s ease-in" }}>
            <Image
              className={styles.frontImage}
              src={portraitImages[pImageIndex]?.image.url}
              width={600}
              height={900}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagesLeft
