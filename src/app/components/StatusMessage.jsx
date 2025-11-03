'use client';

export default function StatusMessage({ loading, error, empty }) {
  if (loading) {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center',
        fontSize: '18px',
        color: 'red'
      }}>
        Error loading products. Please try again later.
      </div>
    );
  }

  if (empty) {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center',
        fontSize: '18px',
        color: '#666'
      }}>
        No products found matching your filters.
      </div>
    );
  }

  return null;
}