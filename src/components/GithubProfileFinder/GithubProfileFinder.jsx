import React, { useEffect, useState } from "react";
import Loader from "../LoadingComponent/Loader";
import UserCard from "./UserCard";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("UlianaNad");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = () => {
    fetchUserData()
  };
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setLoading(false);
        setUserData(data);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(error)
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if(loading){
    return <Loader/>
  }

  return (
    <div className="container w-full mt-24">
      <div className="w-80 mx-auto">
        <input
          type="text"
          name="search-by-username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Search user ..."
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mb-4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Search
        </button>
      </div>
      {userData !== null ? <UserCard user={userData}/> : <p>No user with such name</p>}
    </div>
  );
};

export default GithubProfileFinder;
