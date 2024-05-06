const Cabinet = ({ width="48", height="48" }) => {
    return (
        <>
            <svg width={width} height={height}  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 36L10 42M36 36L38 42" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M32 36H16C10.3431 36 7.51472 36 5.75736 34.1172C4 32.2342 4 29.2038 4 23.1428V18.8571C4 12.7962 4 9.76578 5.75736 7.88288C7.51472 6 10.3431 6 16 6H32C37.6568 6 40.4852 6 42.2426 7.88288C44 9.76578 44 12.7962 44 18.8571V23.1428C44 29.2038 44 32.2342 42.2426 34.1172C40.4852 36 37.6568 36 32 36Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 28H43" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 6V28" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 18V16" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 18V16" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </>
    );
}

export default Cabinet;
