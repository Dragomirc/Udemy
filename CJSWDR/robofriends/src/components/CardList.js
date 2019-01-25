import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  const robotsList = robots.map((robotProps, index) => (
    <Card key={index} {...robotProps} />
  ));
  return <div>{robotsList}</div>;
};
export default CardList;
