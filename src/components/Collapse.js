import React, { useState } from "react";

export default function Collapse(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <button
                type="button"
                className="text-navy font-bold w-full flex justify-between"
                onClick={() => setIsActive(!isActive)}
            >
                {props.title}
                {isActive ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                )}
            </button>
            <div
                className={`${isActive ? "block" : "hidden"} ${
                    props?.className
                }`}
            >
                {props.children}
            </div>
        </div>
    );
}
