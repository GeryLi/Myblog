import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const arr = [
    {
        id: 1,
        title: '首页',
        address: '/home'
    },
    {
        id: 2,
        title: '文章',
        address: '/articles'
    },
    {
        id: 3,
        title: '美图',
        address: '/pictures'
    },
    {
        id: 4,
        title: '音乐',
        address: '/music'
    },
    {
        id: 5,
        title: '小窝',
        address: '/space'
    },
 
   
]

const Appheader = memo(() => {
    const [current, setcurrent] = useState(0);
    const navigate = useNavigate()


    function changeNav(index, address) {
        setcurrent(index);
        navigate(address)

    }

    return (
        <HeaderDiv className='warpper'>
            <div style={{ textAlign:'left',fontSize:'20px',color:'#2d4c77' }}>Gery's Blog</div>
            {/* <div>首页</div>
        <div>文章</div>
        <div>美图</div>
        <div>音乐</div>
        <div>小窝</div>
        <div>搜索</div>
        <div>登录</div> */}
            {
                arr.map((item, index) => <div key={item.id} className={current === index ? 'active' : ''} onClick={() => changeNav(index, item.address)}>
                    <span>{item.title}</span> </div>)
            }
            <div>搜索</div>

        </HeaderDiv>
    )
})

const HeaderDiv = styled.div`
        display:flex;
        height:100%;
        width: 1200px;
        justify-content:center;
        align-items:center;
        text-align:center;
        line-height: 60px;
        &>div {
            cursor: pointer;
        }

        div{
            flex:1;
            font-size:14px;
            font-weight:700;
            transition:all 1s;
            &.active {
                color:#2d4c77;
                span {
                    padding:5px;
                    border-bottom:2px solid #2d4c77;
                }

            }
            &:hover {
                color:#2d4c77;
                span {
                    padding:5px;
                    border-bottom:2px solid #2d4c77;
                }
            }
        }
        

`
export default Appheader