export default function LicenseHolder({ userid, usertype, username }) {
    return <>
        <div className="w-[100%]">
        <div className="p-8 flex flex-col">
          <h1 className="font-bold text-xl">License Holder</h1>
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

            <div className="flex justify-between items-center w-[100%] bg-white rounded-lg p-2">
                <h1 className="mx-4">Offense History</h1>
                <button type="button" className="bg-purple-900 hover:bg-purple-700 text-white py-2 px-4 mx-4 rounded-lg">+ Add New Offense</button>
            </div>

            <div className="rounded-lg overflow-hidden mt-6 w-[100%]">
                <table className="min-w-full divide-y divide-gray-200 w-[100%]">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Demerits points</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Time Remaining</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 w-[100%]">
                        <tr className="cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center justify-center items-center flex"><div className="bg-green-300 text-center rounded-lg w-[50px] text-green-700 font-bold">PAID</div></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5 days</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center justify-center items-center flex"><div className="bg-green-300 text-center rounded-lg w-[50px] text-green-700 font-bold">PAID</div></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5 days</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center justify-center items-center flex"><div className="bg-green-300 text-center rounded-lg w-[50px] text-green-700 font-bold">PAID</div></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5 days</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                <button className="border border-gray-300 py-2 px-4 min-w-[100px] rounded-lg cursor-pointer">Previous</button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center" colspan="5">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="w-[30px] h-[30px] flex justify-center items-center rounded-lg bg-gray-200 text-gray-500">1</div>
                                    <div className="w-[30px] h-[30px] flex justify-center items-center rounded-lg bg-gray-200 text-gray-500">1</div>
                                    <div className="w-[30px] h-[30px] flex justify-center items-center rounded-lg bg-gray-200 text-gray-500">1</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                <button className="border border-gray-300 py-2 px-4 min-w-[100px] rounded-lg cursor-pointer">Next</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>

          </div>

        </div>
    </div>
    </>
}