import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <section>
      <h1>Detalle del producto</h1>
      <p>ID: {id}</p>
    </section>
  );
}

export default ProductDetail;