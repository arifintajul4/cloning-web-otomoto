import React from "react";
import Partner from "./Partner";

export default function Offer() {
    return (
        <div className="py-10 md:px-24 md:-ml-48 md:-mr-48">
            <h1 className="text-gray-700 my-5 md:text-3xl text-xl font-bold text-center">
                Penawaran OTOMOTO Indonesia
            </h1>
            <table class="table-auto w-full border border-gray-800 border-collapse text-center">
                <tr className="bg-gray-700 text-white">
                    <td className="border border-gray-800">Jenis Pinjaman</td>
                    <td className="border border-gray-800">Bunga per Bulan</td>
                    <td className="border border-gray-800">Minimum Pinjaman</td>
                    <td className="border border-gray-800">Tenor</td>
                </tr>
                <tr>
                    <td className="border border-gray-800">
                        Jaminan BPKB Motor
                    </td>
                    <td className="border border-gray-800">Mulai 1.4%</td>
                    <td className="border border-gray-800">2 Juta</td>
                    <td className="border border-gray-800">6-36 Bulan</td>
                </tr>
                <tr>
                    <td className="border border-gray-800">
                        Jaminan BPKB Mobil
                    </td>
                    <td className="border border-gray-800">Mulai 0.85%</td>
                    <td className="border border-gray-800">10 Juta</td>
                    <td className="border border-gray-800">12-60 Bulan</td>
                </tr>
            </table>
            <Partner />
        </div>
    );
}
