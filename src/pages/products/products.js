import './products.css';
import React from 'react';
import DateRangePicker from '../../components/date-range-picker/dateRangePicker';

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
            <ProductList products={this.state.products} sort={'best-sale'}></ProductList>
            <div className='products-data'></div>
          </div>
          <div className='products-body-row'>
            <ProductList products={this.state.products} sort={'worst-sale'}></ProductList>
            <ProductList products={this.state.products} sort={'best-view'}></ProductList>
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
        {this.props.sort}
        {this.props.products.map(product => (<div>www</div>))}
      </div>
    );
  }
}