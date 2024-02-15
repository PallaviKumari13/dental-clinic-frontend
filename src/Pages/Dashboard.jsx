import React from 'react';

export default function Navbar({ userId, userTypeId, name }) {
  const isAdmin = userTypeId === "ADM";
  const isBank = userTypeId === "BNK";
  const isThana = userTypeId === "THN";
  const isUser = userTypeId === "USR"; // Added for user type "USR"

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12 headerBox">
            <img src="../assets/123.jpg" alt="healty teeth logo" /> {/* Corrected image source */}
          </div>
        </div>
      </div>

      <div className="container-menu">
        <span className="hamburger-menu">Navigate</span>

        <ul className="core-menu">
          {isAdmin && (
            <li>
              <a href="#">Reports</a>
              <ul className="dropdown">
                <li><a href="/PatientDetails">Patient Details</a></li>
                <li><a href="/Doctors">Doctors</a></li>
                <li><a href="/StaffList">StaffList</a></li>
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
          <h4 className="text-blue-500 inline-block">Welcome to Hope Dashboard</h4>
          <span className="font-bold ml-2">
            {name ? `Welcome ${name} (${userId})` : `Login ID: ${userId}`}
          </span>
        </div>
      </div>
    </nav>
  );
}
