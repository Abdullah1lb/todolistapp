import React, { useState } from "react";

const Code = () => {
  const [Addval, Setval] = useState("");
  const [Store, Update] = useState([]);
  const [btn, ubtn] = useState(true);
  const [getfield, updfield] = useState([]);

  const store = () => {
    if (!Addval) {
      alert("Please enter valid property");
    } else if (Addval && !btn) {
      Update(
        Store.map((arr) => {
          if (arr.id === getfield) {
            return { ...arr, name: Addval };
          }
          return arr;
        })
      );
      ubtn(true);
      Setval("");
      updfield("");
    } else {
      Update((a) => {
        const newdata = { id: new Date().getTime().toString(), name: Addval };
        return [...a, newdata];
      });
      Setval("");
    }
  };

  const Delete = (id) => {
    Update(
      Store.filter((aa) => {
        return id !== aa.id;
      })
    );
  };
  const Edit = (id) => {
    let val = Store.find((arr) => {
      return id === arr.id;
    });
    ubtn(false);
    Setval(val.name);
    updfield(id);
  };

  return (
    <div
      style={{ height: "50vh", marginTop: "10em" }}
      className="bg-primary mx-auto w-25 border rounded py-3 px-2"
    >
      <h1 className="text-light">ToDo App</h1>
      <div className="mb-3 d-flex mx-auto mt-4">
        <input
          type="text"
          className="form-control"
          value={Addval}
          placeholder="Enter Your notes"
          onChange={(input) => {
            Setval(input.target.value);
          }}
        />
        {btn ? (
          <button className="btn btn-success ms-5" onClick={store}>
            Submit
          </button>
        ) : (
          <button className="btn btn-secondary ms-5 " onClick={store}>
            Edit
          </button>
        )}
      </div>

      {Store.map((arr) => {
        return (
          <div className="text-bg-light d-flex" key={arr.id}>
            <h4 className="">{arr.name}</h4>
            <button
              className="btn btn-success ms-5"
              onClick={() => {
                Edit(arr.id);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger "
              onClick={() => {
                Delete(arr.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Code;
