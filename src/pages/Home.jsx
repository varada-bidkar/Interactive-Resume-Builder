import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const toolsRef = useRef(null);

    useGSAP(() => {
        gsap.from(".container .card2", {
            opacity: 0.1,
            x: 500,
            y: 300,
            duration: 2,
            rotateX: -10
        });
    });

    useEffect(() => {
        if (toolsRef.current) {
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
            {/* Hero Section */}
            <div className="container">
                <div className="card1">
                    <h2>2024's Top Resume Templates</h2>
                    <h6>
                        Build your resume in as little as 5 minutes using our
                        recruiter-approved templates and pre-written examples.
                    </h6>
                    <NavLink to="/build" className="btn">
                        Build Your Resume
                    </NavLink>
                </div>
                <div className="card2"></div>
            </div>

            {/* Trusted By Section */}
            <div className="container2">
                <h2>Trusted by professionals from*</h2>
                <div className="card">
                    <img src="company-logo1.png" alt="Company 1" />
                </div>
                <div className="card">
                    <img src="company-logo2.png" alt="Company 2" />
                </div>
                <div className="card">
                    <img src="company-logo3.png" alt="Company 3" />
                </div>
                <div className="card">
                    <img src="company-logo4.png" alt="Company 4" />
                </div>
            </div>

            {/* Steps Section */}
            <div className="container3">
                <h2>Get Your Standout Resume in 4 Easy Steps!</h2>
                <div className="card111">
                    <h2>1. Choose a Template</h2>
                    <h6>
                        Start strong with professional ATS-friendly resume
                        templates. Easy to customize later!
                    </h6>
                </div>
                <div className="card111">
                    <h2>2. Fill the Details</h2>
                    <h6>
                        Upload existing or build new with the pre-written expert
                        content. Build your power resume!
                    </h6>
                </div>
                <div className="card111">
                    <h2>3. Personalize it!</h2>
                    <h6>
                        Pre-written content, tailored for your job profile!
                        Easily personalize your resume with fonts and color
                        themes.
                    </h6>
                </div>
                <div className="card111">
                    <h2>4. Download & Shine!</h2>
                    <h6>
                        Download your resume for free with our basic plan!
                        Upgrade to premium for that extra edge!
                    </h6>
                </div>
            </div>

            {/* Testimonials */}
            <div className="container4">
                <div className="card22">
                    <h6>
                        "ResumeGemini's resume builder took away all the stress
                        that comes while making a resume. I created a crisp and
                        persuasive resume that landed me more interviews and
                        helped me get a job faster."
                    </h6>
                    <h2>- Sara</h2>
                </div>
                <div className="card22">
                    <h6>
                        "I was confused about where and how to start writing my
                        resume. ResumeGemini made it look like a cakewalk and
                        helped me get an excellent resume for free. Thank you,
                        guys, you are just awesome."
                    </h6>
                    <h2>- Deepak</h2>
                </div>
                <div className="card22">
                    <h6>
                        "I'm really excited to mention that my interviewer was
                        impressed with my resume. I'll definitely recommend this
                        to everyone."
                    </h6>
                    <h2>- Naveen</h2>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <div className="cardd1">
                    <h2>Quick Links</h2>
                    <a
                        href="https://careerhelp.resumegemini.com/careertips/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Career Tips
                    </a>
                    <a
                        href="https://careerhelp.resumegemini.com/top-50-most-common-interview-questions/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Top 50 Interview Questions
                    </a>
                    <a
                        href="https://careerhelp.resumegemini.com/careertips/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Interview Tips
                    </a>
                    <a
                        href="https://careerhelp.resumegemini.com/careertips/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Us!
                    </a>
                </div>
                <div className="cardd1">
                    <h2>Help</h2>
                    <p>Resume Writing Tips</p>
                    <p>Fresher Interview Preparation</p>
                    <p>Resume With Google Gemini</p>
                    <p>How To Write a Job-Winning Resume</p>
                </div>
                <div className="cardd1">
                    <h2>Terms</h2>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Cancellation and Refund</p>
                    <p>Shipping and Exchange</p>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="copyright">
                <h3>Copyright © 2024 ResumeGemini</h3>
                <p>Terms | Privacy Policy</p>
            </div>
        </>
    );
}
