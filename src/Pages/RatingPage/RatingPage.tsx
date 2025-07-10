import React, { FC } from "react";
import { Flame, Briefcase, TrendingUp, HeartHandshake } from "lucide-react"; // Іконки для категорій
import Image from "next/image"; // Якщо ви використовуєте Next.js для оптимізації зображень

// --- Допоміжні дані для прикладу (замініть на реальні з API) ---
const mockRatingData = {
  topDonators: [
    { id: 1, name: "Андрій Ковальчук" },
    { id: 2, name: "Олена Бондаренко" },
    { id: 3, name: "Дмитро Шевченко" },
  ],
  topStartuppers: [
    {
      id: 1,
      name: "Марія Лисенко",
    }, // Припускаємо, що у вас є SVG іконки
    {
      id: 2,
      name: "Ігор Ткаченко",
    },
    {
      id: 3,
      name: "Софія Романюк",
    },
  ],
  topEconomists: [
    {
      id: 1,
      name: "Владислав Остапенко",
    },
    {
      id: 2,
      name: "Катерина Дяченко",
    },
    {
      id: 3,
      name: "Назар Мельник",
    },
  ],
  topBenefactors: [
    {
      id: 1,
      name: "Анастасія Гордієнко",
    },
    {
      id: 2,
      name: "Артем Савчук",
    },
    {
      id: 3,
      name: "Юлія Панасенко",
    },
  ],
};

// --- Компонент для однієї категорії рейтингу ---
interface RatingCategoryProps {
  title: string;
  icon: React.ReactNode; // Може бути іконка Lucide React
  items: Array<any>; // Типізуйте це краще, якщо знаєте структуру даних
  renderItem: (item: any, index: number) => React.ReactNode; // Функція для рендерингу елементу списку
}

const RatingCategory: FC<RatingCategoryProps> = ({
  title,
  icon,
  items,
  renderItem,
}) => {
  return (
    <div className="bg-[#212325] rounded-4xl p-6 flex-1 min-w-[280px]">
      {" "}
      {/* flex-1 min-w для адаптивності */}
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
        {icon} {title}
      </h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id || index} className="mb-3 last:mb-0">
            {renderItem(item, index)}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Головний компонент сторінки Рейтинг ---
const RatingPage: FC<{}> = () => {
  // Тут ви могли б використовувати хуки для завантаження реальних даних, наприклад:
  // const { data: apiData, isLoading } = useGetRatingsQuery("");
  // Якщо дані завантажуються, можна повернути лоадер:
  // if (isLoading) { return <div className="min-h-screen bg-[#181a1c] text-white flex items-center justify-center">Завантаження рейтингу...</div>; }

  // Для демонстрації використовуємо мокові дані:
  const data = mockRatingData;

  // Функції рендерингу для різних типів елементів
  const renderDonatorItem = (
    item: (typeof mockRatingData.topDonators)[0],
    index: number
  ) => (
    <div className="flex items-center text-lg text-gray-300">
      <span className="w-6">{index + 1}.</span>
      <span className="ml-2">{item.name}</span>
    </div>
  );

  const renderCryptoItem = (
    item: (typeof mockRatingData.topStartuppers)[0],
    index: number
  ) => (
    <div className="flex items-center justify-between text-lg text-gray-300">
      <div className="flex items-center">
        <span className="w-6">{index + 1}.</span>
        {item.icon && (
          // Використовуйте <img> якщо не Next.js, або <Image> для Next.js
          <img
            src={item.icon}
            alt={item.symbol}
            className="w-6 h-6 mr-2 ml-2"
          />
          // Або <Image src={item.icon} alt={item.symbol} width={24} height={24} className="mr-2 ml-2" />
        )}
        <span className="font-medium text-white">{item.name}</span>
        <span className="text-sm text-gray-400 ml-2">{item.symbol}</span>
      </div>
      <span className="font-medium text-white">{item.value}</span>
    </div>
  );

  const renderEconomistItem = (
    item: (typeof mockRatingData.topEconomists)[0],
    index: number
  ) => (
    <div className="flex items-center justify-between text-lg text-gray-300">
      <div className="flex items-center">
        <span className="w-6">{index + 1}.</span>
        {item.icon && (
          <img
            src={item.icon}
            alt={item.symbol}
            className="w-6 h-6 mr-2 ml-2"
          />
          // Або <Image src={item.icon} alt={item.symbol} width={24} height={24} className="mr-2 ml-2" />
        )}
        <span className="font-medium text-white">{item.name}</span>
        <span className="text-sm text-gray-400 ml-2">{item.symbol}</span>
      </div>
      <span
        className={`font-medium ${
          item.trend === "up" ? "text-green-400" : "text-red-400"
        }`}
      >
        {item.value}
      </span>
    </div>
  );

  const renderBenefactorItem = (
    item: (typeof mockRatingData.topBenefactors)[0],
    index: number
  ) => (
    <div className="flex items-center justify-between text-lg text-gray-300">
      <div className="flex items-center">
        <span className="w-6">{index + 1}.</span>
        {item.icon && (
          <img
            src={item.icon}
            alt={item.symbol}
            className="w-6 h-6 mr-2 ml-2"
          />
          // Або <Image src={item.icon} alt={item.symbol} width={24} height={24} className="mr-2 ml-2" />
        )}
        <span className="font-medium text-white">{item.name}</span>
        <span className="text-sm text-gray-400 ml-2">{item.symbol}</span>
      </div>
      <span className="font-medium text-white">{item.value}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <RatingCategory
        title="Топ донатери"
        icon={<Flame className="text-orange-400" size={28} />}
        items={data.topDonators}
        renderItem={renderDonatorItem}
      />
      <RatingCategory
        title="Топ стартапери"
        icon={<Briefcase className="text-blue-400" size={28} />}
        items={data.topStartuppers}
        renderItem={renderCryptoItem}
      />
      <RatingCategory
        title="Топ економісти"
        icon={<TrendingUp className="text-green-400" size={28} />}
        items={data.topEconomists}
        renderItem={renderEconomistItem}
      />
      <RatingCategory
        title="Топ благодійники"
        icon={<HeartHandshake className="text-red-400" size={28} />}
        items={data.topBenefactors}
        renderItem={renderBenefactorItem}
      />
    </div>
  );
};

export default RatingPage;
