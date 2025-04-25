import React from 'react'
import "./projects.css"
import cbreproject from '../../assets/cbreproject.jpeg'
import srsproject from '../../assets/srs_logo.jpeg'
import trasvaproject from '../../assets/trasva_project.png'
import acmlogo from '../../assets/acmlogo.png'
import goblinproject from '../../assets/goblin.png'
import legalai from '../../assets/legalai.png'
import mavgrades from '../../assets/mavgrades.png'
import billsplit from '../../assets/billsplit.png'

const Projects = () => {
  return (
    <section className="projects section" id="projects">
    <h2 className="section__title">Projects</h2>
    <span className="section__subtitle">Showcasing My Recent Work and Accomplishments</span>
    <div className="projects__container container grid">
        <div className="projects__content">
            <h3 className="projects__title">MavGrades</h3>
            <img alt="MavGrades" src={mavgrades} className='projects__img'></img>

            <div className='project__links'>
            <a href="https://github.com/acmuta/mavgrades" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Github Link to Project">GitHub</a>
            <a href="https://www.mavgrades.com" className="button button--flex devpost-button" 
            without rel="noopener noreferrer" target="_blank" alt="Website Link to Project">Website</a>
            </div>
            
        </div>
        <div className="projects__content">
            <h3 className="projects__title">ACM UTA Website</h3>
            <img alt="ACM UTA Website" src={acmlogo} className='projects__img'></img>

            <div className='project__links'>
            <a href="https://github.com/acmuta/acmuta-site" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Github Link to Project">GitHub</a>
            <a href="https://acmuta.com" className="button button--flex devpost-button" 
            without rel="noopener noreferrer" target="_blank" alt="Website Link to Project">Website</a>
            </div>
        </div>
        <div className="projects__content">
            <h3 className="projects__title">BillSplit</h3>
            <img alt="BillSplit" src={billsplit} className='projects__img'></img>

            <div className='project__links'>
            <a href="https://github.com/talhathmd/billsplit-team3" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Github Link to Project">GitHub</a>
            <a href="https://billsplit-two.vercel.app" className="button button--flex devpost-button" 
            without rel="noopener noreferrer" target="_blank" alt="Website Link to Project">Website</a>
            </div>
        </div>
        <div className="projects__content">
            <h3 className="projects__title">Goblin</h3>
            <img alt="Goblin Project" src={goblinproject} className='projects__img'></img>
            <div className='project__links'>
            <a href="https://github.com/atiqurx/goblin" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Website Link to Project">Github</a>
            <a href="https://gob-lin-bkeneab8ccdmhhda.centralus-01.azurewebsites.net" className="button button--flex devpost-button" 
            without rel="noopener noreferrer" target="_blank" alt="Website Link to Project">Website</a>
            </div> 
        </div>
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
            <img alt="Service Request System (SRS)" src={srsproject} className='projects__img'></img>
            <div className='project__links'>
            <a href="https://github.com/atiqurx/service-request-system/tree/main" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Github Link to Project">GitHub</a>
            </div>
        </div>
        <div className="projects__content">
            <h3 className="projects__title">Trasva</h3>
            <img alt="Trasva" src={trasvaproject} className='projects__img'></img>
            <div className='project__links'>
            <a href="https://trasva.com" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Website Link to Project">Website</a>
            </div> 
        </div>
        <div className="projects__content">
            <h3 className="projects__title">LegalAI</h3>
            <img alt="CBRE Project" src={legalai} className='projects__img'></img>
            <div className='project__links'>
            <a href="https://github.com/talhathmd/legalAI" className="button button--flex" 
            without rel="noopener noreferrer" target="_blank" alt="Website Link to Project">Github</a>
            </div> 
        </div>
    </div>
    
     
    
</section>
  )
}

export default Projects