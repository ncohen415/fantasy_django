import React from "react"
import { Box, Flex, Text, IconButton, Heading } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

type Props = {}

const Header = (props: Props) => {
  return (
    <Box bg="gray.800" color="white" py={4} px={6}>
      <Flex align="center" justify="space-between" mx="auto">
        <Flex>
          <Text fontSize="xl" fontWeight="bold">
            My Website
          </Text>
          <Text mr={4}>Home</Text>
          <Text mr={4}>About</Text>
          <Text mr={4}>Services</Text>
          <Text mr={4}>Contact</Text>
        </Flex>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <IconButton
            aria-label="Toggle navigation"
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
