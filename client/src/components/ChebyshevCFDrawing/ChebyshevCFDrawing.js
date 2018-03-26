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

const ChebyshevCFDrawing = ({
  radius, 
  chebyDist,
  points
}) => {
  let shiftedPoints = null;
  let circlePoints = null;
  let maßstabKreis=0;
  console.clear();
  if (points !== undefined && points.length > 0) {
    //Calculation of scale, 200 is the radius of the measured Chebyshev-Circle
    maßstabKreis=200/radius;
    shiftedPoints = points.map((point, index) => {
      //transformed points with translation in the middle of the svg-area (250 / 250)
      let xNew=point.x*maßstabKreis+250;
      let yNew=point.y*maßstabKreis+250;
          return {x: xNew, y:yNew}
    })
    circlePoints= shiftedPoints.map((shiftedPoint, index) =>{
      let xNew=shiftedPoint.x;
      let yNew=shiftedPoint.y;
      // vector algebra
      // vector from central point to point of index
      let xVektor=xNew-250;
      let yVektor=yNew-250;
      let abstandZuMP = Math.sqrt(xVektor*xVektor+yVektor*yVektor);
      let diffZuChebyCircle =abstandZuMP-200; // 200 = radius defined by svg-circle
      if ((diffZuChebyCircle/maßstabKreis)>3 || (diffZuChebyCircle)<(-3)){
        console.log(index+1);
      }
      let maßstabChebyDist=(80/chebyDist)/maßstabKreis;
      // normalized vector with length of 1
      let xNorm=xVektor/abstandZuMP;
      let yNorm=yVektor/abstandZuMP;
      // xKreis and yKreis are the coordinates which are located on the Chebysehv-circle
      let xKreis=0; 
      let yKreis=0;
      if (diffZuChebyCircle>0.001){
        xKreis=xNew-diffZuChebyCircle*xNorm;
        yKreis=yNew-diffZuChebyCircle*yNorm;
        xNew=xKreis+diffZuChebyCircle*maßstabChebyDist*xNorm;
        yNew=yKreis+diffZuChebyCircle*maßstabChebyDist*yNorm; 
      } else if (diffZuChebyCircle<-0.001){
        xKreis=xNew-diffZuChebyCircle*xNorm;
        yKreis=yNew-diffZuChebyCircle*yNorm;
        xNew=xKreis+diffZuChebyCircle*maßstabChebyDist*xNorm;
        yNew=yKreis+diffZuChebyCircle*maßstabChebyDist*yNorm;
      }

      if(index===0){
          return <circle cx={xNew} cy={yNew} r="3" fill="red" text={index+1}/>
        }else{
          return <circle cx={xNew} cy={yNew} r="3" className="cheby-circle-points" text={index+1}/>
        }        
    })
  }
  return(
    <div className="cheby-result-presentation-drawing"> 
      <svg width={500} height={500}>
        <line  x1="10"  y1="10" x2="50" y2="10" fill="black"/>
        <text x="52" y="10" stroke="none">+X</text>
        <line  x1="10"  y1="8.5" x2="10" y2="50" fill="black"/>
        <text x="12" y="50" stroke="none"s>+Y</text>
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
      </svg>
    </div>
  );
};

export default ChebyshevCFDrawing;