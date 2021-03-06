import React from 'react';
import './sales.css';
import DateRangePicker from '../../components/date-range-picker/dateRangePicker';
import axios from 'axios';

import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title 
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

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
      data: [1, 1, 1],
      backgroundColor: [
        '#3E4954',
        '#FF6D4C',
        '#2BC155',
      ]
    },
  ],
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
      label: 'Доход',
      data: labels.map(month => 0),
      borderColor: '#2F4CDD',
      backgroundColor: '#2F4CDD',
    },
    {
      label: 'Расход',
      data: labels.map(month => 0),
      borderColor: '#B519EC',
      backgroundColor: '#B519EC',
    },
  ],
};

export default class Sales extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      lineChartData,
      ordersMeta: {},
      doughnutData
    }

    axios.get('http://localhost:3030/orders/get')
      .then(orders => orders.data)
      .then(orders => {
        this.setState({ orders })
        orders.forEach(element => {
          this.setState({ 
            lineChartData: {
              labels,
              datasets: [
                {
                  label: 'Доход',
                  data: labels.map((month, index) => 
                    orders.filter(order => (new Date(order.date)).getMonth() == index)
                      .reduce((sum, order) => sum + order.amount, 0)
                  ),
                  borderColor: '#2F4CDD',
                  backgroundColor: '#2F4CDD',
                },
                {
                  label: 'Расход',
                  data: labels.map((month, index) => 
                  orders.filter(order => (new Date(order.date)).getMonth() == index)
                    .reduce((sum, order) => sum + order.outbound, 0)
                ),
                  borderColor: '#B519EC',
                  backgroundColor: '#B519EC',
                },
              ],
            } 
          })
          console.log(new Date(element.date))
        });

        this.setState({
          ordersMeta: {
            inbound: orders.filter(order => order.status === 'done').reduce((sum, order) => parseInt(sum) + parseInt(order.amount), 0),
            outbound: orders.filter(order => order.status === 'done').reduce((sum, order) => parseInt(sum) + parseInt(order.outbound), 0),
            delivery: orders.filter(order => order.status === 'delivery').length,
            done: orders.filter(order => order.status === 'done').length,
            canceled: orders.filter(order => order.status === 'canceled').length,
            new: orders.filter(order => order.status === 'new').length
          },
          doughnutData: {
            datasets: [
              {
                data: [
                  orders.filter(order => order.status === 'delivery').length,
                  orders.filter(order => order.status === 'done').length,
                  orders.filter(order => order.status === 'canceled').length,

                ],
                backgroundColor: [
                  '#3E4954',
                  '#FF6D4C',
                  '#2BC155',
                ]
              },
            ],
          }
        })
        
      })
  }

  render() {
    return (
      <div className='sales-main'>
        <div className='sales-header'>
          <h2>Продажи</h2>
          <DateRangePicker />
        </div>
        <div className='sales-header-dashboard'>
          <div className='sales-header-dashboard-revenue white-card'>
            <div className='sales-header-dashboard-revenue-round-logo'>
              <svg width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7101 24.36C18.7101 25.64 18.3901 26.8667 17.7501 28.04C17.1101 29.1867 16.1634 30.1467 14.9101 30.92C13.6834 31.6933 12.2034 32.1333 10.4701 32.24V35.48H8.31011V32.24C5.88345 32.0267 3.91011 31.2533 2.39011 29.92C0.870112 28.56 0.0967785 26.84 0.0701119 24.76H3.95011C4.05678 25.88 4.47011 26.8533 5.19011 27.68C5.93678 28.5067 6.97678 29.0267 8.31011 29.24V19.24C6.52345 18.7867 5.08345 18.32 3.99011 17.84C2.89678 17.36 1.96345 16.6133 1.19011 15.6C0.416778 14.5867 0.0301118 13.2267 0.0301118 11.52C0.0301118 9.36 0.776778 7.57333 2.27011 6.16C3.79011 4.74666 5.80345 3.96 8.31011 3.8V0.479998H10.4701V3.8C12.7368 3.98667 14.5634 4.72 15.9501 6C17.3368 7.25333 18.1368 8.89333 18.3501 10.92H14.4701C14.3368 9.98667 13.9234 9.14667 13.2301 8.4C12.5368 7.62667 11.6168 7.12 10.4701 6.88V16.64C12.2301 17.0933 13.6568 17.56 14.7501 18.04C15.8701 18.4933 16.8034 19.2267 17.5501 20.24C18.3234 21.2533 18.7101 22.6267 18.7101 24.36ZM3.75011 11.32C3.75011 12.6267 4.13678 13.6267 4.91011 14.32C5.68345 15.0133 6.81678 15.5867 8.31011 16.04V6.8C6.92345 6.93333 5.81678 7.38667 4.99011 8.16C4.16345 8.90667 3.75011 9.96 3.75011 11.32ZM10.4701 29.28C11.9101 29.12 13.0301 28.6 13.8301 27.72C14.6568 26.84 15.0701 25.7867 15.0701 24.56C15.0701 23.2533 14.6701 22.2533 13.8701 21.56C13.0701 20.84 11.9368 20.2667 10.4701 19.84V29.28Z" fill="#2F4CDD"/>
              </svg>
            </div>
            <div className='sales-header-dashboard-revenue-data'>
              <div className='sales-header-dashboard-revenue-data-total'>
                {
                  this.state.ordersMeta.inbound
                }
              </div>
              <div className='sales-header-dashboard-revenue-data-title'>Общий доход</div>
              <div className='sales-header-dashboard-revenue-data-percentage'>
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79204 6.5C4.13258 8.22772 1.04781 11.4157 0.0973511 12.5H19.2522V0.5L12.0044 9.5L5.79204 6.5Z" fill="url(#paint0_linear_10_166)"/>
                  <defs>
                    <linearGradient id="paint0_linear_10_166" x1="9.67478" y1="2" x2="10.3994" y2="12.5036" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2BC155" stopOpacity="0.73"/>
                      <stop offset="1" stopColor="#2BC155" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9439 6.5C20.0667 8.22772 24.0128 11.4157 25.2286 12.5H0.725655V0.5L9.99704 9.5L17.9439 6.5Z" fill="url(#paint0_linear_10_151)"/>
                  <defs>
                  <linearGradient id="paint0_linear_10_151" x1="12.9771" y1="2" x2="12.4096" y2="12.523" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F84E4E" stopOpacity="0.73"/>
                    <stop offset="1" stopColor="#F84E4E" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span>26% (30 days)</span>
              </div>
            </div>
          </div>
          <div className='sales-header-dashboard-orders white-card'>
            <div className='sales-header-dashboard-revenue-round-logo'>
              <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1947 32.5H30.6084C31.6378 32.4989 32.6248 32.1035 33.3527 31.4004C34.0806 30.6974 34.49 29.7442 34.4911 28.75V18.75C34.4911 18.4185 34.3548 18.1005 34.1121 17.8661C33.8694 17.6317 33.5402 17.5 33.1969 17.5C32.8536 17.5 32.5245 17.6317 32.2817 17.8661C32.039 18.1005 31.9027 18.4185 31.9027 18.75V28.75C31.9023 29.0814 31.7659 29.3992 31.5232 29.6336C31.2806 29.8679 30.9516 29.9997 30.6084 30H11.1947C10.8515 29.9997 10.5225 29.8679 10.2799 29.6336C10.0372 29.3992 9.90075 29.0814 9.90045 28.75V11.25C9.90075 10.9186 10.0372 10.6008 10.2799 10.3664C10.5225 10.1321 10.8515 10.0003 11.1947 10H22.8429C23.1862 10 23.5154 9.8683 23.7581 9.63388C24.0008 9.39946 24.1372 9.08152 24.1372 8.75C24.1372 8.41848 24.0008 8.10054 23.7581 7.86612C23.5154 7.6317 23.1862 7.5 22.8429 7.5H11.1947C10.1653 7.50109 9.17834 7.89653 8.45043 8.59956C7.72252 9.30258 7.31308 10.2558 7.31195 11.25V28.75C7.31308 29.7442 7.72252 30.6974 8.45043 31.4004C9.17834 32.1035 10.1653 32.4989 11.1947 32.5Z" fill="#2F4CDD"/>
                <path d="M33.1969 2.5C31.917 2.5 30.6658 2.86656 29.6017 3.55331C28.5375 4.24007 27.708 5.21619 27.2182 6.35823C26.7285 7.50027 26.6003 8.75693 26.85 9.96931C27.0997 11.1817 27.716 12.2953 28.621 13.1694C29.526 14.0435 30.6791 14.6388 31.9344 14.8799C33.1897 15.1211 34.4909 14.9973 35.6733 14.5242C36.8558 14.0512 37.8664 13.2501 38.5775 12.2223C39.2886 11.1945 39.6681 9.98613 39.6681 8.75C39.6661 7.093 38.9837 5.50442 37.7705 4.33274C36.5573 3.16106 34.9125 2.50195 33.1969 2.5ZM33.1969 12.5C32.4289 12.5 31.6783 12.2801 31.0397 11.868C30.4012 11.456 29.9036 10.8703 29.6097 10.1851C29.3158 9.49984 29.2389 8.74584 29.3887 8.01841C29.5386 7.29098 29.9084 6.6228 30.4514 6.09835C30.9944 5.5739 31.6862 5.21675 32.4394 5.07206C33.1926 4.92736 33.9733 5.00162 34.6827 5.28545C35.3922 5.56928 35.9986 6.04993 36.4253 6.66661C36.8519 7.2833 37.0796 8.00832 37.0796 8.75C37.0785 9.74423 36.6691 10.6974 35.9411 11.4004C35.2132 12.1035 34.2263 12.4989 33.1969 12.5Z" fill="#2F4CDD"/>
                <path d="M13.7832 15H20.2544C20.5977 15 20.9269 14.8683 21.1696 14.6339C21.4123 14.3995 21.5487 14.0815 21.5487 13.75C21.5487 13.4185 21.4123 13.1005 21.1696 12.8661C20.9269 12.6317 20.5977 12.5 20.2544 12.5H13.7832C13.4399 12.5 13.1107 12.6317 12.868 12.8661C12.6253 13.1005 12.489 13.4185 12.489 13.75C12.489 14.0815 12.6253 14.3995 12.868 14.6339C13.1107 14.8683 13.4399 15 13.7832 15Z" fill="#2F4CDD"/>
                <path d="M12.489 18.75C12.489 19.0815 12.6253 19.3995 12.868 19.6339C13.1107 19.8683 13.4399 20 13.7832 20H25.4314C25.7747 20 26.1039 19.8683 26.3466 19.6339C26.5893 19.3995 26.7257 19.0815 26.7257 18.75C26.7257 18.4185 26.5893 18.1005 26.3466 17.8661C26.1039 17.6317 25.7747 17.5 25.4314 17.5H13.7832C13.4399 17.5 13.1107 17.6317 12.868 17.8661C12.6253 18.1005 12.489 18.4185 12.489 18.75Z" fill="#2F4CDD"/>
              </svg>
            </div>
            <div className='sales-header-dashboard-revenue-data'>
              <div className='sales-header-dashboard-revenue-data-total'>
                {
                  this.state.orders.length
                }
              </div>
              <div className='sales-header-dashboard-revenue-data-title'>Общие заказы</div>
              <div className='sales-header-dashboard-revenue-data-percentage'>
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79204 6.5C4.13258 8.22772 1.04781 11.4157 0.0973511 12.5H19.2522V0.5L12.0044 9.5L5.79204 6.5Z" fill="url(#paint0_linear_10_166)"/>
                  <defs>
                    <linearGradient id="paint0_linear_10_166" x1="9.67478" y1="2" x2="10.3994" y2="12.5036" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2BC155" stopOpacity="0.73"/>
                      <stop offset="1" stopColor="#2BC155" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9439 6.5C20.0667 8.22772 24.0128 11.4157 25.2286 12.5H0.725655V0.5L9.99704 9.5L17.9439 6.5Z" fill="url(#paint0_linear_10_151)"/>
                  <defs>
                    <linearGradient id="paint0_linear_10_151" x1="12.9771" y1="2" x2="12.4096" y2="12.523" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F84E4E" stopOpacity="0.73"/>
                      <stop offset="1" stopColor="#F84E4E" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span>4% (30 days)</span>
              </div>
            </div>
          </div>
          <div className='sales-header-dashboard-customers white-card'>
            <div className='sales-header-dashboard-revenue-round-logo'>
              <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4712 22.2649C18.5068 22.2649 19.5191 21.9681 20.3802 21.4122C21.2412 20.8562 21.9123 20.0661 22.3086 19.1416C22.7049 18.217 22.8086 17.1997 22.6066 16.2183C22.4046 15.2368 21.9059 14.3353 21.1736 13.6277C20.4414 12.9201 19.5084 12.4383 18.4927 12.243C17.477 12.0478 16.4242 12.148 15.4675 12.531C14.5107 12.9139 13.693 13.5624 13.1177 14.3944C12.5423 15.2265 12.2352 16.2047 12.2352 17.2054C12.2366 18.5468 12.7887 19.833 13.7703 20.7815C14.752 21.7301 16.083 22.2636 17.4712 22.2649ZM17.4712 14.6756C17.989 14.6756 18.4952 14.824 18.9257 15.1019C19.3562 15.3799 19.6918 15.775 19.8899 16.2373C20.0881 16.6995 20.1399 17.2082 20.0389 17.6989C19.9379 18.1896 19.6886 18.6404 19.3224 18.9942C18.9563 19.348 18.4898 19.5889 17.982 19.6865C17.4741 19.7841 16.9477 19.734 16.4694 19.5425C15.991 19.3511 15.5821 19.0268 15.2944 18.6108C15.0068 18.1948 14.8532 17.7057 14.8532 17.2054C14.8542 16.5347 15.1303 15.8918 15.621 15.4175C16.1118 14.9433 16.7772 14.6765 17.4712 14.6756Z" fill="#2F4CDD"/>
                <path d="M37.923 25.5156C38.3551 24.9564 38.6438 24.306 38.7654 23.6181C38.8869 22.9301 38.8379 22.224 38.6223 21.5579L37.7913 18.9454C37.4012 17.7064 36.6081 16.6218 35.5297 15.8527C34.4513 15.0835 33.1451 14.6708 31.8047 14.6756H25.9311C25.584 14.6756 25.251 14.8089 25.0055 15.0461C24.7601 15.2833 24.6221 15.605 24.6221 15.9405C24.6221 16.2759 24.7601 16.5977 25.0055 16.8349C25.251 17.0721 25.584 17.2054 25.9311 17.2054H31.8047C32.5847 17.2028 33.3447 17.4431 33.9722 17.8908C34.5996 18.3384 35.0611 18.9696 35.2881 19.6906L36.1191 22.3019C36.2108 22.59 36.2313 22.8948 36.1789 23.1919C36.1265 23.4889 36.0027 23.77 35.8175 24.0124C35.6322 24.2549 35.3907 24.452 35.1123 24.5878C34.834 24.7237 34.5265 24.7945 34.2146 24.7946H22.2125C22.1755 24.7946 22.1445 24.812 22.1078 24.815C22.0199 24.8117 21.9349 24.7946 21.8456 24.7946H13.6382C12.1836 24.7895 10.766 25.2378 9.59598 26.0729C8.42592 26.908 7.56573 28.0854 7.14311 29.4304L6.16581 32.4977C5.93753 33.2156 5.88672 33.9751 6.01745 34.7154C6.14819 35.4556 6.45682 36.1559 6.91855 36.76C7.38027 37.364 7.98221 37.8549 8.67598 38.1933C9.36976 38.5317 10.136 38.7081 10.9132 38.7083H24.5698C25.347 38.7082 26.1133 38.5318 26.8071 38.1935C27.501 37.8551 28.103 37.3642 28.5648 36.7602C29.0265 36.1561 29.3352 35.4558 29.466 34.7155C29.5967 33.9752 29.5459 33.2156 29.3176 32.4977L28.341 29.4307C28.0936 28.6669 27.7041 27.9531 27.1916 27.3244H34.2146C34.9367 27.3276 35.6493 27.1653 36.2939 26.8509C36.9385 26.5365 37.4968 26.0789 37.923 25.5156ZM26.4591 35.2567C26.242 35.5437 25.9575 35.7769 25.6291 35.9371C25.3007 36.0974 24.9377 36.1801 24.5698 36.1785H10.9132C10.5456 36.1785 10.1832 36.0951 9.85502 35.9351C9.52688 35.775 9.24219 35.5428 9.02385 35.2571C8.80551 34.9714 8.65961 34.6401 8.59789 34.29C8.53617 33.9398 8.56035 33.5806 8.66848 33.2411L9.64513 30.174C9.90459 29.3471 10.4332 28.6232 11.1525 28.1098C11.8718 27.5964 12.7433 27.3209 13.6376 27.3244H21.845C22.7392 27.3209 23.6107 27.5964 24.33 28.1098C25.0493 28.6232 25.5779 29.3471 25.8374 30.174L26.8141 33.2411C26.9242 33.5803 26.9494 33.9399 26.8877 34.2904C26.826 34.6409 26.6791 34.9722 26.4591 35.2571V35.2567Z" fill="#2F4CDD"/>
                <path d="M28.5977 12.1458C29.5038 12.1458 30.3896 11.8862 31.1431 11.3997C31.8965 10.9133 32.4837 10.2219 32.8305 9.41291C33.1772 8.60397 33.2679 7.71383 33.0912 6.85506C32.9144 5.99629 32.478 5.20746 31.8373 4.58833C31.1966 3.96919 30.3802 3.54755 29.4915 3.37673C28.6028 3.20591 27.6816 3.29358 26.8445 3.62866C26.0073 3.96373 25.2918 4.53116 24.7884 5.25919C24.2849 5.98722 24.0162 6.84315 24.0162 7.71874C24.0177 8.89245 24.5008 10.0177 25.3597 10.8476C26.2186 11.6775 27.3831 12.1444 28.5977 12.1458ZM28.5977 5.82142C28.9861 5.82142 29.3657 5.9327 29.6886 6.14118C30.0115 6.34966 30.2631 6.64598 30.4117 6.99267C30.5604 7.33936 30.5992 7.72085 30.5235 8.08889C30.4477 8.45694 30.2607 8.79501 29.9861 9.06035C29.7115 9.3257 29.3617 9.5064 28.9808 9.57961C28.5999 9.65281 28.2051 9.61524 27.8463 9.47164C27.4875 9.32803 27.1809 9.08485 26.9651 8.77284C26.7494 8.46082 26.6342 8.094 26.6342 7.71874C26.6348 7.21572 26.8419 6.73346 27.21 6.37777C27.5781 6.02207 28.0771 5.82199 28.5977 5.82142Z" fill="#2F4CDD"/>
              </svg>
            </div>
            <div className='sales-header-dashboard-revenue-data'>
              <div className='sales-header-dashboard-revenue-data-total'>
                {
                  [...new Set(this.state.orders.map(order => order.client_id))].length
                }
              </div>
              <div className='sales-header-dashboard-revenue-data-title'>Общие покупатели</div>
              <div className='sales-header-dashboard-revenue-data-percentage'>
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79204 6.5C4.13258 8.22772 1.04781 11.4157 0.0973511 12.5H19.2522V0.5L12.0044 9.5L5.79204 6.5Z" fill="url(#paint0_linear_10_166)"/>
                  <defs>
                    <linearGradient id="paint0_linear_10_166" x1="9.67478" y1="2" x2="10.3994" y2="12.5036" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2BC155" stopOpacity="0.73"/>
                      <stop offset="1" stopColor="#2BC155" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9439 6.5C20.0667 8.22772 24.0128 11.4157 25.2286 12.5H0.725655V0.5L9.99704 9.5L17.9439 6.5Z" fill="url(#paint0_linear_10_151)"/>
                    <defs>
                      <linearGradient id="paint0_linear_10_151" x1="12.9771" y1="2" x2="12.4096" y2="12.523" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F84E4E" stopOpacity="0.73"/>
                        <stop offset="1" stopColor="#F84E4E" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                </svg>
                <span>4% (30 days)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='sales-main-dashboards'>
          <div className='sales-main-dashboards-orders white-card'>
            <div className='sales-main-dashboards-orders-header'>
              <div className='sales-main-dashboards-orders-header-header'>Сводка заказов</div>
              <div className='sales-main-dashboards-orders-header-text'>Сводка заказов за указанный период</div>
            </div>
            <div className='sales-main-dashboards-orders-orders'>
              <div className='sales-main-dashboards-orders-orders-new'>
                <div className='sales-main-dashboards-orders-orders-new-count'>
                  {
                    this.state.orders.filter(order => order.status === 'new').length
                  }
                </div>
                <div className='sales-main-dashboards-orders-orders-new-text'>
                  <div>Новые заказы</div>
                  <div>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#2BC155"/>
                    </svg>

                  </div>
                </div>
              </div>
                <Link to='/orders' className='sales-main-dashboards-orders-orders-link'>
                  <div>Управление заказами</div>
                  <div>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L7 7L1 1" stroke="#2F4CDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>    
            </div>
            <div className='sales-main-dashboards-orders-dashboards'>
              <div>
                <div className='sales-main-dashboards-orders-dashboards-count'>
                  {
                    this.state.ordersMeta.delivery
                  }
                </div>
                <div className='sales-main-dashboards-orders-dashboards-title'>На доставке</div>
              </div>
              <div>
                <div className='sales-main-dashboards-orders-dashboards-count'>
                  {
                    this.state.ordersMeta.done
                  }
                </div>
                <div className='sales-main-dashboards-orders-dashboards-title'>Доставлено</div>
              </div>
              <div>
                <div className='sales-main-dashboards-orders-dashboards-count'>
                  {
                    this.state.ordersMeta.canceled
                  }
                </div>
                <div className='sales-main-dashboards-orders-dashboards-title'>Отменено</div>
              </div>
            </div>
            <div className='sales-main-dashboards-orders-diagram'>
              <div className='sales-main-dashboards-orders-diagram-diagram'>
              <Doughnut
                data={this.state.doughnutData}
              />
              </div>
              <div className='sales-main-dashboards-orders-diagram-summary'>
                <div className='sales-main-dashboards-orders-diagram-summary-item'>
                  <div className='sales-main-dashboards-orders-diagram-summary-item-title'>
                    На доставке ({
                    100 * this.state.ordersMeta.delivery / 
                      (this.state.ordersMeta.done + this.state.ordersMeta.canceled + this.state.ordersMeta.delivery)
                    }%)
                  </div>
                  <div className='sales-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: `${100 * this.state.ordersMeta.delivery / 
                      (this.state.ordersMeta.done + this.state.ordersMeta.canceled + this.state.ordersMeta.delivery)}%`, 'backgroundColor': '#FF6D4C'}}></div>
                  </div>
                  <div className='sales-main-dashboards-orders-diagram-summary-count'>{this.state.ordersMeta.delivery}</div>
                </div>
                <div className='sales-main-dashboards-orders-diagram-summary-item'>
                  <div className='sales-main-dashboards-orders-diagram-summary-item-title'>
                    Доставлено ({
                    100 * this.state.ordersMeta.done / 
                      (this.state.ordersMeta.done + this.state.ordersMeta.canceled + this.state.ordersMeta.delivery)
                    }%)
                  </div>
                  <div className='sales-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: `${100 * this.state.ordersMeta.done / 
                      (this.state.ordersMeta.done + this.state.ordersMeta.canceled + this.state.ordersMeta.delivery)}%`, 'backgroundColor': '#2BC155'}}></div>
                  </div>
                  <div className='sales-main-dashboards-orders-diagram-summary-count'>{this.state.ordersMeta.done}</div>
                </div>
                <div className='sales-main-dashboards-orders-diagram-summary-item'>
                  <div className='sales-main-dashboards-orders-diagram-summary-item-title'>
                    Отменено ({
                    100 * this.state.ordersMeta.canceled / 
                      (this.state.ordersMeta.done + this.state.ordersMeta.canceled + this.state.ordersMeta.delivery)
                    }%)
                  </div>
                  <div className='sales-main-dashboards-orders-diagram-summary-item-bar'>
                    <div style={{width: `${100 * this.state.ordersMeta.canceled / 
                      (this.state.ordersMeta.done + this.state.ordersMeta.canceled + this.state.ordersMeta.delivery)}%`, 'backgroundColor': '#3E4954'}}></div>
                  </div>
                  <div className='sales-main-dashboards-orders-diagram-summary-count'>{this.state.ordersMeta.canceled}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='sales-main-dashboards-revenue white-card'>
            <div className='sales-main-dashboards-revenue-header'>
              <div className='sales-main-dashboards-revenue-header-header'>Доход</div>
              <div className='sales-main-dashboards-revenue-header-text'>Сводка доходов за указанный период</div>
            </div>
            <div className='sales-main-dashboards-revenue-data'>
              <div className='sales-main-dashboards-revenue-data-titles'>
                <div className='sales-main-dashboards-revenue-data-titles-item'>
                  <div className='sales-main-dashboards-revenue-data-titles-item-square bg-blue'></div>
                  <div className='sales-main-dashboards-revenue-data-titles-item-title'>Доход</div>
                </div>
                <div className='sales-main-dashboards-revenue-data-titles-item'>
                  <div className='sales-main-dashboards-revenue-data-titles-item-square bg-purple'></div>
                  <div className='sales-main-dashboards-revenue-data-titles-item-title'>Расход</div>
                </div>
              </div>
              <div className='sales-main-dashboards-revenue-data-counts'>
                <div className='sales-main-dashboards-revenue-data-counts-item'>
                  <div className='sales-main-dashboards-revenue-data-counts-item-icon'>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="3.54545" height="26" rx="1.77273" fill="#2F4CDD"/>
                      <rect x="7.09094" y="7.09091" width="3.54545" height="18.9091" rx="1.77273" fill="#2F4CDD" fillOpacity="0.43"/>
                      <rect x="14.1819" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#2F4CDD"/>
                      <rect x="21.2727" y="3.54547" width="3.54545" height="22.4545" rx="1.77273" fill="#2F4CDD" fillOpacity="0.78"/>
                    </svg>
                  </div>
                  <div className='sales-main-dashboards-revenue-data-counts-item-data'>
                    <div className='sales-main-dashboards-revenue-data-counts-item-data-title'>Доход</div>
                    <div className='sales-main-dashboards-revenue-data-counts-item-data-total'>
                      ${
                        this.state.ordersMeta.inbound
                      }
                    </div>
                  </div>
                </div>
                <div className='sales-main-dashboards-revenue-data-counts-item'>
                  <div className='sales-main-dashboards-revenue-data-counts-item-icon'>
                   <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="3.54545" height="26" rx="1.77273" fill="#B519EC"/>
                      <rect x="7.09094" y="7.09091" width="3.54545" height="18.9091" rx="1.77273" fill="#B519EC" fillOpacity="0.47"/>
                      <rect x="14.1819" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#B519EC"/>
                      <rect x="21.2727" y="3.54547" width="3.54545" height="22.4545" rx="1.77273" fill="#B519EC" fillOpacity="0.67"/>
                    </svg>
                  </div>
                  <div className='sales-main-dashboards-revenue-data-counts-item-data'>
                    <div className='sales-main-dashboards-revenue-data-counts-item-data-title'>Расход</div>
                    <div className='sales-main-dashboards-revenue-data-counts-item-data-total'>
                      ${
                        this.state.ordersMeta.outbound

                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='sales-main-dashboards-revenue-chart'>
              <Line options={lineChartOptions} data={this.state.lineChartData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}