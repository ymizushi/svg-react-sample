import React from 'react';

type Margin = {
  top: number;
  left: number;
}
type Size = {
  width: number;
  height: number;
}

type Props = {
  margin: Margin;
  size: Size;
  data: number[][];
  max: number;
};

const calcElementSize = (data: number[][], size: Size): Size => {
  if (data.length > 0 && data[0].length > 0 ) {
    const width = size.width/data[0].length;
    const height = size.height/data.length;
    return {width, height};
  } 
  throw new Error("data is invalid");
}

const generateColor = (n: number, max: number): [number, number, number] => {
  const blue = [0, 103, 192];
  const red = [255, 0, 0];
  const diff = [red[0]-blue[0], red[1]-blue[1], red[2]-blue[2]];
  const percentage = n/max
  return [
    diff[0]*percentage+blue[0],
    diff[1]*percentage+blue[1],
    diff[2]*percentage+blue[2]
  ]
}

const drawElementRect = (data: number[][], size: Size, max: number) => {
  const elementSize = calcElementSize(data, size);
  return data.map(
    (nl,y) => nl.map((n,x)=> (
      <rect key={`${x}-${y}`} className="charts__heatmap__rect-element"
        x={x*elementSize.width}
        y={y*elementSize.height}
        style={
          {
            fill: `rgb(${generateColor(n, max).join(',')})`
          }
        }
        width={elementSize.width}
        height={elementSize.height}
      >{n}</rect>
    ))
  );
};

const Heatmap = ({margin, size, data, max}: Props) => {
  return (
    <g transform={`translate(${margin.left},${margin.top})`}>
      <rect className="charts__heatmap__rect-element"
        x={0} 
        y={0} 
        width={size.width}
        height={size.height}
      />
      { drawElementRect(data, size, max) }
    </g>
  );
}

export default Heatmap;
