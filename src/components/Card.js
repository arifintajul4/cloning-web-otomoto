import React from "react";

export default function Card({ img, name, spedo, year, city, price }) {
    return (
        <div className="rounded border border-gray-300">
            <div>
                <img src={img} alt={name} className="h-36 mx-auto" />
            </div>
            <div className="p-2">
                <h1 className="font-bold uppercase text-sm">{name}</h1>
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                    </svg>
                    {spedo} KM
                </div>
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    {year}
                </div>
                <h2 className="font-bold uppercase text-sm">{city}</h2>
                <p className="text-navy font-bold">
                    Rp. {new Intl.NumberFormat().format(price)}
                </p>
            </div>
        </div>
    );
}
