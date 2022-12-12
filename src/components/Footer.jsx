const Footer = () => {
    return(
        <footer className="p-4 mt-24 bg-gray-50 sm:p-6 dark:bg-current">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <p className="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/1821/1821283.png" className="mr-3 h-8" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lasteinsa</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://www.flaticon.com/" className="hover:underline">Flat Icon</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                                <li>
                                    <a href="https://fontawesome.com/" className="hover:underline">Fontawesome</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 
                        Build with React + Tailwind
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer