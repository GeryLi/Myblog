import classNames from "classnames";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

const GotoTop = memo(() => {
  const [isShow, setisShow] = useState(false);
  useEffect(() => {
    const handleChangeShow = () => {
      // 滚动轴大于700 显示返回顶部
      if (window.scrollY >= 700) {
        setisShow(true);
      } else {
        setisShow(false);
      }
    };
    window.addEventListener("scroll", handleChangeShow);
    return () => {
      window.removeEventListener("scroll", handleChangeShow);
    };
  }, [isShow]);
  return (
    <GotoTopWapper
      className={classNames({ active: isShow })}
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <div className="out">Top</div>
    </GotoTopWapper>
  );
});

const GotoTopWapper = styled.div`
  opacity: 0;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 30%;
  right: 8%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-top: 15px solid transparent;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    border-bottom: 12px solid #2d4c77;
  }
  &.active {
    opacity: 1;
  }
  &:hover {
    color: #fff;
    font-weight: 700;
    background-color: #2d4c77;
    box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);
  }

  .out {
    margin-top: 20px;
    text-align: center;
  }
`;
export default GotoTop;
