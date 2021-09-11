import React from "react";
import heroImg from "./../assets/hero.jpg";

export default function Hero() {
    return (
        <div
            className="h-60 md:h-64 pb-10 md:pb-14"
            style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container md:container-lg text-white flex items-end justify-center md:justify-start h-full">
                <h1 className="text-5xl leading-tight hidden md:block">
                    Selalu Ada Solusi <br /> di Setiap Situasi
                </h1>
                <h1
                    className="text-3xl leading-relaxed text-center block md:hidden"
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
                >
                    Selalu Ada Solusi <br /> di Setiap Situasi
                </h1>
            </div>
        </div>
    );
}
