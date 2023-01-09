import axios from "axios"
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Head from "next/head"

const Experience = ({prof}) => {
    // console.log(prof)
  return (
    <>
    <Head>
        <title>Experience</title>
        <meta name="description" content="exp" />
        <meta name="viewport" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Box>
        <Heading>Experience</Heading><br /><br />
         <Box>
              {
                prof.company.split(" @").map((el)=>{
                  return (<Heading size={"lg"} key={el}> Senior Software Engineer at {el} </Heading>)
                })

              }
            </Box>
    </Box>
      </main>
      </>
   
  )
}
export async function getServerSideProps(){
    let res = await axios.get("https://api.github.com/users/riteshf")
    return{
      props:{
        prof:res.data
  
        }
      }
    }

export default Experience