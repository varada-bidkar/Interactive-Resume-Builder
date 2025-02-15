import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"

export default function Home() {
    const toolsRef = useRef(null); // ✅ Use useRef instead of useState

    useGSAP(() => {
        gsap.from('.container .card2', {
            opacity: 0.1,
            x: 500,
            y: 300,
            duration: 2,
            rotateX: -10
        });
    });

    useEffect(() => {
        if (toolsRef.current) {  // ✅ Check if ref exists before using GSAP
            gsap.from(toolsRef.current, {
                opacity: 0,
                x: -200,
                duration: 1.5,
                scrollTrigger: {
                    trigger: toolsRef.current,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: true,
                },
            });
        }
    }, []);

    return (
        <>
            <div className="container">
                <div className="card1">
                    <h2>2024's Top Resume Templates</h2>
                    <h6>Build your resume in as little as 5 minutes using our recruiter-approved templates and pre-written examples.</h6>
                    <NavLink to='/build'>Build Your Resume</NavLink>
                </div>
                <div className="card2"></div>
            </div>

            <div className="container2">
                <h2>Trusted by professionals from*</h2>
                <div className="card" ref={toolsRef}> {/* ✅ Attach ref to the element */}
                    <img1></img1>
                </div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </>
    );
}
