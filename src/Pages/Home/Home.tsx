import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "32px", margin: 0 }}>Home</h1>
      <Button label="Ir para lista" onClick={() => navigate("/list")} />
    </div>
  );
};

export default Home;
