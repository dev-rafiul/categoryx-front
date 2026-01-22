const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const itemsFilePath = path.join(__dirname, 'items.json');


// const defaultItems = [
//   {
//     id: 1,
//     name: "MacBook Pro 14\"",
//     category: "Laptop",
//     brand: "Apple",
//     description: "Powerful laptop with M3 chip, Liquid Retina XDR display, and all-day battery life.",
//     price: 1999,
//     currency: "USD",
//     stock: 12,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1649394233584-217c46cb9612?w=400"
//   },
//   {
//     id: 2,
//     name: "Dell XPS 13",
//     category: "Laptop",
//     brand: "Dell",
//     description: "Ultra-thin premium laptop with InfinityEdge display and Intel Core i7 processor.",
//     price: 1499,
//     currency: "USD",
//     stock: 8,
//     rating: 4.6,
//     image: "https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?w=400"
//   },
//   {
//     id: 3,
//     name: "iPhone 15 Pro",
//     category: "Smartphone",
//     brand: "Apple",
//     description: "Latest iPhone with A17 chip, titanium body, and advanced camera system.",
//     price: 1199,
//     currency: "USD",
//     stock: 20,
//     rating: 4.9,
//     image: "https://images.unsplash.com/photo-1740650698612-786deca48ee1?w=400"
//   },
//   {
//     id: 4,
//     name: "Samsung Galaxy S24 Ultra",
//     category: "Smartphone",
//     brand: "Samsung",
//     description: "Flagship Android phone with 200MP camera, S-Pen, and massive AMOLED display.",
//     price: 1299,
//     currency: "USD",
//     stock: 15,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=400"
//   },
//   {
//     id: 5,
//     name: "Lenovo ThinkPad X1 Carbon",
//     category: "Laptop",
//     brand: "Lenovo",
//     description: "Lightweight business laptop with 14-inch display and long battery life.",
//     price: 1599,
//     currency: "USD",
//     stock: 10,
//     rating: 4.5,
//     image: "https://images.unsplash.com/photo-1612831661131-1f1c5397f1e5?w=400"
//   },
//   {
//     id: 6,
//     name: "Google Pixel 8",
//     category: "Smartphone",
//     brand: "Google",
//     description: "Advanced AI-powered smartphone with excellent camera and clean Android experience.",
//     price: 899,
//     currency: "USD",
//     stock: 18,
//     rating: 4.6,
//     image: "https://images.unsplash.com/photo-1681953451325-4a2a6e3c0f7f?w=400"
//   },
//   {
//     id: 7,
//     name: "Asus ROG Zephyrus G14",
//     category: "Laptop",
//     brand: "Asus",
//     description: "Gaming laptop with Ryzen 9 processor and RTX 4060 graphics for high performance.",
//     price: 1799,
//     currency: "USD",
//     stock: 7,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1612831455544-f1d4e0f33e41?w=400"
//   },
//   {
//     id: 8,
//     name: "Sony WH-1000XM5",
//     category: "Headphones",
//     brand: "Sony",
//     description: "Industry-leading noise-cancelling wireless headphones with 30-hour battery life.",
//     price: 399,
//     currency: "USD",
//     stock: 25,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1612821455567-8f1e5c6c3b12?w=400"
//   },
//   {
//     id: 9,
//     name: "Apple AirPods Pro 2",
//     category: "Headphones",
//     brand: "Apple",
//     description: "Premium in-ear wireless earbuds with spatial audio and active noise cancellation.",
//     price: 249,
//     currency: "USD",
//     stock: 30,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1580894894511-6e2b0d77d6e5?w=400"
//   },
//   {
//     id: 10,
//     name: "Samsung Galaxy Buds 3",
//     category: "Headphones",
//     brand: "Samsung",
//     description: "Wireless earbuds with intelligent ANC and long battery life.",
//     price: 199,
//     currency: "USD",
//     stock: 22,
//     rating: 4.5,
//     image: "https://images.unsplash.com/photo-1612821455533-7c1d6a3f33b1?w=400"
//   },
//   {
//     id: 11,
//     name: "iPad Pro 12.9\"",
//     category: "Tablet",
//     brand: "Apple",
//     description: "Powerful tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
//     price: 1099,
//     currency: "USD",
//     stock: 14,
//     rating: 4.9,
//     image: "https://images.unsplash.com/photo-1612821455561-6f2b1c7e3b5f?w=400"
//   },
//   {
//     id: 12,
//     name: "Samsung Galaxy Tab S9",
//     category: "Tablet",
//     brand: "Samsung",
//     description: "High-end Android tablet with AMOLED display and stylus support.",
//     price: 999,
//     currency: "USD",
//     stock: 12,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1612821455540-5f2c1a3d3c9e?w=400"
//   },
//   {
//     id: 13,
//     name: "Amazon Kindle Oasis",
//     category: "E-Reader",
//     brand: "Amazon",
//     description: "Premium e-reader with adjustable warm light and waterproof design.",
//     price: 299,
//     currency: "USD",
//     stock: 40,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1612821455570-6f3d1e7a3c4f?w=400"
//   },
//   {
//     id: 14,
//     name: "Apple Watch Series 9",
//     category: "Smartwatch",
//     brand: "Apple",
//     description: "Latest smartwatch with health monitoring, GPS, and cellular options.",
//     price: 399,
//     currency: "USD",
//     stock: 20,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1612821455538-5c2b1e4f3d7c?w=400"
//   },
//   {
//     id: 15,
//     name: "Samsung Galaxy Watch 6",
//     category: "Smartwatch",
//     brand: "Samsung",
//     description: "Advanced smartwatch with fitness tracking, ECG, and AMOLED display.",
//     price: 349,
//     currency: "USD",
//     stock: 18,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1612821455565-6e2c1f5d3e7b?w=400"
//   },
//   {
//     id: 16,
//     name: "GoPro HERO12",
//     category: "Camera",
//     brand: "GoPro",
//     description: "High-performance action camera with 5.3K video and waterproof design.",
//     price: 499,
//     currency: "USD",
//     stock: 15,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1612821455545-5e2b1c7d3e4f?w=400"
//   },
//   {
//     id: 17,
//     name: "Canon EOS R6",
//     category: "Camera",
//     brand: "Canon",
//     description: "Professional mirrorless camera with full-frame sensor and 4K video recording.",
//     price: 2499,
//     currency: "USD",
//     stock: 6,
//     rating: 4.9,
//     image: "https://images.unsplash.com/photo-1612821455568-6e3c1d7f3d8f?w=400"
//   },
//   {
//     id: 18,
//     name: "DJI Air 3",
//     category: "Drone",
//     brand: "DJI",
//     description: "Compact drone with 4K camera, obstacle sensing, and 46-minute flight time.",
//     price: 1199,
//     currency: "USD",
//     stock: 10,
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1612821455575-5c3d1f8e3e4f?w=400"
//   },
//   {
//     id: 19,
//     name: "Fitbit Charge 6",
//     category: "Fitness",
//     brand: "Fitbit",
//     description: "Advanced fitness tracker with heart rate, sleep tracking, and long battery life.",
//     price: 179,
//     currency: "USD",
//     stock: 28,
//     rating: 4.6,
//     image: "https://images.unsplash.com/photo-1612821455548-5f3d1a9e3c6b?w=400"
//   },
//   {
//     id: 20,
//     name: "Microsoft Surface Pro 9",
//     category: "Laptop",
//     brand: "Microsoft",
//     description: "Versatile 2-in-1 laptop with detachable keyboard and touchscreen display.",
//     price: 1399,
//     currency: "USD",
//     stock: 11,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1612821455560-6e2b1c8f3d2e?w=400"
//   }
// ];


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


function readItems() {
  ensureItemsFile();
  return JSON.parse(fs.readFileSync(itemsFilePath, 'utf8'));
}

function writeItems(items) {
  fs.writeFileSync(itemsFilePath, JSON.stringify(items, null, 2));
}



app.get('/items', (req, res) => {
  try {
    res.json(readItems());
  } catch {
    res.status(500).json({ error: 'Failed to read items' });
  }
});


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

app.get('/health', (_, res) => {
  res.json({ status: 'OK', message: 'CatalogX API running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
