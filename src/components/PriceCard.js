import React, { useState } from "react";
import logo from "../assets/logo.png";
import * as Button from "./Button";

export default function PriceCard() {
    const [selectedItem, setSelectedItem] = useState("motor");

    return (
        <div>
            <ul className="grid grid-cols-2 border-b-2 border-gray-800">
                <li
                    className={`rounded-tl ${
                        selectedItem === "motor"
                            ? "text-white bg-navy"
                            : "text-navy bg-gray-100 border-t border-l border-gray-200"
                    }`}
                >
                    <button
                        className="flex items-center justify-center py-4 w-full font-bold"
                        onClick={() => setSelectedItem("motor")}
                    >
                        <span className="material-icons mr-2">two_wheeler</span>
                        Motor
                    </button>
                </li>
                <li
                    className={`rounded-tr ${
                        selectedItem !== "motor"
                            ? "text-white bg-navy"
                            : "text-navy bg-gray-100 border-t border-r border-gray-200"
                    }`}
                >
                    <button
                        className="flex items-center justify-center py-4 w-full font-bold"
                        onClick={() => setSelectedItem("mobil")}
                    >
                        <span className="material-icons mr-2">drive_eta</span>
                        Mobil
                    </button>
                </li>
            </ul>
            <div className="bg-navy p-5 rounded-bl rounded-br">
                <form>
                    <div className="mb-2">
                        <select
                            name="merek"
                            className="w-full rounded p-2 focus:outline-none"
                        >
                            <option selected disabled>
                                Merek
                            </option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <select
                            name="seri"
                            className="w-full rounded p-2 focus:outline-none"
                        >
                            <option selected disabled>
                                Seri
                            </option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <select
                            name="model"
                            className="w-full rounded p-2 focus:outline-none"
                        >
                            <option selected disabled>
                                Model
                            </option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <select
                            name="tahun"
                            className="w-full rounded p-2 focus:outline-none"
                        >
                            <option selected disabled>
                                Tahun
                            </option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <select
                            name="provinsi"
                            className="w-full rounded p-2 focus:outline-none"
                        >
                            <option selected disabled>
                                Provinsi
                            </option>
                        </select>
                    </div>
                    <Button.primary className="mt-3 mb-10">
                        dapatkan harga
                    </Button.primary>
                    <div className="flex justify-center mb-6">
                        <div>
                            <p className="text-white text-center mb-2">
                                Powered by :
                            </p>
                            <img src={logo} alt="Logo Otomoto" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
