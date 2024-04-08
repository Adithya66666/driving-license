import React, { useState } from 'react';

export default function DmtLogin(){

    const [error,setError] = useState("");
    const [isLoading,setLoading] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
          const response = await fetch('http://localhost:5000/dmt/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            })
          });
    
          const data = await response.json();
          if(response.status === 200){
            sessionStorage.setItem('userid', data._id);
            sessionStorage.setItem('usertype', "dmt");
            sessionStorage.setItem('username', data.username);
            setLoading(false);
            window.location.replace("home");
          }else{
            setError(data.message);
            setFormData({username: '',password: ''})
            setLoading(false);
          }

        } catch (error) {
          console.error('Error:', error);
          setLoading(false);
        }
    };

    return <>
        <div className="w-screen h-screen flex">
            <div className="w-[50%] h-[100%] flex flex-col bg-gray-100">
                <div className="flex px-4">
                    <img src="safeDrive.png" alt=""/>
                </div>
                <div className="h-[100%] justify-center items-center flex flex-col">
                    
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col w-[400px]">
                        <h1 className="text-4xl">DMT Log In</h1>
                        <p className="text-gray-400 text-sm mt-2 mb-5">Welcome back! Please enter your details.</p>
                        <label>DMT Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter the username"
                            value={formData.officerNumber}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-sm outline-none text-gray-600 mt-1 mb-3"
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-sm outline-none text-gray-600 mt-1 mb-3"
                        />
                        <div className="flex justify-between items-center mt-3 mb-5">
                            <p className="text-xs text-purple-800 font-bold cursor-pointer">Forgot Password</p>
                        </div>
                        <button type="submit" className="bg-purple-900 text-white p-2 rounded-lg h-[40px] justify-center items-center flex"  disabled={isLoading}>
                            { isLoading && <> <img src="loader.gif" className='w-[20px] h-[20px]' alt=""/> </> }
                            { !isLoading && <>Log In</> }
                        </button>
                        <p className='text-red-600 text-sm mt-4'>{ error }</p>
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