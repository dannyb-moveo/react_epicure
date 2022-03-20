import React from "react";
import "./title.scss";

type TitleProps = {
  title: string;
  align: "center" | "left";
  className?: string;
};

const Title = ({ title, align, className }: TitleProps) => {
  return <h2 className={`title ${align} ${className}`}>{title}</h2>;
};

export default Title;
