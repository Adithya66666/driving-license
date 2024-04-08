export default function IssueFine({ userid, usertype, username }) {
    return <>
        <div className="w-[100%]">
        <div className="p-8 flex flex-col h-[100%]">
          <h1 className="font-bold text-xl">Issue Spot Fine</h1>
          <div className="rounded-lg overflow-hidden mt-6 w-[100%] bg-white px-20 py-8">
            <h1 className="text-xl mb-5">Issue Spot Fine</h1>
            <div className="flex">
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's License Number</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex gap-10 mt-4">
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's License Number</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's License Number</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex gap-10 mt-4">
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's License Number</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's License Number</h1>
                    <input type="text" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2" placeholder="XX00000" />
                </div>
            </div>
            <div className="flex mt-4">
                <div className="w-[100%]">
                    <h1 className="text-sm">Driver's License Number</h1>
                    <textarea name="description" id="description" cols="30" rows="10" className="outline-none border border-gray-300 rounded-lg p-2 w-[100%] mt-2 resize-none" placeholder="Enter a description..."></textarea>
                </div>
            </div>

            <div className="flex mt-4 justify-end items-center">
                <button type="button" className="bg-purple-900 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">Issue Fine</button>
            </div>

          </div>
        </div>
    </div>
    </>
}