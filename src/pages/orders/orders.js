import React from 'react';
import DateRangePicker from '../../components/date-range-picker/dateRangePicker';
import './orders.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
export default class Orders extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputStatusDefault: 'new',
      page: 1,
      showModal: false,
      orders: [],
      orderOnChange: null
    }

    axios.get('http://localhost:3030/orders/get')
      .then(orders => orders.data)
      .then(orders => {
        this.setState({ orders })
      })

  }

  handleOpen = (order) => {
    this.setState({ showModal: true, orderOnChange: order })
  };
  handleClose = () => this.setState({ showModal: false });
  handle = () => {
    axios.put('http://localhost:3030/orders/update', {
      order_id: this.state.orderOnChange,
      status: this.state.inputStatusDefault
    }).then(resp => {
      window.location.reload()
    })
  }
  handleChange = (event) => {
    this.setState({ inputStatusDefault: event.target.value });
  };

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
                this.state.orders
                  .slice((this.state.page - 1) * 10, 10)
                  .map((order, index) => (
                    <tr className='orders-table-item' key={index}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.name}</td>
                      <td>{order.location}</td>
                      <td>{order.amount}</td>
                      <td>
                        <div onClick={() => this.handleOpen(order.id)} className={
                          'orders-table-item-status ' + (
                            order.status === 'new' ? 'status-new' :
                              (
                                order.status === 'delivery' ? 'status-delivery' : (
                                  order.status === 'done' ? 'status-done' : 'status-canceled'
                                )
                              )
                          )
                          
                        }>
                          {
                            order.status === 'new' ? 'Новый' :
                              (
                                order.status === 'delivery' ? 'Доставка' : (
                                  order.status === 'done' ? 'Доставлено' : 'Отменен'
                                )
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
              this.state.orders.slice((this.state.page - 1) * 10, 10)
              .length
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

        <Dialog open={this.state.showModal} onClose={this.handleClose}>
          <DialogTitle>Изменение статуса</DialogTitle>
          <DialogContent>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.inputStatusDefault}
              label="Age"
              onChange={this.handleChange}
            >
              <MenuItem value={'new'}>Новый</MenuItem>
              <MenuItem value={'delivery'}>На доставке</MenuItem>
              <MenuItem value={'done'}>Доставлено</MenuItem>
              <MenuItem value={'canceled'}>Отменен</MenuItem>
            </Select>
          </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Отмена</Button>
            <Button onClick={this.handle}>ОК</Button>
          </DialogActions>
        </Dialog>
      </div>
    ); 
  }
}