import React, { memo } from 'react'
import styled from 'styled-components'
import HeaderSwiper from '../../components/HeaderSwiper'
import RoomContent from '../../components/RoomContent'

const Home = memo(() => {
  return (
    <HomeContentDiv className='warpper'>
      <HeaderSwiper/>
      <RoomContent/>
      
    </HomeContentDiv>
  )
})
const HomeContentDiv = styled.div`
    margin-top:20px;
    width:1400px;
    /* background-color:#364d79; */

    

`

export default Home