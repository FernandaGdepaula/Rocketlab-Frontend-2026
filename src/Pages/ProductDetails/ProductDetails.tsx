import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import { useProductDetails } from "../../hooks/useProductDetails";

export const ProductDetails = () => {
    
  const { productId } = useParams();
  const navigate = useNavigate();

  const { product, isLoading, errorMessage } = useProductDetails(productId);

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Carregando detalhes do produto...</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <p>{errorMessage}</p>
        <Button label="Voltar para lista" onClick={() => navigate("/list")} />
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "min(720px, 100%)",
          border: "1px solid #00a759",
          borderRadius: "12px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          backgroundColor: "#f4fff8",
        }}
      >
        <h1 style={{ margin: 0, color: "#00a759" }}>{product.title}</h1>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{
            width: "100%",
            maxHeight: "340px",
            objectFit: "cover",
            borderRadius: "8px",
            border: "1px solid #d6f5e4",
          }}
        />

        <p style={{ margin: 0 }}>
          <strong>Categoria:</strong> {product.category.name}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Preco:</strong> R$ {product.price.toFixed(2)}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Descricao:</strong> {product.description}
        </p>

        <div style={{ marginTop: "8px" }}>
          <Button label="Voltar para lista" onClick={() => navigate("/list")} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
