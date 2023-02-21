import React, { memo } from "react";
import styled from "styled-components";

const Footer = memo(() => {
  return (
    <FooterWapper className="warpper">
      <div className="banquan">
        <span>GERY'S BLOG</span>
        <span> | </span>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          滇ICP备2023000744号
        </a>
      </div>
    </FooterWapper>
    // <div></div>
    //
  );
});
const FooterWapper = styled.div`
  height: 400px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding-top: 300px;
  .banquan {
    line-height: 100px;
    background-color: #fff;
  }
`;

export default Footer;
