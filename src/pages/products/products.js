import './products.css';
import React from 'react';
import DateRangePicker from '../../components/date-range-picker/dateRangePicker';
import avatar from '../../static/img/avatar.jpg';
import axios from 'axios';

export default class Products extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      products: []

          // id: '#456456',
          // date: '26 March 2020, 12:42 AM',
          // name: 'Pizza Meal for Kids (Small size)',
          // item: 'PIZZA',
          // amount: '5.67',
          // status: 'new'
    }

    axios.get('http://localhost:3030/products/get')
      .then(res => res.data)
      .then(products => {
        axios.get('http://localhost:3030/orders/get')
          .then(res => res.data)
          .then(orders => {
            products.forEach(product => {
              const relatedOrders = orders.filter(order => order.product_id == product.id);
              product.amount = relatedOrders
                .reduce((sum, order) => parseInt(sum) + parseInt(product.price), 0);
              product.sellCount = relatedOrders.length;
              this.setState({ products })
            })
          })
      })

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
            <div className='products-data'>
              <div className='products-data-header'>Рейтинг продуктов</div>
              <div className='products-data-body'>
                {this.state.products.map(product => (
                  <div className='products-data-body-item' key={product.id}>
                    <div className='products-data-body-item-image'></div>
                    <div className='products-data-body-item-title'>{product.name}</div>
                    <div className='products-data-body-item-review'>
                      <svg width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.42806 0.782158L9.02367 3.00757L12.5936 3.36559C13.2338 3.42946 13.4904 3.97237 13.0262 4.28332L10.4434 6.01457L11.0542 8.46017C11.1642 8.90223 10.4873 9.23335 9.92044 9.02661L6.72677 7.87188L3.53309 9.02661C2.9662 9.23167 2.28934 8.90223 2.3993 8.46017L3.01018 6.01457L0.427387 4.28332C-0.0368814 3.97237 0.219687 3.42946 0.859889 3.36559L4.42986 3.00757L6.02548 0.782158C6.31137 0.385483 7.13972 0.38044 7.42806 0.782158Z" fill="#FF8A00"/>
                        <path d="M24.5233 0.782158L26.1189 3.00757L29.6889 3.36559C30.3291 3.42946 30.5856 3.97237 30.1214 4.28332L27.5386 6.01457L28.1494 8.46017C28.2594 8.90223 27.5826 9.23335 27.0157 9.02661L23.822 7.87188L20.6283 9.02661C20.0614 9.23167 19.3846 8.90223 19.4945 8.46017L20.1054 6.01457L17.5226 4.28332C17.0583 3.97237 17.3149 3.42946 17.9551 3.36559L21.5251 3.00757L23.1207 0.782158C23.4066 0.385483 24.2349 0.38044 24.5233 0.782158Z" fill="#FF8A00"/>
                        <path d="M41.6185 0.782158L43.2141 3.00757L46.7841 3.36559C47.4243 3.42946 47.6808 3.97237 47.2166 4.28332L44.6338 6.01457L45.2447 8.46017C45.3546 8.90223 44.6778 9.23335 44.1109 9.02661L40.9172 7.87188L37.7235 9.02661C37.1566 9.23167 36.4798 8.90223 36.5897 8.46017L37.2006 6.01457L34.6178 4.28332C34.1535 3.97237 34.4101 3.42946 35.0503 3.36559L38.6203 3.00757L40.2159 0.782158C40.5018 0.385483 41.3302 0.38044 41.6185 0.782158Z" fill="#FF8A00"/>
                        <path d="M58.7137 0.782158L60.3093 3.00757L63.8793 3.36559C64.5195 3.42946 64.7761 3.97237 64.3118 4.28332L61.729 6.01457L62.3399 8.46017C62.4498 8.90223 61.773 9.23335 61.2061 9.02661L58.0124 7.87188L54.8187 9.02661C54.2518 9.23167 53.575 8.90223 53.6849 8.46017L54.2958 6.01457L51.713 4.28332C51.2488 3.97237 51.5053 3.42946 52.1455 3.36559L55.7155 3.00757L57.3111 0.782158C57.597 0.385483 58.4254 0.38044 58.7137 0.782158Z" fill="#FF8A00"/>
                        <path d="M75.8089 0.782158L77.4045 3.00757L80.9745 3.36559C81.6147 3.42946 81.8713 3.97237 81.407 4.28332L78.8242 6.01457L79.4351 8.46017C79.5451 8.90223 78.8682 9.23335 78.3013 9.02661L75.1076 7.87188L71.914 9.02661C71.3471 9.23167 70.6702 8.90223 70.7802 8.46017L71.391 6.01457L68.8082 4.28332C68.344 3.97237 68.6005 3.42946 69.2407 3.36559L72.8107 3.00757L74.4063 0.782158C74.6922 0.385483 75.5206 0.38044 75.8089 0.782158Z" fill="#CFCFCF"/>
                      </svg>
                      <div>(454 отзыва)</div>
                    </div>
                    <div className='products-data-body-item-likes'>
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2373 2.47891C20.7236 2.11241 20.1138 1.82167 19.4426 1.6233C18.7714 1.42494 18.052 1.32285 17.3255 1.32285C16.5989 1.32285 15.8795 1.42494 15.2083 1.6233C14.5371 1.82167 13.9273 2.11241 13.4137 2.47891L12.3477 3.23919L11.2818 2.47891C10.2443 1.73894 8.83721 1.32323 7.37 1.32323C5.90279 1.32323 4.49568 1.73894 3.45821 2.47891C2.42074 3.21889 1.83789 4.2225 1.83789 5.26898C1.83789 6.31546 2.42074 7.31908 3.45821 8.05905L4.52415 8.81933L12.3477 14.3995L20.1713 8.81933L21.2373 8.05905C21.7511 7.69272 22.1587 7.25776 22.4369 6.77903C22.715 6.3003 22.8581 5.78718 22.8581 5.26898C22.8581 4.75078 22.715 4.23766 22.4369 3.75893C22.1587 3.28021 21.7511 2.84525 21.2373 2.47891V2.47891Z" stroke="#2F4CDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div><span className='bold-text'>256k</span> Нравится</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          {this.props.products.sort(this.props.sort === 'best-sale' ? ((a, b) => b.sellCount - a.sellCount) : (
            this.props.sort === 'worst-sale' ? ((a, b) => a.sellCount - b.sellCount) : 
              ((a, b) => a.id - b.id)
          )).map(product => (
            <div className='products-data-body-product' key={product.id}>
              <div className='products-data-body-product-avatar'>
                <img src={avatar} alt='img' />
              </div>
              <div className='products-data-body-product-data'>
                <div className='products-data-body-product-data-title'>{product.name}</div>
                <div className='products-data-body-product-data-category'>{product.item}</div>
                <div className='products-data-body-product-data-delivery'>
                  <span>Serves for 4 Person | 24mins</span>
                </div>
              </div>
              <div className='products-data-body-product-price'>
                ${product.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}