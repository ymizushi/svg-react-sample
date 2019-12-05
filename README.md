# svg-react-sample

the sample project to create svg with React. 

# ex1. Heatmap

![screenshot 2019-12-06 3 49 55](https://user-images.githubusercontent.com/788785/70264296-80899b80-17db-11ea-8384-b9b1aa3e1449.png)


## Usage

Import Heatmap component and give anguments like below.

```jsx
<Heatmap
  margin={{top: 10, left: 10}}
  size={{width: 100, height: 200}}
  data={[[10,10,10,5,10],[12,12,13,4,12]]}
  max={50}
/>
```

# Run server

```
yarn start
```

and open 'http://localhost:3000'


# Run Test

```
yarn test
```
