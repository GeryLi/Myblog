import React, { memo, useEffect } from "react";
import styled from "styled-components";
import HeaderSwiper from "./c-cpns/HeaderSwiper";
import PagesPagination from "./c-cpns//PagesPagination";
import RoomContent from "./c-cpns/RoomContent";
import GotoTop from "../../components/GotoTop";
import { useDispatch } from "react-redux";
import { fetchMainData } from "../../store/modules/home";

const Home = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMainData()); // 发送请求获取
  }, [dispatch]);
  return (
    <HomeContentDiv className="warpper">
      <HeaderSwiper />
      <RoomContent />
      <PagesPagination />
      <GotoTop />
    </HomeContentDiv>
  );
});
const HomeContentDiv = styled.div`
  width: 1400px;
  /* background-color:#364d79; */
`;

export default Home;
