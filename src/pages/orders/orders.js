import React from 'react';
import DateRangePicker from '../../components/date-range-picker/dateRangePicker';
import './orders.css';



export default class Orders extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      orders: [
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
      ]
    }
  }

  onPageSelected(page, isAdd = false) {

    if (isAdd) {
      page = (this.state.page + page) < 1 ? Math.ceil(this.state.orders.length / 10) :
        (
          (this.state.page + page) > Math.ceil(this.state.orders.length / 10) ? 1 : 
            this.state.page + page
        )
    }

    this.setState({ 
      ...this.state, 
      page
    });
  }

  renderPageBtns = () => {
    let btns = [];
    
    for (let i = 1; i <= Math.ceil(this.state.orders.length / 10); i++) btns.push((
      <div 
        key={i} 
        className={ this.state.page === i ? 'page-btn-active' : 'page-btn-inactive'}
        onClick={() => this.onPageSelected(i)}
      >{i}</div>
    ));
      
    return btns;
  }

  render() {
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
                this.state.orders.filter(
                  (order, index) => (
                    index > ((this.state.page - 1) * 10) && 
                    index < (this.state.page * 10 + 1)
                  )
                )
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
              Показано {
              this.state.orders.filter(
                  (order, index) => (
                    index > ((this.state.page - 1) * 10) && 
                    index < (this.state.page * 10 + 1)
                  )
                ).length
              } из {this.state.orders.length} заказов
            </div>
            <div className='orders-table-pagination-paginator'>
              <div onClick={() => this.onPageSelected(-1, true)} className='orders-table-pagination-paginator-btn paginator-btn-back'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13.5L1 7.5L7 1.5" stroke="#D3D6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 13.5L8 7.5L14 1.5" stroke="#D3D6E4" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>Назад</div>
              </div>
              <div className='orders-table-pagination-paginator-pages'>
                { this.renderPageBtns() }
              </div>
              <div onClick={() => this.onPageSelected(1, true)} className='orders-table-pagination-paginator-btn paginator-btn-forward'>
                <div>Вперед</div>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 13.5L14 7.5L8 1.5" stroke="#D3D6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 13.5L7 7.5L1 1.5" stroke="#D3D6E4" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}