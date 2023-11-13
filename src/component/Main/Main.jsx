import React from "react";
import './Main.css'
import LeftSection from "./component/LeftSection";
import RightSection from "./component/RightSection";

export default function Main(){
    return (
        <main>
            <div className="container">
                <div className="row">
                    <LeftSection />
                    <RightSection />
                </div>
            </div>
        </main>
    )
}