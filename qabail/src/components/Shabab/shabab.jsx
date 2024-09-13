import React, { useState, useEffect } from "react";
import "./shabab.css";
import Navbar from "../navbar/Navbar";

const Shabab = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  const show = () => {
    if (password == "123") {
      setShowBtn(true);
      setPassword("");
    } else {
      return setShowBtn(false);
    }
  };

  //getting data from LS
  const getLocalItem = () => {
    let data = localStorage.getItem("Information");
    if (data) {
      return JSON.parse(localStorage.getItem("Information"));
    }
  };
  const [data, setData] = useState(getLocalItem()); //All data is here

  //SETITEM IN LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("Information", JSON.stringify(data));
  }, [data]);

  const submitStop = (e) => {
    e.preventDefault(); //It prevents the default action, in this case default action in submitting
    if (name && role) {
      setData([...data, { name, role, number }]);
    }
    // setName("")
    setRole("");
    setNumber(0);
  };
  const delHandel = (index) => {
    let copyData = [...data];
    copyData.splice(0, 1);
    setData(copyData);
  };
  return (
    <>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Number</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.number}</td>
                <td>
                  <button>edit </button>
                </td>
                <td>
                  <button onClick={() => delHandel(index)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showBtn ? (
        <form onSubmit={submitStop}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />

          <button>Add</button>
        </form>
      ) : (
        ""
      )}
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={show}>Show</button>
    </>
  );
};

export default Shabab;
