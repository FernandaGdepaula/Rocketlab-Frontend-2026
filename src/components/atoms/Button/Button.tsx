type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={"button"}
      style={{
        border: "1px solid #cfcfcf",
        backgroundColor: "#ffffff",
        color: "#00a759",
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
