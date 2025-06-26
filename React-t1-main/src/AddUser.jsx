import { useState } from "react";
import CustomButton from "./shared/CustomButton.jsx";

function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    status: "active"
  });

  const handleChange = (e) => {
    setFormData({formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form p-4 shadow rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" name="name" id="name" className="form-control" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" name="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age:</label>
        <input type="number" name="age" id="age" className="form-control" value={formData.age} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="status" className="form-label">Status:</label>
        <select name="status" id="status" className="form-select" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>

      <CustomButton text="Submit" type="primary" />
    </form>
  );
}

export default AddUser;
