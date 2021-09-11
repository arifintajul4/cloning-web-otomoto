import React from "react";
import Collapse from "./Collapse";

export default function Filter() {
    return (
        <form>
            <div className="rounded border border-navy pb-5">
                <h1 className="bg-navy text-white font-semibold py-2 px-4">
                    Filter
                </h1>
                <div className="px-4 mt-2 border-b-4 border-gray-300 pb-4">
                    <label className="block text-navy font-bold mb-2">
                        Harga
                    </label>
                    <input
                        min={0}
                        type="number"
                        className="rounded w-full focus:outline-none border text-navy font-bold border-navy py-2 px-4 mb-2"
                        placeholder="Harga Minimal"
                    />
                    <input
                        min={0}
                        type="number"
                        className="rounded w-full focus:outline-none border text-navy font-bold border-navy py-2 px-4"
                        placeholder="Harga Maximal"
                    />
                </div>
                <div className="px-4 mt-2 border-b-4 border-gray-300 pb-4">
                    <Collapse title="Lokasi" className="text-gray-700">
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Jakarta
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Kota Bekasi
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Jakarta Selatan
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Jakarta Barat
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Kota Tanggerang
                                </label>
                            </li>
                        </ul>
                    </Collapse>
                </div>
                <div className="flex justify-end mt-4 mr-4">
                    <button className="font-bold py-2 px-4 bg-blue-700 text-white rounded">
                        Filter
                    </button>
                </div>
            </div>
        </form>
    );
}
