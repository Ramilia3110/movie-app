import React, { FC } from "react";
import Output from "./Output/Output";
import SearchForm from "./SearchForm/SearchForm";

const Home: FC = () => {
  return (
    <div>
      <SearchForm />
      <Output />
    </div>
  );
};

export default Home;
