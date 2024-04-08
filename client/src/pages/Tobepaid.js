export default function Register({ userid, usertype, username }) {
    return <>
        <div className="w-[100%]">
        <div className="p-8">
          <h1 className="font-bold text-xl">To be paid</h1>
          <div className="bg-white rounded-lg py-6 mt-6">
            <div className="flex justify-between items-center px-8">
                <h1>Received Requests</h1>
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-6">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Offense #</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Demerits Points</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Time Remaining</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center"><button type="button" class="bg-green-300 hover:bg-green-400 text-green-700 font-bold py-2 px-4 rounded-lg">Pay</button></td>
                    </tr>
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center"><button type="button" class="bg-green-300 hover:bg-green-400 text-green-700 font-bold py-2 px-4 rounded-lg">Pay</button></td>
                    </tr>
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center"><button type="button" class="bg-green-300 hover:bg-green-400 text-green-700 font-bold py-2 px-4 rounded-lg">Pay</button></td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                            <button className="border border-gray-300 py-2 px-4 min-w-[100px] rounded-lg cursor-pointer">Previous</button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center" colSpan="6">
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
    </>
}