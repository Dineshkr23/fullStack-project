import React from "react";
import "../assets/rightPane.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { UsersBarGraph } from "./UsersBarGraph";


export const NewUsers = () => {
  return (
    <div className="newUsersDiv">
      <div className="chartHeader">
        <p>New Users</p>
        <MoreHorizIcon />
      </div>
      <div className="textPercent">
        <h1>94.2%</h1>
        <p>+6.9%</p>
      </div>
      <UsersBarGraph/>
    </div>
  );
};
