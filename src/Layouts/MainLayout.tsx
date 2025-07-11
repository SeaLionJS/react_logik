import React, { FC, useState, ReactNode, useEffect } from "react";
import Sidebar from "@/Widgets/Sidebar/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router";
import { PageMetaContext } from "./PageMetaContext";
import { useGetCurrentUserQuery } from "@/Store/api/accounts";

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

const pageConfig: PageConfig = {
  "/": {
    title: "Панель",
    description: "Твій фінансовий центр",
  },
  "/deals": {
    title: "Транзакції",
    description: "Обмінюйся з іншими користувачами",
  },
  "/deposit": {
    title: "Депозит",
    description: "Поповни баланс та рорахуй прибуток",
  },
  "/rating": {
    title: "Рейтинг",
    description: "Тут зустрічаються найкращі",
  },
  "/calculator": {
    title: "Калькулятор",
    description: "Дізнайся, скільки ти можеш заробити",
  },
  "/store": {
    title: "Магазин",
    description: "Стильний мерч",
  },
  "/army": {
    title: "Армія",
    description: "Підтримай захисників України",
  },
};

interface PageMeta {
  title?: string;
  description?: string;
  setMeta: (meta: { title?: string; description?: string }) => void;
}

export const usePageMeta = () => React.useContext(PageMetaContext);

const MainLayout: FC<TProps> = ({
  title: customTitle,
  description: customDescription,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { data, isLoading, isError } = useGetCurrentUserQuery();
  const pageInfo = pageConfig[currentPath] || pageConfig["/"];
  const [meta, setMeta] = useState<{ title?: string; description?: string }>({
    title: customTitle || pageInfo.title,
    description: customDescription || pageInfo.description,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!data || isError || data.role == "anonymous") {
      navigate("/login");
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return "";
  }

  let sidebarsVisible = true;
  if (!data || (data && isError) || data.role == "anonymous") {
    sidebarsVisible = false;
  }

  return (
    <PageMetaContext.Provider
      value={{
        title: meta.title,
        description: meta.description,
        setMeta,
      }}
    >
      <div className="flex h-screen bg-[#151718] text-white">
        {sidebarsVisible ? <Sidebar /> : ""}

        {/* Main Content */}
        <main className="flex flex-col w-full overflow-hidden">
          {/* Header */}
          {sidebarsVisible ? (
            <header className="bg-[#151617]/80 backdrop-blur-md py-6 px-10 shadow-2xl z-10">
              <h1 className="text-3xl mb-1">{pageInfo.title}</h1>
              <p className="text-[#A1A1A1] text-lg italic">
                {pageInfo.description}
              </p>
            </header>
          ) : (
            ""
          )}
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-10 py-6">
            <div>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </PageMetaContext.Provider>
  );
};

export default MainLayout;
