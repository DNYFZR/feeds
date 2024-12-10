import React from "react";
import Render from "../../components/Markdown";

const Posts:React.FC = () => {
  const pageList = [
    "hello world"
  ];
  const [activePage, setActivePage] = React.useState<string>("");
  const renderContent = () => {
    switch(activePage) {
      case "hello world": return <Render path="/feeds/markdown/posts/2024-12-10-hello-world.md" />;
    }
  }

  return (
    <div className="app-content">
      <label>post : </label>
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
export default Posts;