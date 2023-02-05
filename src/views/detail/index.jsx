import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getArticlesByID } from "../../services";
import Mdeditor from "./c-cpns/Mdeditor";
import { ClockCircleOutlined, EyeOutlined } from "@ant-design/icons";
import MoreAtr from "../../components/MoreAtr";
import PersonProfire from "../home/c-cpns/PersonProfire";
import Asideanchor from "./c-cpns/Asideanchor";

const Detail = memo((props) => {
  const [data, setdata] = useState({});
  const [anchorarr, setanchorarr] = useState([]);
  const [theme, settheme] = useState(["mk-cute"]);

  const getAnchorHandle = (value) => {
    setanchorarr(value);
  };
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
      <div className="left">
        <PersonProfire />
      </div>
      <div className="middle">
        <div className="titles">
          <h1>{data?.title}</h1>
          <h2>{data?.subtitle}</h2>
          <div className="infos">
            <span className="time">
              <ClockCircleOutlined className="icons" />
              <span> {data?.createtime}</span>
            </span>
            <span className="wordage">
              <span>字数约:{data?.content?.length}字</span>
            </span>
            <span className="view">
              <EyeOutlined className="icons" />
              <span>{data?.views}</span>
            </span>
            <span className="theme">
              文章主题：
              <select
                name="themes"
                id="themes"
                defaultValue="mk-cute"
                onChange={(value) => {
                  settheme(value?.target?.value);
                }}
              >
                <option id="default" value="default">
                  default
                </option>
                <option id="github" value="github">
                  github
                </option>
                <option id="vuepress" value="vuepress">
                  vuepress
                </option>
                <option id="mk-cute" value="mk-cute">
                  mk-cute
                </option>
                <option id="smart-blue" value="smart-blue">
                  smart-blue
                </option>
                <option id="cyanosis" value="cyanosis">
                  cyanosis
                </option>
                <option id="arknights" value="arknights">
                  arknights
                </option>
              </select>
            </span>
          </div>
        </div>
        <div className="content">
          <Mdeditor
            content={data?.content}
            getAnchor={getAnchorHandle}
            theme={theme}
          />
        </div>
      </div>
      <div className="right">
        <MoreAtr />
        <Asideanchor anchorarr={anchorarr} />
      </div>
    </DetailWapper>
  );
});
const DetailWapper = styled.div`
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
          color: #fa5537;
        }
        .time {
          color: #00a7e0;
        }
        .wordage {
          margin-left: 20px;
          color: #00a7e0;
        }

        .icons {
          margin-left: 5px;
          margin-right: 4px;
        }

        .theme {
          float: right;

          select {
            border-radius: 5px;
            text-align: center;
            font-weight: 700;
            color: #768791;
            border: 2px solid #aaa9a9;
          }
        }
      }
    }

    .content {
      width: 100%;
      overflow: hidden;
    }
  }
  .right {
    width: 300px;
  }
`;
export default Detail;
