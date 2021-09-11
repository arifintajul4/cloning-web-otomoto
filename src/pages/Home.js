import React from "react";
import BottomAction from "../components/BottomAction";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/services/Services";
import WhyUs from "../components/WhyUs";

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <Hero />
            <Services />
            <WhyUs />
            <Counter />
            <BottomAction />
            <Footer />
        </div>
    );
}
