'use client';

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div>
      <label htmlFor="category-filter" style={{ marginRight: '10px' }}>
        Filter by Category:
      </label>
      <select 
        id="category-filter"
        value={selectedCategory} 
        onChange={(e) => onCategoryChange(e.target.value)}
        style={{
          padding: '5px 10px',
          borderRadius: '4px',
          border: '1px solid #ddd'
        }}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}