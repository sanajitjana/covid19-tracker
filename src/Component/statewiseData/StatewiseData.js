import React, { useEffect, useState } from "react";

const StatewiseData = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("http://api.covid19india.org/data.json");
    const actuallData = await res.json();
    setData(actuallData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container pt-5">
        <div>
          <h1 className="text-center pb-5">
            <strong>India</strong> Covid-19 Tracker (State Wise Data)
          </h1>
        </div>
        <div className="table-responsive" style={{ maxHeight: "600px" }}>
          <table class="table table-hover">
            <thead class="table-dark">
              <tr>
                <th>#</th>
                <th>State Name</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((currentData, index) => {
                return (
                  <tr key={index}>
                    <th>{index}</th>
                    <td>{currentData.state}</td>
                    <td>{currentData.confirmed}</td>
                    <td>{currentData.recovered}</td>
                    <td>{currentData.deaths}</td>
                    <td>{currentData.active}</td>
                    <td>{currentData.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <h6 className="text-center pt-5 pb-5">
            Copyright &copy; 2021 Sanajit Jana. All Rights Reserved.
          </h6>
        </div>
      </div>
    </>
  );
};

export default StatewiseData;
