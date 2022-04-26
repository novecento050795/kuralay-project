import './sales.css';

export default function Sales() {
  return (
    <div className='sales-main'>
      <div className='sales-header'>
        <h2>Продажи</h2>
        <input type="date" />
      </div>
      <div className='sales-header-dashboard'>
        <div className='sales-header-dashboard-revenue'></div>
        <div className='sales-header-dashboard-orders'></div>
        <div className='sales-header-dashboard-customers'></div>
      </div>
      <div className='sales-main-dashboards'>
        <div className='sales-main-dashboards-orders'></div>
        <div className='sales-main-dashboards-revenue'></div>
      </div>
      <div className='sales-gistogram-container'>
        <div className='sales-gistogram'></div>
      </div>
    </div>
  );
}