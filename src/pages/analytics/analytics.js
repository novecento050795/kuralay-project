import React from 'react';
import './analytics.css';
import DateRangePicker from '../../components/date-range-picker/dateRangePicker';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title,
} from 'chart.js';
import { Doughnut, Line, Scatter } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  );

export let doughnutData = {
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        '#3E4954',
        '#FF6D4C',
        '#2BC155',
      ]
    },
  ],
};

export const scatterOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const lineChartOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
    }
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = [
  'January', 'February', 'March', 
  'April', 'May', 'June', 
  'July', 'August', 'September', 
  'October', 'November', 'December'
];

export let lineChartData = {
  labels,
  datasets: [
    {
      label: 'Google',
      data: labels.map(month => Math.random(500)),
      borderColor: '#2F4CDD',
      backgroundColor: '#2F4CDD',
    },
    {
      label: 'Yandex',
      data: labels.map(month => Math.random(500)),
      borderColor: '#B519EC',
      backgroundColor: '#B519EC',
    },
    {
      label: 'Рассылки',
      data: labels.map(month => Math.random(500)),
      borderColor: '#F0502E',
      backgroundColor: '#F0502E',
    },
  ],
};

export const scatterData = {
  datasets: [
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: Math.random(200) - 100,
        y: Math.random(200) - 100,
      })),
      backgroundColor: '#FF6D4C',
    },
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: Math.random(200) - 100,
        y: Math.random(200) - 100,
      })),
      backgroundColor: '#2BC155',
    },
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: Math.random(200) - 100,
        y: Math.random(200) - 100,
      })),
      backgroundColor: '#3E4954',
    },
  ],
};

export default class Analytics extends React.Component {
  render() {
    return (
      <div className='analytics-main'>
        <div className='analytics-header'>
          <h2>Аналитика Таргетинга</h2>
          <DateRangePicker />
        </div>
        <div className='analytics-main-dashboards'>
          <div className='analytics-main-dashboards-revenue white-card'>
            <div className='analytics-main-dashboards-revenue-header'>
              <div className='analytics-main-dashboards-revenue-header-header'>График заказов</div>
              <div className='analytics-main-dashboards-revenue-header-text'>Аналитика заказов за указанный период</div>
            </div>
            <div className='analytics-main-dashboards-revenue-chart'>
              <Line options={lineChartOptions} data={lineChartData} />
            </div>
          </div>
          <div className='analytics-main-dashboards-orders white-card'>
            <div className='analytics-main-dashboards-orders-header'>
              <div className='analytics-main-dashboards-orders-header-header'>Источники</div>
              <div className='analytics-main-dashboards-orders-header-text'>Сводка популярностей источников таргетинга за указанный период</div>
            </div>
            <div className='analytics-main-dashboards-orders-diagram'>
              <div className='analytics-main-dashboards-orders-diagram-diagram'>
              <Doughnut
                data={doughnutData}
              />
              </div>
              <div className='analytics-main-dashboards-orders-diagram-summary'>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Google</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: '80%', 'backgroundColor': '#FF6D4C'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>25</div>
                </div>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Yandex</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: '60%', 'backgroundColor': '#2BC155'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>60</div>
                </div>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Рассылки</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: '40%', 'backgroundColor': '#3E4954'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>7</div>
                </div>
              </div>
            </div>
          </div>
          <div className='analytics-main-dashboards-revenue white-card'>
            <div className='analytics-main-dashboards-revenue-header'>
              <div className='analytics-main-dashboards-revenue-header-header'>Эффективность источников</div>
              <div className='analytics-main-dashboards-revenue-header-text'>Эффективность источников за указанный период</div>
            </div>
            <div className='analytics-main-dashboards-source-efficiency-chart'>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Google</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>123</div>
                <div style={{width: '100%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Yandex</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>123</div>
                <div style={{width: '12%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Рассылки</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>123</div>
                <div style={{width: '33%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Таргет Instagram</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>123</div>
                <div style={{width: '55%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Таргет Facebook</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>123</div>
                <div style={{width: '70%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Промоакции</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>123</div>
                <div style={{width: '5%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Другие</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>123</div>
                <div style={{width: '24%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
            </div>
          </div>
          <div className='analytics-main-dashboards-revenue white-card'>
            <Scatter options={scatterOptions} data={scatterData} />
          </div>
        </div>
      </div>
    );
  }
}