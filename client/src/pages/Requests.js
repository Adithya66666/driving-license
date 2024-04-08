export default function Requests({ userid, usertype, username }) {
    return<>
        <div className="w-[100%]">
        <div className="p-8">
          <h1 className="font-bold text-xl">Requests</h1>
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
            <h1 className="px-8">Received Requests</h1>
            <table className="min-w-full divide-y divide-gray-200 mt-6">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">DL #</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">B34352</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">Adithya Bandara</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">adithyabandara01@gmail.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">pending</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm"><button type="button" class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">View</button></td>
                    </tr>
                    <tr class="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">B34352</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">Adithya Bandara</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">adithyabandara01@gmail.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">pending</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm"><button type="button" class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">View</button></td>
                    </tr>
                    <tr class="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">B34352</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">Adithya Bandara</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">adithyabandara01@gmail.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">pending</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm"><button type="button" class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">View</button></td>
                    </tr>
                </tbody>
            </table>
            
          </div>
        </div>
    </div>
    </>
}