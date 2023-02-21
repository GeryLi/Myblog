import React, { memo, useEffect } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import ArtContent from "./c-cpns/ArtContent";
import { searchArticleByTitle } from "../../services";

const Articles = memo(() => {
  const inputRef = useRef();
  const childRef = useRef();

  useEffect(() => {
    // @ts-ignore
    inputRef?.current?.input?.focus();
  }, []);

  const handleSearch = () => {
    // @ts-ignore
    searchArticleByTitle({ title: inputRef.current.input.value })
      .then((res) => {
        // @ts-ignore
        childRef.current.setSearchData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ArticlesWapper className="warpper">
      <div className="header">
        <div className="content">
          <div className="log">Gery's Blog | 搜素</div>
          <div className="search">
            <Input
              placeholder="Basic usage"
              // @ts-ignore
              ref={inputRef}
            />
          </div>
          <div className="search_btn">
            <Button
              type="primary"
              icon={<SearchOutlined />}
              size="large"
              onClick={handleSearch}
            >
              搜索
            </Button>
          </div>
        </div>
      </div>

      <div className="main">
        <ArtContent ref={childRef} />
      </div>
    </ArticlesWapper>
  );
});
const ArticlesWapper = styled.div`
  width: 1400px;
  .header {
    width: 100%;
    height: 160px;
    /* background-color: skyblue; */
    background-color: rgba(255, 255, 255, 0.5);
    overflow: hidden;
    border-radius: 10px;
    .content {
      width: 700px;
      margin: auto;
      line-height: 160px;
      display: flex;
      justify-content: space-around;

      .search {
        width: 400px;
      }
      .search_btn {
        margin-left: -20px;
      }
    }
  }

  .main {
    .act_item {
    }
  }
`;

export default Articles;
