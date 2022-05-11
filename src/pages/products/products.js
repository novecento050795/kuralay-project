import './products.css';
import React from 'react';
import DateRangePicker from '../../components/date-range-picker/dateRangePicker';
import avatar from '../../static/img/avatar.jpg';

export default class Products extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      products: [
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
        {
          id: '#5552351',
          date: '26 March 2020, 12:42 AM',
          name: 'Pizza Meal for Kids (Small size)',
          item: 'PIZZA',
          amount: '$5.67',
          status: 'new'
        },
      ]
    }
  }

  render() {
    return (
      <div className='products-main'>
        <div className='products-header'>
            <h2>Продукты</h2>
            <DateRangePicker products={this.state.products}/>
        </div>
        <div className='products-body'>
          <div className='products-body-row'>
            <ProductList 
              products={this.state.products} 
              sort={'best-sale'}
              header={'Наиболее продаваемые товары'}
            ></ProductList>
            <div className='products-data'></div>
          </div>
          <div className='products-body-row'>
            <ProductList 
              products={this.state.products} 
              sort={'worst-sale'}
              header={'Наименее продаваемые товары'}
            ></ProductList>
            <ProductList 
              products={this.state.products} 
              sort={'best-view'}
              header={'Наиболее просматриваемые товары'}
            ></ProductList>
          </div>
        </div>
      </div>
    );
  }
}

export class ProductList extends React.Component {
  render() {
    return (
      <div className='products-data'>
        <div className='products-data-header'>{this.props.header}</div>
        <div className='products-data-body'>
          {this.props.products.map(product => (
            <div className='products-data-body-product'>
              <div className='products-data-body-product-avatar'>
                <img src={avatar} alt='img' />
              </div>
              <div className='products-data-body-product-data'>

              </div>
              <div className='products-data-body-product-price'>

              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}