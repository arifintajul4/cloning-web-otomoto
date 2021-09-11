import React from "react";

export default function BottomAction() {
    return (
        <div className="bg-gradient-to-r from-green-light to-green-dark py-10">
            <div className="container md:container-lg grid grid-cols-1 md:grid-cols-5 items-center">
                <p className="text-2xl col-span-4 text-navy text-center md:text-left">
                    Dapatkan pengasilan tambahan bersama OTOMOTO
                </p>
                <div className="flex justify-center">
                    <button className="text-center mt-5 px-5 md:mt-0 font-bold text-xl bg-navy text-white rounded py-5 col-span-1">
                        Daftar Agen Moto
                    </button>
                </div>
            </div>
        </div>
    );
}
