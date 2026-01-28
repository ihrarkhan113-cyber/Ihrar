import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  query, 
  orderBy, 
  onSnapshot,
  doc,
  getDoc,
  Timestamp 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const productsCollection = collection(db, 'products');

export const subscribeToProducts = (callback: (products: any[]) => void) => {
  const q = query(productsCollection, orderBy('updatedAt', 'desc'));
  
  return onSnapshot(q, (snapshot) => {
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      updatedAt: doc.data().updatedAt?.toDate()
    }));
    callback(products);
  });
};

export const getProductBySlug = async (slug: string) => {
  const q = query(productsCollection, orderBy('slug'));
  const snapshot = await getDoc(doc(db, 'products', slug));
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data(),
      updatedAt: snapshot.data().updatedAt?.toDate()
    };
  }
  
  // Fallback: Query by slug field
  const allProducts = await getProducts();
  return allProducts.find(p => p.slug === slug);
};

export const getProducts = async () => {
  const q = query(productsCollection, orderBy('updatedAt', 'desc'));
  const snapshot = await getDoc(q);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    updatedAt: doc.data().updatedAt?.toDate()
  }));
};
