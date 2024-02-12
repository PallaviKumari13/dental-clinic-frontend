import React from 'react';

export default function Navbar({ userId, userTypeId, name }) {
  const isAdmin = userTypeId === "ADM";
  const isUser = userTypeId === "USR";
  const isMR = userTypeId === "MR";
  const isBank = userTypeId === "BNK";
  const isThana = userTypeId === "THN";

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12 headerBox">
            <img src="..src/assets/123.jpg" alt="healty teeth logo" />
          </div>
        </div>
      </div>

      <div className="container-menu">
        <span className="hamburger-menu">Navigate</span>

        <ul className="core-menu">
          {isAdmin && (
            <li>
              <a href="#">Dashboard</a>
              <ul className="dropdown">
                <li><a href="frmDoctorreg.aspx">Doctor Details</a></li>
                <li><a href="staff_detail.aspx">Employees Details</a></li>
              </ul>
            </li>
          )}
          {isAdmin && (
            <li>
              <a href="#">Reports</a>
              <ul className="dropdown">
                <li><a href="ViewDrDetails.aspx">View Doctor Details</a></li>
                <li><a href="Viewstaff_detail.aspx">View Employees Details</a></li>
                <li><a href="ViewUserDetails.aspx">Patient Details</a></li>
                <li><a href="View_MR_Appointment.aspx">MR Appointment Detail</a></li>
                <li><a href="ViewFeedbackDetails.aspx">Message/Feedback Details</a></li>
              </ul>
            </li>
          )}
          {isUser && (
            <li>
              <a href="#">Dashboard</a>
              <ul className="dropdown">
                <li><a href="Appbooking.aspx">My Booking</a></li>
                <li><a href="payment.aspx">My Payment</a></li>
              </ul>
            </li>
          )}
          {isUser && (
            <li><a href="ViewBookingDetails.aspx">View Booking Details</a></li>
          )}
          {isMR && (
            <>
              <li><a href="MR_appointment.aspx">MR Appointment</a></li>
              <li><a href="ViewMR_Registration.aspx">MR Registration Details</a></li>
            </>
          )}
          {isBank && (
            <li>
              <a href="WelcomeBank.aspx">Dashboard</a>
              <ul className="dropdown">
                <li><a href="BankAccountDetails.aspx">Update Bank Account No of Thana's</a></li>
                <li><a href="EntryBankBalance.aspx">Enter Bank Balance</a></li>
                <li><a href="BankBalanceSheet.aspx">View Bank Deposited Details</a></li>
              </ul>
            </li>
          )}
          {isThana && (
            <li>
              <a href="WelcomeThana.aspx">Dashboard</a>
              <ul className="dropdown">
                <li><a href="UploadVoucher.aspx">Upload Voucher/Receipt</a></li>
                <li><a href="#">Request for Fund</a></li>
              </ul>
            </li>
          )}
        </ul>

        <div className="text-right border-b-2 border-gray-800 py-2">
          <h4 className="text-blue-500 inline-block">Welcome to IND Smile Dashboard</h4>
          <span className="font-bold ml-2">
            {name ? `Welcome ${name} (${userId})` : `Login ID: ${userId}`}
          </span>
        </div>
      </div>
    </nav>
  );
}
