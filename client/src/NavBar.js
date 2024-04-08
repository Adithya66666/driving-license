import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faCog,faHand,faSignOut,faCreditCard,faMoneyCheck,faMoneyBill,faHistory,faAdd,faCreditCardAlt,faSearch,faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function NavBar({ userid, usertype, username }) {

    const handleLogout = () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('userid');
        sessionStorage.removeItem('usertype');
        window.location.replace("");
    };

    return<>
    
        <div className="w-[320px] h-[100%] bg-white flex flex-col justify-between items-normal">

            <div className="h-[100%]">
                <div className='justify-center items-center flex'>
                    <img src="safeDrive.png" className='ml-[-20px]' alt=""/>
                </div>
                <div className="mt-5 flex flex-col gap-2 px-6">
                    { usertype === "driver" && <>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faHome} /></i> <Link to="/home">Home</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faCreditCard} /></i><Link to="/elicense">E-License</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faMoneyCheck} /></i><Link to="/tobepaid">To be paid</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faMoneyBill} /></i> <Link to="/payments">Payment History</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faHistory} /></i> <Link to="/offensehistory">Offense History</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faUser} /></i> <Link to="/profile">Profile</Link> </div>
                    </> }
                    { usertype === "dmt" && <>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faHome} /></i> <Link to="/home">Home</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faAdd} /></i> <Link to="/requests">Requests</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faCreditCardAlt} /></i> <Link to="/createElicense">Create E-Licesnse</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faSearch} /></i> <Link to="/drivers">Search Driver</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faUser} /></i> <Link to="/profile">Profile</Link> </div>
                    </> }
                    { usertype === "officer" && <>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faHome} /></i> <Link to="/home">Home</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faUser} /></i> <Link to="/officers">Police Officers</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faList} /></i> <Link to="/viewfine">View Fines</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faAdd} /></i> <Link to="/issuefine">Issue Fines</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faHistory} /></i> <Link to="/spotfinehistory">Spot Fine History</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faCreditCard} /></i> <Link to="/licenseholders">License Holder</Link></div>
                        <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faUser} /></i> <Link to="/profile">Profile</Link> </div>
                    </> }
                    
                </div>
            </div>
        
            <div className="w-[100%]">
                <div className="mb-8 flex flex-col gap-2 px-6">
                    <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faHand} /></i>Support</div>
                    <div className="flex p-1 cursor-pointer justify-start items-center"><i className="mr-2 text-gray-600"><FontAwesomeIcon className='w-[30px]' icon={faCog} /></i> Settings</div>
                    <div className="justify-between items-center flex p-1"> 
                        <i className="mr-2 text-gray-200 rounded-[50%] w-[70px] h-[40px] justify-center items-center flex bg-gray-600 overflow-hidden">
                            <img src="user.png" alt="" className='w-[50px] h-[50px]' />
                        </i>
                        <p className="w-[100%] mx-3 cursor-pointer text-sm">{username}</p> 
                        <i className="cursor-pointer text-gray-600" onClick={handleLogout}>
                            <FontAwesomeIcon className='w-[30px]' icon={faSignOut} />
                        </i>
                    </div>
                </div>
            </div>
        </div>
    
    </>
}