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
    <div>
      <div>
        <img src={avatar_url} alt="avatar" />
      </div>
      <div>
        <a href={html_url}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
            month: "short",
          })}   ${createDate.getFullYear()}`}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
