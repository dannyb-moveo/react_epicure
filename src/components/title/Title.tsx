import React from "react";
import "./title.scss";

type TitleProps = {
    title: string;
    align: "center" | "left";
};

const Title = ({ title, align }: TitleProps) => {
    return <h2 className={`title ${align}`}>{title}</h2>;
};

export default Title;
