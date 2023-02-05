import React, { memo, useEffect, useState } from "react";
import { getImageRondomData } from "../services";

const ImageRedom = memo(() => {
  const [state, setstate] = useState({});
  useEffect(() => {
    getImageRondomData().then((res) => {
      setstate(res.data[0]);
    });
  }, []);
  return (
    <img
      src={`http://localhost:3000${state?.imgUrl}`}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      alt={state?.imgName}
    />
  );
});

export default ImageRedom;
