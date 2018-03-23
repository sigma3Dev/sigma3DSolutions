import React from 'react';
import './ChebyshevCFDrawing.css';
//import { object, date } from '@storybook/addon-knobs/dist/react';

/**
 * shows two circles, radius and chebyshev-distance in a svg
 * hier noch ganz viel schreiben was gemacht wird!!!!!!!!!!!!!!!!!
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
  if (points !== undefined && points.length > 0) {
    //maßstabKreis berechnen, 200 ist der Radius bis zum Chebyshev-Kreis
    maßstabKreis=200/radius;
    // darstellung der punkte
    // runde schleife wenn direkt alles returned wird, bei geschweifter extra return statement
    shiftedPoints = points.map((point, index) => {
      let xNew=point.x*maßstabKreis+250;
      let yNew=point.y*maßstabKreis+250;
        if(index===0){
          return {x: xNew, y:yNew}//<circle cx={xNew} cy={yNew} r="10" className="cheby-circle-points" />
        }else{
          return {x: xNew, y:yNew}//<circle cx={xNew} cy={yNew} r="5" className="cheby-circle-points" />
        }
    })
    circlePoints= shiftedPoints.map((shiftedPoint, index) =>{
      console.log("iteration:", index+1);
      let xNew=shiftedPoint.x;
      let yNew=shiftedPoint.y;
      console.log("x",xNew);
      console.log("y",yNew);
      let abstandZuMP = Math.sqrt((xNew-250)*(xNew-250)+(yNew-250)*(yNew-250));
      console.log("strecke",abstandZuMP);
      let alphaWinkel=Math.acos((250-yNew)/abstandZuMP);
      console.log("winkel",alphaWinkel);
      let diffZuChebyCircle =abstandZuMP-200;
      console.log("abstandKreis",diffZuChebyCircle);
      let maßstabChebyDist=(80/chebyDist)/maßstabKreis;
      console.log("ms",maßstabChebyDist); 
        if(index===0){
          console.log("neuer X-Wert",(xNew-(Math.sin(alphaWinkel)*diffZuChebyCircle))+maßstabChebyDist*(Math.sin(alphaWinkel)*diffZuChebyCircle));
          return <circle cx={(xNew-(Math.sin(alphaWinkel)*diffZuChebyCircle))+maßstabChebyDist*(Math.sin(alphaWinkel)*diffZuChebyCircle)} cy={(yNew-(Math.cos(alphaWinkel)*diffZuChebyCircle))+maßstabChebyDist*(Math.cos(alphaWinkel)*diffZuChebyCircle)} r="5" fill="blue" />
        }else{
          console.log("neuer X-Wert",(xNew-(Math.sin(alphaWinkel)*diffZuChebyCircle))+maßstabChebyDist*(Math.sin(alphaWinkel)*diffZuChebyCircle));
          console.log("neuer Y-Wert",(yNew-(Math.cos(alphaWinkel)*diffZuChebyCircle))+maßstabChebyDist*(Math.cos(alphaWinkel)*diffZuChebyCircle));
          return <circle cx={(xNew-(Math.sin(alphaWinkel)*diffZuChebyCircle))+maßstabChebyDist*(Math.sin(alphaWinkel)*diffZuChebyCircle)} cy={(yNew-(Math.cos(alphaWinkel)*diffZuChebyCircle))+maßstabChebyDist*(Math.cos(alphaWinkel)*diffZuChebyCircle)} r="5" className="cheby-circle-points" />
        }
    })
  }
  return(
    //hier das ist jsx
    <div className="cheby-result-presentation-drawing"> 
      <svg width={500} height={500}>
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