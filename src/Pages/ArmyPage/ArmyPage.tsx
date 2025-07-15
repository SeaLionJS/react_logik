import { useGetDisciplinesQuery } from "@/Store/api/academics";
import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; // Додаємо кнопку для прикладу

// Імпортуємо компоненти для таблиці
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper"; // Для фону таблиці
import Loader from "@/Widgets/Loader/Loader";

const ArmyPage: FC<{}> = ({}) => {
  const { data, isLoading } = useGetDisciplinesQuery("");
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Перевірка, щоб уникнути ділення на нуль і забезпечити коректний відсоток
  const totalCollected = 13427; // Використовуємо ваші значення зі скріншота
  const totalGoal = 20000; // Використовуємо ваші значення зі скріншота
  const finalProgress = Math.round((totalCollected / totalGoal) * 100);

  // Анімація прогрес-бара
  useEffect(() => {
    if (!isLoading) {
      const duration = 2000; // 5 секунд
      const steps = 60; // 60 кроків для плавної анімації
      const stepValue = finalProgress / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const currentProgress = Math.min(
          stepValue * currentStep,
          finalProgress
        );
        setAnimatedProgress(currentProgress);

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isLoading, finalProgress]);

  if (isLoading) {
    return Loader;
  }

  console.log(data);

  // Дані для таблиці (можна замінити на реальні дані з API)
  const recentContributors = [
    { name: "Пархоменко Назар", amount: "12 LGK", date: "19.07.2025" },
    { name: "Іващук Денис", amount: "23 LGK", date: "06.08.2025" },
    // Додайте більше даних, якщо потрібно
  ];

  return (
    <>
      <div>
        {/* Оновлений заголовок для відображення поточних значень */}
        <h1 className="flex text-3xl mb-4 gap-3">
          Зібрано: <img src="/lgk.svg" alt="" />
          {totalCollected} з {totalGoal}
        </h1>
        <h1 className="flex text-xl mb-4 gap-3">Мій внесок: 16 LGK</h1>
        <Box sx={{ width: "100%", position: "relative" }}>
          <LinearProgress
            variant="determinate"
            value={animatedProgress}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#4B3770",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#8b5cf6",
                borderRadius: 5,
                transition: "transform 0.1s ease-out", // Плавна анімація переходу
              },
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </Box>
        <button className="p-[10px] bg-[#77ED91] rounded-full flex items-center gap-1 mt-8 hover:bg-[#77ED91]/80 transition-colors duration-300 cursor-pointer text-[#0D0D0D]">
          <img src="/add.svg" alt="" />
          Зробити внесок
        </button>

        <div className="mt-8">
          <h1 className="text-2xl mb-4">Останні, хто долучився:</h1>{" "}
          {/* Змінив заголовок згідно зі скріншотом */}
          {/* Таблиця "Останні, хто долучився" */}
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: "transparent", // Робимо фон контейнера прозорим
              boxShadow: "none", // Прибираємо тінь
              borderRadius: "0", // Прибираємо заокруглення
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{
                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)", // Додаємо тонку лінію під заголовком
                    "& th": {
                      // Стилізуємо комірки заголовка
                      color: "white", // Колір тексту білий
                      fontWeight: "normal", // Звичайний шрифт
                      borderBottom: "none", // Прибираємо нижню межу
                      padding: "16px 0", // Зменшуємо відступи
                    },
                  }}
                >
                  <TableCell>Користувач</TableCell>
                  <TableCell>Сума</TableCell>
                  <TableCell>Дата</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentContributors.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 }, // Прибираємо нижню межу для останнього рядка
                      "& td": {
                        // Стилізуємо комірки тіла таблиці
                        color: "white", // <--- ДОДАНО: Колір тексту білий для всіх комірок тіла
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)", // Легка лінія розділення
                        padding: "20px 0", // Зменшуємо відступи
                      },
                    }}
                  >
                    <TableCell>
                      {" "}
                      {/* Залишаємо component="th" для першої комірки */}
                      {row.name}
                    </TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default ArmyPage;
