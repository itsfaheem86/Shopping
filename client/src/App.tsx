import { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import type { CartProduct, Product } from "./types/product";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  const [inventory, setInventory] = useState<Product[]>([
    { name: "bacon", unitPrice: 10.99, quantity: 10 },
    { name: "eggs", unitPrice: 3.99, quantity: 10 },
    { name: "cheese", unitPrice: 6.99, quantity: 10 },
    { name: "chives", unitPrice: 1.0, quantity: 10 },
    { name: "wine", unitPrice: 11.99, quantity: 10 },
    { name: "brandy", unitPrice: 17.55, quantity: 10 },
    { name: "bananas", unitPrice: 0.69, quantity: 10 },
    { name: "ham", unitPrice: 2.69, quantity: 10 },
    { name: "tomatoes", unitPrice: 3.26, quantity: 10 },
    { name: "tissue", unitPrice: 8.45, quantity: 10 },
  ]);

  const [shoppingCartItems, setShoppingCartItems] = useState<CartProduct[]>([]);

  const onAddToCart = (product: Product) => {
    setShoppingCartItems((prevCartProducts) => {
      const existingProductIndex = shoppingCartItems.findIndex(
        (p) => p.name === product.name,
      );
      if (existingProductIndex >= 0) {
        const updatedProduct = prevCartProducts[existingProductIndex];
        updatedProduct.count++;
        const updatedCart = [
          ...shoppingCartItems.slice(0, existingProductIndex),
          ...shoppingCartItems.slice(
            existingProductIndex + 1,
            shoppingCartItems.length,
          ),
        ];
        updatedCart.push(updatedProduct);
        return updatedCart;
      } else return [...prevCartProducts, { ...product, count: 1 }];
    });
  };

  const onDecrementCartProduct = (product: CartProduct) => {
    const cartProductIndex = shoppingCartItems.findIndex(
      (p) => p.name === product.name,
    );
    const updatedProduct = shoppingCartItems[cartProductIndex];
    updatedProduct.count--;
    const updatedCart = [
      ...shoppingCartItems.slice(0, cartProductIndex),
      ...shoppingCartItems.slice(
        cartProductIndex + 1,
        shoppingCartItems.length,
      ),
    ];
    if (updatedProduct.count > 0) {
      updatedCart.push(updatedProduct);
    }
    setShoppingCartItems(updatedCart);
  };

  const onIncrementCartProduct = (product: CartProduct) => {
    const cartProductIndex = shoppingCartItems.findIndex(
      (p) => p.name === product.name,
    );
    const updatedProduct = shoppingCartItems[cartProductIndex];
    updatedProduct.count++;
    const updatedCart = [
      ...shoppingCartItems.slice(0, cartProductIndex),
      ...shoppingCartItems.slice(
        cartProductIndex + 1,
        shoppingCartItems.length,
      ),
    ];
    if (updatedProduct.count > 0) {
      updatedCart.push(updatedProduct);
    }
    setShoppingCartItems(updatedCart);
  };

  console.log(shoppingCartItems);

  return (
    <div>
      <h1>Welcome to the shop</h1>
      <h2>Menu to order</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {inventory.map((item) => (
          <ProductCard
            key={item.name}
            product={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <ShoppingCart
        cartProducts={shoppingCartItems}
        onDecrementCartProduct={onDecrementCartProduct}
        onIncrementCartProduct={onIncrementCartProduct}
      />
    </div>
  );
}

export default App;
