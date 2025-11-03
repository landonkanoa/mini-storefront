'use client';

export default function CartSummary({ cart, onRemove, onDecrement, onReset }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div style={{
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <h2>Shopping Cart</h2>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Items: {totalItems} | Total: ${totalPrice.toFixed(2)}
      </p>
      
      <div style={{ marginTop: '15px' }}>
        {cart.map(item => (
          <div key={item.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '4px'
          }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>{item.name}</span>
              <span style={{ marginLeft: '10px' }}>
                ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
            <div>
              <button 
                onClick={() => onDecrement(item.id)}
                style={{
                  marginRight: '5px',
                  padding: '5px 10px',
                  backgroundColor: '#ffc107',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                -1
              </button>
              <button 
                onClick={() => onRemove(item.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={onReset}
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}