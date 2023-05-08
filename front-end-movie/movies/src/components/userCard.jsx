import { Link } from "react-router-dom";

const UserCard = ({ name, email, createdAt, _id, img }) => {
  const localTimeCreatedAt = new Date(createdAt).toLocaleString();
  return (
    <div
      className="card"
      style={{ width: "15rem", backgroundColor: "darkgray" }}
    >
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body " style={{ backgroundColor: "darkgray" }}>
        <h5 className="card-title" style={{ color: "darkred" }}>
          {name}
        </h5>
        <ul className="list-group list-group-flush">
          <li
            style={{ backgroundColor: "darkgray", color: "white" }}
            className="list-group-item"
          >
            <span style={{ color: "darkred" }}> Email:</span> {email}
          </li>
          <li
            style={{ backgroundColor: "darkgray", color: "white" }}
            className="list-group-item"
          >
            <span style={{ color: "darkred" }}> Created-At:</span>{" "}
            {localTimeCreatedAt}
          </li>
          <li
            style={{ backgroundColor: "darkgray", color: "white" }}
            className="list-group-item"
          >
            <span style={{ color: "darkred" }}> User-Id:</span> {_id}
          </li>
        </ul>
      </div>
      <div className="card-body">
        <Link
          to={`/user/delete/${_id}`}
          style={{ color: "black", textDecoration: "none" }}
          className="card-link"
        >
          Delete
        </Link>
      </div>
    </div>
  );
};
export default UserCard;
