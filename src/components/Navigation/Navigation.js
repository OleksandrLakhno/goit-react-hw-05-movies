import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import s from "./Navigation.module.css"

const Navigation = () => {

  return (<>
        <Toaster />
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to="list"
            className={({ isActive }) =>
              isActive ? s.active : s.link
            }
          >
           ListPage
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="movies"
            className={({ isActive }) =>
              isActive ? s.active : s.link
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navigation;