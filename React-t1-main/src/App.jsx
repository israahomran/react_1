import { useState } from "react";
import User from "./User.jsx";
import CustomButton from "./shared/CustomButton.jsx";
import AddUser from "./AddUser.jsx";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "ahmad", email: "ahmad@gmail.com", isBlocked: true },
    { id: 2, name: "sara", email: "sara@gmail.com", isBlocked: false },
    { id: 3, name: "omar", email: "omar@gmail.com", isBlocked: true },
    { id: 4, name: "israa", email: "israa@gmail.com", isBlocked: true },
    { id: 5, name: "tariq", email: "tariq@gmail.com", isBlocked: true },
  ]);

  return (
    <div className="users container mt-5">
      <h1 className="mb-4 text-dark">Users List </h1>

      <AddUser setUsers={setUsers} />

      <hr className="my-5" />

      {users.map((user) => (
        <User
          name={user.name}
          email={user.email}
          isBlocked={user.isBlocked}
          key={user.id}
        />
      ))}
    </div>
  );
}
export default App;
