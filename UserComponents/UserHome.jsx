import React from "react";
import "./UserBlock.css";
import UserLeftBlock from "./UserLeftBlock";
import UserRightBlock from "./UserRightBlock";

const UserHome = () => {
  return (
    <section id="userBlock">
      <article>
        <UserLeftBlock />
        <UserRightBlock />
      </article>
    </section>
  );
};

export default UserHome;
