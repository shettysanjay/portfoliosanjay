import React, { useState } from "react";
import "./pwd.css";

const PwdGenerator = () => {
  const [password, setPassword] = useState("*********");
  const [pwdLength, setPwdLength] = useState("");
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [errors, setErrors] = useState("");
  const pwdGen = () => {
    const length = parseInt(document.getElementById("length").value);
    const lowercase = document.getElementById("lcase").checked;
    const uppercase = document.getElementById("ucase").checked;
    const numbers = document.getElementById("num").checked;
    const symbols = document.getElementById("sym").checked;
    if (!lowercase && !uppercase && !numbers && !symbols) {
      setErrors("select alteast one checkbox");
    } else if (!length) {
      setErrors("Select the length");
    } else {
      setErrors("");
    }
    let charset = "";
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
      console.log(charset);
    }
    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      charset += "0123456789";
    }
    if (symbols) {
      charset += "!@#$%^&*";
    }
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(pwd);
  };

  return (
    <div className="pwd_container">
      <div className="heading">
        <h3 className="pwd_heading">Password Generator</h3>
        <p>Generate highly secure passwords</p>
      </div>
      <div className="pwd">
        <label>Your Password:</label>
        <input type="text" value={password} readOnly />
      </div>
      <span className="pwd_errors">{errors}</span>
      <div className="pwd_Choice">
        <div className="pwd_length">
          <label htmlFor="length">Enter Password Length</label>
          <input
            type="number"
            name="length"
            min="4"
            max="15"
            id="length"
            value={pwdLength}
            onChange={(e) => setPwdLength(e.target.value)}
          />
        </div>
        <div className="pwd_lowercase">
          <label htmlFor="lcase">Lowercase</label>
          <input
            type="checkbox"
            label="Lowercase"
            name="lcase"
            id="lcase"
            value={lowercase}
            onChange={(e) => {
              setLowercase(e.target.value);
            }}
          />
        </div>
        <div className="pwd_uppercase">
          <label htmlFor="ucase">Uppercase</label>
          <input
            type="checkbox"
            label="Uppercase"
            name="ucase"
            id="ucase"
            value={uppercase}
            onChange={(e) => {
              setUppercase(e.target.value);
            }}
          />
        </div>
        <div className="pwd_numbers">
          <label htmlFor="num">Numbers</label>
          <input
            type="checkbox"
            label="numbers"
            name="num"
            id="num"
            value={numbers}
            onChange={(e) => {
              setNumbers(e.target.value);
            }}
          />
        </div>
        <div className="pwd_symbols">
          <label htmlFor="sym">Symbols</label>
          <input
            type="checkbox"
            label="symbols"
            name="sym"
            id="sym"
            value={symbols}
            onChange={(e) => {
              setSymbols(e.target.value);
            }}
          />
        </div>

        <div className="pwd_btn" onClick={pwdGen}>
          Generate Password
        </div>
      </div>
    </div>
  );
};

export default PwdGenerator;
