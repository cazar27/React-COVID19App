import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryVoronoiContainer, VictoryTooltip } from 'victory';

const Graph = (data) => {

  const colors = {red: '#f44336', green: '#8bc34a', yellow: '#ffc107'};

  console.log(data.data.ts[data.data.ts.length-1].t);
  let unix_timestamp = 1609113600;
  var date = new Date(unix_timestamp * 1000);
  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();
  var formattedTime = 'day: '+ day + '-' + month +'-' + year;
  console.log(formattedTime);

  const cases = {
    deaths: [],confirmed: [], recovered: []
  }
  const months = ['03/20','04/20','05/20','06/20','07/20','08/20','09/20','10/20','11/20','12/20'];
  months.forEach(element => {
    cases.deaths.push({x:element, y: Math.random()*100})
    cases.confirmed.push({x:element, y: Math.random()*100})
    cases.recovered.push({x:element, y: Math.random()*100})
  }, cases);

  function getMothTimestamp(timestamp) {
    let date = new Date(timestamp * 1000);
    let month = date.getMonth()+1;
    return month;
  }

  return (
    <div>
      <VictoryChart domainPadding={{ x: 10, y:10 }} width={480} height={400} theme={VictoryTheme.material}
      containerComponent={
        <VictoryVoronoiContainer
          voronoiDimension="x,y"
          labels={({ datum }) => `${datum.y}`}
          labelComponent={
            <VictoryTooltip
              cornerRadius={2}
              flyoutStyle={{ fill: "white"}}
            />}
        />}>
        <VictoryLine data={cases.deaths} style={{ data: { stroke: colors.red, strokeWidth: ({ active }) => active ? 3 : 1 }, labels: { fill: colors.red }}} />
        <VictoryLine data={cases.recovered} style={{ data: { stroke: colors.green, strokeWidth: ({ active }) => active ? 3 : 1}, labels: { fill: colors.green }} } />
        <VictoryLine data={cases.confirmed} style={{ data: { stroke: colors.yellow, strokeWidth: ({ active }) => active ? 3 : 1 }, labels: { fill: colors.yellow }} } />
      
      </VictoryChart>
    </div>
  )
};

export default Graph;