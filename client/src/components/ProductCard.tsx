import type { Product } from "@/types/product";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export const ProductCard: React.FC<Props> = ({
  product: { name, unitPrice, quantity },
  product,
  onAddToCart,
}) => {
  return (
    <div
      style={{
        width: 200,
        height: 150,
        backgroundColor: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <p>{name}</p>
      <span>Unit price : {unitPrice}</span>
      <span>Stock : {quantity}</span>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  );
};
