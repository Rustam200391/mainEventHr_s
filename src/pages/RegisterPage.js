import React from "react";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  const handleRegister = (userData) => {
    // Обработка регистрации
  };

  return (
    <>
      <div>
        <h2>Регистрация</h2>
        <RegisterForm onRegister={handleRegister} />
      </div>
    </>
  );
}

export default RegisterPage;
