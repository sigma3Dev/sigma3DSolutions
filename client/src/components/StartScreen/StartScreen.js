import React from 'react';
import {FormattedMessage} from 'react-intl';
import Sidebar from '../Sidebar/Sidebar';
import './StartScreen.css';

/**
 * Shows the content of the homepage
 * @returns {*} StartScreen - .jsx Element
 */
const StartScreen = () => {
  return (
    <div className="start-screen">
      <Sidebar />    
      <h1 className="header">
        <FormattedMessage
          id="StartScreen.header.welcome"
          defaultMessage="Welcome to sigma3DSolutions"
        />
      </h1>
      <h2 className="subheader">
        <FormattedMessage
          id="StartScreen.subheader.welcome"
          defaultMessage="This website will help you to solve your mathematical problems."
        />
      </h2>
      <p className="generalText">
      <FormattedMessage
          id="StartScreen.paragraph.explanation"
          defaultMessage="In the sidebar, you can see the different topics. When you click on them, you can find several apps to choose."
      />
      </p>
      <div className="lists">
        <div className="element"> 
          <p className="element-header" >
            <FormattedMessage
                id="StartScreen.elementheader.transformations"
                defaultMessage="Transformations:"
            />
          </p>
          <ul>
            <li>
              <FormattedMessage
              id="StartScreen.element.3Dtransformations"
              defaultMessage="3D-Transformation"
              />
            </li>
          </ul>
        </div>
        <div className="element"> 
          <p className="element-header">
            <FormattedMessage
            id="StartScreen.elementheader.geometry"        
            defaultMessage="Geometry:"
            />
          </p>
          <ul>
            <li>
        <FormattedMessage
          id="StartScreen.element.chebyshev"  
          defaultMessage="Chebyshev-circle"
        />        
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;