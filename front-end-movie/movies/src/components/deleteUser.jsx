import { useEffect } from "react";
import { redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DeleteUser } from "../services/userServices";

const DeleteUsers = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const deleteOneUser = async () => {
      try {
        await DeleteUser(id);
        navigate("/all-Users");
      } catch {}
    };
    deleteOneUser();
  }, []);
  return null;
};
export default DeleteUsers;
