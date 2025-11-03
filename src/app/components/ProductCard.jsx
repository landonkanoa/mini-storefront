'use client';

export default function ProductCard({ product, onAddToCart }) {
  const isOutOfStock = product.stock === 0;

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: isOutOfStock ? '#f5f5f5' : 'white'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
      <p style={{ margin: '5px 0', color: '#666' }}>Category: {product.category}</p>
      <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>${product.price}</p>
      <p style={{ 
        margin: '5px 0', 
        color: isOutOfStock ? 'red' : 'green'
      }}>
        Stock: {product.stock}
      </p>
      
      <button
        onClick={() => onAddToCart(product)}
        disabled={isOutOfStock}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: isOutOfStock ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isOutOfStock ? 'not-allowed' : 'pointer',
          width: '100%'
        }}
      >
        {isOutOfStock ? 'Out of stock' : 'Add to Cart'}
      </button>
    </div>
  );
}