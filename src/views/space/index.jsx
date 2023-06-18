import React, { memo } from "react";
import styled from "styled-components";
import MoreAtr from "../../components/MoreAtr";
import PersonProfire from "../home/c-cpns/PersonProfire";

const Space = memo(() => {
  return (
    <SpaceWapper className="warpper">
      <div className="left">
        <PersonProfire />
      </div>
      <div className="middle">
        <div className="m-header">
          <h3>关于我</h3>
          <div className="m-content">
            <div className="my">M E : 求职中...</div>
            <div className="target">目 标 : 成为全菜工程师</div>
            <div className="hobby">爱 好 : 看动漫、学编程、打游戏</div>
          </div>
        </div>
        <div className="m-imain">
          <h3>Gery'S Blog 技术栈</h3>
          <div className="m-content">
            <div>
              前台 : React全家桶、Redux、Ant
              Design、Axios、ClassNames、Styled、MdEditor-rt、Swiper
            </div>
            <div>
              后台 :
              Vue、Pinia、Vite、Element-Plus、Typescript、MdEditor-v3、Axios、dayjs
            </div>
            <div>
              后端 :
              nodejs、expressjs、express-jwt、MongoDB、mongoosejs、dayjs、Nginx、Jeekins
            </div>
          </div>
        </div>
        <div className="m-footer">
          <h3>关于 Gery'S Blog</h3>
          <div className="m-content">
            <p>
              <span>
                Gery's Blog
                是学习后进行练习的产物，历时一个多月，目前还存在着许多的不足。
              </span>
            </p>
            <p>
              编写的过程中遇到过很多的问题，但当问题迎刃而解时，有说不出的喜悦和快乐。
            </p>
            <p>
              大部分板块已经开发完成，音乐板块下一次更新的目标，目前还没想好怎么进行构建。
            </p>
            <p>音乐模块完成后，想要使用Go重构下后端的代码。</p>
          </div>
        </div>
      </div>
      <div className="right">
        <MoreAtr />
      </div>
    </SpaceWapper>
  );
});

const SpaceWapper = styled.div`
  width: 1600px;
  display: flex;
  justify-content: center;
  .left {
    box-sizing: border-box;
    width: 276px;
    height: 400px;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 5px 20px 15px -15px rgb(0 0 0 / 40%);
    transition: box-shadow 0.7s;
    &:hover {
      box-shadow: 0 0 10px 0px rgb(0 0 0 / 60%);
    }
  }
  .middle {
    width: 800px;
    background: #fff;
    padding: 60px 20px;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 20px;
    h3 {
      font-size: 16px;
    }
    .m-content {
      margin-top: 5px;
      border-top: 2px solid #d8dee4;
      font-size: 16px;
      & > div {
        margin: 20px 0;
        padding: 0 10px;
      }
    }

    .m-imain {
      margin-top: 30px;
    }
    .m-footer {
      margin-top: 30px;

      p {
        margin: 40px 0;
      }
    }
  }
  .right {
    width: 300px;
  }
`;
export default Space;
