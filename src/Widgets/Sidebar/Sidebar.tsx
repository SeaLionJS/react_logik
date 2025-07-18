import { useLogoutMutation } from "@/Store/api/accounts";
import { Button } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { FC, useState } from "react";
import { NavLink, useNavigate } from "react-router";

type TProps = {};

const sidebarItems = [
  {
    title: "Панель",
    link: "/",
    icon: "/panel.svg",
  },
  {
    title: "Транзакції",
    link: "/deals",
    icon: "/deals.svg",
  },
  {
    title: "Депозит",
    link: "/deposit",
    icon: "/deposit.svg",
  },
  {
    title: "Рейтинг",
    link: "/rating",
    icon: "/rating.svg",
  },
  {
    title: "Магазин",
    link: "/store",
    icon: "/store.svg",
  },
  {
    title: "Армія",
    link: "/army",
    icon: "/army.svg",
  },
];

const Sidebar: FC<TProps> = ({}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const onLogout = () => {
    logout()
      .unwrap()
      .then((d) => {
        enqueueSnackbar("Вихід виконано", { variant: "success" });
      });
  };

  return (
    <aside className="flex flex-col bg-[#151617] text-white h-screen w-1/5">
      {/* Логотип */}

      {/* Навігаційна частина */}
      <nav className="flex-1 py-6">
        <ul className="space-y-3 px-4">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `group flex items-center gap-4 text-[16px] rounded-full h-[48px] px-4 border-4 transition-colors duration-200 ease-in-out ${
                    isActive
                      ? "bg-white border-[#7B68EE] text-[#151617] shadow-lg"
                      : "border-transparent text-[#B0B0B0] hover:bg-[#202020] hover:text-white hover:shadow-md"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Іконка з анімацією */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out ${
                        isActive ? "bg-black shadow-lg" : "bg-transparent"
                      }`}
                    >
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <span className="font-semibold transition-colors duration-200 ease-in-out">
                      {item.title}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Нижня частина з кнопкою "Вийти" та перемикачем теми */}
      <div className="px-4 py-6">
        <div className="flex flex-col gap-3">
          {/* Кнопка "Вийти" */}
          <button
            className="group flex items-center gap-3 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={onLogout}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent transition-all duration-300 ease-in-out">
              <img
                src="/logout.svg"
                alt="Вийти"
                className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:brightness-125"
              />
            </div>
            <span className="text-[#B0B0B0] text-[16px] group-hover:text-[#D0D0D0]">
              Вийти
            </span>
          </button>

          {/* Перемикач теми */}
          <div
            className={`
              relative w-[72px] h-9 rounded-full flex items-center justify-between px-1 cursor-pointer
              bg-[#2C2D2F] border border-[#4C4C4E] hover:border-[#7B68EE] 
              transition-all duration-300 ease-in-out overflow-hidden
              hover:shadow-lg
            `}
            onClick={toggleTheme}
          >
            {/* Іконки Сонця та Місяця */}
            <div className="flex items-center justify-center w-7 h-7 z-10">
              <img
                src="/sun.svg"
                alt="Сонце"
                className={`
                  w-5 h-5 transition-all duration-300 ease-in-out
                  ${!isDarkMode ? "brightness-125" : "brightness-90 opacity-70"}
                `}
              />
            </div>
            <div className="flex items-center justify-center w-7 h-7 z-10">
              <img
                src="/moon.svg"
                alt="Місяць"
                className={`
                  w-5 h-5 transition-all duration-300 ease-in-out
                  ${isDarkMode ? "brightness-125" : "brightness-90 opacity-70"}
                `}
              />
            </div>

            {/* Жовтий повзунок */}
            <div
              className={`
                absolute w-7 h-7 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]
                transition-all duration-500 ease-in-out
                ${
                  isDarkMode
                    ? "translate-x-[calc(100%+5px)] shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                    : "translate-x-0 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                }
                left-1 border-2 border-[#FFD700]/30
              `}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
