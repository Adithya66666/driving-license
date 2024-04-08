export default function PoliceHome({ userid, usertype, username }) {
    return <>
    
    <div className="w-[100%]">
        <h1 className="text-gray-500 text-xl">Welcome Officer, {username}</h1>

        <div className="flex flex-col mt-7 gap-4">
            <div className="w-[100%] p-4 bg-purple-500 rounded-lg">
                <h1 className="text-xl text-white">Quick Spot Fine</h1>
                <div className="justify-between items-center flex mt-2">
                    <p className="text-gray-200 text-sm">Quickly issue a fine by entering the driving license number</p>
                    <button className="bg-purple-900 text-white py-2 rounded-lg px-4">Issue Fine</button>
                </div>
            </div>
            <div className="w-[100%] p-4 bg-purple-400 rounded-lg">
                <h1 className="text-xl text-white">Issued Fines</h1>
                <div className="justify-between items-center flex mt-2">
                    <p className="text-gray-200 text-sm">View a list of fines and the respective statuses that were issued by you</p>
                    <button className="bg-purple-900 text-white py-2 rounded-lg px-4">View Fines</button>
                </div>
            </div>
            <div className="w-[100%] p-4 bg-purple-300 rounded-lg">
                <h1 className="text-xl text-gray-800">Driving License</h1>
                <div className="justify-between items-center flex mt-2">
                    <p className="text-gray-700 text-sm">View 12345 : Active driving license and 3425 : inactive driving licenese</p>
                    <button className="bg-purple-900 text-white py-2 rounded-lg px-4">View License</button>
                </div>
            </div>
            <div className="w-[100%] p-4 bg-purple-200 rounded-lg">
                <h1 className="text-xl text-gray-800">Profile</h1>
                <div className="justify-between items-center flex mt-2">
                    <p className="text-gray-700 text-sm">View your profile</p>
                    <button className="bg-purple-900 text-white py-2 rounded-lg px-4">Profile</button>
                </div>
            </div>
        </div>

    </div>

    </>
}