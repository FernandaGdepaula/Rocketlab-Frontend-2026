import { useContext, type ReactNode } from "react";
import Label from "../../atoms/Label/Label";
import { CardContext } from "../../../Context/CardContext";

type ListTemplateProps = {
  title: string;
  children?: ReactNode;
};

const ListTemplate = ({ title, children }: ListTemplateProps) => {

    // 6. Consumimos o contexto para obter o valor total atualizado
  const { totalQuantity } = useContext(CardContext);

  return (
    <div
      style={{
        height: "80vh",
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        border: "1px solid #004d29",
      }}
    >
      <h1>
        <p>
          Total no Selecionado: <strong>{totalQuantity}</strong>
        </p>
      </h1>
      <Label text={title} />
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default ListTemplate;
