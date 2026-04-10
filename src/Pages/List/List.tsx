import { useNavigate } from "react-router-dom";
import Card from "../../components/organisms/ProductCard/Card";
import ListTemplate from "../../components/templates/ListTemplate/ListTemplate";
import { useProducts } from "../../hooks/useProducts";

export const List = () => {
  const navigate = useNavigate();
  const { products, isLoading, errorMessage } = useProducts();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ListTemplate title="Lista de Produtos">
        {isLoading && <p>Carregando produtos...</p>}

        {errorMessage && <p>{errorMessage}</p>}

        {!isLoading &&
          !errorMessage &&
          products.map((product) => (
            <Card
              key={product.id}
              name={product.title}
              price={product.price}
              imageUrl={product.images[0]}
              categoryName={product.category.name}
              onOpenDetails={() => navigate(`/products/${product.id}`)}
            />
          ))}
      </ListTemplate>
    </div>
  );
};

export default List;
