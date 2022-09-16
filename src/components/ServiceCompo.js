import React from "react";

const ServiceCompo =(props) => {
    return (
        <>
            <div class="col">
                <div class="card">
                    <img src={props.images} class="card-img-to" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">
                        <a href={props.link} > {props.titled} </a></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCompo;