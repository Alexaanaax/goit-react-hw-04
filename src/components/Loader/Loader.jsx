import { Circles } from "react-loader-spinner";

const Loader = () => (
  <div className="loader-container">
    <Circles type="TailSpin" color="#ff0000" height={100} width={100} />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;