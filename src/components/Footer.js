import React from "react";
import footerLogo from "../assets/footer-logo.png";
import logo from "../assets/logo.png";
import iconPs from "../assets/icon-ps.png";
import iconAp from "../assets/icon-ap.png";
import iconFb from "../assets/icon/fb.png";
import iconIg from "../assets/icon/ig.png";
import iconYt from "../assets/icon/yt.png";

export default function Footer() {
    return (
        <div className="bg-navy text-white py-10">
            <div className="container md:container-lg">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="hidden md:block">
                        <img src={footerLogo} className="w-2/3" />
                    </div>
                    <div>
                        <img src={logo} className="mb-10 mx-auto md:mx-0" />
                        <ul>
                            <li>Customer Service</li>
                            <li className="hover:text-green">
                                <a href="#">info@otomo.id</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">0813 8777 7876</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="hover:text-green">
                                <a href="#">Tentang Kami</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">Partner</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">FAQ</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">Promo</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">Hubungi Kami</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">Syarat & Ketentuan</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="hover:text-green">
                                <a href="#">Services</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">Booking Services</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">Price Engine</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">Smart Inspection Pro</a>
                            </li>
                            <li className="hover:text-green">
                                <a href="#">Loan</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Download</li>
                            <li>OTOMOTO Indonesia</li>
                            <li className="mb-4 mt-2">
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
                    <div>
                        <h6 className="md:text-right">Ikuti Kami</h6>
                        <ul className="flex md:justify-end mt-2">
                            <li className="">
                                <a href="#">
                                    <img src={iconFb} />
                                </a>
                            </li>
                            <li className="ml-3">
                                <a href="#">
                                    <img src={iconIg} />
                                </a>
                            </li>
                            <li className="ml-3">
                                <a href="#">
                                    <img src={iconYt} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-start md:justify-end mt-10 md:mt-0">
                    <ul className="text-right">
                        <li>
                            © 2021 OTOMOTO{" "}
                            <span className="inline md:hidden">Indonesia</span>
                        </li>
                        <li className="hidden md:block">Indonesia</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
