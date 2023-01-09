import axios from "axios"
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Head from "next/head"
import Link from "next/link"

const Projects = ({repo}) => {
    // console.log(repo)
  return (
    <>
    <Head>
        <title>Projects</title>
        <meta name="description" content="proj" />
        <meta name="viewport" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
    <Box ml={10}>
        <Heading>Projects</Heading>
        <Box>
        <SimpleGrid columns={[2,3,4]} spacing={10} >
              {
                repo.items.map((el)=>{
                  return (
                  <Link href={el.html_url}>
                  <Box key={el.name} paddingRight={10} bg={"lightgrey"} padding={5}>
                    <Heading size="md">{el.name}</Heading>
                    <Flex justifyContent="space-between" >
                    <Box>forks: {el.forks_count}</Box>
                      <Box>following: {el.stargazers_count}</Box>
                    </Flex>
                    <Heading size="sm"> language: {el.language}</Heading>
                   
                  </Box>
                  </Link>)
                })
              }
            </SimpleGrid>
        </Box>
    </Box>
    </main>
    </>
  )
}

export async function getServerSideProps(){
    let res = await axios.get("https://api.github.com/search/repositories?q=user:riteshf+fork:true&sort=updated&per_page=10&type=Repositories")
    return{
      props:{
        repo:res.data
  
        }
      }
    }

export default Projects