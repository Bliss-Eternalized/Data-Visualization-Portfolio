import { SmallIcons } from "../assets/Icons.jsx"

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
    return (
        <div>
            <div className="page-container content-background-gradient" style={{overflow: "hidden"}}>
                <div className="navbar-container">
                    <div className="navbar-button" onClick={() => {PageTransition("/");}}>
                        Return
                        <div className="navbar-button-line" />
                    </div>
                </div>
                <div className="article-auto-frame">
                    <div className="text-style-emphasis">
                        Animation and Interaction for Data Visualizations
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-heading">
                        Context
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tThis investigation into the incorporation of interaction and animation contributed towards the research component of the \"Rent Prices in the U.S.\" project. A link to the article about this project can be found at the bottom of this page."}
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-heading">
                        Findings
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tThe user is generally responsible for inputting their area of focus, whether through implicit motions such as the current mouse position, or through explicit call-to-action elements such as buttons. Customization occurs in a similar nature, enhancing the user’s area of focus through adjustments to the level of detail, method of display, or speed of animation for greater effective comprehension. While most of the data exists within the context of a singular view, several areas of attention are presented, allowing the user to adjust their natural focus throughout the course of an animation. Excessive animation requires more decisions from the user on where to focus, while minimal animations act as natural centers of attention."}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tIn an initial overview system, many of these examples implement multiple areas of interest, allowing the user to naturally observe trends in individual subsections of the visualization. Meanwhile, a detail-on-demand view tends to require intuitive call-to-actions prompts and encourages active interaction from the user. User navigation tends to be more efficient with call-to-action prompts that provide immediate access towards the requested information, and this scheme is useful for limited data spaces. However, given the current nature of the data and the varying levels of interest, it may be more appropriate to implement a standardized map navigation system to provide an intuitive interface (in the context of interaction). Scrollytelling does not work for the current project’s task due to the need of exploring multiple dimensions within a view that corresponds to a physical space. In short, traditional map interaction features are more appropriate for the tasks of the project."}
                    </div>
                    <div className="spacer-25px" />
                    <img className="spotlight" src={require("../assets/phase_3_artifacts.gif")} alt="Four different concepts for animations in various data visualizations." style={{position: "relative", width: "100%", height: "auto"}} />
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tFor Figure 1A, the sort-on-demand mechanic can be used to discover new trends/similarities by treating individual areas as objects that could be animated. This is overly ambitious and unnecessary for the current nature of the project. For Figure 1B, this satisfies the task of searching for additional details (features) within a particular area of interest. For Figure 1C, the visual can be used by users to discover trends that involve time, but the current dataset does not contain any time-sensitive information at the moment. Figure 1D represents an alternate detail-on-demand implementation, addressing the task of searching for additional details (features) within a particular area of interest by employing the entire screen for displaying relevant information."}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tThe exploration of these theme-specific questions indicates that many of the interactive mechanisms within choropleths exist due to the lack of a better option. To implement any additional interactive and/or animated mechanisms that aren’t already well-defined within modern choropleths, it is necessary to supplement the main choropleth with additional plots that may assist in the accomplishment of different tasks."}
                    </div>
                    
                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-body text-align-center">
                        {"This mockup was implemented in the final prototype. Refer to the project listed below."}
                    </div>
                    <div className="spacer-25px" />
                    {/*Project Display Code: Rent Prices in the U.S.*/}
                    <div className="col-container-if-mobile">
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
                                <div onClick={() => {window.open("https://github.com/UMBC-CMSC636-Team6/UMBC-CMSC636-Team6", "_blank");}} style={{cursor: "pointer", width: "auto", height: "100%", zIndex: 3}}>
                                    {SmallIcons.GitHub_Source}
                                </div>
                                <div onClick={() => {window.open("https://umbc-cmsc636-team6-13.onrender.com", "_blank");}} style={{cursor: "pointer", width: "auto", height: "100%", zIndex: 3}}>
                                    {SmallIcons.Website_Source}
                                </div>
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
                </div>
            </div>
        </div>
    );
}