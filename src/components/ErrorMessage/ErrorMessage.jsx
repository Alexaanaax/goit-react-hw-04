import { useEffect } from "react";
import toast from "react-hot-toast";

const Error = () => {
  useEffect(() => {
    toast.error("This is a mistake.");
  }, []);

  return null;
};

export default Error;