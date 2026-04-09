import Card from "../../components/organisms/ProductCard/Card";
import ListTemplate from "../../components/templates/ListTemplate/ListTemplate";

export const List = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <ListTemplate title="Lista de Produtos">
        <Card name="Produto 1" />
        <Card name="Produto 2" />
        <Card name="Produto 3" />
      </ListTemplate>
    </div>
  );
};

export default List;
