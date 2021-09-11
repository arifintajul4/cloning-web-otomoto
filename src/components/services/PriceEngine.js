import React from "react";
import PriceCard from "../PriceCard";
import OtomotoBenefit from "./OtomotoBenefit";
import iconPs from "../../assets/icon-ps.png";
import iconAp from "../../assets/icon-ap.png";

export default function PriceEngine({ withBenefit = false }) {
    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                <div className="flex items-center md:col-span-3 col-span-1">
                    <div>
                        <h1 className="font-semibold md:text-3xl text-xl mb-5 text-gray-700">
                            #CaraPintarCekKondisiMotor
                        </h1>
                        <p className="leading-relaxed text-gray-700">
                            Sistem Price Engine OTOMOTO adalah yang pertama dan
                            satu-satunya di Indonesia yang dirancang dengan
                            algoritma otomatis dan cerdas sehingga pengguna
                            dapat mengetahui estimasi harga kendaraannya di
                            pasaran secara akurat.
                        </p>
                        {!withBenefit && (
                            <div className="mt-5">
                                <ul className="flex">
                                    <li className="mr-5">
                                        <a href="#">
                                            <img src={iconPs} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={iconAp} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:col-span-2 col-span-1">
                    <PriceCard />
                </div>
            </div>
            {withBenefit && <OtomotoBenefit />}
        </div>
    );
}
