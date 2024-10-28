import React from "react";
import "../../styles/work.css"; 

const EdTech = () => {
  return (
    <div className="container-fluid" id="edtech-body">
      <div className="row">
        <div className="col-12">
          <h5 className="edtech-title mb-3">EDTECH WORK</h5>
          <p>
            Below is a professional development sample that showcases my
            approach to integrating technology in educational settings.
          </p>
        </div>
        <div className="col-12">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "56.2500%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAGU4J2PMYU/LuxA37bzou-bpV03ye8yzA/view?embed"
              allowFullScreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
          <a
            href="https://www.canva.com/design/DAGU4J2PMYU/LuxA37bzou-bpV03ye8yzA/view?utm_content=DAGU4J2PMYU&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Canva
          </a>
        </div>
      </div>
    </div>
  );
};

export default EdTech;
