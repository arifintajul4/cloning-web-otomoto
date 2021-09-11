import React from "react";
import icon from "../../assets/icon/mekanik.png";

export default function BookingBenefit() {
    const benefit = [
        {
            icon: "../../assets/icon/mekanik.png",
            title: "Direktori Bengkel",
            desc: "Daftar bengkel berkualitas terdekat dari lokasi Anda",
        },
        {
            icon: "../../assets/icon/target.png",
            title: "Jadwal",
            desc: "Servis kendaraan sesuai lokasi, waktu, dan jenis layanan yang Anda inginkan",
        },
        {
            icon: "../../assets/icon/acuan-dealer.png",
            title: "Promo dan Diskon",
            desc: "Promo dan diskon menarik yang membuat pengeluaran lebih hemat",
        },
        {
            icon: "../../assets/icon/acuan-mfc.png",
            title: "Acuan MFC",
            desc: "Standar acuan untuk para Mitra Leasing OTOMOTO",
        },
        {
            icon: "../../assets/icon/grafik.png",
            title: "Voucher",
            desc: "Kumpulkan point dan tukar dengan voucher kebutuhan sehari-hari",
        },
    ];
    return (
        <div className="mb-10">
            <div className="py-10 px-10 md:px-32 -ml-10 -mr-10 md:-ml-56 md:-mr-56 bg-gray-100">
                <div className="text-center">
                    <h1 className="md:text-3xl text-xl font-bold text-gray-700 mb-5">
                        Keuntungan Booking Service menggunakan OTOMOTO
                    </h1>
                    <p className="leading-relaxed text-gray-700">
                        Dengan layanan Booking Service, Anda dapat mengetahui
                        berbagai informasi bengkel berkualitas yang sesuai
                        dengan kebutuhan Anda seperti lokasi, waktu, dan jenis
                        layanan yang tersedia di bengkel tersebut. Kami juga
                        bekerjasama dengan mitra bengkel untuk memberikan promo
                        – promo dan diskon menarik khususnya bagi Anda pengguna
                        OTOMOTO.
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
