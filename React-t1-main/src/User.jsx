import CustomButton from "./shared/CustomButton.jsx";

function User(props) {
  return (
    <div className="user">
      <h2>User name is: {props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Status: {props.isBlocked ? "Blocked" : "Active"}</p>
      <CustomButton text="Details" type="secondary" />
      <CustomButton text="Delete" type="danger" />
    </div>
  );
}
export default User;
