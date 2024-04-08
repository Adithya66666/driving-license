export default function CreateELicense({ userid, usertype, username }) {
    return <>
        <div className="w-[100%]">
        <div className="p-8 flex flex-col h-[100%]">
          <h1 className="font-bold text-xl">Create E-License</h1>
          <div className="rounded-lg overflow-hidden mt-6 w-[100%] bg-white px-20 py-8">
            <h1 className="text-xl mb-5">Create new E Driving License</h1>
            <div className="flex">
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's License Number</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex gap-10 mt-4">
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's Name</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's Email</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex gap-10 mt-4">
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's Username</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's Status</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex gap-10 mt-4">
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's Address</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's NIC</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex gap-10 mt-4">
                <div className="w-[100%]">
                    <h1 className="text-sm">Date of bith</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's NIC</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex gap-10 mt-4">
                <div className="w-[100%]">
                    <h1 className="text-sm">Image</h1>
                    <input type="file" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2"/>
                </div>
                <div className="w-[100%]">
                    <h1 className="text-sm">Categories</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex mt-4 justify-end items-center">
                <button type="button" className="bg-purple-900 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">Create</button>
            </div>

          </div>
        </div>
    </div>
    </>
}