import { useState, type ReactNode } from "react";
import { CardContext } from "./CardContext";

// 3. Criamos o Provider (O provedor que vai "transmitir" o conteúdo)
export const CardProvider = ({ children }: { children: ReactNode }) => {

    // useState próprio (totalQuantity). É aqui que o valor real mora.
  const [totalQuantity, setTotalQuantity] = useState(0);

  // executa a atualização do total. Ele é passado para os componentes filhos via contexto.
  const updateTotal = (amount: number) => {
    setTotalQuantity((prev) => Math.max(0, prev + amount));
  };

  // Tudo o que colocarmos no value estará disponível para quem estiver 'abraçado' por esse componente"
  return (
    <CardContext.Provider value={{ totalQuantity, updateTotal }}>
      {children}
    </CardContext.Provider>
  );
};
