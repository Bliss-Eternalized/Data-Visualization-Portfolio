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
                        Data Visualization Recreation
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-heading">
                        Context
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tThis article documents the recreation of a heatmap within Unity Engine to explore how game engines can be used for data visualization. The selected heatmap tracks the most common 4-digit PINs."}
                    </div>

                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />

                    <div className="text-style-heading">
                        Development
                    </div>
                    <div className="spacer-25px" />
                    <div className="text-style-body text-align-left">
                        {"\tAccepting and parsing data required programming a custom parser that converts a JSON string into a data structure within C#. The visualization used Unity objects to recreate every individual tile of the heatmap, and the color of each individual tile corresponded with a preset threshold."}
                    </div>
                    <div className="spacer-25px" />
                    <img className="spotlight" src={require("../assets/heatmap.png")} alt="A heatmap of the frequency of 4-digit PINs.." style={{position: "relative", width: "100%", height: "auto"}} />
                    <div className="spacer-25px" />
                    <div className="text-style-body">
                        {"Here are some of the various settings from the inspector."}
                    </div>
                    <div className="spacer-25px" />
                    <img className="spotlight" src={require("../assets/inspector1.png")} alt="Various settings for the heatmap." style={{position: "relative", width: "75%", height: "auto"}} />
                    <div className="spacer-25px" />
                    <img className="spotlight" src={require("../assets/inspector2.png")} alt="Various settings for the heatmap." style={{position: "relative", width: "75%", height: "auto"}} />
                    
                    <div className="spacer-25px" />
                    <div className="divider" />
                    <div className="spacer-25px" />
                </div>
            </div>
        </div>
    );
}