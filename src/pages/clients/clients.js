import axios from 'axios';
import React from 'react';
import DateRangePicker from '../../components/date-range-picker/dateRangePicker';
import './clients.css';



export default class Clients extends React.Component {

  sources = {
    1: 'Yandex',
    2: 'Google',
    3: 'Рассылки',
    4: 'Таргет Instagram',
    5: 'Таргет Facebook',
    6: 'Промоакции',
    7: 'Другие'
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      clients: []
    }

    axios.get('http://localhost:3030/clients/get')
      .then(res => res.data)
      .then(clients => {
        if (clients.length) {
          clients.map(client => {
            axios.get('http://localhost:3030/orders/get')
              .then(res => res.data)
              .then(orders => {
                client.amount = orders
                  .filter(order => client.id == order.client_id)
                  .reduce((sum, order) => parseInt(sum) + parseInt(order.amount), 0);

                this.setState({ clients })
              })
            client.source = this.sources[client.source_id]
          });
        }
      })
  }

  onPageSelected(page, isAdd = false) {

    if (isAdd) {
      page = (this.state.page + page) < 1 ? Math.ceil(this.state.clients.length / 10) :
        (
          (this.state.page + page) > Math.ceil(this.state.clients.length / 10) ? 1 : 
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
    
    for (let i = 1; i <= Math.ceil(this.state.clients.length / 10); i++) btns.push((
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
      <div className='clients-main'>
        <div className='clients-header'>
            <h2>Клиенты</h2>
            <DateRangePicker />
        </div>
        <div className='clients-table-container'>
          <table className='clients-table'>
            <tbody>
              <tr className='clients-table-title'>
                <th>Клиент ID</th>
                <th>Клиент</th>
                <th>Источник</th>
                <th>Адрес</th>
                <th>Сумма</th>
              </tr>
              {
                this.state.clients
                  .slice(((this.state.page - 1) * 10), 10)
                  .map((order, index) => (
                    <tr className='clients-table-item' key={index}>
                      <td>{order.id}</td>
                      <td>{order.name}</td>
                      <td>{order.source}</td>
                      <td>{order.address}</td>
                      <td>{order.amount}</td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
          <div className='clients-table-pagination'>
            <div className='clients-table-pagination-counter'>
              Показано {
              this.state.clients.slice(((this.state.page - 1) * 10), 10).length
              } из {this.state.clients.length} Клиентов
            </div>
            <div className='clients-table-pagination-paginator'>
              <div onClick={() => this.onPageSelected(-1, true)} className='clients-table-pagination-paginator-btn paginator-btn-back'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13.5L1 7.5L7 1.5" stroke="#D3D6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 13.5L8 7.5L14 1.5" stroke="#D3D6E4" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>Назад</div>
              </div>
              <div className='clients-table-pagination-paginator-pages'>
                { this.renderPageBtns() }
              </div>
              <div onClick={() => this.onPageSelected(1, true)} className='clients-table-pagination-paginator-btn paginator-btn-forward'>
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