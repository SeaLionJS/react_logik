import { PieChart } from "@mui/x-charts/PieChart";

const CircleStatistics = () => {
  const lessons = [
    {
      id: 1,
      title: "Тут буде відображатися тема першого уроку",
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Баланс" },
              { id: 1, value: 15, label: "Депозит" },
              { id: 2, value: 20, label: "Інвестовано" },
              { id: 3, value: 5, label: "Пожертвовано" },
            ],
          },
        ]}
        width={200}
        height={200}
      />
    </div>
  );
};

export default CircleStatistics;
