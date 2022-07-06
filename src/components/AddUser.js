import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [buku, setBuku] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [harga, setHarga] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/tokobuku", {
        buku,
        penerbit,
        harga,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama Buku</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={buku}
                onChange={(e) => setBuku(e.target.value)}
                placeholder="Buku"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Penerbit</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={penerbit}
                onChange={(e) => setPenerbit(e.target.value)}
                placeholder="Penerbit"
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
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
