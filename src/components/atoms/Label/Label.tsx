type LabelProps = {
  text: string;
};

const Label = ({ text }: LabelProps) => {
  return (
    <span style={{ color: "#ffffff", fontWeight: "bold" }}>{text}</span>
  );
};

export default Label;