import React, { memo } from "react";
import styled from "styled-components";
import HeaderSwiper from "./c-cpns/HeaderSwiper";
import PagesPagination from "./c-cpns//PagesPagination";
import RoomContent from "./c-cpns/RoomContent";

const Home = memo(() => {
  return (
    <HomeContentDiv className="warpper">
      <HeaderSwiper />
      <RoomContent />
      <PagesPagination />
    </HomeContentDiv>
  );
});
const HomeContentDiv = styled.div`
  width: 1400px;
  /* background-color:#364d79; */
`;

export default Home;
