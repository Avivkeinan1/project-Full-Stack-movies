const HandleHomeCopy = ({ title, description }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-4">
          <h3 style={{ color: "white" }}>{title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <p style={{ color: "white" }}>{description}</p>
        </div>
      </div>
    </>
  );
};
export default HandleHomeCopy;
