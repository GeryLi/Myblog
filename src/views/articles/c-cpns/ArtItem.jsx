import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ClockCircleOutlined, EyeOutlined } from "@ant-design/icons";
import ImageRedom from "../../../components/ImageRedom";

const ArtItem = memo((props) => {
  const { itemData } = props;
  const navigate = useNavigate();
  const jumpInfo = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <ArtItemWapper onClick={() => jumpInfo(itemData._id)}>
      <div className="item_content">
        <div className="pic">
          <ImageRedom />
        </div>
        <div className="text">
          <h1 className="title">{itemData.title}</h1>
          <h2 className="subtitle">{itemData.subtitle}</h2>
          <div className="bottom">
            <span className="time">
              <ClockCircleOutlined className="icons" />
              <span> {itemData.createtime}</span>
            </span>
            <span className="view">
              <EyeOutlined className="icons" />
              <span>{itemData.views}</span>
            </span>
            <span className="wordage">
              <span>字数约:{itemData?.content?.length}字</span>
            </span>
          </div>
        </div>
      </div>
    </ArtItemWapper>
  );
});

const ArtItemWapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  margin: 10px 0;
  border-radius: 10px;
  transition: all 0.5s ease;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #d4d4d4;
    .pic {
      border-radius: 10px;
      img {
        transform: scale(1.2);
      }
    }
  }
  .item_content {
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
    display: flex;

    .pic {
      flex: 1;
      background-color: #3d85f1;
      overflow: hidden;
      transition: all 0.5s ease;
      img {
        transition: all 0.5s ease;
      }
    }
    .text {
      flex: 2;
      box-sizing: border-box;
      padding: 20px 20px 0px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-color: rgba(0, 0, 0, 0);

      .title {
        font-size: 18px;
        color: #717171;
      }
      .subtitle {
        margin-top: -20px;
        font-size: 14px;
        color: #768791;
      }
      .bottom {
        font-size: 12px;
        .view {
          margin-left: 20px;
        }
        .wordage {
          margin-left: 20px;
        }
      }
    }
  }

  .icons {
    margin-right: 5px;
    vertical-align: bottom;
  }
`;
export default ArtItem;
