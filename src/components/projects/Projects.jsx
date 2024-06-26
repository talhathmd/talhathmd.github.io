import React from 'react'
import "./projects.css"
import cbreproject from '../../assets/cbreproject.jpeg'
import srsproject from '../../assets/srs_logo.jpeg'

const Projects = () => {
  return (
    <section className="projects section" id="projects">
    <h2 className="section__title">Projects</h2>
    <span className="section__subtitle">Showcasing My Recent Work and Accomplishments</span>
    <div className="projects__container container grid">
        <div className="projects__content">
            <h3 className="projects__title">CBRE Asset Condition Monitor</h3>
            <img alt="CBRE Project" src={cbreproject} className='projects__img'></img>

            <div className='project__links'>
            <a href="https://github.com/atiqurx/cbre_asset_condition_monitor" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Github Link to Project">GitHub</a>
            <a href="https://devpost.com/software/cbre-asset-condition-monitor" className="button button--flex devpost-button" 
            without rel="noopener noreferrer" target="_blank" alt="Devpost Link to Project">DevPost</a>
            </div>
            
        </div>
        <div className="projects__content">
            <h3 className="projects__title">Service Request System (SRS)</h3>
            <img alt="CBRE Project" src={srsproject} className='projects__img'></img>
            <div className='project__links'>
            <a href="https://github.com/atiqurx/service-request-system/tree/main" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Github Link to Project">GitHub</a>
            </div>
        </div>
    </div>
    
</section>
  )
}

export default Projects