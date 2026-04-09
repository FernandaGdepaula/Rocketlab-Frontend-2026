import { useState, useContext, useEffect } from "react";
import { CardContext } from "../../../Context/CardContext";
import ImagePlaceholder from "../../atoms/ImagePlaceholder/ImagePlaceholder";
import QuantitySelector from "../../molecules/QuantitySelector/QuantitySelector";
import Label from "../../atoms/Label/Label";

type CardProps = {
  name: string;
};

const Card = ({ name }: CardProps) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity > 5) {
      alert(`Ops! O limite para o produto é de 5 unidades.`);
    }    
  }, [quantity]);

  // 5. Consumimos o contexto para obter a função de atualização do total
  const { updateTotal } = useContext(CardContext);

  const increment = () => {
    setQuantity((current) => current + 1);
    // sempre que mudamos a quantidade local, avisamos o contexto para atualizar o total global
    updateTotal(1);
  };

  const decrement = () => {
    setQuantity((current) => Math.max(0, current - 1));
    // sempre que mudamos a quantidade local, avisamos o contexto para atualizar o total global
    updateTotal(-1);
  };

  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #00a759",
        borderRadius: "8px",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        backgroundColor: "#00a759",
      }}
    >
      <ImagePlaceholder />
      <Label text={name} />
      <QuantitySelector
        quantity={quantity}
        onIncrement={increment}
        onDecrement={decrement}
      />
    </div>
  );
};

export default Card;
