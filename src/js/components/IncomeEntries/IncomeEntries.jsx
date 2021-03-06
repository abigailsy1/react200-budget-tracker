import React from 'react';

export default class IncomeEntries extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='card boder-success mb-3'>
                <div className='card-header text-white bg-success'>income Entries</div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='income-description'>Description</label>
                            <input type='text' className='form-control' id='income-description' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='income-amount'>Amount</label>
                            <span className='input-group-addon'>$</span>
                            <input type='text' className='form-control' id='income-amount' />
                        </div>

                        <button type='button' className='btn btn-success col-12 mb-5'>+ Add Income</button>

                        <table className='table table-sm table-hover'>
                            <thead>
                                <tr>
                                    <th>Desciprtion:</th>
                                    <th style ={{ width: 120 }}>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rent</td>
                                    <td>$1,500.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}