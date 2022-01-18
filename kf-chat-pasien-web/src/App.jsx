import React, { useEffect, useState } from "react";
import "./App.css";
import { kf_logo, dot_pattern_background } from "./assets";
import {
  Input,
  InputAdornment,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function App() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="container h-screen w-screen flex flex-col justify-center items-center">
      <img className="dot-pattern h-1/2 absolute bottom-0" src={dot_pattern_background} alt="" />
      <div className="box-login bg-white rounded-2xl flex flex-col items-center">
        {/* logo  */}
        <img className="h-12 my-5" src={kf_logo} alt="" />
        {/* input email  */}
        <div className="mt-6 h-24 w-full flex flex-col">
          <span className="input-email ml-14 mb-2">Email</span>
          <div className="wrapper-input-failed mx-4 rounded-full flex items-center">
            <Input
              className="ml-10"
              placeholder="Masukan alamat email"
              disableUnderline={true}
              sx={{ fontSize: 15 }}
            />
          </div>
          <div className="flex justify-end mt-2 mr-5">
            <span className="email-not-found text-xs">
              Nama pengguna tidak terdaftar!
            </span>
          </div>
        </div>
        {/* input password  */}
        <div className="h-28 w-full flex flex-col">
          <span className="input-email ml-14 mb-2">Password</span>
          <div className="wrapper-input-failed mx-4 rounded-full flex items-center">
            <Input
              className="mx-10 w-full"
              placeholder="Masukan password"
              disableUnderline={true}
              sx={{ fontSize: 15 }}
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </div>
          <div className="flex justify-end mt-2 mr-5">
            <span className="wrong-password text-xs">
              Password yang anda masukan salah!
            </span>
          </div>
        </div>
        <div className="h-12 w-full flex justify-between">
          <div className="ml-4 flex justify-center items-center">
            <Checkbox {...label} size="small" />
            <span className="remember text-sm">Remember</span>
          </div>
          <span className="lupa-password font-semibold text-sm mr-5 mt-3">
            Lupa Password
          </span>
        </div>
        <div className="h-12 w-full flex justify-center items-center">
          <button className="text-white login-button-active w-full mx-4 rounded-full flex justify-center items-center">
              <span>Login</span>
          </button>
        </div>
      </div>
      <span className="text-white mt-1 text-xs">App Version 1.0.0</span>
    </div>
  );
}

export default App;
