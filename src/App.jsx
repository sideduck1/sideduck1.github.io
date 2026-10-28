import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      {!isHomePage && <Footer />}
    </div>
  );
}