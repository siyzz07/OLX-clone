import { Navbar } from "./Navbar"
import { Menubar } from "./Menubar"
import { useEffect, useState } from "react"
import { db } from "../firebase/setup"
import { Content } from "./Content"
import { Footer } from "./Footer"
import { collection, onSnapshot } from "firebase/firestore";

interface Product{
    id:string,
    title:string,
    category:string,
    price:string,
    imageUrl:string
}

export const Main = () => {
    const[products,setProducts] = useState<Product[]>([])
    console.log(products)
    
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
            const productArray: Product[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Product[];
            setProducts(productArray);
        });
    
        return () => unsubscribe();
    }, []);

  return (
    <div>
        <Navbar />
        <Menubar />
        <Content products={products} />
        <Footer />
    </div>
  )
}
