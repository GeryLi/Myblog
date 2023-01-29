import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Appheader from "./components/app-header";
import Appfooter from "./components/app-footer";
import { routes } from "./router";
const App = memo(() => {
  return (
    <div className="app">
      <div className="header" style={{ marginBottom: "20px" }}>
        <Appheader />
      </div>
      <div className="content">
        <Suspense fallback={<div>loading...</div>}>
          {useRoutes(routes)}
        </Suspense>
      </div>
      <div className="footer">
        <Appfooter />
      </div>
    </div>
  );
});

export default App;
