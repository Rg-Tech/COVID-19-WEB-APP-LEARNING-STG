import React, { useEffect, useState } from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

function Graph() {

    let Cases,Cases_Data;
    let Recovered,Recovered_Data;
    let Deaths,Deaths_Data;

    const [latest, setLatest] = useState([]);
    // const [results, setResults] = useState([]);
    // const [searchCountries, setSearchCountries] = useState("");
    // const [loading, setLoading] = useState(true); 

    useEffect(() => {
        axios
            .all([
                axios.get("https://corona.lmao.ninja/v2/all")//,
                //axios.get("https://corona.lmao.ninja/v2/countries"),
            ])
            .then((responseArr) => {
                setLatest(responseArr[0].data);
                //setResults(responseArr[1].data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // //Date Parse
    // const date = new Date(parseInt(latest.updated));
    // const lastUpdated = date.toString();

    // const countries = filterCountries.map((data, i) => {
    //     return (
    //   this.Cases=data;
    //   this.Cases_Data=data;
    //   this.Recovered=data;
    //   this.Recovered_Data=data;
    //   this.Deaths=data;
    //   this.Deaths_Data=data;
    //     );
    // });
    const series = [
        {
          name: "Cases",
          data: [
            555,
            12038,
            69030,
            88369,
            167466,
            932638,
            2055423,
            3343777,
            3845718,
          ],
        },
    
        {
          name: "Recovered",
          data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481],
        },
        {
          name: "Deaths",
          data: [17, 259, 1666, 2996, 6472, 49675, 140658, 238619, 269567],
        },
      ];
      const options = {
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "1/22/20",
            "2/1/20",
            "2/15/20",
            "3/1/20",
            "3/15/20",
            "4/1/20",
            "4/15/20",
            "5/1/20",
            "5/7/20",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy",
          },
        },
      };
//   const series = [
//     {
//       name: "Cases",
//       data: [
//         555,
//         12038,
//         69030,
//         88369,
//         167466,
//         932638,
//         2055423,
//         3343777,
//         3845718,
//       ],
//     },

//     {
//       name: "Recovered",
//       data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481],
//     },
//     {
//       name: "Deaths",
//       data: [17, 259, 1666, 2996, 6472, 49675, 140658, 238619, 269567],
//     },
//   ];
//   const options = {
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//     xaxis: {
//       type: "datetime",
//       categories: [
//         "1/22/20",
//         "2/1/20",
//         "2/15/20",
//         "3/1/20",
//         "3/15/20",
//         "4/1/20",
//         "4/15/20",
//         "5/1/20",
//         "5/7/20",
//       ],
//     },
//     tooltip: {
//       x: {
//         format: "dd/MM/yy",
//       },
//     },
//   };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>COVID-19 Global Graphs</h2>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default Graph;