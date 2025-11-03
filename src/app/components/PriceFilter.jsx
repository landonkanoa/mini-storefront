'use client';

export default function PriceFilter({ maxPrice, onPriceChange }) {
  return (
    <div>
      <label htmlFor="price-filter" style={{ marginRight: '10px' }}>
        Max Price: ${maxPrice}
      </label>
      <input
        id="price-filter"
        type="range"
        min="50"
        max="2000"
        step="50"
        value={maxPrice}
        onChange={(e) => onPriceChange(Number(e.target.value))}
        style={{
          width: '200px',
          verticalAlign: 'middle'
        }}
      />
    </div>
  );
}