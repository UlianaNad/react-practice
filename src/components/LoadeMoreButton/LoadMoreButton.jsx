import React, { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [count, setCount] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (recipes && recipes.length === 50) setButtonDisabled(true);
  }, [recipes]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      ).then((res) => res.json());

      if (response && response.recipes && response.recipes.length) {
        setRecipes((prevData) => [...prevData, ...response.recipes]);
        setLoading(false);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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
    <div className="bg-white mx-auto max-w-2xl px-4 py-6 sm:px-2 sm:py-10 lg:max-w-7xl lg:px-6">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-700 mb-4">
        Recipes
      </h2>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  ">
        {recipes && recipes.length
          ? recipes.map((recipe) => (
              <li
                key={recipe.id}
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group"
              >
                <h3 className="mt-4 text-sm text-gray-700">
                  {recipe.name}, {recipe.id}
                </h3>
                <img
                  src={recipe.image}
                  alt={recipe.tags}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </li>
            ))
          : null}
      </ul>
      <div>
        <button
          disabled={buttonDisabled}
          onClick={() => setCount(count + 1)}
          className={buttonDisabled ? "bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50 mt-10" : "bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white mt-10"}        >
          Load more recipes
        </button>
        {buttonDisabled && <div>You have reached the end of the list!</div>}
      </div>
    </div>
  );
};

export default LoadMoreButton;
