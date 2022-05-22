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
import axios from 'axios';

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
      data: [0, 0, 0, 0, 0, 0, 0],
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
      data: labels.map(month => 0),
      borderColor: '#2F4CDD',
      backgroundColor: '#2F4CDD',
    },
    {
      label: 'Yandex',
      data: labels.map(month => 0),
      borderColor: '#B519EC',
      backgroundColor: '#B519EC',
    },
    {
      label: 'Рассылки',
      data: labels.map(month => 0),
      borderColor: '#F0502E',
      backgroundColor: '#F0502E',
    },
    {
      label: 'Таргет Instagram',
      data: labels.map(month => 0),
      borderColor: '#a89e32',
      backgroundColor: '#a89e32',
    },
    {
      label: 'Таргет Facebook',
      data: labels.map(month => 0),
      borderColor: '#386fc7',
      backgroundColor: '#386fc7',
    },
    {
      label: 'Промоакции',
      data: labels.map(month => 0),
      borderColor: '#c41dc2',
      backgroundColor: '#c41dc2',
    },
    {
      label: 'Другие',
      data: labels.map(month => 0),
      borderColor: '#1dc4b6',
      backgroundColor: '#1dc4b6',
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

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      lineChartData,
      ordersMeta: {},
      doughnutData,
      clients: [],
      orderAmountMeta: {}
    }

    axios.get('http://localhost:3030/orders/get')
      .then(res => res.data)
      .then(orders => {
        axios.get('http://localhost:3030/clients/get')
          .then(res => res.data)
          .then(clients => {
            this.setState({ clients })
            orders.forEach(order => {
              order.source_id = clients.find(client => client.id == order.client_id).source_id
              this.setState({ orders })
            })
            this.setState({
              lineChartData: {
                labels,
                datasets: [
                  {
                    label: 'Google',
                    data: labels.map((month, index) => orders.filter(order => {
                      return (index == (new Date(order.date)).getMonth()) && (order.source_id == 2)
                    }).length),
                    borderColor: '#2F4CDD',
                    backgroundColor: '#2F4CDD',
                  },
                  {
                    label: 'Yandex',
                    data: labels.map((month, index) => orders.filter(order => {
                      return (index == (new Date(order.date)).getMonth()) && (order.source_id == 1)
                    }).length),
                    borderColor: '#B519EC',
                    backgroundColor: '#B519EC',
                  },
                  {
                    label: 'Рассылки',
                    data: labels.map((month, index) => orders.filter(order => {
                      return (index == (new Date(order.date)).getMonth()) && (order.source_id == 3)
                    }).length),
                    borderColor: '#F0502E',
                    backgroundColor: '#F0502E',
                  },
                  {
                    label: 'Таргет Instagram',
                    data: labels.map((month, index) => orders.filter(order => {
                      return (index == (new Date(order.date)).getMonth()) && (order.source_id == 4)
                    }).length),
                    borderColor: '#a89e32',
                    backgroundColor: '#a89e32',
                  },
                  {
                    label: 'Таргет Facebook',
                    data: labels.map((month, index) => orders.filter(order => {
                      return (index == (new Date(order.date)).getMonth()) && (order.source_id == 5)
                    }).length),
                    borderColor: '#386fc7',
                    backgroundColor: '#386fc7',
                  },
                  {
                    label: 'Промоакции',
                    data: labels.map((month, index) => orders.filter(order => {
                      return (index == (new Date(order.date)).getMonth()) && (order.source_id == 6)
                    }).length),
                    borderColor: '#c41dc2',
                    backgroundColor: '#c41dc2',
                  },
                  {
                    label: 'Другие',
                    data: labels.map((month, index) => orders.filter(order => {
                      return (index == (new Date(order.date)).getMonth()) && (order.source_id == 7)
                    }).length),
                    borderColor: '#1dc4b6',
                    backgroundColor: '#1dc4b6',
                  }
                ],
              }
            })

            this.setState({ 
              ordersMeta: {
                1: orders.filter(order => order.source_id == 1).length,
                2: orders.filter(order => order.source_id == 2).length,
                3: orders.filter(order => order.source_id == 3).length,
                4: orders.filter(order => order.source_id == 4).length,
                5: orders.filter(order => order.source_id == 5).length,
                6: orders.filter(order => order.source_id == 6).length,
                7: orders.filter(order => order.source_id == 7).length,
                total: orders.length
              },
              orderAmountMeta: {
                1: orders.filter(order => order.source_id == 1).reduce(((sum, order) => parseInt(sum) + parseInt(order.amount)), 0),
                2: orders.filter(order => order.source_id == 2).reduce(((sum, order) => parseInt(sum) + parseInt(order.amount)), 0),
                3: orders.filter(order => order.source_id == 3).reduce(((sum, order) => parseInt(sum) + parseInt(order.amount)), 0),
                4: orders.filter(order => order.source_id == 4).reduce(((sum, order) => parseInt(sum) + parseInt(order.amount)), 0),
                5: orders.filter(order => order.source_id == 5).reduce(((sum, order) => parseInt(sum) + parseInt(order.amount)), 0),
                6: orders.filter(order => order.source_id == 6).reduce(((sum, order) => parseInt(sum) + parseInt(order.amount)), 0),
                7: orders.filter(order => order.source_id == 7).reduce(((sum, order) => parseInt(sum) + parseInt(order.amount)), 0),
                total: orders.reduce(((sum, order) => parseInt(sum) + parseInt(order.amount)), 0)
              }
            })

            this.setState({
              doughnutData: {
                datasets: [
                  {
                    data: [
                      orders.filter(order => order.source_id == 2).length,
                      orders.filter(order => order.source_id == 1).length,
                      orders.filter(order => order.source_id == 3).length,
                      orders.filter(order => order.source_id == 4).length,
                      orders.filter(order => order.source_id == 5).length,
                      orders.filter(order => order.source_id == 6).length,
                      orders.filter(order => order.source_id == 7).length,
                    ],
                    backgroundColor: [
                      '#FF6D4C',
                      '#3E4954',
                      '#2BC155',
                      '#a89e32',
                      '#386fc7',
                      '#c41dc2',
                      '#1dc4b6'
                    ]
                  },
                ],
              }
            })
          
          })
      })
  }

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
              <Line options={lineChartOptions} data={this.state.lineChartData} />
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
                data={this.state.doughnutData}
              />
              </div>
              <div className='analytics-main-dashboards-orders-diagram-summary'>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Google</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: (
                      this.state.ordersMeta[2] * 100 / this.state.ordersMeta.total
                    ) + '%', 'backgroundColor': '#FF6D4C'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>
                    {this.state.ordersMeta[2]}
                  </div>
                </div>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Yandex</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: (
                      this.state.ordersMeta[1] * 100 / this.state.ordersMeta.total
                    ) + '%', 'backgroundColor': '#2BC155'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>
                    {this.state.ordersMeta[1]}
                  </div>
                </div>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Рассылки</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: (
                      this.state.ordersMeta[3] * 100 / this.state.ordersMeta.total
                    ) + '%', 'backgroundColor': '#3E4954'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>
                    {this.state.ordersMeta[3]}
                  </div>
                </div>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Таргет Instagram</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: (
                      this.state.ordersMeta[4] * 100 / this.state.ordersMeta.total
                    ) + '%', 'backgroundColor': '#a89e32'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>
                    {this.state.ordersMeta[4]}
                  </div>
                </div>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Таргет Facebook</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: (
                      this.state.ordersMeta[5] * 100 / this.state.ordersMeta.total
                    ) + '%', 'backgroundColor': '#386fc7'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>
                    {this.state.ordersMeta[5]}
                  </div>
                </div>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Промоакции</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: (
                      this.state.ordersMeta[6] * 100 / this.state.ordersMeta.total
                    ) + '%', 'backgroundColor': '#c41dc2'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>
                    {this.state.ordersMeta[6]}
                  </div>
                </div>
                <div className='analytics-main-dashboards-orders-diagram-summary-item'>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-title'>Другие</div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: (
                      this.state.ordersMeta[7] * 100 / this.state.ordersMeta.total
                    ) + '%', 'backgroundColor': '#1dc4b6'}}></div>
                  </div>
                  <div className='analytics-main-dashboards-orders-diagram-summary-count'>
                    {this.state.ordersMeta[7]}
                  </div>
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
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>{this.state.orderAmountMeta[2]}</div>
                <div style={{width: (
                  this.state.orderAmountMeta[2] * 100 / this.state.orderAmountMeta.total
                ) + '%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Yandex</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>{this.state.orderAmountMeta[1]}</div>
                <div style={{width: (
                  this.state.orderAmountMeta[1] * 100 / this.state.orderAmountMeta.total
                ) + '%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Рассылки</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>{this.state.orderAmountMeta[3]}</div>
                <div style={{width: (
                  this.state.orderAmountMeta[3] * 100 / this.state.orderAmountMeta.total
                ) + '%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Таргет Instagram</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>{this.state.orderAmountMeta[4]}</div>
                <div style={{width: (
                  this.state.orderAmountMeta[4] * 100 / this.state.orderAmountMeta.total
                ) + '%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Таргет Facebook</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>{this.state.orderAmountMeta[5]}</div>
                <div style={{width: (
                  this.state.orderAmountMeta[5] * 100 / this.state.orderAmountMeta.total
                ) + '%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Промоакции</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>{this.state.orderAmountMeta[6]}</div>
                <div style={{width: (
                  this.state.orderAmountMeta[6] * 100 / this.state.orderAmountMeta.total
                ) + '%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
              </div>
              <div className='analytics-main-dashboards-source-efficiency-chart-source-item'>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-title'>Другие</div>
                <div className='analytics-main-dashboards-source-efficiency-chart-source-item-efficiency'>{this.state.orderAmountMeta[7]}</div>
                <div style={{width: (
                  this.state.orderAmountMeta[7] * 100 / this.state.orderAmountMeta.total
                ) + '%'}} className='analytics-main-dashboards-source-efficiency-chart-source-item-bar'></div>
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