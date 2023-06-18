import type { AppProps } from "next/app"
import { ClerkProvider } from "@clerk/nextjs"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

export default function App({ Component, pageProps }: AppProps) {
  const colors = {
    brand: {
      primary: "#6610F2",
      secondary: "#E6C229",
      danger: "#D11149",
      highlight: "#1A8FE3",
      neutral: "#F9F8F8",
      warning: "#F17105",
    },
  }
  const theme = extendTheme({ colors })
  return (
    <ClerkProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ClerkProvider>
  )
}
