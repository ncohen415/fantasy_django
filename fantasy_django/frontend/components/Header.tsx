import React from "react"
import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/router"
import { BellIcon } from "@chakra-ui/icons"

type Props = {}

const Header = (props: Props) => {
  const user = useUser()
  const router = useRouter()
  return (
    <Box bg="gray.800" color="white" py={4} px={6}>
      <Flex align="center" justify="space-between" mx="auto">
        <Flex>
          <Text fontSize="xl" fontWeight="bold">
            My Website
          </Text>
        </Flex>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          {!user?.isSignedIn ? (
            <Button onClick={() => router.push("/login")}>Login</Button>
          ) : (
            <>
              <BellIcon boxSize={7} mx={"1.5rem"} />
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
