import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/Login.page"));
const MainPage = lazy(() => import("./pages/main/Main.page"));
const RegisterPage = lazy(() => import("./pages/Register.page"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
