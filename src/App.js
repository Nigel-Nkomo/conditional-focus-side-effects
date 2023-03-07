import { useState } from "react";
import MyInput from "./MyInput";

function App() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("Michael");
  const [lastName, setLastName] = useState("Burnham");
  const [upper, setUpper] = useState(false);
  const name = firstName + " " + lastName;

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide form" : "Show form"}
      </button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:{" "}
            <MyInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <br />
          <br />
          <label>
            Enter your last name:{" "}
            <MyInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>

          <p>
            Hello, <b>{upper ? name.toUpperCase() : name}</b>
          </p>
        </>
      )}
    </>
  );
}

export default App;
