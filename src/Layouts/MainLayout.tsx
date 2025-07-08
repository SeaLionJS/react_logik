import { FC, ReactNode } from "react";
import Sidebar from "@/Widgets/Sidebar/Sidebar";
import { Outlet } from "react-router";

type TProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
  currentPath?: string;
};

interface PageDetails {
  title: string;
  description: string;
}

type PageConfig = {
  [key: string]: PageDetails;
};

// Конфигурация страниц
const pageConfig: PageConfig = {
  "/panel": {
    title: "Панель",
    description: "Головна панель керування вашим портфелем",
  },
  "/deals": {
    title: "Угоди",
    description: "Тут зустрічаються найкращі",
  },
  "/deposit": {
    title: "Депозит",
    description: "Управління вашими депозитами та рахунками",
  },
  "/rating": {
    title: "Рейтинг",
    description: "Рейтинг інвесторів та їх показники",
  },
  "/calculator": {
    title: "Калькулятор",
    description: "Розрахунок прибутковості та ризиків",
  },
  "/store": {
    title: "Магазин",
    description: "Придбайте додаткові послуги та інструменти",
  },
  "/army": {
    title: "Армія",
    description: "Підтримка української армії",
  },
};

const MainLayout: FC<TProps> = ({
  title: customTitle,
  description: customDescription,
  currentPath = "/panel",
}) => {

  const pageInfo = pageConfig[currentPath] || pageConfig["/panel"];

  const pageTitle = customTitle || pageInfo.title;
  const pageDescription = customDescription || pageInfo.description;

  return (
    <div className="flex h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#151617] px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">{pageTitle}</h1>
            <p className="text-[#B0B0B0] text-lg">{pageDescription}</p>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-8 py-6"><Outlet /></div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
