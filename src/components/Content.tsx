import { useNavigate } from "react-router-dom";

interface Products{
    id:string,
    title:string,
    category:string,
    price:string,
    imageUrl:string
}

interface ContentProps{
    products:Products[]
}

export const Content = ({products}:ContentProps) => {
    
    const navigate = useNavigate()
    const handleProductClick = (product:Products)=>{
      navigate(`product/${product.id}`,{state:{product}})
    }
    return (
<div className="bg-white ">
        
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-6" >
        {products.map((product)=>(
      <div className="group relative" key={product.id} onClick={()=>handleProductClick(product)}>
        <img
          src={product.imageUrl}
          alt={product.title} 
          className="object-fill aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 shadow"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {product.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{[product.category]}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">Rs.{product.price}</p>
        </div>
      </div>
        ))}

      
    </div>
  
</div>

      );
      
}
