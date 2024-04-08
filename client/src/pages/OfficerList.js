export default function OfficerList({ userid, usertype, username }) {
    return <>
        <div className="w-[100%]">
        <div className="p-8">
          <h1 className="font-bold text-xl">Police Officers</h1>
          <div className="flex w-[100%] justify-between items-center mt-6">
            <p className="text-m text-gray-500"></p>
            <div className="flex">
                <div className="border border-gray-300 rounded-lg py-2 px-4 bg-white mr-2">
                    <form method="POST">
                        <i className="pr-2">S</i>
                        <input type="text" className="outline-none text-s text-gray-400 w-[300px]" placeholder="Search Registration Number #"/>
                    </form>
                </div>
                <button type="button" className="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">Search</button>
            </div>
            
          </div>
          <div className="bg-white rounded-lg py-6 mt-6">
            <h1 className="px-8">Police Officers</h1>
            <table className="min-w-full divide-y divide-gray-200 mt-6">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Police Registration Number</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Officer Type</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Adithya Bandara</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">B34352</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">OIC</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                            <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-500 py-2 px-4 rounded-lg">Delete</button>
                            <button type="button" className="bg-purple-900 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">View</button>
                        </td>
                    </tr>
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Adithya Bandara</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">B34352</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">OIC</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                            <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-500 py-2 px-4 rounded-lg">Delete</button>
                            <button type="button" className="bg-purple-900 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">View</button>
                        </td>
                    </tr>
                    <tr className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Adithya Bandara</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">B34352</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2024/04/02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">OIC</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                            <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-500 py-2 px-4 rounded-lg">Delete</button>
                            <button type="button" className="bg-purple-900 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">View</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            
          </div>
        </div>
    </div>
    </>
}