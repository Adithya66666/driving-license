export default function ELicense({ userid, usertype, username }) {
    return <>
    
    <div className="w-[100%]">
            <div className="p-8">
            <h1 className="font-bold text-xl">E Driver's License</h1>
            <div className="bg-purple-200 rounded-lg p-4 mt-6 mx-8 justify-between items-center flex flex-col">
                <div className="w-[100%] bg-blue-900 p-5 rounded-lg relative h-[180px] justify-center items-center flex">
                    <h1 className="text-gray-100 text-center text-3xl">E-License [232311]</h1>

                    <div className="absolute top-10 left-10 rounded-[50%] w-[250px] h-[250px] bg-white justify-center items-center flex">
                        <div className="absolute  rounded-[50%] w-[230px] h-[230px] bg-blue-900 justify-center items-center flex">
                            <div className="absolute  rounded-[50%] w-[210px] h-[210px] bg-white justify-center items-center flex">
                                <div className="absolute  rounded-[50%] w-[200px] h-[200px] bg-white justify-center items-center flex overflow-hidden">
                                    Image
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] flex justify-around items-end p-[50px]">
                    <div className="w-[40%]">
                        <h4 className="font-bold mb-2">Status</h4>
                        <div className="p-5 bg-green-200 flex justify-center items-center font-bold rounded-lg w-[150px]"> <i className="p-2 bg-green-700 rounded-[50%] mr-3"></i> Active</div>
                    </div>
                    <div className="flex w-[60%]">
                        <div className="w-[50%]">
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">Name</h4>
                                <h4 className="">Status</h4>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">ID Number</h4>
                                <h4 className="">Status</h4>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">License Number</h4>
                                <h4 className="">Status</h4>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">Address</h4>
                                <h4 className="">234/2, Colombo 08, Sri Lanka.</h4>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">Date of birth</h4>
                                <h4 className="">Status</h4>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">Date of issue</h4>
                                <h4 className="">Status</h4>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">Date of expiry</h4>
                                <h4 className="">Status</h4>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">Categories</h4>
                                <h4 className="">234/2, Colombo 08, Sri Lanka.</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    
    </>
}