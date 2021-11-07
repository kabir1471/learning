import React, { ReactNode } from "react";

interface ListProps<T> {
  data: T[];
  render: (item: T) => ReactNode;
}

const List = <T extends unknown>({ data, render }: ListProps<T>) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index.toString()}
          style={{
            background: "yellow",
            height: 200,
            width: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          {render(item)}
        </div>
      ))}
    </>
  );
};

export default List;
