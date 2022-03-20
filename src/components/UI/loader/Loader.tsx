import { HashLoader } from "react-spinners";
import "./loader.scss";

type loaderProps = {
  loading: boolean;
  color?: string;
  marginTop?: string;
};

const Loader = ({ loading, color, marginTop }: loaderProps) => {
  return (
    <div className={`loader margin-top${marginTop ? marginTop : ""}`}>
      <HashLoader color={color || "#e8c47a"} loading={loading} />
    </div>
  );
};

export default Loader;
