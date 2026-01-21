const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Path to items.json (will be created automatically)
const itemsFilePath = path.join(__dirname, 'items.json');

// ---------- Default data ----------
const defaultItems = [
  {
    id: 1,
    name: "MacBook Pro 14\"",
    category: "Laptop",
    brand: "Apple",
    description: "Powerful laptop with M3 chip, Liquid Retina XDR display, and all-day battery life.",
    price: 1999,
    currency: "USD",
    stock: 12,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1649394233584-217c46cb9612?w=400"
  },
  {
    id: 2,
    name: "Dell XPS 13",
    category: "Laptop",
    brand: "Dell",
    description: "Ultra-thin premium laptop with InfinityEdge display and Intel Core i7 processor.",
    price: 1499,
    currency: "USD",
    stock: 8,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?w=400"
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    category: "Smartphone",
    brand: "Apple",
    description: "Latest iPhone with A17 chip, titanium body, and advanced camera system.",
    price: 1199,
    currency: "USD",
    stock: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1740650698612-786deca48ee1?w=400"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphone",
    brand: "Samsung",
    description: "Flagship Android phone with 200MP camera, S-Pen, and massive AMOLED display.",
    price: 1299,
    currency: "USD",
    stock: 15,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=400"
  }
];

// ---------- Ensure file exists ----------
function ensureItemsFile() {
  if (!fs.existsSync(itemsFilePath)) {
    fs.writeFileSync(
      itemsFilePath,
      JSON.stringify(defaultItems, null, 2),
      'utf8'
    );
    console.log('📦 items.json created with default data');
  }
}

// ---------- Helpers ----------
function readItems() {
  ensureItemsFile();
  return JSON.parse(fs.readFileSync(itemsFilePath, 'utf8'));
}

function writeItems(items) {
  fs.writeFileSync(itemsFilePath, JSON.stringify(items, null, 2));
}

// ---------- Routes ----------

// Get all items
app.get('/items', (req, res) => {
  try {
    res.json(readItems());
  } catch {
    res.status(500).json({ error: 'Failed to read items' });
  }
});

// Get item by ID
app.get('/items/:id', (req, res) => {
  try {
    const items = readItems();
    const item = items.find(i => i.id === Number(req.params.id));

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
  } catch {
    res.status(500).json({ error: 'Failed to fetch item' });
  }
});

// Add item
app.post('/items', (req, res) => {
  try {
    const items = readItems();
    const newId = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;

    const newItem = {
      id: newId,
      name: req.body.name,
      category: req.body.category,
      brand: req.body.brand || 'Unknown',
      description: req.body.description || '',
      price: Number(req.body.price),
      currency: 'USD',
      stock: Number(req.body.stock) || 1,
      rating: 4.0,
      image: req.body.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400'
    };

    items.push(newItem);
    writeItems(items);

    res.status(201).json(newItem);
  } catch {
    res.status(500).json({ error: 'Failed to add item' });
  }
});

// Update item
app.put('/items/:id', (req, res) => {
  try {
    const items = readItems();
    const index = items.findIndex(i => i.id === Number(req.params.id));

    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }

    items[index] = {
      ...items[index],
      ...req.body,
      id: Number(req.params.id),
      price: Number(req.body.price ?? items[index].price)
    };

    writeItems(items);
    res.json(items[index]);
  } catch {
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// Delete item
app.delete('/items/:id', (req, res) => {
  try {
    const items = readItems();
    const index = items.findIndex(i => i.id === Number(req.params.id));

    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const deleted = items.splice(index, 1)[0];
    writeItems(items);

    res.json(deleted);
  } catch {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

// Health check
app.get('/health', (_, res) => {
  res.json({ status: 'OK', message: 'CatalogX API running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
