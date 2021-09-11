import React from "react";

export default function CardImage({ img }) {
    return (
        <div
            className="rounded overflow-hidden w-52 h-28"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        ></div>
    );
}
