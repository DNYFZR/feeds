import React from "react";
import Render from "../../components/Markdown";

const Notes:React.FC = () => {
  const pageList = ["rust", "typescript", ];
  const [activePage, setActivePage] = React.useState<string>("");
  const renderContent = () => {
    switch(activePage) {
      case "rust": return <Render path="/feeds/markdown/notes/rust.md" />;
      case "typescript": return <Render path="/feeds/markdown/notes/typescript.md" />;
    }
  }

  return (
    <div className="app-content">
      <label>entry : </label>
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
export default Notes;