import React from "react";
import Carousel from "react-multi-carousel";
import CardImage from "./CardImage";
import categoryImg from "../assets/categori.png";
import "react-multi-carousel/lib/styles.css";

export default function Category() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className="bg-gray-100 py-10">
            <div className="container">
                <h3 className="font-semibold text-lg text-gray-700 mb-4">
                    Kategori Pilihan
                </h3>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    itemClass={{ paddingRight: 10 }}
                >
                    <CardImage img={categoryImg} />
                    <CardImage img={categoryImg} />
                    <CardImage img={categoryImg} />
                    <CardImage img={categoryImg} />
                    <CardImage img={categoryImg} />
                    <CardImage img={categoryImg} />
                </Carousel>
            </div>
        </div>
    );
}
