import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Appheader from "./components/app-header";
import Appfooter from "./components/app-footer";
import { routes } from "./router";
import Loding from "./components/Loding";
import LfAplayer from "./components/LfAplayer";
const App = memo(() => {
  return (
    <div className="app">
      <div className="header" style={{ marginBottom: "20px" }}>
        <Appheader />
      </div>
      <div className="content">
        <Suspense fallback={<Loding />}>{useRoutes(routes)}</Suspense>
      </div>
      <div className="footer">
        <Appfooter />
        <LfAplayer />
      </div>
    </div>
  );
});

export default App;
