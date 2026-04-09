import { createContext } from "react";

// 1. Definimos o que terá no nosso contexto (tipagem)
export interface CardContextData {
  totalQuantity: number;                    // valor que todos vão ler.
  updateTotal: (amount: number) => void;    // função que os cards vão chamar para avisar que algo mudou
}

// 2. Criamos o contexto propriamente dito
export const CardContext = createContext<CardContextData>(
  {} as CardContextData,
);
