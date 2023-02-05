import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import Bilibili from "../../../components/Icons/Bilibili";
import Email from "../../../components/Icons/Wangyiyun";
import GitHub from "../../../components/Icons/GitHub";
import Weibo from "../../../components/Icons/Weibo";
import UserPhoto from "../../../assets/images/userPhoto.webp";

const PersonProfire = memo(() => {
  const [randmColor, setrandmColor] = useState("#000");
  useEffect(() => {
    const time = setInterval(() => {
      const color =
        "#" + (1048575 + Math.floor(Math.random() * 15728640)).toString(16);
      setrandmColor(color);
    }, 2000);
    return () => {
      clearInterval(time);
    };
  }, [randmColor]);
  return (
    <PersonProfireWapper>
      <div className="user_picture">
        <img src={UserPhoto} alt="头像" />
      </div>
      <div className="user_name">Gery</div>
      <div className="signature" style={{ color: `${randmColor}` }}>
        满地都是六便士,他却抬头看月亮
      </div>
      <div className="contact">
        <div className="item">
          <GitHub width={20} height={20} />
        </div>
        <div className="item">
          <Bilibili width={20} height={20} />
        </div>
        <div className="item">
          <Weibo
            // @ts-ignore
            width={24}
            height={24}
          />
        </div>
        <div className="item">
          <Email />
        </div>
      </div>
    </PersonProfireWapper>
  );
});
const PersonProfireWapper = styled.div`
  .user_picture {
    padding: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .user_name {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .contact {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 20px;
    .item {
      cursor: pointer;
    }
  }
  .signature {
    font-size: 16px;
    margin: 15px;
    transition: all 0.5s;
    opacity: 0.7;
    text-shadow: 10px 0 10px 10px rgba(0, 0, 0, 1);
  }
`;
export default PersonProfire;
