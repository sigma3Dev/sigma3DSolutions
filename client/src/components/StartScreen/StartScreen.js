import React from 'react';
import { FormattedMessage } from 'react-intl';
import './StartScreen.css';

/**
 * Shows the content of the homepage
 * @returns {*} StartScreen - .jsx Element
 */
const StartScreen = () => (
  <div className='start-screen'>
    <h1 className='header'>
      <FormattedMessage
        id='StartScreen.header.welcome'
        defaultMessage='Welcome to sigma3DSolutions!'
      />
    </h1>
    <h2 className='subheader'>
      <FormattedMessage
        id='StartScreen.subheader.welcome'
        defaultMessage='This website will help you to solve your mathematical problems.'
      />
    </h2>
    <p className='generalText'>
      <FormattedMessage
        id='StartScreen.paragraph.explanation'
        defaultMessage='In the sidebar, you can see the different topics. When you click on them, you can find several apps to choose.'
      />
    </p>
    <div className='lists'>
      <div className='element'>
        <p className='element-header'>
          <FormattedMessage
            id='StartScreen.elementheader.transformations'
            defaultMessage='Transformations:'
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
              id='StartScreen.element.3Dtransformations'
              defaultMessage='3D-Transformation'
            />
          </li>
          <li>
            <FormattedMessage
              id='ParamInversion.caption.paramInversionHeader'
              defaultMessage='Parameter Inversion'
            />
          </li>
          <li>
            <FormattedMessage
              id='ApplyTrafoInput.caption.applyTrafoHeader'
              defaultMessage='Apply Transformation'
            />
          </li>
          <li>Quaternion ⇄ Cardan</li>
        </ul>
      </div>
      <div className='element'>
        <p className='element-header'>
          <FormattedMessage id='StartScreen.elementheader.geometry' defaultMessage='Geometry:' />
        </p>
        <ul>
          <li>
            <FormattedMessage
              id='StartScreen.element.chebyshev'
              defaultMessage='Chebyshev-circle'
            />
          </li>
          <li>
            <FormattedMessage id='StartScreen.element.circleL2' defaultMessage='Circle L2' />
          </li>
          <li>
            <FormattedMessage id='StartScreen.element.fitPlaneGauss' defaultMessage='Gauss Plane' />
          </li>
          <li>
            <FormattedMessage
              id='StartScreen.element.fitPlaneRansac'
              defaultMessage='RANSAC Plane'
            />
          </li>
          <li>
            <FormattedMessage id='StartScreen.element.fitCylinder' defaultMessage='Cylinder' />
          </li>
          <li>
            <FormattedMessage id='StartScreen.element.fitPoint' defaultMessage='Point' />
          </li>
          <li>
            <FormattedMessage id='StartScreen.element.fitLineL2' defaultMessage='Line' />
          </li>
          <li>
            <FormattedMessage id='StartScreen.element.fitLineRansac' defaultMessage='Line RANSAC' />
          </li>
          <li>
            <FormattedMessage id='StartScreen.element.fitSphere' defaultMessage='Sphere' />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default StartScreen;
