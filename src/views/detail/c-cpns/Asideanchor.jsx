import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { Anchor } from "antd";

const Asideanchor = memo((props) => {
  const [arr, setarr] = useState([]);
  useEffect(() => {
    let newarr = props.anchorarr.map((item) => ({
      key: item.text,
      href: `#${item.text}`,
      title: item.text,
    }));

    setarr(newarr);
  }, [props.anchorarr]);

  return (
    <AsideanchorWapper>
      {arr.length ? <Anchor className="achor" items={arr} /> : ""}
    </AsideanchorWapper>
  );
});
const AsideanchorWapper = styled.div`
  .achor {
    margin-top: 20px;
    padding: 20px;
    width: 250px;
    border-radius: 10px;
    background-color: #fff;
  }
`;
export default Asideanchor;
