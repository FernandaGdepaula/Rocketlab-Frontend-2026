import Button from "../../atoms/Button/Button";

type QuantitySelectorProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const QuantitySelector = ({
  quantity,
  onIncrement,
  onDecrement,
}: QuantitySelectorProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button label="-" onClick={onDecrement} />
      <span style={{ color: "#ffffff" }}>{quantity}</span>
      <Button label="+" onClick={onIncrement} />
    </div>
  );
};

export default QuantitySelector;
