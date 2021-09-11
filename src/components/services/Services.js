import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon1 from "../../assets/icon/icon1.png";
import icon2 from "../../assets/icon/icon2.png";
import icon3 from "../../assets/icon/icon3.png";
import icon4 from "../../assets/icon/icon4.png";
import icon5 from "../../assets/icon/icon5.png";
import Booking from "./Booking";
import Loan from "./Loan";
import PriceEngine from "./PriceEngine";
import SmartInspecto from "./SmartInspecto";

export default function Services() {
    const [selectedService, setSelectedService] = useState("price");

    const project = () => {
        switch (selectedService) {
            case "price":
                return <PriceEngine withBenefit={true} />;
            case "inspection":
                return <SmartInspecto />;
            case "booking":
                return <Booking />;
            case "loan":
                return <Loan />;
            default:
                return <h1>{selectedService}</h1>;
        }
    };

    return (
        <div className="">
            <nav className="rounded-lg shadow-lg mt-5 overflow-hidden md:mx-52 mx-4">
                <ul className="grid grid-cols-1 md:grid-cols-5 border border-gray-200">
                    <li
                        className={`${
                            selectedService === "price" && "bg-gray-200"
                        } cursor-pointer py-5 flex flex-col`}
                        onClick={() => setSelectedService("price")}
                    >
                        <img
                            src={icon1}
                            alt="price engine"
                            className="w-16 place-self-center"
                        />
                        <p className="uppercase text-sm text-center">
                            price engine
                        </p>
                    </li>
                    <li>
                        <NavLink
                            to="/jubelmoto"
                            className="cursor-pointer py-5 flex flex-col"
                        >
                            <img
                                src={icon2}
                                alt="price engine"
                                className="w-16 place-self-center"
                            />
                            <p className="uppercase text-sm text-center">
                                jubelmoto
                            </p>
                        </NavLink>
                    </li>
                    <li
                        className={`${
                            selectedService === "inspection" && "bg-gray-200"
                        } cursor-pointer py-5 flex flex-col`}
                        onClick={() => setSelectedService("inspection")}
                    >
                        <img
                            src={icon3}
                            alt="price engine"
                            className="w-16 place-self-center"
                        />
                        <p className="uppercase text-sm text-center">
                            smart insepction pro
                        </p>
                    </li>
                    <li
                        className={`${
                            selectedService === "booking" && "bg-gray-200"
                        } cursor-pointer py-5 flex flex-col`}
                        onClick={() => setSelectedService("booking")}
                    >
                        <img
                            src={icon4}
                            alt="price engine"
                            className="w-16 place-self-center"
                        />
                        <p className="uppercase text-sm text-center">
                            booking service
                        </p>
                    </li>
                    <li
                        className={`${
                            selectedService === "loan" && "bg-gray-200"
                        } cursor-pointer py-5 flex flex-col`}
                        onClick={() => setSelectedService("loan")}
                    >
                        <img
                            src={icon5}
                            alt="price engine"
                            className="w-16 place-self-center"
                        />
                        <p className="uppercase text-sm text-center">loan</p>
                    </li>
                </ul>
            </nav>
            <div className="w-full mt-5 md:px-52 px-4">{project()}</div>
        </div>
    );
}
