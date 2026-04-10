import { useEffect, useState } from "react";
import api from "../services/api";
import type { Product } from "../types/product";

const PRODUCT_DETAILS_ENDPOINT = (id: string) => `/products/${id}`;

export const useProductDetails = (productId: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) {
      setErrorMessage("Produto invalido: id nao encontrado na URL.");
      setIsLoading(false);
      return;
    }

    const fetchProductDetails = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null);

        const response = await api.get<Product>(
          PRODUCT_DETAILS_ENDPOINT(productId),
        );
        setProduct(response.data);
      } catch (error) {
        console.log("Falha ao buscar detalhes do produto:", error);
        setErrorMessage("Nao foi possivel carregar os detalhes do produto.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return {
    product,
    isLoading,
    errorMessage,
  };
};
