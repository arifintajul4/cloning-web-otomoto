import React from "react";
import bookingIlustration from "../../assets/booking.png";
import BookingBenefit from "./BookingBenefit";

export default function Booking() {
    return (
        <div>
            <div className="flex flex-col">
                <h1 className="font-semibold md:text-3xl text-xl mb-5 text-center text-gray-700">
                    #CaraPintarNgurusMotor
                </h1>
                <p className="leading-relaxed text-center text-gray-700">
                    Layanan Booking Service memudahkan Anda dalam merawat
                    kendaraan. Kami sadar kendaraan sangat berarti bagi Anda.
                    Lebih dari sekadar alat transportasi, kendaraan telah
                    menjadi bagian dari keseharian hidup Anda. Berangkat dari
                    kesadaran itu, kami menghadirkan cara yang lebih baik dalam
                    merawatnya.
                </p>
                <img
                    src={bookingIlustration}
                    alt="Booking Service Ilustration"
                    className="place-self-center mt-5"
                />
            </div>
            <BookingBenefit />
        </div>
    );
}
