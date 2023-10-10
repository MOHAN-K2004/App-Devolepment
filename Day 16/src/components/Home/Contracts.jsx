import React from "react";
import "./Contracts.css";
import Navbar from "./Navbar/Navbar";
import Leftbar from "./Lefftbar/Leftbar";
const Contracts = () => {
  const data = [
    {
      no: 1,
      orgname: "organization A",
      vendorname: "Vendor A",
      service: "Food",
      startdate: "2004-09-08",
      enddate: "2020-09-08",
      amount: "20,00,000",
    },
    {
      no: 2,
      orgname: "organization B",
      vendorname: "Vendor A",
      service: "Water",
      startdate: "2011-12-01",
      enddate: "2015-09-07",
      amount: "1,00,000",
    },
    {
      no: 3,
      orgname: "organization C",
      vendorname: "Vendor A",
      service: "Tea",
      startdate: "2006-01-24",
      enddate: "2008-01-22",
      amount: "40,000",
    },
    {
      no: 4,
      orgname: "organization A",
      vendorname: "Vendor B",
      service: "Food",
      startdate: "2008-10-08",
      enddate: "2020-03-30",
      amount: "1,00,000",
    },
    {
      no: 5,
      orgname: "organization B",
      vendorname: "Vendor B",
      service: "Water",
      startdate: "2013-04-08",
      enddate: "2018-12-13",
      amount: "2,00,000",
    },
    {
      no: 6,
      orgname: "organization E",
      vendorname: "Vendor A",
      service: "Tea",
      startdate: "2008-08-08",
      enddate: "2021-07-25",
      amount: "5,00,000",
    },
    {
      no: 7,
      orgname: "organization D",
      vendorname: "Vendor C",
      service: "Snacks",
      startdate: "2014-12-08",
      enddate: "2023-04-19",
      amount: "8,00,000",
    },
  ];
  return (
    <>
      <div className="Home-static-titles">
        <Navbar />
        <div className="Home-contracts-page">
          <Leftbar />
          <div className="HomePage-contracts-Content">
            <div className="HomePage-contract-table">
              <h1>Contracts History !</h1>
              <table>
                <tr>
                  <th>S.No</th>
                  <th>Org.Name</th>
                  <th> Vendor Name</th>
                  <th>Service</th>
                  <th> Start Date</th>
                  <th>End Date</th>
                  <th>Amount</th>
                </tr>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.no}</td>
                      <td>{val.orgname}</td>
                      <td>{val.vendorname}</td>
                      <td>{val.service}</td>
                      <td>{val.startdate}</td>
                      <td>{val.enddate}</td>
                      <td>{val.amount}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contracts;
