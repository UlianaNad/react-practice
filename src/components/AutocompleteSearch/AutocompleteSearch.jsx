import React, { useEffect, useState } from "react";
import Suggesstions from "./Suggesstions";
import Loader from "../LoadingComponent/Loader";

const AutocompleteSearch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
        setShowDropdown(false)
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleClick (e){
    setShowDropdown(false)
setSearchParam(e.target.innerText)
setFilteredUsers([])
  }
  return (
    <div>
        {
            loading && <Loader/>
        }
      <input
        type="text"
        name="search-users"
        value={searchParam}
        onChange={handleChange}
        placeholder="Search user ..."
        className="block w-80 mx-auto mt-4 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mb-4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      {
        showDropdown && <Suggesstions data={filteredUsers} handleClick={handleClick}/>
      }
    </div>
  );
};

export default AutocompleteSearch;
