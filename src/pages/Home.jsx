import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { NavLink } from "react-router-dom"

export default function Home(){
    useGSAP(()=>{
        gsap.from('.container .card2',{
            opacity:0.1,
            x:500,
            y:300,
            duration:2,
            rotateX:-10
        })
    })
    useEffect(() => {
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
        }, []);
  
    return(
        <>
        <div className="container">
            <div className="card1">
                <h2>2024's Top Resume Templates</h2>
                <h6>Build your resume in as little as 5 minutes using our recruiter-approved templates and pre-written examples.</h6>
          <NavLink to='/build'>Build YourResume </NavLink>
            </div>
            <div className="card2">

        </div>
        </div>
        <div className="container2">
            <h2>Trusted by professionals from*</h2>
            <div className="card">
                <img1></img1>
            </div>
            <div className="card">
            </div>
            <div className="card">
            </div>
            <div className="card">
            </div>
            <div className="card">
            </div>
        </div>
        
        <div className="container3">

        <h2>Get Your Standout Resume in 4 Easy Steps!</h2>
            <div className="card111">
                <h2>1. Choose a Template</h2>
                <h6>Start strong with professional ATS-friendly resume templates. Easy to customize later!</h6>
            </div>
            <div className="card111">
            <h2>2. Fill the Details</h2>
            <h6>Upload existing or build new with the pre-written expert content. Build your power resume!</h6>
            </div>
            <div className="card111">
            <h2>3. Personalize it! </h2>
            <h6>Pre-written content, tailored for your job profile! Easily personalize your resume with fonts and color themes</h6>
            </div>
            <div className="card111">
            <h2>4. Download & Shine!</h2>
            <h6>Download your resume for free with our basic plan! Upgrade to premium for that extra edge!</h6>
            </div>
            
            
        </div>
        

        <div className="container4">

<div className="card22">
    <h6>"ResumeGemini's resume builder took away all the stress that comes while making a resume. I created a crisp and persuasive resume that landed me more interviews and helped me get job faster."</h6>
    <h2>-  Sara</h2>
</div>
<div className="card22">
<h6>
"I was confused about where and how to start writing my resume. ResumeGemini made it look like a cake walk and helped me get an excellent resume for free. Thank you guys, you are just awesome."</h6>
<h2>-  Deepak</h2>
</div>
<div className="card22">
<h6>"I'm really excited to mention that my interviewer was impressed with my resume. I'll definitely recommend this to everyone."</h6>
<h2>-  Naveen</h2>
</div>
</div>

<div className="footer">
    <div className="cardd1">
              <h2>Quick Links</h2>
              <a href="https://careerhelp.resumegemini.com/careertips/" target="_blank">Career Tips</a>
              <a href="https://careerhelp.resumegemini.com/top-50-most-common-interview-questions/" target="_blank">Top 50 Interview Questions</a>
              <a href="https://careerhelp.resumegemini.com/careertips/" target="_blank">Interview Tips</a>
              <a href="https://careerhelp.resumegemini.com/careertips/" target="_blank">Visit Us!</a>
          </div>
          <div className="cardd1">
              <h2>Help</h2>
              <p>Resume Writing Tips</p>
              <p>Fresher Interview Preparation</p>
              <p>Resume With Google Gemini</p>
              <p>How To Write Job Winning Resume</p>
          </div>
          <div className="cardd1">
              <h2>Terms</h2>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Cancellation and Refund</p>
              <p>Shipping and Exchange</p>
          </div>
          
</div>

<div className="copyright">
            <h3>Copyright © 2024 ResumeGemini   </h3>
            <p>Terms | Privacy Policy</p>
          </div>
       
        </>
    )
}