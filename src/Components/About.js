import React  from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color : 'black',
  //   backgroundColor : 'white'
  // })

  let myStyle = {
    color : props.mode === 'dark' ? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? '#292626' : 'white'
  }
  
  return (
    <div className="container " style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style = {myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style = {myStyle}
            >
              <strong>Analyze your text.</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. It can be word count or character count or many more utilities which are provided by TextUtils.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style = {myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              TextUtils is a free character counter tool that provides instant character count & word count ststistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style = {myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              This word counter application works in any web browsers such as Chrome, FireFox, Internet Explorer, Safari, Opera, Brave, etc. It suits to count characters in facebook, blog, books, excel documet, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-secondary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}