import React, { memo } from "react";
import styled from "styled-components";
import PersonProfire from "./PersonProfire";
import MoreAtr from "../../../components/MoreAtr";
import ArtItem from "../../articles/c-cpns/ArtItem";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RoomContent = memo(() => {
  const { articlesData } = useSelector(
    (state) => ({
      articlesData: state.home.articlesData,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const jumpDetail = () => {
    navigate("/articles");
  };
  return (
    <RoomContentWappre>
      <div className="left">
        <div className="left_title">最新文章</div>
        {articlesData.data?.slice(0, 6)?.map((item) => (
          <ArtItem key={item.createdAt} itemData={item} />
        ))}
        <div className="more" onClick={jumpDetail}>
          查看更多
        </div>
      </div>
      <div className="right">
        <div className="top">
          <PersonProfire />
        </div>
        <div className="recommend ">
          <MoreAtr width={276} />
        </div>
      </div>
    </RoomContentWappre>
  );
});
const RoomContentWappre = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;

  .right {
    flex: 2;
    margin-left: 20px;
    text-align: center;
    .top {
      width: 276px;
      border-radius: 10px;
      height: 400px;
      background-color: #fff;
      box-shadow: 5px 20px 15px -15px rgb(0 0 0 / 40%);
      transition: box-shadow 0.7s;
      &:hover {
        box-shadow: 0 0 10px 0px rgb(0 0 0 / 60%);
      }
    }
    .recommend {
      position: sticky;
      top: 0px;
      margin-top: 20px;
    }
  }
  .left {
    flex: 8;
    .more {
      width: 100%;
      text-align: center;
      cursor: pointer;
    }
    .left_title {
      font-size: 16px;
      font-weight: 700;
      color: #717171;
      border-left: 4px solid #e97272;
      padding-left: 20px;
    }
  }
`;

export default RoomContent;
