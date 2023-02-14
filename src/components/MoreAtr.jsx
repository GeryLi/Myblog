import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getArticlesByRendom } from "../services";

const MoreAtr = memo((props) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getArticlesByRendom().then((res) => setdata(res.data));
  }, []);

  const navigate = useNavigate();
  const jumpDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <MoreAtrWapper width={props.width || 250}>
      <div className="title">
        <span>随机推荐</span>
      </div>
      <ul>
        {data?.map((item) => (
          <li
            className="item"
            key={item._id}
            onClick={() => jumpDetail(item._id)}
          >
            <div className="moretitle">{item.title}</div>
            <div className="moresubtitle">{item.subtitle}</div>
          </li>
        ))}
      </ul>
    </MoreAtrWapper>
  );
});
const MoreAtrWapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width}px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  text-align: start;

  .title {
    font-size: 16px;
    margin: 10px 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #575555;
    span {
      border-left: 4px solid #08d9d6;
      padding: 0 30px;
    }
  }
  .item {
    padding-left: 20px;
    margin: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid #c2c2c2;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.5s ease;
    &:hover {
      border-bottom: 2px solid #e97272;

      div {
        color: #3b3b3b;
      }
      .moretitle {
        font-size: 16px;
      }
      .moresubtitle {
        width: 210px;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .moretitle {
      padding: 5px 0;
      font-size: 14px;
      font-weight: 500;
      color: #717171;
      transition: all 0.5s ease;
    }
    .moresubtitle {
      font-size: 12px;
      padding: 10px 0;
      color: #768791;
      transition: all 0.5s ease;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export default MoreAtr;
