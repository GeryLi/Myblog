import React, { memo } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const Loding = memo(() => {
  return (
    <div className="warpper" style={{ width: "1400px" }}>
      <div className="content" style={{ marginLeft: "650px" }}>
        <CircleLoader color="#36d7b7" />
      </div>
    </div>
  );
});

export default Loding;
