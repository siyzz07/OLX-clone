import { useLocation} from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"



export const ProductDetails = () => {
    const location = useLocation()
    const product = location.state?.product
    if(!product){
        return <p>Not found</p>
    }
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-10">

  <div className="w-full flex justify-center">
    <img 
      src={product.imageUrl} 
      alt={product.title} 
      className="border-4 border-gray-300 shadow-lg rounded-lg w-72 h-72 object-cover transition-transform duration-300 hover:scale-105" 
    />
  </div>


  <div className="bg-white text-center p-8 rounded-xl shadow-lg w-full max-w-2xl mt-6">
    <h1 className="font-bold text-5xl text-gray-900">{product.title}</h1>
    <p className="text-lg text-gray-500 mt-2 uppercase tracking-wide">{product.category}</p>
    <p className="text-2xl font-semibold text-green-600 mt-3">Rs {product.price}</p>

   
  </div>
</div>


<Footer />
    </>

  )
}



