import React, { useState } from 'react';
import Heatmap from './charts/Heatmap';
import {range, randomInt} from '../util';

const margin = {top: 2, left: 2};
const heatmapSize = {width: 10, height: 10};
const showcaseSize = {width: 50, height: 50};

const generateHeatmapData = (max: number): number[][] => {
  const xNum = 1 + randomInt(9)
  const yNum = 1 + randomInt(9)
  return range(0, yNum).map(
    (y) => range(0, xNum).map(
      (x)=> randomInt(max)
    )
  )
}

const ChartShowcase = () => {
  const [heatmapData, setHeatmapData] = useState<number[][]>([[10]]);
  const handleButton = () => {
    setHeatmapData(generateHeatmapData(50))
  }

  return (
    <article className="chart-showcase">
      <section className="chart-showwcase__title">
        <h1>SVG Chart Showcase</h1>
      </section>
      <section>
        <h1 className="chart-showwcase__element-title">Heatmap SVG</h1> 
        <div>
          <button onClick={handleButton}>Generate Heatmap data</button>
          <div>
            { heatmapData.map((e,i) => (<div key={i}>{ e.toString() }</div>)) }
          </div>
          <svg 
            viewBox={`0 0 ${showcaseSize.width} ${showcaseSize.height}`}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <Heatmap
              margin={margin}
              size={heatmapSize}
              data={heatmapData}
              max={50}
            />
          </svg>
        </div>
      </section>
    </article>
  );
}

export default ChartShowcase;
