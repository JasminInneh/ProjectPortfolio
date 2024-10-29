// import React from "react";
// import "../../styles/work.css";

// const EdTech = () => {
//   return (
//     <div className="container-fluid" id="edtech-body">
//       <div className="row">
//         <div className="col-12">
//           <h5 className="edtech-title mb-3">EDTECH WORK</h5>
//           <p>
//             Below is a professional development sample that showcases my
//             approach to integrating technology in educational settings.
//           </p>
//         </div>
//         <div className="col-12">
//           <div
//             style={{
//               position: "relative",
//               width: "100%",
//               height: 0,
//               paddingTop: "56.2500%",
//               paddingBottom: 0,
//               boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
//               marginTop: "1.6em",
//               marginBottom: "0.9em",
//               overflow: "hidden",
//               borderRadius: "8px",
//               willChange: "transform",
//             }}
//           >
//             <iframe
//               loading="lazy"
//               style={{
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 top: 0,
//                 left: 0,
//                 border: "none",
//                 padding: 0,
//                 margin: 0,
//               }}
//               src="https://www.canva.com/design/DAGU4J2PMYU/LuxA37bzou-bpV03ye8yzA/view?embed"
//               allowFullScreen="allowfullscreen"
//               allow="fullscreen"
//             ></iframe>
//           </div>
//           <a
//             href="https://www.canva.com/design/DAGU4J2PMYU/LuxA37bzou-bpV03ye8yzA/view?utm_content=DAGU4J2PMYU&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View on Canva
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EdTech;
import React from "react";
import "../../styles/work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// Import the image path
import standardsMappingImg from "../../img/standardsMapping.png";

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

        {/* Canva Slide Embed */}
        <div className="col-12">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "56.25%",
              boxShadow: "0 2px 8px rgba(63, 69, 81, 0.16)",
              marginTop: "1.6em",
              overflow: "hidden",
              borderRadius: "8px",
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
              }}
              src="https://www.canva.com/design/DAGU4J2PMYU/LuxA37bzou-bpV03ye8yzA/view?embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Links Section Below Canva Slide */}
        <div className="resource-section">
          <div className="resource-left">
            <span>Explore More</span>
            <span className="resource-arrow">→</span> {/* animated arrow */}
          </div>
          <div className="resource-right">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSqf5uv0K6F4zcVZNY-W8Y1kO-VA6TVG2ROtCEbZgGcKYQ2TV-g7g4WDBv-Q_CSU48Z82N0OUlopEJG/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Intro to APIs LP
            </a>
            <a
              href={standardsMappingImg}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Standard Mapping
            </a>
          </div>
        </div>
        {/* <div className="col-12 mt-4">
          <h5 className="edtech-subtitle">Additional Resources</h5>
          <div className="pdf-link-container">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSqf5uv0K6F4zcVZNY-W8Y1kO-VA6TVG2ROtCEbZgGcKYQ2TV-g7g4WDBv-Q_CSU48Z82N0OUlopEJG/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-large-link"
            >
              Intro to APIs
            </a>
            <a
              href={standardsMappingImg}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-large-link"
            >
              Standard Mapping
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EdTech;
