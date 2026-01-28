// Seed script for Firebase Firestore
// Run with: node firebase-seed.js

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, Timestamp } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sampleProducts = [
  {
    title: "Wireless Noise-Canceling Headphones",
    slug: "wireless-noise-canceling-headphones",
    price: 299.99,
    currency: "USD",
    rating: 4.8,
    category: "electronics",
    brand: "SoundTech",
    shortDescription: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    fullDescription: "Experience crystal-clear audio with these premium wireless headphones. Featuring advanced active noise cancellation technology, they block out ambient noise for immersive listening. The 30-hour battery life ensures all-day use, while the comfortable over-ear design makes them perfect for long listening sessions. Built-in microphone with clear voice pickup for calls.",
    specs: [
      "Driver Size: 40mm",
      "Frequency Response: 20Hz - 20kHz",
      "Battery Life: 30 hours",
      "Bluetooth Version: 5.2",
      "Weight: 265g",
      "Charging: USB-C"
    ],
    pros: [
      "Excellent noise cancellation",
      "Long battery life",
      "Comfortable for extended wear",
      "Crystal clear microphone",
      "Quick charging support"
    ],
    cons: [
      "Premium price point",
      "Case is somewhat bulky",
      "Limited color options"
    ],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80"
    ],
    affiliateUrl: "https://example.com/product/wireless-headphones",
    updatedAt: Timestamp.now()
  },
  {
    title: "Smart Coffee Maker with App Control",
    slug: "smart-coffee-maker-app-control",
    price: 189.99,
    currency: "USD",
    rating: 4.5,
    category: "home-kitchen",
    brand: "BrewMaster",
    shortDescription: "WiFi-enabled coffee maker with smartphone app, programmable brewing, and thermal carafe.",
    fullDescription: "Start your day with the perfect cup of coffee, brewed exactly how you like it. This smart coffee maker connects to your home WiFi, allowing you to schedule brewing, adjust strength, and monitor brew status from your smartphone. The double-walled thermal carafe keeps coffee hot for hours without burning. Compatible with Alexa and Google Assistant for voice control.",
    specs: [
      "Capacity: 12 cups",
      "Carafe: Thermal stainless steel",
      "Connectivity: WiFi, Bluetooth",
      "Power: 1500W",
      "Dimensions: 14 x 8 x 11 inches",
      "Weight: 7.5 lbs"
    ],
    pros: [
      "App control and scheduling",
      "Keeps coffee hot for hours",
      "Voice assistant compatible",
      "Customizable brew strength",
      "Easy to clean"
    ],
    cons: [
      "App can be buggy occasionally",
      "Requires stable WiFi",
      "Carafe lid difficult to open"
    ],
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    affiliateUrl: "https://example.com/product/smart-coffee-maker",
    updatedAt: Timestamp.now()
  },
  {
    title: "Professional Air Fryer Oven",
    slug: "professional-air-fryer-oven",
    price: 159.99,
    currency: "USD",
    rating: 4.7,
    category: "home-kitchen",
    brand: "KitchenPro",
    shortDescription: "Multi-function air fryer oven with convection cooking, 12 preset programs, and large capacity.",
    fullDescription: "This versatile air fryer oven does more than just air fry - it bakes, roasts, toasts, and dehydrates with professional results. The large 12-quart capacity fits a whole chicken or multiple servings of fries. With 12 preset cooking programs and precise temperature control, it takes the guesswork out of cooking. The non-stick interior and included accessories make cleanup a breeze.",
    specs: [
      "Capacity: 12 quarts",
      "Power: 1800W",
      "Temperature Range: 90°F - 400°F",
      "Timer: Up to 60 minutes",
      "Dimensions: 16 x 14 x 13 inches",
      "Included Accessories: Baking pan, air fry basket, drip tray"
    ],
    pros: [
      "Versatile cooking functions",
      "Large capacity",
      "Easy to clean",
      "Preset programs work well",
      "Even cooking results"
    ],
    cons: [
      "Takes up counter space",
      "Fan can be somewhat noisy",
      "Learning curve for best results"
    ],
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    affiliateUrl: "https://example.com/product/air-fryer-oven",
    updatedAt: Timestamp.now()
  }
];

async function seedProducts() {
  try {
    console.log('Starting to seed products...');
    
    for (const product of sampleProducts) {
      const docRef = await addDoc(collection(db, 'products'), product);
      console.log(`Added product: ${product.title} with ID: ${docRef.id}`);
    }
    
    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
}

// Set environment variables before running
// export FIREBASE_API_KEY=your_key
// export FIREBASE_PROJECT_ID=your_project_id
// etc.

if (require.main === module) {
  seedProducts();
}

module.exports = { sampleProducts };
