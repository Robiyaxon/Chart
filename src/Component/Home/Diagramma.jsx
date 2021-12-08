import React from 'react';
import style from "./Diagramma.module.css"
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import BarChartIcon from '@material-ui/icons/BarChart';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
import CircleChart from './CircleChart/CircleChart';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      borderColor: 'gold'
    },
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      borderColor: 'red',
    },
  ],
};
const map3 = [
  { id: 1, name: "Buyurtmalar", foiz: "+2.6%", summa: "18,765" },
  { id: 1, name: "Kirim", foiz: "+0.2%", summa: "4,876" },
  { id: 1, name: "Chiqim", foiz: "+1%", summa: "678" }
]
const map4 = map3.map(a => <div key={a.id} className={style.blockBox}>
  <div className={style.box}>
    <p>{a.name}</p>
    <div className={style.Gradus}>
      <TrendingUpSharpIcon className={style.TrendingUpSharp} />
      <p>{a.foiz}</p>
    </div>


    <h1>{a.summa}</h1>
  </div>
  <BarChartIcon />
</div>)
export function Diagramma() {
  return (
    <>
      <div className={style.BlockBody}>
        {map4}
      </div>
      <div className={style.block}>
        <div className={style.wrapper2}>

          <CircleChart />
        </div>
        <div className={style.wrapper}>
          <Line options={options} data={data} />

        </div>
      </div></>);
}