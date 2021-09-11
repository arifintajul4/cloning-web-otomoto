import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";

export default function Header({
    isTransparant = true,
    showContact = false,
    activeMenu,
}) {
    let listener = null;
    const [scrollState, setScrollState] = useState("top");
    const [isActive, setIsActive] = useState(false);

    console.log(isTransparant);

    useEffect(() => {
        listener = document.addEventListener("scroll", (e) => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
                if (scrollState !== "amir") {
                    setScrollState("amir");
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top");
                }
            }
        });
        return () => {
            document.removeEventListener("scroll", listener);
        };
    }, [scrollState]);

    return (
        <div
            className={`fixed top-0 w-full z-50 ${
                scrollState === "amir" || isTransparant === false
                    ? "bg-white text-navy shadow-lg"
                    : "md:text-white"
            }`}
        >
            <div className="container md:container-lg flex flex-col md:flex-row">
                <div className="mr-0 md:mr-10 py-4 flex justify-between">
                    <div>
                        <img
                            src={
                                scrollState === "amir" ||
                                isTransparant === false
                                    ? logoDark
                                    : logo
                            }
                            alt="Otomoto"
                        />
                    </div>
                    <div className="block md:hidden">
                        <button
                            type="button"
                            className="bg-white p-2 rounded border-2 border-gray-300"
                            onClick={() => setIsActive(!isActive)}
                        >
                            {!isActive ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex justify-between w-full items-center">
                    <ul
                        className={`uppercase flex-col md:flex-row bg-white md:bg-transparent w-full md:w-auto p-4 pt-0 md:p-0  transition-all transform duration-300 ${
                            isActive ? "flex" : "hidden md:flex"
                        }`}
                    >
                        <li className="mr-5 py-2 hover:text-green">
                            <NavLink to="/">Solusi</NavLink>
                        </li>
                        <li
                            className={`mr-5 py-2 hover:text-green ${
                                activeMenu === "jubel" &&
                                "border-b-2 border-green"
                            }`}
                        >
                            <NavLink to="/jubelmoto">jubelmoto</NavLink>
                        </li>
                        <li className="mr-5 py-2 hover:text-green">
                            <NavLink to="/mitra">mitra</NavLink>
                        </li>
                        <li className="mr-5 py-2 hover:text-green">
                            <NavLink to="/pertanyaan">pertanyaan</NavLink>
                        </li>
                        <li className="mr-5 py-2 hover:text-green">
                            <NavLink to="/tips">tips</NavLink>
                        </li>
                    </ul>
                    {showContact && (
                        <div className="bg-navy p-2 text-center hidden md:block text-white">
                            <h6>Kontak JubelMoto</h6>
                            <p className="font-bold">0813 8777 7876</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
