import React from "react";

export const currency = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1, $2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.target.value = value;
  return e;
};

export const nif = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.maxLength = 9;
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{8})(\d)/, "$1-$2");
  e.target.value = value;
  return e;
};
