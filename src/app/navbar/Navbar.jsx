import React from "react";
import { LuListTodo } from "react-icons/lu";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div>
        <LuListTodo size="50px" color="white" />
        <h1>Todo List App</h1>
      </div>
    </div>
  );
}

export default Navbar;
