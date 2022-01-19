import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { LoginPage, ChatPage, ForgetPasswordPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="forget-password" element={<ForgetPasswordPage />} />
      <Route path="chat-page" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
