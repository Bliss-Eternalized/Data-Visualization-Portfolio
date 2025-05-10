import { SmallIcons } from 'assets/Icons';

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
                        Rent Prices in the U.S. - A Group Project
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="row-container" style={{gap: "25px"}}>
                        <a href="https://github.com/UMBC-CMSC636-Team6/UMBC-CMSC636-Team6" rel="noreferrer">
                            {"GitHub Repository"}
                        </a>
                        <a href="https://umbc-cmsc636-team6-13.onrender.com" rel="noreferrer">
                            {"Live Website"}
                        </a>
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-heading text-align-left">
                        {"Project Role"}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tAs a frontend engineer, I focused on implementing the UI/UX designs within Flask, and I helped to resolve rendering issues with the Plotly choropleth. Over the course of the project, I have also informally adopted the role of a project manager, helping to organize task assignments and meetings for maintaining steady progress in development. During the development of the dashboard during the Beta Phase, I handled a supermajority of the documentation, and such works now contribute towards the construction of this article."}
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-heading text-align-left">
                        {"Development"}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tAfter the implementation of the low-fidelity prototype, the team identified two major pain points: a lack of control over the level of detail and a lack of context. Further designs would require the careful consideration of user interaction such that users can view the trends/patterns of rent prices more easily."}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tWhen determining the design direction of the high-fidelity prototype, two technical solutions were proposed: a website implementation of Folium and a Dash dashboard implementation of Plotly. Due to the lack of general web development experience within the team, it was risky to allocate the majority of our resources towards an unfamiliar platform. Dash is implemented through Python exclusively, and its deployment is much simpler compared to the handling of a website. While it is possible to use Flask as a backend service for hosting Dash on a website, the overhead would complicate the deployment process and limit hosting solutions to paid services. Overall, Dash proved to be easier to use for the majority of the team, and its ease of implementation helps to finalize the overall design."}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tThe team initially implemented a filtering mechanism to render the counties of specified states. Due to various technical issues with parsing data and different data structures, the working version required the attention of the majority of programmers on the team. However, a solid foundation has been established for future interactive mechanisms. For example, compared to the week of development required for perfecting the initial filtering mechanism, it only took a couple of hours at most to implement selective attribute encoding and a refresh buton. The scalability of this framework proves to be extremely versatile, and it is possible to expand on such mechanisms during future iterations."}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tConcurrently, I worked on implementing the frontend visuals of the dashboard. I designed and implemented the frontend in Flask. For more information about the design process, please refer to the article listed at the bottom of the page."}
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-heading text-align-left">
                        {"Post-Mortem"}
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tThe implementation of a choropleth through a Flask backend helped the group to learn more about the fundamentals of backend web development while developing more skills within Python. Throughout the various technical and logistical challenges, the group achieved a series of breakthroughs that permitted the deployment of a final prototype. However, despite the persistence in work, some limitations prevented the group from reaching their full potential. This post-mortem aims to reflect on the nature of work from both personal and group dynamics.\n\n\tWhile it was interesting to explore the theoretical principles to facilitate the selection of an idiom for representing the selected data, the weeks of research felt unwarranted given the precedent for displaying data with geographical context. With the same tasks for the data visualization, the implementation of the group project could have achieved a greater quality in less time by reducing the time spent on the research process, but the constraints of the assignment prevented this optimization. As such, the quality of work produced from research only amounted to excessive individual effort to further reinforce previously established precedents that suggest the usage of a choropleth.\n\n\tThe logistical workings of the group proved to be problematic due to the absence of productive work from a developer during the production process, effectively reducing the labor available for completing the prototypes. Such areas led to my informal adoption of the developer’s role, leading to my own accomplishments in project management. While I could have resolved these issues by committing more of my personal time, the absence of motivation for the current project did not warrant an exertion of extra effort from my part, especially with the current nature of the project scope. Overall, my decisions in project management helped to mitigate the absence of a mission-critical role in the project.\n\n\tThe group achieved a basic technical implementation of the choropleth, resolving several complex issues with technical structure, but the lack of a dedicated frontend framework prevented the group from significantly improving the frontend designs within the time constraints. However, the decision to implement the project entirely within Flask was made due to the existing lack of effective labor and the group’s unfamiliarity with web development frameworks, a combination that made it too risky to use an environment that was unfamiliar for most of the group. Using a dedicated frontend framework such as React would only increase my responsibilities, and I was unwilling to involve myself further with the supervision of the group after adopting more responsibilities. So, while it was possible to achieve a greater quality, my unwillingness to accept a disproportionate workload for a project of relatively low interest did not permit such an achievement.\n\n\tPlease note that this was not my best work. However, such work did not prove to be a liability for the group, and my contributions were sufficient for the scope of the proposed project. I learned more about group dynamics and leadership, but the project did not help to develop my technical skills significantly. Rather, I have applied my learned experiences from other projects to produce quality work for this project. In the end, I recognized that I enjoyed challenging and ambitious projects."}
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="max-width text-style-body">
                        {"For more information about my frontend work, check out the article below."}
                    </div>

                    <div className="spacer-25px" />
                    {/*Project Display Code: UI/UX Design Process*/}
                    <div className="col-container-if-mobile">
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
                </div>
            </div>
        </div>
    );
}