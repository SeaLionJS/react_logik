import { PieChart } from "@mui/x-charts/PieChart";
import { TrendingUp, TrendingDown } from "lucide-react";

// Компонент статистики
const CircleStatistics = () => {
  const pieData = [
    { id: 0, value: 23, label: "Баланс", color: "#8b5cf6" },
    { id: 1, value: 30, label: "Депозит", color: "#a78bfa" },
    { id: 2, value: 10, label: "Інвестовано", color: "#c4b5fd" },
    { id: 3, value: 40, label: "Пожертвовано", color: "#ddd6fe" },
  ];

  return (
    <div className="bg-[#212325] rounded-4xl p-8">
      <h3 className="text-xl font-semibold mb-4">Розподіл коштів</h3>
      <div className="flex items-center justify-between">
        <PieChart
          series={[
            {
              data: pieData,
              innerRadius: 30,
              outerRadius: 80,
              paddingAngle: 2,
              cornerRadius: 5,
            },
          ]}
          width={200}
          height={200}
          slotProps={{
            legend: { hidden: true },
          }}
        />
        <div className="flex flex-col gap-3">
          {pieData.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      type: "Депозит",
      amount: "+50",
      time: "09.07.2025",
      icon: TrendingUp,
      color: "text-[#77ED91]",
    },
    {
      id: 2,
      type: "Інвестиція",
      amount: "-100",
      time: "13.06.2025",
      icon: TrendingDown,
      color: "text-[#ED7782]",
    },
    {
      id: 3,
      type: "Пожертвування",
      amount: "-25",
      time: "10.06.2025",
      icon: TrendingDown,
      color: "text-[#ED7782]",
    },
  ];

  return (
    <div className="bg-[#212325] rounded-4xl shadow-lg p-8 h-full">
      <h3 className="text-xl font-semibold mb-4">Останні транзакції</h3>
      <div>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-2 rounded-l"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <transaction.icon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">{transaction.type}</p>
                <p className="text-sm text-gray-500">{transaction.time}</p>
              </div>
            </div>
            <span className={`font-semibold text-lg ${transaction.color}`}>
              {transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Головний компонент
const MainPage = () => {
  const balance = 23;
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Завантаження...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        {/* Заголовок з балансом */}
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Баланс</h1>
          <div className="flex items-center gap-4">
            <img src="/lgk.svg" alt="" width={40} />
            <p className="text-5xl font-semibold">{balance}</p>
          </div>
        </div>

        {/* Основний контент */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Кругова статистика */}
          <div className="lg:col-span-2">
            <CircleStatistics />
          </div>

          {/* Останні транзакції */}
          <div>
            <RecentTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;