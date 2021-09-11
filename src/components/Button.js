const primary = (props) => {
    return (
        <button
            type="button"
            className={`${props?.className} uppercase bg-green text-navy w-full text-center py-2 font-bold rounded`}
        >
            {props.children}
        </button>
    );
};

export { primary };
