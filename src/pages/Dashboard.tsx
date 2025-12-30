import { Header } from "../components/Header.tsx";
import { Aside } from "../components/Aside.tsx";
import { Hero } from "../components/Hero.tsx";
import "./Dashboard.css";

export function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-aside">
            <Aside />
          </div>
          <div className="hero">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}
