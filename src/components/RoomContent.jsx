import React, { memo } from 'react'
import styled from 'styled-components'
import PersonProfire from './PersonProfire'
import RoomItme from './RoomItme'

const RoomContent = memo(() => {
  return (
    <RoomContentWappre>
      <div className="left">
        <RoomItme/>
        <RoomItme/>
        <RoomItme/>
        <RoomItme/>
        <RoomItme/>
        <RoomItme/>
      </div>
      <div className="right">
        <div className="top">
          <PersonProfire />

        </div>
      </div>

    </RoomContentWappre>
  )
})
const RoomContentWappre = styled.div`
display:flex;
margin-top:15px;
justify-content: space-between;


.right  {
    flex:2;
    margin-left: 20px;
    text-align: center;
    .top {
      border-radius:10px;
      height:400px;
      background-color:#fff;
      box-shadow:5px 20px 15px -15px rgb(0 0 0 / 40%);
      transition:box-shadow .7s;
       &:hover {
      box-shadow:0 0 10px 0px rgb(0 0 0 / 60%);

    }
    }
    
      

}
.left {
    flex:8;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    

    
}

`

export default RoomContent