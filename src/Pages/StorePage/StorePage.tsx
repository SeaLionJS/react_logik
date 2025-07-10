import { useGetDisciplinesQuery } from "@/Store/api/academics";
import {
  useGetCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
} from "@/Store/api/accounts";
import React, { FC, useState } from "react";

const StorePage: FC<{}> = ({}) => {
  const { data, isLoading, isError: isUserError } = useGetCurrentUserQuery();

  const { data: disciplineData, isLoading: isDesciplineLoading } =
    useGetDisciplinesQuery();

  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (isLoading || isDesciplineLoading) {
    return "...loading";
  }

  const onLogin = async () => {
    try {
      const d = await login({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      const d = await logout();
      console.log(d);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(data, disciplineData);

  return (
    <>
      <div style={{ background: "yellow", padding: 10, width: "fit-content" }}>
        {data && !isUserError ? (
          <button onClick={onLogout}>Вийти</button>
        ) : (
          <div>
            <label htmlFor="username">Ім'я</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              value={username}
            />
            <div>
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={onLogin}>Увійти</button>
          </div>
        )}
      </div>

      <div>Контент</div>
    </>
  );
};

export default StorePage;
