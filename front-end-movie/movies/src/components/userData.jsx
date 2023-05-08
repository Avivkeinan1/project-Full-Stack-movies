import HandleHomeCopy from "../common/pageHeader";
import { allUsers } from "../services/userServices";
import { useState, useEffect } from "react";
import UserCard from "./userCard";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await allUsers();
        setUsers(data.data);
      } catch {}
    };
    fetchUsers();
  }, []);

  return (
    <>
      <HandleHomeCopy
        title={"you can control all the users that connect to your site"}
      />
      <div className="container">
        <div className="grid">
          {!users?.length ? (
            <p>No Users Yet...</p>
          ) : (
            users.map((user) => {
              return <UserCard key={user._id} {...user} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default AllUsers;
