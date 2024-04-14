import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const handleLogin = (userData) => {
    // Обработка входа
  };

  return (
    <div>
      <h2>Вход</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
