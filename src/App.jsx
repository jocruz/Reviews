import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const App = () => {
  const [data, setData] = useState(0);
  const {image,name,job,text} = reviews[data];
  
  const checkNumber = (num) =>{
    if(num === reviews.length -1){
      return 0
    }
    if(num === 0){
      return reviews.length -1
    } 
    return num;
  }

  const rightClick = () => {
    setData((prev) =>{
      const curr = prev + 1;
      return checkNumber(curr);
    });
  };

  const leftClick = () => {
    setData((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const randomPerson = () => {
    // Returns random integer from 0 to the end of data.js array
    //This was commented out to attempt the course's way of handling random number
    // setData((prev) => (prev = Math.floor(Math.random() * reviews.length)));

    setData (()=>{
      const randomNumber = Math.floor(Math.random() * reviews.length)
      if(randomNumber===data){
        return randomNumber+1
      }
      return (checkNumber(randomNumber));
    })
  };

  return (
    <main>
      <div className="review">
        <div className="img-container">
          <img src={image} className="person-img"></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={leftClick}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={rightClick}>
            <FaChevronRight />
          </button>
        </div>

        <div className="btn-container">
          <button className="btn btn-hipster" onClick={randomPerson}>
            Suprise me
          </button>
        </div>
      </div>
    </main>
  );
};
export default App;
