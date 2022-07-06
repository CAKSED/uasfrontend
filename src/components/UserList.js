import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

<Link to={`list`}></Link>
const UserList = () => {
  const [tokobuku, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/tokobuku");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tokobuku/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Tambah Buku
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Buku</th>
              <th>Penerbit</th>
              <th>Harga</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tokobuku.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.buku}</td>
                <td>{user.penerbit}</td>
                <td>{user.harga}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
