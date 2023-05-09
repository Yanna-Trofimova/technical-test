import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './Layout.module.css'

export const Layout = () => {
    return (
      <div>
            <header
                className={css.header}
            >
                <nav
                    className={css.nav}
                >
                    <NavLink
                        className={css.link}
                        to="/" >Home</NavLink>
                    <NavLink
                        className={css.link}
                        to="/tweets">Tweets</NavLink>
            </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </div>
    );
  };