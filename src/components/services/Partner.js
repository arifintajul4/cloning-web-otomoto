import React from "react";
import adiraLogo from "../../assets/adira.png";
import mandiriLogo from "../../assets/mandiri.png";
import megaLogo from "../../assets/mega.png";
import akulakuLogo from "../../assets/akulaku.png";
import bafLogo from "../../assets/baf.png";

export default function Partner() {
    return (
        <div className="mt-14">
            <h1 className="font-bold md:text-3xl text-xl text-center text-gray-700 mb-10">
                Partner Pembiayaan Kami
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="flex justify-center">
                    <img src={adiraLogo} alt="Adira Finance" />
                </div>
                <div className="flex justify-center">
                    <img src={mandiriLogo} alt="Mandiri Utama Finance" />
                </div>
                <div className="flex justify-center">
                    <img src={megaLogo} alt="Mega Finance" />
                </div>
                <div className="flex justify-center">
                    <img src={akulakuLogo} alt="Akulaku" />
                </div>
                <div className="flex justify-center">
                    <img src={bafLogo} alt="Baf Syariah" />
                </div>
            </div>
        </div>
    );
}
