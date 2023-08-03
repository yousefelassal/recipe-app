export default function loading() {
    return (
      <section className="pt-20">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-12 py-10 mx-auto animate-pulse">
            <h1 className="w-48 h-2 bg-gray-200 rounded-lg "></h1>
  
            <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
            <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg sm:w-80 "></p>
  
            <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-400/80 pt-6 sm:mt-8 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {[...Array(8)].map((_, index) => (
                <div key={index} className="flex flex-col w-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse">
                    <div className="w-full h-56 bg-gray-300"></div>

                    <div className="w-full p-4 md:p-4">
                        <p className="w-16 h-1 mt-4 bg-gray-200 rounded-lg"></p>
                        <h1 className="w-40 h-2 bg-gray-200 rounded-lg"></h1>

                        <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg"></p>
                        <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg"></p>
                        <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg"></p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    )
  }
  