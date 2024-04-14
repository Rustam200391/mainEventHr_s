import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/login">Войти</Link>
            </li>
            <li>
              <Link to="/register">Зарегистрироваться</Link>
            </li>
            <li>
              <Link to="/dashboard">Панель управления</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
