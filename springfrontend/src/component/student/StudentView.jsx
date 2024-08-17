import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Search from "../common/Search";
const StudentView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/students", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setStudents(result.data);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/students/delete/${id}`);
    loadStudents();
  };
  return (
    <section>
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center ">
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Department</th>
            <th>Mobile Number</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students
            .filter(
              (st) =>
                st.firstName.toLowerCase().includes(search) ||
                st.lastName.toLowerCase().includes(search) ||
                st.email.toLowerCase().includes(search) ||
                st.department.toLowerCase().includes(search) ||
                (st.moNumber && st.moNumber.toString().includes(search))
            )

            .map((student, index) => (
              <tr key={student.id} className="text-center ">
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.moNumber}</td>
                <td className="mx-2">
                  <Link
                    to={`/student-profile/${student.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-student/${student.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentView;
