import DateRangePicker from '../../components/date-range-picker/dateRangePicker';
import './orders.css';

const orders = [
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'new'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'delivery'
  },
  {
    id: '#5552351',
    date: '26 March 2020, 12:42 AM',
    name: 'James WItcwicky',
    location: 'Corner Street 5th London',
    amount: '$164.52',
    status: 'done'
  },
];

const renderPageBtns = () => {
  let btns = [];
  
  for (let i = 1; i <= parseInt(orders.length / 10); i++) btns.push((
    <div>{i}</div>
  ));
    
  return btns;
}

export default function Orders() {

  return (
    <div className='orders-main'>
      <div className='orders-header'>
          <h2>Заказы</h2>
          <DateRangePicker />
      </div>
      <div className='orders-table-container'>
        <table className='orders-table'>
          <tbody>
            <tr className='orders-table-title'>
              <th>Заказ ID</th>
              <th>Дата</th>
              <th>Клиент</th>
              <th>Адрес</th>
              <th>Сумма</th>
              <th>Статус заказа</th>
            </tr>
            {
              orders.filter((order, index) => (index > (0 * 10) && index < (1 * 10 + 1)))
                .map((order, index) => (
                  <tr className='orders-table-item' key={index}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>{order.name}</td>
                    <td>{order.location}</td>
                    <td>{order.amount}</td>
                    <td>
                      <div className={
                        'orders-table-item-status ' + (
                          order.status === 'new' ? 'status-new' :
                            (
                              order.status === 'delivery' ? 'status-delivery' : 'status-done'
                            )
                        )
                        
                      }>
                        {
                          order.status === 'new' ? 'Новый' :
                            (
                              order.status === 'delivery' ? 'Доставка' : 'Доставлено'
                            )
                        }
                      </div>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
        <div className='orders-table-pagination'>
          <div className='orders-table-pagination-counter'>
            Showing 10 from 160 data
          </div>
          <div className='orders-table-pagination-paginator'>
            <div className='orders-table-pagination-paginator-btn'>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13.5L1 7.5L7 1.5" stroke="#D3D6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 13.5L8 7.5L14 1.5" stroke="#D3D6E4" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Назад
            </div>
            <div className='orders-table-pagination-paginator-pages'>
              {renderPageBtns()}
            </div>
            <div className='orders-table-pagination-paginator-btn'>
              Вперед
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 13.5L14 7.5L8 1.5" stroke="#D3D6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 13.5L7 7.5L1 1.5" stroke="#D3D6E4" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}