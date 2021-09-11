import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchMotor from "../components/SearchMotor";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg from "../assets/banner.jpeg";
import JubelBenefit from "../components/JubelBenefit";
import PriceCard from "../components/PriceCard";
import iconPs from "../assets/icon-ps.png";
import iconAp from "../assets/icon-ap.png";
import Category from "../components/Category";
import Card from "../components/Card";
import motorImg from "../assets/motor.jpeg";
import Filter from "../components/Filter";

export default function JubelMoto() {
    return (
        <div>
            <Header
                isTransparant={false}
                showContact={true}
                activeMenu="jubel"
            />
            <div className="my-24 container md:container-lg">
                <SearchMotor />
                <Carousel
                    infiniteLoop={true}
                    showThumbs={false}
                    autoPlay={true}
                    className="my-5"
                >
                    <div
                        style={{
                            backgroundImage: `url(${bannerImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="w-full h-52 md:h-96"
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url(${bannerImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="w-full h-52 md:h-96"
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url(${bannerImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="w-full h-52 md:h-96"
                    ></div>
                </Carousel>
                <div className="grid grid-cols-1 md:grid-cols-6 items-center">
                    <div className="md:col-span-4 col-span-1 hidden md:block">
                        <div>
                            <h1 className="font-semibold text-3xl mb-5 text-gray-700">
                                #CaraPintarCekKondisiMotor
                            </h1>
                            <p className="leading-relaxed">
                                Sistem Price Engine OTOMOTO adalah yang pertama
                                dan satu-satunya di Indonesia yang dirancang
                                dengan algoritma otomatis dan cerdas sehingga
                                pengguna dapat mengetahui estimasi harga
                                kendaraannya di pasaran secara akurat.
                            </p>
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
                        </div>
                    </div>
                    <div className="md:col-span-2 col-span-1">
                        <PriceCard />
                    </div>
                </div>
            </div>
            <Category />
            <div className="container md:container-lg mb-5">
                <div className="flex justify-end mt-5">
                    <div>
                        <label className="block text-right">Urutkan</label>
                        <select className="focus:outline-none border border-gray-800 rounded py-2 px-4">
                            <option selected disabled>
                                Urutkan
                            </option>
                            <option>Harga Terendah</option>
                            <option>Harga Termahal</option>
                            <option>Tahun Terbaru</option>
                            <option>Tahun Terlama</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
                    <div className="col-span-1 hidden md:block">
                        <Filter />
                    </div>
                    <div className="col-span-3 grid grid-cols-2 md:grid-cols-5 gap-4">
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                        <Card
                            img={motorImg}
                            name="primavera abs"
                            spedo="506"
                            year={2019}
                            city="Kota Tanggerang"
                            price={2500000}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-green py-10">
                <div className="container md:container-lg grid grid-cols-1 md:grid-cols-5 items-center">
                    <p className="text-2xl col-span-4 text-navy text-center md:text-left">
                        Jangan ragu, jual beli dan tukar tambah di OTOMOTO
                    </p>
                    <div className="flex justify-center">
                        <button className="text-center mt-5 px-5 md:mt-0 font-semibold text-xl bg-white text-navy rounded-full py-5 col-span-1">
                            Jual Motor
                        </button>
                    </div>
                </div>
            </div>
            <JubelBenefit />
            <Footer />
        </div>
    );
}
