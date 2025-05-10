import { LargeIcons, SmallIcons } from "../assets/Icons.jsx"

import { useRef } from 'react';
var sessionstorage = require('sessionstorage');

function PageTransition(target) {
    sessionstorage.setItem('load-transition', 'true');
    if (document.getElementById("loader")) {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("loader").classList.add('page-transition-exit');
    }
    setTimeout(function(){
        sessionstorage.setItem("temp-disable-scroll-reset", "true");
        window.location.replace(target);
    }, 550);
}

export default function Content() {
    const about = useRef();
    const projects = useRef();
    const contact = useRef();

    return (
        <div>
            <div className="page-container" style={{overflow: "hidden"}}>
                <div className="navbar-container hide-if-portrait-mobile">
                    <div className="navbar-button" onClick={() => about.current.scrollIntoView({behavior: "smooth"})}>
                        About
                        <div className="navbar-button-line" />
                    </div>
                    <div className="navbar-button" onClick={() => projects.current.scrollIntoView({behavior: "smooth"})}>
                        Projects
                        <div className="navbar-button-line" />
                    </div>
                    <div className="navbar-button" onClick={() => contact.current.scrollIntoView({behavior: "smooth"})}>
                        Contact
                        <div className="navbar-button-line" />
                    </div>
                </div>

                <div className="navbar-container show-if-portrait-mobile">
                    <div className="navbar-button" onClick={() => about.current.scrollIntoView({behavior: "smooth"})}>
                        About
                        <div className="navbar-button-line" />
                    </div>
                    <div className="navbar-button" onClick={() => projects.current.scrollIntoView({behavior: "smooth"})}>
                        Projects
                        <div className="navbar-button-line" />
                    </div>
                </div>

                <div id="intro" className="screen-frame intro-background-gradient" style={{minHeight: "300px", maxHeight: "950px"}}>
                    <div className="content-background-gradient" style={{zIndex: "-1", justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                        <img src={require("../assets/rv9_facility.png")} alt="" style={{zIndex: "-1", objectFit: "cover", width: "auto", minHeight: "900px", height: "auto"}} />
                    </div>
                    <div className="spacer-50p" />
                    <div className="spacer-10p" />
                    <div className="spacer-5p" />
                    <div className="bloom-frame text-style-emphasis" style={{width: "35%", height: "15%"}}>
                        Fusion
                    </div>
                    <div className="text-style-emphasis-thin hide-if-portrait-mobile">
                        {"a portfolio of works in data vis\nfeaturing programming and design"}
                    </div>
                    <div className="text-style-emphasis-thin show-if-portrait-mobile">
                        {"a portfolio of works in data visualization"}
                    </div>
                </div>

                <div ref={about} className="screen-frame about-background-gradient auto-height-if-mobile">
                    <div className="spacer-100px" />

                    <div className="text-style-emphasis">
                        What I Do
                    </div>
                    <div className="box text-style-body hide-if-portrait-mobile" style={{marginTop: "15px", minWidth: "450px", width: "30%", minHeight: "225px", height: "20%"}}>
                        {"game developer specializing in:\ngame programming\nfrontend engineering\ngame design\nUI/UX design\n\nsome research interests:\nhuman-computing interaction\ngame development"}
                    </div>
                    <div className="box text-style-body show-if-portrait-mobile" style={{marginTop: "15px", width: "90%", minHeight: "200px", height: "30%"}}>
                        {"game developer specializing in:\ngame programming\nfrontend engineering\ngame design\nUI/UX design\n\nsome research interests:\nhuman-computing interaction\ngame development"}
                    </div>
                    
                    <div className="spacer-25px" />

                    {/*Tech Stack, Desktop Version*/}
                    <div className="text-style-heading">
                        Tech Stack
                    </div>
                    <div className="box text-style-body hide-if-portrait-mobile" style={{marginTop: "15px", minWidth: "550px", width: "40%", minHeight: "300px", height: "35%"}}>
                        <div className="tech-stack-labels-container text-style-body hide-on-portrait-mobile" style={{alignItems: "flex-start"}}>
                            <div style={{color:"rgba(250, 250, 200, 1)"}}>
                                Game Dev
                            </div>
                            <div style={{color:"rgba(200, 250, 250, 1)"}}>
                                Programming
                            </div>
                            <div style={{color:"rgba(250, 200, 250, 1)"}}>
                                Multi-Media
                            </div>
                        </div>
                        <div className="row-container" style={{alignItems: "flex-start"}}>
                            <div className="tech-stack-grid-container" style={{gridTemplateColumns: "75px 75px", columnCount: 2}}>
                                {LargeIcons.UnityEngine}
                                {LargeIcons.CSharp}
                                {LargeIcons.RobloxStudio}
                                {LargeIcons.Lua}
                            </div>

                            <div className="tech-stack-grid-container" style={{gridTemplateColumns: "75px 75px", columnCount: 2}}>
                                {LargeIcons.CPlusPlus}
                                {LargeIcons.Python}
                                {LargeIcons.React}
                                {LargeIcons.GitHub}
                                {LargeIcons.HTML5}
                                {LargeIcons.CSS3}
                            </div>

                            <div className="tech-stack-grid-container" style={{gridTemplateColumns: "75px 75px 75px", columnCount: 3}}>
                                {LargeIcons.Photoshop}
                                {LargeIcons.Krita}
                                {LargeIcons.Kdenlive}
                                {LargeIcons.PremierePro}
                                {LargeIcons.Audacity}
                                {LargeIcons.Lunacy}
                                {LargeIcons.Blender}
                            </div>
                        </div>
                    </div>
                    {/*Tech Stack, Mobile Version*/}
                    <div className="box text-style-body show-if-portrait-mobile" style={{marginTop: "15px", width: "90%", minHeight: "300px", height: "40%"}}>
                        <div className="row-container" style={{alignItems: "flex-start"}}>
                            <div className="col-container">
                                {LargeIcons.UnityEngine}
                                {LargeIcons.CSharp}
                                {LargeIcons.RobloxStudio}
                                {LargeIcons.Lua}
                            </div>

                            <div className="col-container">
                                {LargeIcons.CPlusPlus}
                                {LargeIcons.Python}
                                {LargeIcons.React}
                                {LargeIcons.GitHub}
                                {LargeIcons.HTML5}
                                {LargeIcons.CSS3}
                            </div>

                            <div className="col-container">
                                {LargeIcons.Photoshop}
                                {LargeIcons.Krita}
                                {LargeIcons.Kdenlive}
                                {LargeIcons.PremierePro}
                                {LargeIcons.Audacity}
                                {LargeIcons.Lunacy}
                                {LargeIcons.Blender}
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={projects} className="auto-frame projects-background-gradient">
                    <div className="spacer-50px" />
                    <div className="spacer-25px" />

                    <div className="bloom-frame text-style-emphasis" style={{width: "35%", height: "15%"}}>
                        Featured
                    </div>

                    <div className="spacer-25px" />
                    
                    <div className="projects-grid-container col-container-if-mobile" style={{width: "90vw", height: "auto"}}>
                        {/*Project Display Code: Rent Prices in the U.S.*/}
                        <div className="col-container">
                            <div className="row-container" style={{alignItems: "flex-end"}}>
                                <div className="text-style-heading text-align-left" style={{width: "67.5%", height: "auto", verticalAlign: "bottom", alignItems: "flex-end"}}>
                                    Rent Prices in the U.S.
                                </div>
                                <div className="text-style-label text-align-right" style={{width: "32.5%", height: "auto", verticalAlign: "bottom"}}>
                                    Completed May 2025
                                </div>
                            </div>
                            <div className="project-box text-style-body" style={{cursor: "pointer"}} onClick={() => {PageTransition("/rent-prices");}}>
                                <img src={require("../assets/mockup2.png")} alt="" style={{position: "relative",/* minWidth: "125%",*/ width: "auto", minHeight: "125%", height: "auto"}} />
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="project-icons-background">
                                    <div className="spacer-50px" />
                                </div>
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="text-style-label text-align-left" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "15px", marginLeft: "10px"}}>
                                    Source
                                </div>
                                <div className="row-container" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "25px", marginLeft: "10px", marginBottom: "5px"}}>
                                    <a href="https://github.com/UMBC-CMSC636-Team6/UMBC-CMSC636-Team6" target="_blank" rel="noreferrer" style={{cursor: "pointer", width: "auto", height: "100%", zIndex: 3}}>
                                        {SmallIcons.GitHub_Source}
                                    </a>
                                    <a href="https://umbc-cmsc636-team6-13.onrender.com" target="_blank" rel="noreferrer" style={{cursor: "pointer", width: "auto", height: "100%", zIndex: 3}}>
                                        {SmallIcons.Website_Source}
                                    </a>
                                </div>
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="text-style-label text-align-right" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "15px", marginRight: "10px"}}>
                                    Tech
                                </div>
                                <div className="row-container" style={{position: "relative", justifyContent: "flex-end", alignItems: "flex-end", width: "100%", height: "25px", marginRight: "10px", marginBottom: "5px"}}>
                                    {SmallIcons.Python}
                                    {SmallIcons.GitHub}
                                    {SmallIcons.HTML5}
                                    {SmallIcons.CSS3}
                                    {SmallIcons.Krita}
                                    {SmallIcons.Lunacy}
                                </div>
                            </div>
                            <div className="text-style-body">
                                Group Project + Post-Mortem Document
                            </div>
                        </div>
                        {/*End of Project Display Code*/}

                        {/*Project Display Code: UI/UX Design Process*/}
                        <div className="col-container">
                            <div className="row-container" style={{alignItems: "flex-end"}}>
                                <div className="text-style-heading text-align-left" style={{width: "67.5%", height: "auto", verticalAlign: "bottom"}}>
                                    UI/UX Design Process
                                </div>
                                <div className="text-style-label text-align-right" style={{width: "32.5%", height: "auto", verticalAlign: "bottom"}}>
                                    Apr 2025
                                </div>
                            </div>
                            <div className="project-box text-style-body" style={{cursor: "pointer"}} onClick={() => {PageTransition("/design-process");}}>
                                <img src={require("../assets/mockup1.png")} alt="" style={{position: "relative",/* minWidth: "125%",*/ width: "auto", minHeight: "125%", height: "auto"}} />
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="project-icons-background">
                                    <div className="spacer-50px" />
                                </div>
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="text-style-label text-align-left" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "15px", marginLeft: "10px"}}>
                                    {/*Intentionally empty.*/}
                                </div>
                                <div className="row-container" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "25px", marginLeft: "10px", marginBottom: "5px"}}>
                                    {/*Intentionally empty.*/}
                                </div>
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="text-style-label text-align-right" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "15px", marginRight: "10px"}}>
                                    Tech
                                </div>
                                <div className="row-container" style={{position: "relative", justifyContent: "flex-end", alignItems: "flex-end", width: "100%", height: "25px", marginRight: "10px", marginBottom: "5px"}}>
                                    {SmallIcons.GitHub}
                                    {SmallIcons.HTML5}
                                    {SmallIcons.CSS3}
                                    {SmallIcons.Krita}
                                    {SmallIcons.Lunacy}
                                </div>
                            </div>
                            <div className="text-style-body">
                                Frontend Design Process for Group Project
                            </div>
                        </div>
                        {/*End of Project Display Code*/}

                        {/*Project Display Code: Recreation of Data Vis*/}
                        <div className="col-container">
                            <div className="row-container" style={{alignItems: "flex-end"}}>
                                <div className="text-style-heading text-align-left" style={{width: "67.5%", height: "auto", verticalAlign: "bottom"}}>
                                    Recreation of Data Vis
                                </div>
                                <div className="text-style-label text-align-right" style={{width: "32.5%", height: "auto", verticalAlign: "bottom"}}>
                                    Feb 2025
                                </div>
                            </div>
                            <div className="project-box text-style-body" style={{cursor: "pointer"}} onClick={() => {PageTransition("/data-vis-recreation");}}>
                                <img src={require("../assets/heatmap.png")} alt="" style={{position: "relative",/* minWidth: "125%",*/ width: "auto", minHeight: "125%", height: "auto"}} />
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="project-icons-background">
                                    <div className="spacer-50px" />
                                </div>
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="text-style-label text-align-left" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "15px", marginLeft: "10px"}}>
                                    Source
                                </div>
                                <div className="row-container" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "25px", marginLeft: "10px", marginBottom: "5px"}}>
                                    <a href="about:blank" target="_blank" rel="noreferrer" style={{cursor: "pointer", width: "auto", height: "100%", zIndex: 3}}>
                                        {SmallIcons.GitHub_Source}
                                    </a>
                                </div>
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="text-style-label text-align-right" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "15px", marginRight: "10px"}}>
                                    Tech
                                </div>
                                <div className="row-container" style={{position: "relative", justifyContent: "flex-end", alignItems: "flex-end", width: "100%", height: "25px", marginRight: "10px", marginBottom: "5px"}}>
                                    {SmallIcons.UnityEngine}
                                    {SmallIcons.CSharp}
                                    {SmallIcons.Python}
                                </div>
                            </div>
                            <div className="text-style-body">
                                Recreation of 4-Digit PINs Heatmap
                            </div>
                        </div>
                        {/*End of Project Display Code*/}

                        {/*Project Display Code: Animation Viability*/}
                        <div className="col-container">
                            <div className="row-container" style={{alignItems: "flex-end"}}>
                                <div className="text-style-heading text-align-left" style={{width: "67.5%", height: "auto", verticalAlign: "bottom"}}>
                                    Animation Viability
                                </div>
                                <div className="text-style-label text-align-right" style={{width: "32.5%", height: "auto", verticalAlign: "bottom"}}>
                                    Mar 2025
                                </div>
                            </div>
                            <div className="project-box text-style-body" style={{cursor: "pointer"}} onClick={() => {PageTransition("/anim-viability");}}>
                                <img src={require("../assets/phase_3_artifacts.gif")} alt="" style={{position: "relative",/* minWidth: "125%",*/ width: "auto", minHeight: "125%", height: "auto"}} />
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="project-icons-background">
                                    <div className="spacer-50px" />
                                </div>
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="text-style-label text-align-left" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "15px", marginLeft: "10px"}}>
                                    {/*Intentionally empty.*/}
                                </div>
                                <div className="row-container" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "25px", marginLeft: "10px", marginBottom: "5px"}}>
                                    {/*Intentionally empty.*/}
                                </div>
                            </div>
                            <div className="col-container" style={{justifyContent: "flex-end", overflow: "visible", height: "0px"}}>
                                <div className="text-style-label text-align-right" style={{position: "relative", justifyContent: "flex-start", alignItems: "flex-end", width: "100%", height: "15px", marginRight: "10px"}}>
                                    Tech
                                </div>
                                <div className="row-container" style={{position: "relative", justifyContent: "flex-end", alignItems: "flex-end", width: "100%", height: "25px", marginRight: "10px", marginBottom: "5px"}}>
                                    {SmallIcons.UnityEngine}
                                    {SmallIcons.CSharp}
                                    {SmallIcons.Python}
                                </div>
                            </div>
                            <div className="text-style-body">
                                Discussion of Animations for Group Project
                            </div>
                        </div>
                        {/*End of Project Display Code*/}
                    </div>
                    <div className="spacer-50px" />
                </div>

                <div className="screen-frame contact-background-gradient">
                    <div className="spacer-25p" />
                    <div className="spacer-10p" />
                    <div className="spacer-5p" />
                    <div ref={contact} className="text-style-emphasis">
                        Contact Me
                    </div>
                    <div className="box text-style-body hide-if-portrait-mobile" style={{marginTop: "15px", minWidth: "450px", width: "30%", minHeight: "225px", height: "20%"}}>
                        {"Intentionally omitted."}
                    </div>
                    <div className="box text-style-body show-if-portrait-mobile" style={{marginTop: "15px", width: "90%", minHeight: "200px", height: "30%"}}>
                        {"Intentionally omitted."}
                    </div>
                </div>
            </div>
        </div>
    );
}