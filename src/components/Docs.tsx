// Application UI Container & Navigation 
import "./Docs.css"
import data from "../assets/docs.json"
import React from "react"

interface DatabaseNode {
  [key : string] : {
    description : string;
    link: string;
    image: string;
    tags: string[];
  }
}

interface Database {
  [primaryKey : string] : DatabaseNode
}

const Docs: React.FC = () => {
  // Database setup
  const database = data as Database;
  const database_pks = Object.keys(database);

  // User selection hooks
  const [activeSection, setActiveSection] = React.useState<string>(database_pks[0]);
  const [activeData, setActiveData] = React.useState<DatabaseNode>(database[activeSection]);

  // Event handlers
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveSection(event.target.value);
    setActiveData(database[event.target.value]);
  };

  return (
    <>
      <div  className="app-header">
        <select className="content-control" value={activeSection} onChange={handleSelectChange}>
          {database_pks.map((k) => <option value={k}>{k}</option>)}
        </select>  
      </div>
     
      <div className="row">
        {Object.keys(activeData).map((key) => (
          
          <div key={key} className='column'>
            <h3>{key}</h3>
            
            <a href={activeData[key].link} target='_blank'>
              <img className='image' src={activeData[key].image} />
            </a>

            <p>{activeData[key].description}</p>
            
            <div>
              {activeData[key].tags.map((tag) => (
                <button className='tag' key={tag}>{tag}</button>
              ))}
            </div>
          </div>      
        ))}
      </div>
    </>
  );
};

export default Docs

