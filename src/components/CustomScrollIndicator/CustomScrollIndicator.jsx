import React, { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";

const CustomScrollIndicator = ({ url }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="fixed bg-green-200 w-full ">
        <h1 className="text-2xl pb-2 pt-2">Custom Scroll Indicator</h1>
        <div className="h-5 w-full bg-yellow-200">
          <div
            style={{ width: `${scrollPercentage}%` }}
            className={`bg-yellow-500 h-5 w-0`}
          ></div>
        </div>
      </div>
      <ul>
        {products && products.length && products.length > 0
          ? products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
    </div>
  );
};

export default CustomScrollIndicator;
