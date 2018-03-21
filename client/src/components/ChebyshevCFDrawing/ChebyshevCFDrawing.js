import React from 'react';
import './ChebyshevCFDrawing.css';

/**
 * shows two circles, radius and chebyshev-distance in a svg
 * @param {Object} chebyDist - response of chebyshev distance that is returned from backend after successful calculation
 * @param {Object} radius - response of radius that is returned from backend after successful calculation
 * @returns {*} ChebyshevCFDrawing - .jsx Element
 */

const ChebyshevCFDrawing = ({
  radius, 
  chebyDist
}) => {
  return(
    <div className="cheby-result-presentation-drawing"> 
      <svg width={500} height={500}>
        <circle cx="250" cy="250" r="240" className="cheby-exterior-circle"/>
        <circle cx="250" cy="250" r="160" className="cheby-interior-circle"/>
        <line  x1="250"  y1="250" x2="490" y2="250" className="line-cheby-cf"/>
        <circle cx="250" cy="250" r="3" className="cheby-middle" />
        <circle cx="410" cy="250" r="3" className="cheby-middle"/>
        <circle cx="490" cy="250" r="3" className="cheby-middle"/>
        <text x="300" y="240" className="cheby-line-text-radius">{radius}</text>
        <text x="420" y="240" className="cheby-line-text-chebyDist">{chebyDist}</text>
      </svg>
    </div>
  );
};

export default ChebyshevCFDrawing;