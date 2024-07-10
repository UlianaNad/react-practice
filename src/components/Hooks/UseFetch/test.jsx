import React from "react";
import useFetch from "./index";

const UseFetchHookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(data, error, loading);
  
  return <div>Use fetch hook</div>;
};

export default UseFetchHookTest;
