import React from "react";
import useFetch from "./index";
import { Hourglass } from "react-loader-spinner";

const UseFetchHookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use fetch hook</h1>
      <ul>
        {loading && <Hourglass />}
        {error ? <h3>{error}</h3> : null}
        {data && data.products && data.products.length > 0
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
    </div>
  );
};

export default UseFetchHookTest;
