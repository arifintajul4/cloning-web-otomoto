import React from "react";
import loanIlustration from "../../assets/loan.png";
import iconDoc from "../../assets/icon/doc-list.png";
import iconHand from "../../assets/icon/hand.png";
import * as Button from "../Button";
import Offer from "./Offer";
import Partner from "./Partner";

export default function Loan() {
    return (
        <div>
            <div className="flex flex-col">
                <h1 className="font-semibold md:text-3xl text-xl mb-5 text-center text-gray-700">
                    #CaraPintarCariPinjaman
                </h1>
                <p className="leading-relaxed text-center text-gray-700">
                    OTOMOTO menjalin kerja sama dengan perusahaan pembiayaan
                    terkemuka yang menyediakan pinjaman dana tunai bagi pemilik
                    kendaraan.
                </p>
                <h1 className="font-semibold md:text-3xl text-xl mb-5 text-center text-gray-700 mt-5">
                    Keuntungan Ajukan Pinjaman menggunakan OTOMOTO
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:mx-16 mx-auto">
                    <div className="flex items-center">
                        <div>
                            <ul>
                                <li className="flex items-center mb-5">
                                    <img
                                        src={iconDoc}
                                        className="w-14 mr-5"
                                        alt="Icon Doc"
                                    />
                                    <p>
                                        Proses pengajuan aman dan data terjamin
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <img
                                        src={iconHand}
                                        className="w-14 mr-5"
                                        alt="Icon Hand"
                                    />
                                    <p>
                                        Mitra perusahaan pembiayaan berskala
                                        nasional dimanapun Anda berada
                                    </p>
                                </li>
                            </ul>
                            <Button.primary className="mt-7">
                                Ajukan Pinjaman Sekarang
                            </Button.primary>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={loanIlustration}
                            alt="Booking Service Ilustration"
                            className="place-self-center mt-5"
                        />
                    </div>
                </div>
            </div>
            <Offer />
        </div>
    );
}
