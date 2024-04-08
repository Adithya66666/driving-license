export default function PaymentHistory({ userid, usertype, username }) {
    return <>
        <div className="w-[100%]">
        <div className="p-8 flex flex-col h-[100%]">
          <h1 className="font-bold text-xl">Payment History</h1>
          <div className="rounded-lg overflow-hidden mt-6 w-[100%]">
            <table className="min-w-full divide-y divide-gray-200 w-[100%]">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Date of offense</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Date of payment</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 w-[100%]">
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-gray-700">Rs 5000.00</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Jan 10, 2024</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Jan 10, 2024</td>
                    </tr>
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                            <button className="border border-gray-300 py-2 px-4 min-w-[100px] rounded-lg cursor-pointer">Previous</button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center" colspan="2">
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