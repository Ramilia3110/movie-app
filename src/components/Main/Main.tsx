import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Detail from "../../pages/Detail/Detail";

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </main>
  );
};

export default Main;
