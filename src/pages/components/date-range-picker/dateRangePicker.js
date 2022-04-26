import React from 'react';
import './dateRangePicker.css';

export default class DateRangePicker extends React.Component {

    constructor(props) {
        super(props);

        const today = new Date();

        this.state = {
            datePickerView: false,    
            dateFrom: new Date(today.getDate() - 7),
            dateTo: today
        }
    }

    datePickerOnViewChange(view = null) {
        console.log('hello');
        // this.setState({
        //     ...this.state,
        //     datePickerView: view === null ? !this.state.datePickerView : view
        // })
    }



    render() {
        return (
            <div className='date-range-picker-main'>
                <div className='date-range-picker-logo'>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4281 2.856H21.8681V1.428C21.8681 0.56 21.2801 0 20.4401 0C19.6001 0 19.0121 0.56 19.0121 1.428V2.856H9.71606V1.428C9.71606 0.56 9.15606 0 8.28806 0C7.42006 0 6.86006 0.56 6.86006 1.428V2.856H5.57206C2.85606 2.856 0.560059 5.152 0.560059 7.868V23.016C0.560059 25.732 2.85606 28.028 5.57206 28.028H22.4281C25.1441 28.028 27.4401 25.732 27.4401 23.016V7.868C27.4401 5.152 25.1441 2.856 22.4281 2.856ZM5.57206 5.712H22.4281C23.5761 5.712 24.5841 6.72 24.5841 7.868V9.856H3.41606V7.868C3.41606 6.72 4.42406 5.712 5.57206 5.712ZM22.4281 25.144H5.57206C4.42406 25.144 3.41606 24.136 3.41606 22.988V12.712H24.5561V22.988C24.5841 24.136 23.5761 25.144 22.4281 25.144Z" fill="#2F4CDD"/>
                    </svg>
                </div>
                <div className='date-range-picker-text'>
                    <div className='date-range-picker-text-title'>Период</div>
                    <div className='date-range-picker-text-range'>
                        {this.state.dateFrom.toDateString() } - { this.state.dateTo.toDateString() }
                    </div>
                </div>
                <div className='date-range-picker-button' onClick={() => this.datePickerOnViewChange()}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.999999L7 7L13 1" stroke="#D3D6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
            </div>
        );
    }
}