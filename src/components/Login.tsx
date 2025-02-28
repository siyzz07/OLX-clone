
import guitar from '../assets/loginEntryPointPost.webp'
import googleImg from '../assets/google.png'
import phoneImg from '../assets/phone.jpg'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/setup'

type popupProp={
    setLogin:any
}

export const Login = (props:popupProp) => {


    const googleSignin = async()=>{
        try {
            await signInWithPopup(auth,googleProvider)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-zinc-900 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-96 sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1 className='text-end font-semibold text-3xl cursor-pointer' onClick={()=>props?.setLogin(false)}>X</h1>
          <div className="sm:flex sm:items-start">
            
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

              <div className="mt-2">
                <img src={guitar} className='items-center justify-center w-25 ml-27'/>
                <p className="text-base font-medium text-center">Help us to become one of the safest places <br /> to buy and sell !</p>
              </div>

              <div className='flex border-2 border-black p-2 rounded-md items-center mt-12'>
                <img src={phoneImg} className='w-10 h-10'/>
                <h1 className='font-semibold ml-5'>Continue with phone</h1>
              </div>

              <div onClick={googleSignin}  className='flex border border-gray-300 p-2 rounded-md items-center mt-12'>
                <img src={googleImg} className='w-10 h-10'/>
                <h1 className='text-center ml-7'>Continue with google</h1>
              </div>
                <h1 className='text-center mt-4'>OR</h1>
                <h1 className='text-center mt-4 font-semibold underline cursor-pointer'>login with Email</h1>
                <h1 className='text-center mt-15 text-gray-400 text-xs '>All your personal details are safe with us.</h1>
                <h1 className='text-center mt-4 text-gray-400 text-xs'>If you continue, you are accepting <span className='text-blue-500'> OLX Terms and <br />Conditions and Privacy Policy </span> </h1>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

  )
}
