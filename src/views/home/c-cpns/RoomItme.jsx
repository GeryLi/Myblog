import React, { memo } from "react";
import styled from "styled-components";

const RoomItme = memo((props) => {
  return (
    <RoomItmeWapper>
      <div className="pic">
        <img src={require("@/assets/images/itembgc.png")} alt="图片" />
        <div className="cover">
          <div className="title">标题</div>
        </div>
      </div>
    </RoomItmeWapper>
  );
});
const RoomItmeWapper = styled.div`
  position: relative;
  width: 48%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.7s;
  overflow: hidden;
  &:hover {
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.5);
  }
  &:hover .pic img {
    transform: scale(1.1);
  }

  .pic {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      transition: all 1s;
    }
  }
  .cover {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40%;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    backdrop-filter: blur(32px);
  }
  .title {
    font-size: 18px;
    color: red;
    font-weight: 700;
  }
`;

export default RoomItme;
