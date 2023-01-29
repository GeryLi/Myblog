import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { getPictureRoomList } from "../../../services";
import { Image } from "antd";
// import PictureItem from "./pictureItem";

const PicturesRoom = memo(() => {
  const [picArr, setpicArr] = useState([]);
  useEffect(() => {
    getPictureRoomList().then((res) => {
      console.log(res.data);
      setpicArr(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PicturesRoomWapper className="warpper">
      {/* {picArr.map((item) => (
        <PictureItem imgUrl={item.imgUrl} key={item._id} />
      ))} */}
      <Image.PreviewGroup>
        {picArr.map((item) => (
          <div className="pic_content" key={item._id}>
            <Image
              src={`http://114.132.242.224:3000${item.imgUrl}`}
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </Image.PreviewGroup>
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
  .pic_content {
    width: 30%;
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
