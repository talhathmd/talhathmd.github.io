import React, {useState} from 'react'
import "./qualification.css"


const Qualification = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">Select between Education and Experience ↓</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualifciation__icon"></i> 
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualifciation__icon"></i> 
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science</h3>
                            <span className="qualification__subtitle">The University of Texas at Arlington</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Fall 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Science</h3>
                            <span className="qualification__subtitle">Nawabganj Government College</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Jul, 2019 - Dec, 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Science</h3>
                            <span className="qualification__subtitle">Harimohan Government High School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Jan, 2013 - Mar, 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Officer</h3>
                            <span className="qualification__subtitle">Association for Computing Machinery (ACM)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Aug, 2024 - Present
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                       
                            <div>
                                <h3 className="qualification__title">React Native Developer</h3>
                                <a href="https://qweek.ai/" target="_blank" rel="noreferrer" className="qualification__link"><span className="qualification__subtitle">Qweek.ai</span></a>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jan, 2024 - Present
                                </div>
                            </div>
                            
                            <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>



                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">The Office of the Vice President of Student Affairs - UTA</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May, 2023 - Present
                            </div>
                        </div>
                        
                    </div>

                    

                    <div className="qualification__data">
                        
                        
                        <div>
                            <h3 className="qualification__title">Student Assistant</h3>
                            <span className="qualification__subtitle">E.H. Hereford University Center and Commons</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Sep, 2022 - Present
                            
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Founder, President</h3>
                            <span className="qualification__subtitle">High School Robotics Group</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Aug, 2019 - Nov, 2021
                            </div>
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification