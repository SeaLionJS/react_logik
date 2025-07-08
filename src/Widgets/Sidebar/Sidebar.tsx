import React, { FC, useState } from "react";
import { NavLink } from "react-router";

type TProps = {};

const sidebarItems = [
  {
    title: "Панель",
    link: "/panel",
    icon: "/panel.svg",
  },
  {
    title: "Угоди",
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
    title: "Калькулятор",
    link: "/calculator",
    icon: "/calculator.svg",
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
  const currentPath = "/panel";
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <aside className="flex flex-col bg-[#151617] text-white h-screen w-[260px]">
      {/* Логотип */}
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold">
          Logika Invest
        </h1>
      </div>

      {/* Навігаційна частина */}
      <nav className="flex-1 py-6">
        <ul className="space-y-3 px-4">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                // className={`
                //   group flex items-center gap-4 text-[16px] rounded-full h-[48px] px-4
                //   transition-all duration-300 ease-in-out
                //   ${
                //     item.link === currentPath
                //       ? "bg-white border-4 border-[#7B68EE] text-[#151617] shadow-lg"
                //       : "text-[#B0B0B0] hover:bg-[#202020] hover:text-white hover:shadow-md"
                //   }
                // `}
                className={({ isActive }) =>
                  `group flex items-center gap-4 text-[16px] rounded-full h-[48px] px-4 transition-all duration-300 ease-in-out ${
                    isActive
                      ? "bg-white border-4 border-[#7B68EE] text-[#151617] shadow-lg"
                      : "text-[#B0B0B0] hover:bg-[#202020] hover:text-white hover:shadow-md"
                  }`
                }
              >
                {/* Іконка з анімацією */}
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${item.link === currentPath ? "bg-[#151617]" : ""}
                  `}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`
                      w-6 h-6 transition-all duration-300 ease-in-out
                      ${
                        item.link === currentPath
                          ? ""
                          : "group-hover:brightness-110"
                      }
                    `}
                  />
                </div>
                <span className="font-semibold transition-all duration-300 ease-in-out group-hover:translate-x-1">
                  {item.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Нижня частина з кнопкою "Вийти" та перемикачем теми */}
      <div className="px-4 py-6">
        <div className="flex flex-col gap-3">
          {/* Кнопка "Вийти" */}
          <NavLink
            className="group flex items-center gap-3 transition-all duration-300 ease-in-out"
            to="/login"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent group-hover:bg-red-500/20 transition-all duration-300 ease-in-out">
              <img
                src="/logout.svg"
                alt="Вийти"
                className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:brightness-110"
              />
            </div>
            <span className="text-[#B0B0B0] group-hover:text-red-400 text-[16px] transition-all duration-300 ease-in-out group-hover:translate-x-1">
              Вийти
            </span>
          </NavLink>

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
                    ? "translate-x-[calc(100%-4px)] shadow-[0_0_15px_rgba(255,215,0,0.6)]"
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
