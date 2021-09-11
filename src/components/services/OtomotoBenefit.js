import React from "react";
import timeIcon from "../../assets/icon/time.png";
import tagIcon from "../../assets/icon/tag.png";
import rpIcon from "../../assets/icon/rp.png";

export default function OtomotoBenefit() {
    return (
        <div className="mb-5">
            <div className="w-full">
                <h1 className="text-3xl font-bold text-gray-700 text-center my-10">
                    Keuntungan Menggunakan OTOMOTO
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold text-xl text-center text-gray-700 mb-5">
                            Cara Lama
                        </h3>
                        <ul className="bg-gray-200 py-5 px-10 text-center block md:hidden">
                            <li className="mb-5">Butuh Waktu Lama</li>
                            <li className="mb-5">
                                Cek & bandingkan di berbagai marketplace atau
                                dealer kendaraan bekas
                            </li>
                            <li>Harga tidak menentu tergantung penjual</li>
                        </ul>
                        <ul className="text-center hidden md:block">
                            <li className="mb-16 py-5 px-10 h-20 flex items-center justify-center bg-gray-200 relative">
                                Butuh waktu lama
                                <div className="absolute -right-16 bg-white p-2 shadow rounded border border-gray-200">
                                    <img src={timeIcon} className="w-20" />
                                </div>
                            </li>
                            <li className="mb-16 py-5 px-10 h-20 flex items-center justify-center bg-gray-200 relative">
                                Cek & bandingkan di berbagai marketplace atau
                                dealer kendaraan bekas
                                <div className="absolute -right-16 bg-white p-2 shadow rounded border border-gray-200">
                                    <img src={tagIcon} className="w-20" />
                                </div>
                            </li>
                            <li className="mb-16 py-5 px-10 h-20 flex items-center justify-center bg-gray-200 relative">
                                Harga tidak menentu tergantung penjual
                                <div className="absolute -right-16 bg-white p-2 shadow rounded border border-gray-200">
                                    <img src={rpIcon} className="w-20" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl text-center text-gray-700 mb-5">
                            Cara OTOMOTO
                        </h3>
                        <ul className="bg-gray-200 py-5 px-10 text-center block md:hidden">
                            <li className="mb-5">Cepat dan terpercaya</li>
                            <li className="mb-5">
                                Cukup di aplikasi OTOMOTO Langsung dari HP
                            </li>
                            <li>
                                Harga berdasarkan data analisa pasar dan
                                algoritma otomatis yang setiap saat mengikuti
                                perkembangan harga pasar
                            </li>
                        </ul>
                        <ul className="text-center hidden md:block">
                            <li className="mb-16 py-5 px-10 h-20 flex items-center justify-center bg-gray-200">
                                Cepat dan terpercaya
                            </li>
                            <li className="mb-16 py-5 px-10 h-20 flex items-center justify-center bg-gray-200">
                                Cukup di aplikasi OTOMOTO Langsung dari HP
                            </li>
                            <li className="mb-16 py-5 px-10 h-20 flex items-center justify-center bg-gray-200">
                                Harga berdasarkan data analisa pasar dan
                                algoritma otomatis yang setiap saat mengikuti
                                perkembangan harga pasar
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
