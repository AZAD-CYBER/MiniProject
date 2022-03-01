import React from 'react'
import "./about.css"
import Azad   from "../assest/coder4.jpeg"
import Harish from "../assest/coder3.jpeg"
import zahra  from "../assest/zahra.jpeg"
import pooja  from "../assest/pooja.jpeg"
import Zoom from 'react-reveal/Zoom';
import imgbg  from "../assest/about.jpeg"

function About() {
  return (
    <>
      <div className=' container about'>

        <div className='col-12  titleabout'>
         <Zoom top>
         <p>ABOUT</p>
         </Zoom>
        </div>

        <div className=' row pbox'>
          <div className='col-12 col-md-6  pabout'>

            <p>

              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.

              This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </p>
          </div>
          <div className=' col-12  col-md-6 pimg'> 
          
          <img src={imgbg} className="imgbg"></img>

          </div>
         
          </div>
        

      </div>
      <div class="team">
        <div class="container">
            <div class="section-header text-center">
                <p style={{fontWeight: "bolder"}}>Meet Our Team</p>
                <h2 style={{margin:"40px"}}>Our Engineers & Workers</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src={Azad} alt="Team Image" height="270px"/>
                        </div>
                        <div class="team-text">
                            <h2>Azad Ansari</h2>
                            <p>Engineer</p>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src={Harish} alt="Team Image" height="270px"/>
                        </div>
                        <div class="team-text">
                            <h2>Harish Khan</h2>
                            <p>Engineer</p>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src={zahra} alt="Team Image" height="270px"/>
                        </div>
                        <div class="team-text">
                            <h2>Zahra Sayed</h2>
                            <p>Engineer</p>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src={pooja} alt="Team Image" height="270px"/>
                        </div>
                        <div class="team-text">
                            <h2>Pooja Rathod</h2>
                            <p>Engineer</p>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About