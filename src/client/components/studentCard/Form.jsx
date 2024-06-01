import React from "react";

const Form = () => {
    return (
        <form
            className="flex items-center justify-center min-h-screen p-9"
        // onSubmit={formSubmit}
        >
            <div className="flex sm:flex-row flex-col justify-center items-center gap-9 w-[90%]  p-5 rounded-lg shadow-lg">

                {/* ////////////---Image field---/////////////             */}

                <div className="flex items-center flex-col justify-center w-fit p-9 ">
                    <div className="rounded-md h-[260px] w-[210px] border-black border p-2">
                        <div className="rounded-md h-[240px] w-[190px] border-2  border-dotted">
                            <img
                                className="img-fluid rounded-md h-[240px] w-[190px]"
                                id="imageoutput"
                                alt=""
                            />
                        </div>
                    </div>
                    <input
                        onChange={(e) => {
                            const output = document.getElementById("imageoutput");
                            output.src = URL.createObjectURL(e.target.files[0]);
                            output.onload = function () {
                                URL.revokeObjectURL(output.src); // free memory
                            };
                        }}
                        id="file"
                        type="file"
                        name="file"
                        className="w-[210px] mt-1 border cursor-pointer rounded-lg border-black/60 p-1"
                        required
                    />

                </div>

                {/* //////////////---Student data field---//////////// */}

                <div className="w-full">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="name"
                            className="input-style peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="name"
                            className="placeHoler-animation"
                        >
                            Enter your name
                        </label>
                    </div>



                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="fatherName"
                            className="input-style peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="fatherName"
                            className="placeHoler-animation"
                        >
                            Father Name
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="phoneNumber"
                            className="input-style peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="phoneNumber"
                            className="placeHoler-animation"
                        >
                            Phone Number
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="department"
                            className="input-style peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="department"
                            className="placeHoler-animation"
                        >
                            Department
                        </label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                name="joinDate"
                                className="input-style peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="date"
                                className="placeHoler-animation"
                            >
                                Join Date
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="rollNumber"
                                className="input-style peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="rollNumber"
                                className="placeHoler-animation"
                            >
                                Roll Number
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="session"
                                className="input-style peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="session"
                                className="placeHoler-animation"
                            >
                                Session (Ex. 2020-2024)
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name=""
                                className="input-style peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor=""
                                className="placeHoler-animation"
                            >
                                Optional (any message)
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mr-2 mt-1 text-white bg-black/90 hover:bg-black/75 active:scale-95 transition-all font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;