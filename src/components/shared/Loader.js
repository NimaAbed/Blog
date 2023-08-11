import React from 'react';
import { Triangle } from "react-loader-spinner"

const Loader = () => {
    return (
        <div style={{ width: "100%", height: "90vh", paddingTop: "20px", display: "flex", justifyContent: "center" }}>
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loader;