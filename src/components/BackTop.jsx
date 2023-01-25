import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'

const BackTop = memo(() => {
    const [moveY, setmoveY] = useState(0);
    
    useEffect(() => {
        const handleChangeY = ()=>{
            if(window.scrollY >= 700){
                setmoveY( window.scrollY + 1600 )    
            }else{
                setmoveY(0)
            }
        }
        window.addEventListener('scroll',handleChangeY)
        return () => {
            window.removeEventListener('scroll',handleChangeY)
        };

        

    }, [moveY]);

    
  return (
    <BackTopWapper moveY = {moveY}>
        <img src={require('../assets/images/scroll.png')} alt="返回顶部" />
        <div className="back" onClick={()=>{
            window.scrollTo(0,0)
        }}></div>
        
    </BackTopWapper>
  )
})

const BackTopWapper = styled.div`
position: absolute;
top:-200%;
right: 5%;
transform:translateY(${props=> (props.moveY)}px);
transition:all .5s;
img {
position: sticky;
top:700;


}
.back {
    position:absolute;
    left: 0;
    bottom: 0;
    width: 70px;
    height: 110px;
    
    
}



`
export default BackTop