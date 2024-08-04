import { useEffect } from "react";
import { logOut } from "../../services/userServices";
const LogOut = () => {
  useEffect(() => {
    logOut();
    window.location = "/";
  }, []);
};

export default LogOut;
