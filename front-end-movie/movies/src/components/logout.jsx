import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const LogOut = ({ redirect }) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logOut();
    if (navigate("/log-out")) {
      navigate("/");
    }
  }, []);
  return;
};
export default LogOut;
