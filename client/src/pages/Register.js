import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register({ userid, usertype, username }) {

        const [formData, setFormData] = useState({
          name: '',
          dlNumber: '',
          cdlNumber: '',
          email: '',
          phone: ''
        });
      
        const [isLoading, setIsLoading] = useState(false);
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          setIsLoading(true);
          //await new Promise(resolve => setTimeout(resolve, 2000));
          console.log(formData);
          
          setFormData({
            name: '',
            dlNumber: '',
            cdlNumber: '',
            email: '',
            phone: ''
          });
          setIsLoading(false);
        };
      
        const handleInputChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };

    return <>
    <div className="w-screen h-screen flex">
        <div className="w-[50%] h-[100%] flex flex-col bg-gray-100">
            <div className="flex px-4">
                <img src="safeDrive.png" alt=""/>
            </div>
            <div className="h-[100%] justify-center items-center flex flex-col">
                <form onSubmit={handleSubmit} method="POST">
                    <div className="flex flex-col w-[400px]">
                        <h1 className="text-4xl">Request</h1>
                        <p className="text-gray-400 text-sm mt-2 mb-5">Request your E-Driving license from here.</p>
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-sm outline-none text-gray-600 mt-1 mb-3" disabled={isLoading}/>
                        <label>Driver's license number</label>
                        <input type="text" name="dlNumber" placeholder="Enter your driver's license number" value={formData.dlNumber} onChange={handleInputChange} className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-sm outline-none text-gray-600 mt-1 mb-3" disabled={isLoading}/>
                        <label>Confirm Driver's license number</label>
                        <input type="text" name="cdlNumber" placeholder="Confirm your driver's license number" value={formData.cdlNumber} onChange={handleInputChange} className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-sm outline-none text-gray-600 mt-1 mb-3" disabled={isLoading}/>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-sm outline-none text-gray-600 mt-1 mb-3" disabled={isLoading}/>
                        <label>Phone Number</label>
                        <input type="text" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-sm outline-none text-gray-600 mt-1 mb-3" disabled={isLoading}/>
                        <div className="flex justify-between items-center mt-3 mb-5">
                        <p className="text-xs text-gray-500 cursor-pointer"><Link to="/driverlogin">Already have an account? Login</Link></p>
                        </div>
                        <button type="submit" className="bg-purple-900 text-white p-2 rounded-lg justify-center items-center flex h-[40px]" disabled={isLoading}>
                        {!isLoading && <>Request</>}
                        {isLoading && (
                            <>
                            <img src="loader.gif" className="w-[20px] h-[20px]" alt="Loading"/>
                            </>
                        )}
                        </button>
                    </div>
                    </form>
            </div>
            <div className="flex p-4 text-gray-400 text-sm">&copy; 2024. All rights reserved.</div>
        </div>
        <div className="w-[50%] h-[100%] bg-black justify-center items-center flex">
            <img src="driving.png" alt="" className="h-[100%] w-[300%]"/>
        </div>
    </div>
</>
}