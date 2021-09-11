import React from "react";
import CountUp from "react-countup";

export default function Counter() {
    return (
        <div
            className="py-14 text-white"
            style={{ backgroundColor: "rgb(77, 94, 122)" }}
        >
            <div className="container md:container-lg md:px-56">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-10">
                        OTOMOTO Bekerjasama dengan Bengkel Terpercaya
                    </h1>
                    <p className="text-center leading-relaxed">
                        Kami memiliki +100 bengkel yang telah bekerjasama di
                        area Jabodetabek untuk menghadirkan harga motor terbaik
                        dan informasi lengkap untuk bikers
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-14">
                    <div className="text-center">
                        <h1 className="text-8xl font-semibold">
                            <CountUp end={100} duration={1} />
                        </h1>
                        <div className="mt-5">Jabodetabek</div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-8xl font-semibold">
                            <CountUp end={40} duration={1} />
                        </h1>
                        <div className="mt-5">Bandung</div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-8xl font-semibold">
                            <CountUp end={20} duration={1} />
                        </h1>
                        <div className="mt-5">Cirebon</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
