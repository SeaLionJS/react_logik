import React, { FC } from "react";
import { Link } from "react-router";
import Switch from "@mui/material/Switch";

type TProps = {};

const sidebarItems = [
  {
    title: "Панель",
    link: "/panel",
    icon: "/panel.svg", // Переконайтеся, що шлях до вашої іконки правильний
  },
  {
    title: "Угоди",
    link: "/deals",
    icon: "/deals.svg", // Переконайтеся, що шлях до вашої іконки правильний
  },
  {
    title: "Депозит",
    link: "/deposit",
    icon: "/deposit.svg", // Переконайтеся, що шлях до вашої іконки правильний
  },
  {
    title: "Рейтинг",
    link: "/rating",
    icon: "/rating.svg", // Переконайтеся, що шлях до вашої іконки правильний
  },
  { title: "Калькулятор", link: "/calculator", icon: "/calculator.svg" }, // Переконайтеся, що шлях до вашої іконки правильний
  { title: "Магазин", link: "/store", icon: "/store.svg" }, // Переконайтеся, що шлях до вашої іконки правильний
  { title: "Армія", link: "/army", icon: "/army.svg" }, // Переконайтеся, що шлях до вашої іконки правильний
];

const Sidebar: FC<TProps> = ({}) => {
  const currentPath = "/panel"; // Це має бути динамічним у реальному додатку (наприклад, за допомогою useLocation)

  return (
    <aside className="flex flex-col justify-between bg-[#151617] text-white h-screen w-[260px] py-4">
      <nav>
        <ul className="space-y-2 px-4">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={`
                  flex items-center gap-4 text-[16px] rounded-full h-[48px] px-4
                  ${
                    item.link === currentPath
                      ? "bg-white border-4 border-[#7B68EE] text-[#151617]" // Білий фон, фіолетова рамка, темний текст для активного
                      : "text-[#B0B0B0] hover:bg-[#202020]" // Колір тексту для неактивних та hover
                  }
                `}
              >
                {/* Чорний кружечок навколо іконки */}
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${
                      item.link === currentPath
                        ? "bg-[#151617]"
                        : "bg-transparent"
                    }
                  `}
                >
                  <img src={item.icon} alt={item.title} className="w-6 h-6" />
                </div>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link className="flex items-center gap-2 px-4" to="/login">
        <img src="/logout.svg" alt="" />
        <span className="text-[#B0B0B0] hover:text-white text-[16px]">
          Вийти
        </span>
      </Link>
      <div>
        <Switch defaultChecked />
      </div>
    </aside>
  );
};

export default Sidebar;
