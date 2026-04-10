import { useEffect, useState } from "react";
import api from "../services/api";
import type { Product } from "../types/product";

const PRODUCTS_ENDPOINT = "/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null);

        // await new Promise((resolve) => setTimeout(resolve, 2000));
        
        const response = await api.get<Product[]>(PRODUCTS_ENDPOINT, {});

        const data = response.data;

        setProducts(data.slice(1, 13));
        
      } catch (error) {
        console.log("Falha ao buscar produtos:", error); 
        setErrorMessage(
          "Falha ao buscar produtos. Tente novamente em instantes.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();

  }, []);

  return {
    products,
    isLoading,
    errorMessage,
  };
};
