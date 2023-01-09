import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from "next/link"
import React from 'react'

const Navbar = () => {
  return (
    <Flex bg={"gray.900"} color="white" justifyContent={"space-between"}>
        <Flex gap={10} mt="10px">
            <Link href="/"><Heading>Home </Heading></Link>
            <Link href="/projects"><Heading>Projects </Heading></Link>
            <Link href="/experience"><Heading>Experience</Heading></Link>
        </Flex>
        <Box>
        <Image style={{borderRadius:"50%"}}  src="https://avatars.githubusercontent.com/u/40817224?v=4" width={70} height={70} alt="riteshf" />

        </Box>

    </Flex>
  )
}

export default Navbar