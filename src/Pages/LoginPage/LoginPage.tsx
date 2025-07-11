import { useLoginMutation } from "@/Store/api/accounts";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(""); // Очищуємо попередні помилки
    login({ username, password })
      .unwrap()
      .then((d) => {
        enqueueSnackbar("Вхід успішно виконано", { variant: "success" });
        setUsername("");
        setPassword("");
        navigate("/");
      })
      .catch((e) => {
        enqueueSnackbar("Помилка входу", { variant: "error" });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-[#212325] rounded-3xl p-8 shadow-xl w-full sm:max-w-md">
        <h2 className="text-3xl font-bold text-center">Вхід</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Логін
            </label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#2D2F31] border border-[#3A3C3E] focus:outline-none focus:ring-2 focus:ring-[#7B68EE]"
              placeholder="Введіть ваш логін"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#2D2F31] border border-[#3A3C3E] focus:outline-none focus:ring-2 focus:ring-[#7B68EE]"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="cursor-pointer w-full bg-[#7B68EE] hover:bg-[#7B68EE]/80 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out"
          >
            Увійти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
