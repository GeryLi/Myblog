// @ts-nocheck
import React, { memo } from "react";
import styled from "styled-components";
import { Divider } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getArticlesData } from "../../../services";
import ArtItem from "./ArtItem";

const ArtContent = memo(() => {
  const [loading, setLoading] = useState(true);
  const [skyitem, setSkyitem] = useState(0);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    setSkyitem(data.length);
  };
  useEffect(() => {
    getArticlesData(skyitem, 10).then((res) => {
      // @ts-ignore
      setData([...data, ...res.data]);
      if (res.data.length === 0) {
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skyitem]);

  return (
    <ArtContentWapper>
      <div className="contbox" id="scrollableDiv">
        <InfiniteScroll
          InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={loading}
          endMessage={<Divider plain>没有更多数据了...🤐</Divider>}
          scrollableTarget="scrollableDiv"
          className="inside"
          loader={<Divider plain>loding...</Divider>}
        >
          {data.map((item) => (
            <ArtItem key={item.createdAt} itemData={item} />
          ))}
        </InfiniteScroll>
      </div>
    </ArtContentWapper>
  );
});
const ArtContentWapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 650px;
  border-radius: 10px;
  .contbox {
    width: 100%;
    height: 650px;
    padding: 10px;
    border-radius: 10px;
    overflow: auto;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 10px;
      height: 90%;
      background: #efefef;
    }
    ::-webkit-scrollbar-thumb {
      background-color: hsl(230deg 69% 61%);
      border-radius: 15px;
    }
    .inside {
      overflow: scroll;
    }
  }
  .actitem {
    width: 100%;
    height: 100px;
    background-color: skyblue;
    margin: 5px 0;
  }
`;
export default ArtContent;
