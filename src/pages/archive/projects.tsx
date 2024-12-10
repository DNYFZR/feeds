import React from "react";
import Render from "../../components/Markdown";

const Projects:React.FC = () => {
  const pageList = [
    "rs-geospatial", "rs-sim", "test"
  ];
  const [activePage, setActivePage] = React.useState<string>("");
  const renderContent = () => {
    switch(activePage) {
      case "rs-sim": return <Render path="/feeds/markdown/projects/rs-sim.md" />;
      case "rs-geospatial": return <Render path="/feeds/markdown/projects/rs-geospatial.md" />;
      case "test": return <Render path="/feeds/markdown/demo.md" />;
    }
  }

  return (
    <div className="app-content">
      <label>project : </label>
      <select 
        value={activePage}
        className={"select-box"} 
        onChange={(e) => setActivePage(e.target.value)} 
      >
        <option value="" disabled selected>{"select..."}</option> 
        {pageList.map((option) => (<option key={String(option)} value={String(option)}>{option}</option>))}
      </select>

      {renderContent()}
    </div>
  )
}
export default Projects;