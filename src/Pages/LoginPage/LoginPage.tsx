import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Очищуємо попередні помилки

    // Тут буде логіка для перевірки облікових даних
    if (email === "user@example.com" && password === "password") {
      alert("Вхід успішний!");
      // Тут можна перенаправити користувача або зберегти токен
    } else {
      setError("Невірний email або пароль.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1C1E] text-white p-4">
      <div className="bg-[#212325] rounded-3xl p-8 shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Logika Invest</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Логін
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
