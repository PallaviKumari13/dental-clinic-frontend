import React from 'react';

const EmployeeList = ({ dt }) => {
    return (
        <div className="container">
            <div className="content" style={{ minHeight: '440px', backgroundColor: '#FFFFFF', border: 'none' }}>
                <div className="form-group">
                    <div className="row">
                        <div className="box-body overflow-y-scroll max-h-[calc(100vh-50px)]">
                            <table id="example1" className="mytable table-bordered table-striped" style={{ backgroundColor: 'White', width: '100%' }}>
                                <thead style={{ backgroundColor: '#ce6d28' }}>
                                    <tr style={{ backgroundColor: '#ce6d28', color: 'white' }}>
                                        <td style={{ height: '20px' }}>S.No.</td>
                                        <td style={{ height: '20px' }}>Name</td>
                                        <td style={{ height: '20px' }}>Gender</td>
                                        <td style={{ height: '20px' }}>Designation</td>
                                        <td style={{ height: '20px' }}>Salary</td>
                                        <td style={{ height: '20px' }}>Phone Number</td>
                                        <td style={{ height: '20px' }}>Address</td>
                                        <td style={{ height: '20px' }}>Date of Joining</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dt != null && dt.Rows.length > 0 &&
                                        dt.Rows.map((row, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{row.Name}</td>
                                                <td>{row.Gender}</td>
                                                <td>{row.Designation}</td>
                                                <td>{row.Salary}</td>
                                                <td>{row.Phone_number}</td>
                                                <td>{row.Address}</td>
                                                <td>{row.Timing}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeList;
