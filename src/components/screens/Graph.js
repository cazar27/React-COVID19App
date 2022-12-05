import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLegend
} from 'victory';

const Graph = (data) => {
  const colors = {red: '#f44336', green: '#8bc34a', yellow: '#ffc107'};
  const dataC = data.data.ts;
  const cases = {
    deaths: [],
    confirmed: [],
    recovered: []
  };

  dataC.forEach((ts) => {
    cases.deaths.push({x: ts.t, y: parseInt(ts.d)});
    cases.confirmed.push({x: ts.t, y: parseInt(ts.c)});
    cases.recovered.push({x: ts.t, y: parseInt(ts.r)});
  });

  const numberFormat = new Intl.NumberFormat('de-DE');

  function getDateFromTime(ts) {
    let date = new Date(ts).toLocaleDateString('es-ES');
    return date;
  }

  return (
    <div>
      <VictoryChart
        domainPadding={{x: 20, y: 20}}
        width={480}
        height={420}
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({datum}) => `${getDateFromTime(datum.x)}:
          ${numberFormat.format(datum.y)}`}
            labelComponent={<VictoryTooltip cornerRadius={2} flyoutStyle={{fill: 'white'}} />}
          />
        }
      >
        <VictoryLine
          data={cases.deaths}
          style={{
            data: {stroke: colors.red, strokeWidth: ({active}) => (active ? 3 : 1)},
            labels: {fill: colors.red}
          }}
        />
        <VictoryLine
          data={cases.recovered}
          style={{
            data: {stroke: colors.green, strokeWidth: ({active}) => (active ? 3 : 1)},
            labels: {fill: colors.green}
          }}
        />
        <VictoryLine
          data={cases.confirmed}
          style={{
            data: {stroke: colors.yellow, strokeWidth: ({active}) => (active ? 3 : 1)},
            labels: {fill: colors.yellow}
          }}
        />
        <VictoryLegend
          x={125}
          y={395}
          centerTitle
          orientation="horizontal"
          gutter={20}
          data={[
            {name: 'Fallecidos', symbol: {fill: colors.red}},
            {name: 'Recuperados', symbol: {fill: colors.green}},
            {name: 'Positivos', symbol: {fill: colors.yellow}}
          ]}
        />
      </VictoryChart>
      
    </div>
  );
};

export default Graph;
