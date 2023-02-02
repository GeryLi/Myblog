import React, { memo } from "react";
import styled from "styled-components";

const Notfound = memo(() => {
  return (
    <NotfoundWapper className="warpper">
      <div className="glitch_word_box">
        <div className="line"></div>
        <h1 id="word" className="glitch_word0">
          404 - page not found
        </h1>
      </div>
    </NotfoundWapper>
  );
});
const NotfoundWapper = styled.div`
  text-align: center;
  background-color: #fff;
  width: 1400px;
  height: 600px;
  position: relative;

  h1 {
    color: #2d4c77;
    font-weight: bolder;
    font-size: 4em;
    margin: 0;
    outline: none;
    padding: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Notfound;
