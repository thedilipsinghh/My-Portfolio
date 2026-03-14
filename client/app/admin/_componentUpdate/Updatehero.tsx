"use client"
import React from "react"

const UpdateHero = () => {
    return (
        <section id="#updatehero" className="flex justify-center items-center py-14 bg-gray-100">

            <div className="w-full max-w-xl bg-white shadow-xl rounded-xl border border-gray-300 p-8">

                <h2 className="text-2xl font-bold mb-6 text-black">
                    Update Hero Section
                </h2>

                <form className="flex flex-col gap-5">s

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-black font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter new name"
                            className="border border-gray-400 text-black placeholder-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Title */}
                    <div className="flex flex-col gap-1">
                        <label className="text-black font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter new title"
                            className="border border-gray-400 text-black placeholder-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Profile Image */}
                    <div className="flex flex-col gap-1">
                        <label className="text-black font-medium">
                            Profile Image
                        </label>
                        <input
                            type="file"
                            className="border border-gray-400 text-black rounded-lg px-3 py-2 bg-white"
                        />
                    </div>

                    {/* Resume */}
                    <div className="flex flex-col gap-1">
                        <label className="text-black font-medium">
                            Resume
                        </label>
                        <input
                            type="file"
                            className="border border-gray-400 text-black rounded-lg px-3 py-2 bg-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-3 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Update Hero
                    </button>

                </form>

            </div>

        </section>
    )
}

export default UpdateHero