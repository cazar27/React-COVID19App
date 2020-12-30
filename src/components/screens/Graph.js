import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryVoronoiContainer, VictoryTooltip, VictoryLegend } from 'victory';

const Graph = (data) => {

  const colors = {red: '#f44336', green: '#8bc34a', yellow: '#ffc107'};
  const cases = {
    deaths: [],confirmed: [], recovered: []
  }
  const months = ['03/20','04/20','05/20','06/20','07/20','08/20','09/20','10/20','11/20','12/20'];
  let index = 70;
  months.forEach(element => {
    cases.deaths.push( {x:element, y: parseInt(data.data.ts[index].d) });
    cases.confirmed.push( {x:element, y: parseInt(data.data.ts[index].c) });
    cases.recovered.push( {x:element, y: parseInt(data.data.ts[index].r) });
    index= index+30;
  }, cases,index);

  // function getMothTimestamp(timestamp) {
  //   let date = new Date(timestamp * 1000);
  //   let month = date.getMonth()+1;
  //   return month;
  // }

  return (
    <div>
      <VictoryChart domainPadding={{ x: 0, y:20 }} width={480} height={420} theme={VictoryTheme.material}
      containerComponent={
        <VictoryVoronoiContainer
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
        <VictoryLegend x={125} y={395}
          centerTitle
          orientation="horizontal"
          gutter={20}

          data={[
            { name: "Fallecidos", symbol: { fill: colors.red} },
            { name: "Recuperados", symbol: { fill: colors.green } },
            { name: "Positivos", symbol: { fill: colors.yellow } }
          ]}
        />
      </VictoryChart>
    </div>
  )
};

export default Graph;