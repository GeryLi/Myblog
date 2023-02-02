import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getArticlesByID } from "../../services";
import Mdeditor from "./c-cpns/Mdeditor";
import { ClockCircleOutlined, EyeOutlined } from "@ant-design/icons";

const Detail = memo((props) => {
  const [data, setdata] = useState({});
  const id = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  useEffect(() => {
    getArticlesByID(id).then((res) => {
      if (res.data) {
        setdata(res.data);
      } else {
        navigate("/detail");
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // useEffect(() => {
  //   getArticlesByID()
  // }, []);

  return (
    <DetailWapper className="warpper">
      <div className="left">111</div>
      <div className="middle">
        <div className="titles">
          <h1>{data?.title}</h1>
          <h2>{data?.subtitle}</h2>
          <div className="infos">
            <span className="time">
              <ClockCircleOutlined className="icons" />
              <span> {data?.createtime}</span>
            </span>
            <span className="view">
              <EyeOutlined className="icons" />
              <span>{data?.views}</span>
            </span>
          </div>
        </div>
        <div className="content">
          <Mdeditor content={data?.content} />
        </div>
      </div>
      <div className="right">555</div>
    </DetailWapper>
  );
});
const DetailWapper = styled.div`
  width: 1600px;
  display: flex;
  .left {
    flex: 1;
    height: 200px;
  }
  .middle {
    width: 800px;
    background: #fff;
    padding: 60px 20px;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 30px;

    .titles {
      text-align: center;
      h1 {
        font-size: 1.8em;
        color: #717171;
      }

      h2 {
        font-size: 1.2em;
        color: #768791;
        padding: 10px;
        font-weight: 500;
      }

      .infos {
        font-size: 12px;
        padding: 5px;
        .view {
          margin-left: 20px;
          color: #ff3f1f;
        }
        .time {
          color: #00a7e0;
        }

        .icons {
          margin-left: 5px;
          margin-right: 4px;
        }
      }
    }

    .content {
      width: 100%;
      height: 800px;
      overflow: hidden;
    }
  }
  .right {
    flex: 1;
  }
`;
export default Detail;
