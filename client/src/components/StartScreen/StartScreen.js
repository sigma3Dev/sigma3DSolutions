import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
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
        <div className='element-header'>
          <Link to='/transformations'>
            <FormattedMessage
              id='StartScreen.elementheader.transformations'
              defaultMessage='Transformations:'
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/transformations/three-d-transformation/data-input'>
              <FormattedMessage
                id='StartScreen.element.3Dtransformations'
                defaultMessage='3D-Transformation'
              />
            </Link>
          </li>
          <li>
            <Link to='/transformations/parameter-inversion'>
              <FormattedMessage
                id='ParamInversion.caption.paramInversionHeader'
                defaultMessage='Parameter Inversion'
              />
            </Link>
          </li>
          <li>
            <Link to='/transformations/transform/data-input'>
              <FormattedMessage
                id='ApplyTrafoInput.caption.applyTrafoHeader'
                defaultMessage='Apply Transformation'
              />
            </Link>
          </li>
          <li>
            <Link to='/transformations/quat-cardan'>Quaternion ⇄ Cardan</Link>
          </li>
        </ul>
      </div>
      <div className='element'>
        <div className='element-header'>
          <Link to='/geometry'>
            <FormattedMessage id='StartScreen.elementheader.geometry' defaultMessage='Geometry:' />
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/geometry/fit-circle-chebyshev/data-input'>
              <FormattedMessage
                id='StartScreen.element.chebyshev'
                defaultMessage='Chebyshev-circle'
              />
            </Link>
          </li>
          <li>
            <Link to='/geometry/fit-circle-l-two/data-input'>
              <FormattedMessage id='StartScreen.element.circleL2' defaultMessage='Circle L2' />
            </Link>
          </li>
          <li>
            <Link to='/geometry/fit-plane-gauss/data-input'>
              <FormattedMessage
                id='StartScreen.element.fitPlaneGauss'
                defaultMessage='Gauss Plane'
              />
            </Link>
          </li>
          <li>
            <Link to='/geometry/fit-plane-ransac/data-input'>
              <FormattedMessage
                id='StartScreen.element.fitPlaneRansac'
                defaultMessage='RANSAC Plane'
              />
            </Link>
          </li>
          <li>
            <Link to='/geometry/fit-cylinder/data-input'>
              <FormattedMessage id='StartScreen.element.fitCylinder' defaultMessage='Cylinder' />
            </Link>
          </li>
          <li>
            <Link to='/geometry/fit-point/data-input'>
              <FormattedMessage id='StartScreen.element.fitPoint' defaultMessage='Point' />
            </Link>
          </li>
          <li>
            <Link to='/geometry/fit-line-l-two/data-input'>
              <FormattedMessage id='StartScreen.element.fitLineL2' defaultMessage='Line' />
            </Link>
          </li>
          <li>
            <Link to='/geometry/fit-line-ransac/data-input'>
              <FormattedMessage
                id='StartScreen.element.fitLineRansac'
                defaultMessage='Line RANSAC'
              />
            </Link>
          </li>
          {/* <li>
            <Link to='/geometry/fit-sphere/data-input'>
              <FormattedMessage id='StartScreen.element.fitSphere' defaultMessage='Sphere' />
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
);

export default StartScreen;
