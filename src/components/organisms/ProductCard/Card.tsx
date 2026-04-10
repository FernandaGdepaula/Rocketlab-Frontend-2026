import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../../Context/CardContext";
import ImagePlaceholder from "../../atoms/ImagePlaceholder/ImagePlaceholder";
import Label from "../../atoms/Label/Label";
import QuantitySelector from "../../molecules/QuantitySelector/QuantitySelector";

type CardProps = {
  name: string;
  price: number;
  imageUrl?: string;
  categoryName: string;
  onOpenDetails?: () => void;
};

const Card = ({
  name,
  price,
  imageUrl,
  categoryName,
  onOpenDetails,
}: CardProps) => {
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
      onClick={onOpenDetails}
      style={{
        width: "240px",
        border: "1px solid #00a759",
        borderRadius: "8px",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        backgroundColor: "#00a759",
        cursor: onOpenDetails ? "pointer" : "default",
      }}
    >
      <ImagePlaceholder src={imageUrl} alt={name} />
      <Label text={name} />
      <span style={{ color: "#ffffff" }}>Categoria: {categoryName}</span>
      <span style={{ color: "#ffffff", fontWeight: "bold" }}>
        Preco: R$ {price.toFixed(2)}
      </span>
      <div
        onClick={(event) => event.stopPropagation()}
      >
        {/* Evita navegar para detalhes quando o aluno interagir com os botoes de quantidade */}
        <QuantitySelector
          quantity={quantity}
          onIncrement={increment}
          onDecrement={decrement}
        />
      </div>
    </div>
  );
};

export default Card;
