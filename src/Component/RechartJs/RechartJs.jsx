import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RechartJs = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
  });

  const [state2, setState2] = useState({
    series: [
      {
        name: 'Cash Flow',
        data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
          5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
          48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
        ]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: -100,
              to: -46,
              color: '#F15B46'
            }, {
              from: -45,
              to: 0,
              color: '#FEB019'
            }]
          },
          columnWidth: '80%',
        }
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: 'Growth',
        },
        labels: {
          formatter: function (y) {
            return y.toFixed(0) + "%";
          }
        }
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
          '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
          '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
          '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
          '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
          '2013-07-01', '2013-08-01', '2013-09-01'
        ],
        labels: {
          rotate: -90
        }
      }
    }
  });

  const [state3] = useState({
    series: [
      {
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13,
            22, 37, 21, 44, 22, 30]
        },
        {
          name: 'TEAM B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: 'TEAM C',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          title: {
            text: 'Points',
          },
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      }
    });
    
    const [state4, setState4] = useState({
        series: [
          {
            name: 'series1',
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'series2',
              data: [11, 32, 45, 32, 34, 52, 41]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
        }
      });
  
    return (
      <section>
        <div id="rechartjs">
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <div className="rechart-contain">
                <div className="rechart001">
                  <h4>Bar</h4>
                </div>
                <div>
                  <div id="chart">
                    <ReactApexChart
                      options={state.options}
                      series={state.series}
                      type="bar"
                      height={350}
                    />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="rechart-contain">
                <div className="rechart001">
                  <h4>Bar</h4>
                </div>
                <div>
                  <div id="chart">
                    <ReactApexChart
                      options={state2.options}
                      series={state2.series}
                      type="bar"
                      height={350}
                    />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <div className="rechart-contain">
                <div className="rechart001">
                  <h4>Line</h4>
                </div>
                <div>
                  <div id="chart">
                    <ReactApexChart
                      options={state3.options}
                      series={state3.series}
                      type="bar"
                      height={350}
                    />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="rechart-contain">
                <div className="rechart001">
                  <h4>Line</h4>
                </div>
                <div>
                <div id="chart">
                    <ReactApexChart
                    options={state4.options}
                    series={state4.series}
                    type="area"
                    height={350}
                    />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default RechartJs;
  