import React from "react";
import { useState } from "react";
import { User } from "../../modal/User";
import { getUsers } from "../requests/users";

export const useRequest = <T extends unknown>(request: () => Promise<T>) => {
  const [data, setData] = useState<T>();
  const [loading, setLodaing] = useState(false);
  const [error, setError] = useState();

  const execute = () => {
    setLodaing(true);
    request()
      .then((res) => {
        setData(res);
      })
      .catch((err) => setError(err))
      .finally(() => setLodaing(false));
  };

  return { data, loading, error, execute };
};
