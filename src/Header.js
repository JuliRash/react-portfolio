import {useEffect, useState} from "react";

export function  Header() {
    return (
        <>
            <header className="masthead mb-auto">
                <div className="inner">
                    <h3 className="masthead-brand">JuliRash</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <a className="nav-link active" href="#">Home</a>
                        <a className="nav-link" href="#">Projects</a>
                        <a className="nav-link" href="#">Contact Info</a>
                    </nav>
                </div>
            </header>
        </>
    );
}

