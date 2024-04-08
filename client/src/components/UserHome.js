import ELicense from "./ELicense"

export default function UserHome({ userid, usertype, username }) {
    return <>
        <div className="w-[100%]">
            <div className="p-8">
            <h1 className="font-bold text-xl">Welcome back, {username}</h1>
            <div className="p-5 rounded-lg bg-white mt-6">
                <p className="text-gray-500">Accumulated Demerit Points</p>
                <h1 className="text-4xl font-bold my-2">55</h1>
            </div>
            <div className="flex w-[100%] justify-between items-center mt-6">
                <select name="status" id="status" className="border border-gray-300 py-2 px-4 rounded-lg">
                    <option value="None">Filter By Status</option>
                </select>
                <div className="border border-gray-300 rounded-lg py-2 px-4 bg-white">
                    <form method="POST">
                        <i className="pr-2">S</i>
                        <input type="text" className="outline-none text-s text-gray-400" placeholder="Search"/>
                    </form>
                </div>
            </div>
            <div className="bg-white rounded-lg py-6 mt-6">
                <div className="flex justify-between items-center px-8">
                    <h1>Fines</h1>
                    <button type="button" className="bg-purple-900 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">Pay All</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200 mt-6">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Offense</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center"><button type="button" className="bg-green-300 hover:bg-green-400 text-green-700 font-bold py-2 px-4 rounded-lg">Pay</button></td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center"><button type="button" className="bg-green-300 hover:bg-green-400 text-green-700 font-bold py-2 px-4 rounded-lg">Pay</button></td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Ella, Sri Lanka</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">#343434</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Rs 5000.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center"><button type="button" className="bg-green-300 hover:bg-green-400 text-green-700 font-bold py-2 px-4 rounded-lg">Pay</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>

            <ELicense userid={userid} usertype={usertype} username={username} />

        </div>
    </>
}