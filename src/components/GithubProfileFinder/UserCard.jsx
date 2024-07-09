import React from "react";

const UserCard = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    location,
    name,
    html_url,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);
  return (
    <div className="w-80 mx-auto mt-3 rounded-lg bg-gray-200 p-2">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img className=" h-full w-full object-cover object-center group-hover:opacity-75" src={avatar_url} alt="avatar" />
      </div>
      <div>
        <a className="mt-1 text-lg font-medium text-gray-900" href={html_url}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
            month: "short",
          })}   ${createDate.getFullYear()}`}
        </p>
        <ul>
          <li>
            {" "}
            <span>Followers</span>{" "}
            <span>{followers}</span>
          </li>
          <li>
            <span>Location</span>{" "}
            <span> {location}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
