export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Coffee Table', price: 200, category: 'Furniture', stock: 2 },
    { id: 'p5', name: 'Headphones', price: 100, category: 'Electronics', stock: 8 },
    { id: 'p6', name: 'Sofa', price: 800, category: 'Furniture', stock: 1 },
    { id: 'p7', name: 'Tablet', price: 600, category: 'Electronics', stock: 6 },
    { id: 'p8', name: 'Bookshelf', price: 250, category: 'Furniture', stock: 3 },
    { id: 'p9', name: 'Smart Watch', price: 350, category: 'Electronics', stock: 7 },
    { id: 'p10', name: 'Lamp', price: 50, category: 'Furniture', stock: 10 },
    { id: 'p11', name: 'Kitchen Knife Set', price: 75, category: 'Kitchen', stock: 5 },
    { id: 'p12', name: 'Blender', price: 120, category: 'Kitchen', stock: 4 }
  ];
  
  return Response.json(products);
}