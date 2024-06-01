import { FaSearch } from "react-icons/fa";

const LandingPage = () => {
    return (
        <div className='min-h-screen'>
            <div className="flex flex-col justify-center items-center ">
                <div className="w-full flex justify-center p-9 gap-3">
                    <div className="w-[85%] rounded-full border border-black/30 flex overflow-hidden justify-center items-center">
                        <FaSearch className="text-xl px-3 border-r w-fit ml-3 text-black/70 border-black cursor-pointer" />
                        <input type="text" className='text-lg w-full p-3 rounded-full px-3 text-black/70 focus:outline-0' placeholder='Search students...' />
                    </div>
                    <button className='hover:bg-black sm:w-fit  sm:px-5 px-1 py-3 bg-black/80 text-white rounded-full'>Creata new card</button>
                </div>

                <div className="w-[92%] border border-black/50 rounded-lg sm:p-6 p-3">
                    <table>

                        <tr className="text-xl">

                            <th>Roll NO</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Session</th>
                        </tr>
                        <tr>

                            <td>180</td>
                            <td>Hamza Zahid</td>
                            <td>Computer Science</td>
                            <td>2020-2024</td>
                        </tr>
                        <tr>

                            <td>155</td>
                            <td>Danish Nazir</td>
                            <td>Computer Science</td>
                            <td>2020-2024</td>
                        </tr>
                        <tr>

                            <td>172</td>
                            <td>Shoaib Imran</td>
                            <td>Computer Science</td>
                            <td>2020-2024</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LandingPage