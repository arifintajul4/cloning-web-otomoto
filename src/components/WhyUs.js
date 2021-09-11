import React from "react";
import TukangImg from "../assets/tukang.jpg";

export default function WhyUs() {
    const data = [
        "Aplikasi yang memudahkan Anda mengurus kebutuhan motor",
        "Mitra Bengkel dan Mekanik Berkualitas",
        "Informasi yang akurat dan terpercaya",
        "Proses kerja yang sistematik",
        "Inovasi teknologi terdepan",
    ];
    return (
        <div className="container md:container-lg mb-10">
            <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                <div className="col-span-3">
                    <h1 className="text-gray-800 font-semibold text-3xl mb-5">
                        Why Choose Us?
                    </h1>
                    <ul>
                        {data.map((el, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className="flex justify-between border-b border-gray-300 p-2"
                                >
                                    {el}
                                    <span class="material-icons">done</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex justify-center col-span-2 hidden md:block">
                    <img src={TukangImg} alt="Ilustrasi Tukang" />
                </div>
            </div>
        </div>
    );
}
