const Input = ({ error, name, label, ...rest }) => {
  return (
    <div className="form-group my-1 text-light">
      <label>
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>
      <input
        {...rest}
        type={name}
        id={name}
        className={["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      <span className=" text-danger">{error}</span>
    </div>
  );
};
export default Input;
