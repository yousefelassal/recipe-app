export default function loading() {
  return (
    <div className="w-full mt-20 z-10 gap-5 items-center flex flex-col relative mx-auto animate-pulse p-9">
        <div className="w-screen bg-gray-300 h-36 sm:h-48 lg:mt-0 lg:w-screen lg:h-64 absolute left-0 top-0"></div>
        <div className="flex justify-start w-full gap-3 items-center mt-40 sm:mt-52 lg:mt-72 lg:px-48 sm:px-16 md:px-32 px-4">
            <div className="rounded-full w-16 h-16 overflow-hidden bg-gray-300"></div>
            <div className="flex flex-col gap-1">
                <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-48 h-1 mt-6 bg-gray-200 rounded-lg"></p>
            </div>
        </div>
        <div className="flex-1 w-full py-5 sm:mx-auto lg:text-left lg:px-48 px-4">

            <h1 className="h-2 bg-gray-300 rounded-lg w-72"></h1>

            <div className="leading-relaxed mt-3">
                <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
            </div>
        </div>
    </div>
  )
}
