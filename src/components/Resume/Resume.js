import React from 'react'
import './resume.css'
import './mobile.css'
import Rishi from './../../image/rishi.jpeg'
import {FaGithub, FaRegEnvelope, FaMapMarker, FaMobileAlt, FaGlobe,FaGlobeAsia } from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"





const Resume = () => {
    

  return (
                  
      <div className="resume">
      
          <div className="resume-header">
              <div className="header-left">
                  <h1 className='my-name'>Rishi Ratan Mishra </h1>
                  
                  <p>Engineering student with good knowledge of Web Development. <br />Passionate about Coding, Development, Data Structures and Algorithms.</p>
                  <div className='map'> <FaMapMarker/> Ballia, Uttar Pradesh, India</div>
                  <div className="social-icons ">
                  <a href="tel:+918840864525"><FaMobileAlt size={28}/></a>
                  <a href="https://www.linkedin.com/in/rishi-ratan-mishra-3a89a5201"  target="blank" rel="noopener noreferrer"> <FaLinkedin size={28}/> </a> 
                  <a href="https://github.com/rishiratanmishra" target="blank" rel="noopener noreferrer"> <FaGithub size={28}/> </a> 
                  <a href="mailto:rishiratanmishra2@gmail.com"><FaRegEnvelope size={28} /></a>
                  <a href='https://rishiratan.blogspot.com/' target="blank" rel="noopener noreferrer" ><FaGlobeAsia size={28 } /></a>
                  
                  </div>
              </div>

              <div className="header-right">
                  <img src={Rishi} alt="" />
              </div> 

          </div>

          {/* Edu & Skills */}


          <div className='second-header'>
              
              <div className="education">
                  <h3>Education</h3>
                  <div className="btech">
                      <div className='college'>Haldia Institute of Technology <span className='course-year'>2020-2024</span></div>
                      <div className='college-course'>B-Tech (3rd Year)</div>
                      <p> Computer Science & Engineering in Specialization with Artificial Intelliegence and Machine Learning (CSE-AIML)</p>
                      <p>Marks : 9.59 SGPA</p>

                  </div>

                  <div className="inter">
                  <div className='school-name'>Mohd. Shahbaan Memo. Muslim Inter College <span className='school'>2020</span></div>
                      <div className='college-course board'>12th (UP BOARD)</div> 
                      <p>Marks : 63.5%</p>
                  </div>
                  
                  

                  <div className="inter high-school">
                  <div className='school-name'>Heritage International School <span className='school-tenth'>2017</span></div>
                      <div className='college-course school-class'>10th (CBSE)</div> 
                      <p>Marks : 9.2 CGPA</p>
                  </div>


              </div>
          
              <div className="skills">
                  <h3>Technical Skills</h3>


                  <div className='skill-body'>

                  <div className='col'>
                  <button className='button crew'>React </button>
                  <button className='button crew'>Javascript </button>
                      <button className='button crew'>REST APIs</button>
                      </div>


                      <div className='col'>
                      <button className='button crew'>SEO</button>
                      <button className='button crew'>JAVA </button>
                      <button className='button crew'>DSA </button>
                      
                      </div>

                  <div className='col'>
                 <button className='button crew'>NodeJs </button>
                 <button className='button crew'>ExpressJs </button>  
                  <button className='button crew'>Wordpress </button>
                  </div>      
                  
                      
                      
                      
                  </div>
              </div>
          
          </div>
      
      
      
          {/*   INTERNSHIPS        */}
          
          <div className="internship">
          <h3 className='internship-header'>Internship</h3>
          <div className='internship-company'>Young Minds Publishing House <span className='internship-year'>2021</span></div>
       <p>YMPH is a book publication MSME registered startup.</p>  
       <div className='internship-role '>Role : Web Designer</div>

              <div className="works">
                  <ul>
                      <li>Designed and created YMPH <a href="https://youngmindspublication.com/" target="blank" rel="noopener noreferrer">official website</a>, <a href="https://store.youngmindspublication.com/" target="blank" rel="noopener noreferrer">online store</a> using Wordpress and some custom code base.</li>
                      <li>Enables Razorpay Payment option and adds custom product to online store. </li>
                      <li>Added Chatbot on official website.(provided by tawk.to) </li>
                      <li>Successfuly organised MiraBai Bhartiya Sahitya Pratiyogita<a href="https://youngmindspublication.com/mirabai-bhartiya-sahitya-pratiyogita/" target="blank" rel="noopener noreferrer">(Poetry Contest)</a>.</li>
                  </ul>
              
              </div>
          </div>
      
      
      
      
          {/*          Personal Projects                   */}
          
          <div className="projects">
              <h3 className='projects-header'>Personal Projects</h3>
              <h2 className='project-1-title'>Agniveeram Coaching Institute &nbsp;
                  <a href="https://github.com/rishiratanmishra" target="blank" rel="noopener noreferrer"> <FaGithub size={20} /> </a> 
                  &nbsp; &nbsp; 

                  <a href="http://rishiratanmishra.github.io/agniveeram/" target="blank" rel="noopener noreferrer"> <FaGlobe size={20} /> </a> 
              
              </h2>
              <div className='project-1-about'>Single page coaching Institute website. </div>

              
              <div className="works with-projects">
                  <ul>
                  <li> Agniveeram Coaching Institute is created using <b>React</b> and<b> SwiperJs</b>(Javascript library). <br /></li>
               
                 <li> Developed responsive user interface components via React concepts. </li> 
                 </ul> </div>
          
          
          
          
          </div>
      
      
      
      
      
      
          {/*          Awards                 */}
          
          
      <div className="projects awards">
      <h3 className='projects-header  awards'>Awards  <span className='internship-year'>2022</span></h3>
       <div className='project-1-title   awards'> Creative Writing Contest </div> 

      
      <div className="works awards">
          
        <li> Achieved <b>First Rank </b> in College for Creative Writing (Hindi Category).
          </li> 
          </div>
  
  
  
  
  </div>

      
      
      
      
      
      </div>










    )
}

export default Resume