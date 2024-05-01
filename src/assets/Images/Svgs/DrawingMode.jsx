const DrawingMode = ({ width="48", height="48" }) => {
    return (
        <>
            <svg width={width} height={height}  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32" stroke="black" stroke-width="3"/>
                <path d="M32 18H30C24.3432 18 21.5148 18 19.7574 19.7574C18 21.5148 18 24.3432 18 30V32C18 37.6568 18 40.4852 19.7574 42.2426C21.5148 44 24.3432 44 30 44H32C37.6568 44 40.4852 44 42.2426 42.2426C44 40.4852 44 37.6568 44 32V30C44 24.3432 44 21.5148 42.2426 19.7574C40.4852 18 37.6568 18 32 18Z" stroke="black" stroke-width="3"/>
            </svg>
        </>
    );
}

export default DrawingMode;
