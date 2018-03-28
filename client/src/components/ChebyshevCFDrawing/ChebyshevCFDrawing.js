import React from 'react';
import './ChebyshevCFDrawing.css';
//import { object, date } from '@storybook/addon-knobs/dist/react';

/**
 * shows two circles, radius and chebyshev-distance in a svg
 * This component contains a illustration of points which represents a circle in a three-dimensional space. The 3D-ccordinates are converted in plane 2D-ccordinates, 
 * because this is necessary for a simple illustraion on your screen. Therefor one of the axes must serve as normal vector of the circle. 
 * In the next step the coordinates are transformed in the system of SVG (translation and scale) and the distance to the calculated Chebyshev-Circle is illustrated inflated.
 * @param {Object} chebyDist - response of chebyshev distance that is returned from backend after successful calculation
 * @param {Object} radius - response of radius that is returned from backend after successful calculation
 * @param {Object} points - responses an array of points that is returned from backend after successful calculation
 * @returns {*} ChebyshevCFDrawing - .jsx Element
 */
let xPoint1=-10;
let yPoint1=-10;
const ChebyshevCFDrawing = ({
  radius, 
  chebyDist,
  points
}) => {
  let shiftedPoints = null;
  let circlePoints = null;
  let scaleCircle=0;
  if (points !== undefined && points.length > 0) {
    //Calculation of scale, 200 is the radius of the measured Chebyshev-Circle
    scaleCircle=200/radius;
    shiftedPoints = points.map((point, index) => {
      //transformed points with translation in the middle of the svg-area (250 / 250)
      let xShifted=point.x*scaleCircle+250;
      let yShifted=point.y*scaleCircle+250;
          return {x: xShifted, y:yShifted}
    })
    circlePoints= shiftedPoints.map((shiftedPoint, index) =>{
      let xShifted=shiftedPoint.x;
      let yShifted=shiftedPoint.y;
      // vector algebra
      // vector from central point to point of index
      let xVector=xShifted-250;
      let yVector=yShifted-250;
      let distanceToCentralPoint = Math.sqrt(xVector*xVector+yVector*yVector);
      let diffToChehbyCircle =distanceToCentralPoint-200; // 200 = radius defined by svg-circle
      let scaleChebyDist=(80/chebyDist)/scaleCircle;
      // normalized vector with length of 1
      let xNorm=xVector/distanceToCentralPoint;
      let yNorm=yVector/distanceToCentralPoint;
      // xCircle and yCircle are the coordinates which are located on the Chebysehv-circle
      let xCircle=0; 
      let yCircle=0;
      if (diffToChehbyCircle>0.001){
        xCircle=xShifted-diffToChehbyCircle*xNorm;
        yCircle=yShifted-diffToChehbyCircle*yNorm;
        xShifted=xCircle+diffToChehbyCircle*scaleChebyDist*xNorm;
        yShifted=yCircle+diffToChehbyCircle*scaleChebyDist*yNorm; 
      } else if (diffToChehbyCircle<-0.001){
        xCircle=xShifted-diffToChehbyCircle*xNorm;
        yCircle=yShifted-diffToChehbyCircle*yNorm;
        xShifted=xCircle+diffToChehbyCircle*scaleChebyDist*xNorm;
        yShifted=yCircle+diffToChehbyCircle*scaleChebyDist*yNorm;
      }

      if(index===0){
        xPoint1=xShifted;
        yPoint1=yShifted;
        return <circle key={index} cx={xShifted} cy={yShifted} r="3" fill="red"/>
      }else{ 
        return <circle key={index} cx={xShifted} cy={yShifted} r="3" className="cheby-circle-points"/>
      }        
    })
  }
  return(
    <div className="cheby-result-presentation-drawing"> 
      <svg width={550} height={500}>
        <line  x1="10"  y1="10" x2="50" y2="10" fill="black"/>
        <line  x1="50"  y1="10" x2="40" y2="5" fill="black"/>
        <line  x1="50"  y1="10" x2="40" y2="15" fill="black"/>
        <text x="52" y="10" stroke="none">+X</text>
        <line  x1="10"  y1="8.5" x2="10" y2="50" fill="black"/>
        <line  x1="10"  y1="50" x2="5" y2="40" fill="black"/>
        <line  x1="10"  y1="50" x2="15" y2="40" fill="black"/>
        <text x="15" y="50" stroke="none">+Y</text>
        <circle cx="250" cy="250" r="240" className="cheby-exterior-circle"/>
        <circle cx="250" cy="250" r="160" className="cheby-interior-circle"/>
        <circle cx="250" cy="250" r="200" className="chebychev-circle"/>
        <line  x1="250"  y1="250" x2="450" y2="250" className="line-cheby-cf"/>
        <text x="300" y="240" className="cheby-line-text-radius">{radius}</text>
        <circle cx="250" cy="250" r="3" className="cheby-points" />
        <circle cx="450" cy="250" r="3" className="cheby-points"/>
        <line  x1="250"  y1="410" x2="250" y2="490" className="line-cheby-cf"/>
        <text x="235" y="400" className="cheby-line-text-chebyDist">{chebyDist}</text>
        <circle cx="250" cy="410" r="3" className="cheby-points"/>
        <circle cx="250" cy="490" r="3" className="cheby-points"/>
        {circlePoints}
        <circle cx={xPoint1} cy={yPoint1} r="5" fill="red"/>
        <text x={xPoint1+8} y={yPoint1} stroke="none">Punkt 1</text>
      </svg>
    </div>
  );
};

export default ChebyshevCFDrawing;