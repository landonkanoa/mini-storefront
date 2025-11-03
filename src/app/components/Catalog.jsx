'use client';

import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2000);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // added fetch to get api
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);


  // added filter for products
  useEffect(() => {
    let list = products;
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    list = list.filter((p) => p.price <= maxPrice);
    setFilteredProducts(list);
  }, [products, selectedCategory, maxPrice]);

  // Added for product stock
  const updateStock = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p
      )
    );
  };

  const getStock = (id) => {
    const item = products.find((p) => p.id === id);
    return item ? item.stock : 0;
  };

  // Added cart things
  const addToCart = (product) => {
    const available = getStock(product.id);
    if (available <= 0) return;

    updateStock(product.id, -1);

    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, quantity: 1 },
      ];
    });
  };

  const decrementQuantity = (productId) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (!item) return prev;

      updateStock(productId, +1);

      const newQty = item.quantity - 1;
      if (newQty <= 0) {
        return prev.filter((i) => i.id !== productId);
      }
      return prev.map((i) =>
        i.id === productId ? { ...i, quantity: newQty } : i
      );
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (item) updateStock(productId, item.quantity);
      return prev.filter((i) => i.id !== productId);
    });
  };

  // Added reset
  const resetCart = () => {
    cart.forEach((i) => updateStock(i.id, i.quantity));
    setCart([]);
  };

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  //Added page items to bring together
  return (
    <div style={{ marginTop: '20px' }}>
      <StatusMessage
        loading={loading}
        error={error}
        empty={filteredProducts.length === 0 && !loading && !error}
      />

      {!loading && !error && (
        <>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <PriceFilter maxPrice={maxPrice} onPriceChange={setMaxPrice} />
          </div>

          <ProductList products={filteredProducts} onAddToCart={addToCart} />

          <CartSummary
            cart={cart}
            onRemove={removeFromCart}
            onDecrement={decrementQuantity}
            onReset={resetCart}
          />
        </>
      )}
    </div>
  );
}
