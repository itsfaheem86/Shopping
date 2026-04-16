import type { CartProduct } from "@/types/product";

type ShoppingCartProps = {
  cartProducts: CartProduct[];
  onIncrementCartProduct: (product: CartProduct) => void;
  onDecrementCartProduct: (product: CartProduct) => void;
};

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartProducts,
  onDecrementCartProduct,
  onIncrementCartProduct,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Added items</p>
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        {cartProducts.map((product) => (
          <div key={product.name} style={{ backgroundColor: "#f5f5" }}>
            <p>{product.name}</p>
            <p>Count: {product.count}</p>
            <p>Price: {product.count * product.unitPrice}</p>
            <button onClick={() => onDecrementCartProduct(product)}>
              - Decrement
            </button>
            <button onClick={() => onIncrementCartProduct(product)}>
              + Increment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
