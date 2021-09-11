import React from "react";

export default function SearchMotor() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-navy"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </span>
                <input
                    type="text"
                    className="py-2 text-navy rounded pl-10 focus:outline-none border-2 border-gray-300 w-full"
                    placeholder="Cari Motor"
                    autocomplete="off"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <button
                        type="submit"
                        className="bg-navy text-white py-1 px-2 rounded uppercase"
                    >
                        Cari
                    </button>
                </span>
            </div>
        </form>
    );
}
