import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Layout from '@/components/hocs/Layout'
import { Fade } from 'react-reveal'

export default function Home() {
  const [hoverRight, setHoverRight] = useState(false)
  const [hoverLeft, setHoverLeft] = useState(false)
  return (
    <Layout>
      <Fade right cascade>
        <div className={styles.cardWrapper}>
          <div
            className={`${styles.card} ${styles.left} ${hoverLeft ? styles.hover : ""} ${hoverRight ? styles.notHover : ""}`}
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
          >
            Web Dev
          </div>
          <div
            className={`${styles.card} ${styles.right} ${hoverRight ? styles.hover : ""} ${hoverLeft ? styles.notHover : ""}`}
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}

          >
            photography
          </div>

        </div>
      </Fade>
    </Layout >

  )
}
