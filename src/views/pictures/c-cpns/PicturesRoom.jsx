import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { Image, Divider } from "antd";
import { getImageData } from "../../../services";
import InfiniteScroll from "react-infinite-scroll-component";

const PicturesRoom = memo(() => {
  const [picArr, setpicArr] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [skyitem, setskyitem] = useState(0);
  const [limti, setlimti] = useState(12);

  const loadMoreData = () => {
    setlimti(3);
    setskyitem(picArr.length);
  };
  useEffect(() => {
    getImageData(skyitem, limti).then((res) => {
      // @ts-ignore
      setpicArr([...picArr, ...res.data]);
      if (res.data.length === 0) {
        setisLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skyitem, limti]);
  return (
    <PicturesRoomWapper className="warpper">
      {/* {picArr.map((item) => (
        <PictureItem imgUrl={item.imgUrl} key={item._id} />
      ))} */}

      <InfiniteScroll
        dataLength={picArr.length}
        next={loadMoreData}
        hasMore={isLoading}
        endMessage={<Divider plain>没有更多数据了...🤐</Divider>}
        scrollableTarget="warpper"
        className="inside"
        loader={<Divider plain>loding...</Divider>}
      >
        <Image.PreviewGroup>
          {picArr?.map((item) => (
            <div
              className="pic_content"
              key={
                // @ts-ignore
                item._id
              }
            >
              <Image
                // @ts-ignore
                src={`http://175.24.179.193:3000${item.imgUrl}`}
                width={"100%"}
                height={"100%"}
              />
            </div>
          ))}
        </Image.PreviewGroup>
      </InfiniteScroll>
    </PicturesRoomWapper>
  );
});

const PicturesRoomWapper = styled.div`
  width: 1600px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  & > div {
    width: 1600px;
    & > div {
      width: 1600px;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
  .pic_content {
    width: 480px;
    height: 285px;
    margin: 20px 0;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default PicturesRoom;
