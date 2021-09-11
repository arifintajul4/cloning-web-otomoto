import React from "react";
import icon from "../../assets/icon/mekanik.png";

export default function InspectionBenefit() {
    const benefit = [
        {
            icon: "../../assets/icon/mekanik.png",
            title: "Mekanik Bersertifikat",
            desc: "Penilaian kondisi kendaraan dilakukan mekanik handal & tersertifikasi",
        },
        {
            icon: "../../assets/icon/target.png",
            title: "Hasil Akurat",
            desc: "Hasil estimasi harga yang akurat",
        },
        {
            icon: "../../assets/icon/acuan-dealer.png",
            title: "Acuan Dealer",
            desc: "Standar acuan untuk jual beli kendaraan",
        },
        {
            icon: "../../assets/icon/acuan-mfc.png",
            title: "Acuan MFC",
            desc: "Standar acuan untuk para Mitra Leasing OTOMOTO",
        },
        {
            icon: "../../assets/icon/grafik.png",
            title: "Service Improvement",
            desc: "Meningkatkan kondisi kendaraan di Mitra Bengkel OTOMOTO",
        },
    ];
    return (
        <div className="mb-10">
            <div className="py-10 px-10 md:px-32 -ml-10 -mr-10 md:-ml-56 md:-mr-56 bg-gray-100">
                <div className="text-center">
                    <h1 className="md:text-3xl text-xl font-bold text-gray-700 mb-5">
                        Keuntungan Inspeksi Kendaraan menggunakan OTOMOTO
                    </h1>
                    <p className="leading-relaxed text-gray-700">
                        Smart Inspection dapat digunakan sebagai alat untuk
                        menentukan dan verifikasi nilai serta kondisi kendaraan
                        sebagai standar acuan pengguna ketika membeli kendaraan
                        bekas dari dealer atau dari penjual lainnya, menjual
                        kendaraan kepada calon pembeli, atau pada saat
                        mengajukan pinjaman
                    </p>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-5 gap-3 mt-16`}>
                    {benefit.map((el, idx) => {
                        return (
                            <div className="mb-5 md:mb-0">
                                <div
                                    key={idx}
                                    className="grid justify-items-center"
                                >
                                    <img
                                        src={icon}
                                        alt="Icon Mekanik"
                                        className="mb-8"
                                    />
                                    <h6 className="font-semibold text-center">
                                        {el.title}
                                    </h6>
                                    <p className="text-center text-gray-600">
                                        {el.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
