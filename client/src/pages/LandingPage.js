import { faArrowDown, faSign, faSignIn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function LandingPage(){
    return <>
    
        <div className="w-[100%] h-[100%]  overflow-y-scroll flex flex-col">
            <nav className="bg-white p-3 justify-between items-center flex">
                <img src="safeDrive.png" className="mt-[-20px]" alt=""/>
                <div>
                    <button className="border border-gray-300 rounded-lg p-2 mr-4 px-5 hover:bg-purple-900 hover:text-white transition-all duration-200"><Link to="/register">Create Your E-License</Link></button>
                </div> 
            </nav>


            <div className="h-[100%] justify-center items-center flex flex-col">
                <div className="text-center">
                    <h1 className="text-purple-900 text-6xl font-bold">Safe Drive,</h1><p className="text-gray-800 text-3xl font-bold">E-Driver's license in Sri Lanka</p>
                </div>
                <button className="rounded-lg p-4 mr-4 px-8 bg-purple-900 text-white transition-all duration-200 my-5">Get Started <i className="ml-2"><FontAwesomeIcon icon={faArrowDown} /></i></button>
                <div class="w-[80%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <Link to="/driverLogin">
                        <div>
                            <div class="h-[250px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <i><FontAwesomeIcon icon={faSignIn} className="text-white text-4xl mb-3" /></i>
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Login as a Driver</h5>
                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Driver's login</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/policeLogin">
                        <div>
                            <div class="h-[250px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <i><FontAwesomeIcon icon={faSignIn} className="text-white text-4xl mb-3" /></i>
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Police Officer's Login</h5>
                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Officer's login</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dmtLogin">
                        <div>
                            <div class="h-[250px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <i><FontAwesomeIcon icon={faSignIn} className="text-white text-4xl mb-3" /></i>
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">DMT Login</h5>
                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">DMT login</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/register">
                        <div>
                            <div class="h-[250px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <i><FontAwesomeIcon icon={faSignIn} className="text-white text-4xl mb-3" /></i>
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Apply for your E-License</h5>
                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Apply for your license</p>
                            </div>
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>

    </>
}