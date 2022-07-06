import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [buku, setBuku] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [harga, setHarga] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/tokobuku/${id}`, {
        buku,
        penerbit,
        harga,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/tokobuku/${id}`);
    setBuku(response.data.buku);
    setPenerbit(response.data.penerbit);
    setHarga(response.data.harga);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={buku}
                onChange={(e) => setBuku(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={penerbit}
                onChange={(e) => setPenerbit(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="Harga"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Perbarui
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
