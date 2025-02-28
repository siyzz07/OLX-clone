
import ss from '../assets/Screenshot 2025-02-12 111759.png'
export const Footer = () => {
  return (
    <div>
    <div className="flex justify-evenly mt-4 bg-gray-200 h-40 p-5">
        <div className="text-start">
            <h1 className="font-medium ">Popular Locations</h1>
            <h3 className="text-xs pt-2">Kolkata</h3>
            <h3  className="text-xs">Mumbai</h3>
            <h3  className="text-xs">Chennai</h3>
            <h3  className="text-xs">Pune</h3>
        </div>

        <div>
            <h1 className="font-medium ">Trending Locations</h1>
            <h3 className="text-xs pt-2">Bhubaneshwar</h3>
            <h3 className="text-xs">Hyderabad</h3>
            <h3 className="text-xs">Chandigarh</h3>
            <h3 className="text-xs">Nashik</h3>
        </div>
        <div>
            <h1 className="font-medium ">About Us</h1>
            <h3 className="text-xs ">Tech@OLX</h3>
        </div>

        <div>
            <h1 className="font-medium ">OLX</h1>
            <h3 className="text-xs ">Blog</h3>
            <h3 className="text-xs ">Help</h3>
            <h3 className="text-xs ">Sitemap</h3>
            <h3 className="text-xs ">Legal & Privacy information</h3>
            <h3 className="text-xs ">Vulnerability Disclosure Program</h3>
        </div>

        <div>
            <h1 className="font-medium ">Follow Us</h1>
        </div>
    </div>

    <div className="bg-[#062f2f] h-50">
        <div>
            <img src={ss} />
        </div>
    </div>
    </div>
    
  )
}
