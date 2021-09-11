import React from "react";
import smartInspectoImg from "../../assets/smartinspecto.png";
import InsepectionBenefit from "./InspectionBenefit";

export default function SmartInspecto() {
    return (
        <div>
            <div className="flex flex-col mb-10">
                <h1 className="font-semibold md:text-3xl text-xl mb-5 text-center text-gray-700">
                    #CaraPintarCekKondisiMotor
                </h1>
                <p className="leading-relaxed text-center text-gray-700">
                    Dengan layanan Smart Inspection, ketahui kondisi kendaraan
                    Anda secara lebih detail. Sistem Smart Inspection juga
                    dirancang menggunakan algoritma otomatis dengan
                    memperhitungkan penilaian dari mekanik yang handal dan
                    tersertifikasi untuk memastikan keakurasian nilai serta
                    kondisi asli kendaraan Anda.
                </p>
                <img
                    src={smartInspectoImg}
                    alt="Smart Inspection Pro Ilustration"
                    className="place-self-center mt-5"
                />
            </div>
            <div>
                <InsepectionBenefit />
            </div>
        </div>
    );
}
