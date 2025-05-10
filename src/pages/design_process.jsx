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
                        UI/UX Design Process for "Rent Prices in the U.S."
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-body text-align-left">
                        {"\tAfter deploying the initial functional prototype, an effort was made to improve the frontend appeal of the website design. Given that Flask was responsible for rendering the frontend, there were a limited number of options for customizing interactive behavior, but most HTML and CSS elements remained available. The initial visual rework aimed to implement a minimalist and abstract geometric style with asymmetric blocks to enhance the visual contrast, but a lack of low-fidelity prototyping led to a sub-par execution. Further iterations would go through the UI design process prior to another implementation. Given the scale of the choropleth, it makes sense to maximize its screen occupancy during future iterations such that readability and data comprehension is improved."}
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-body text-align-left">
                        {"\tPrevious feedback on a standalone choropleth identified pain points within the lack of control over the level of detail and the lack of context associated with the visualization itself. The following mockups aim to resolve these issues while improving the visual style of the dashboard."}
                    </div>
                    <div className="spacer-25px" />
                    <img className="spotlight" src={require("../assets/mockup1.png")} alt="First mockup." style={{position: "relative", width: "100%", height: "auto"}} />
                    <div className="text-style-body text-align-center">
                        {"Figure 1:\nFirst Mockup"}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tThe first mockup aims to achieve a minimalistic and modern style, but it does not offer significant improvements in its initial visual appeal. Everything is readily available at once, and the user’s projected journey is unpredictable. Its resemblance to Google Sites makes this a somewhat generic design without a unique impression."}
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <img className="spotlight" src={require("../assets/mockup2.png")} alt="Second mockup." style={{position: "relative", width: "100%", height: "auto"}} />
                    <div className="text-style-body text-align-center">
                        {"Figure 2:\nSecond Mockup"}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tIn the second mockup, the initial graphic and relevant contextual information occupies the entirety of the user’s screen, allowing the user to focus on the information before moving onto the visualization itself. The user journey is more incremental, reducing the information density and employing scrolling as part of the intended user flow. In addition, the visual appeal of the dashboard is much stronger initially, employing the use of graphics to immediately draw the user’s attention. In short, the sequential presentation of information enhances the effectiveness of this dashboard."}
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