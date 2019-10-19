/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Charts.defaults.global.legend.display = false;
const howMuch = {
    data: canvas => {
        return {
          labels: ["Metric A"],
          datasets: [
            {
            label: "# of People under 200% Federal Poverty Level Enrolled in Program",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ['rgba(221,95,50,0.65)',"#DD5F32"],
              hoverBackgroundColor: 'rgba(221,95,50,1)',
              borderWidth: 0,
              data: [340]
            }
          ]
        };
      },
      options: {
          scales:{
              xAxes:[{
                  ticks:{
                      beginAtZero: true,
                      steps: 12,
                      stepValue: 30,
                      max: 360

                  }
              }]
          }
      }
    };
    
    const howWell = {
        data: canvas => {
            return {
              labels: ["Metric A"],
              datasets: [
                {
                label: "# of Recruited People who were Enrolled in Program",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: [ 'RGBA(238,180,73,0.65)', "#215393", "#DD5F32"],
                  hoverBackgroundColor: 'RGBA(238,180,73,1)',
                  borderWidth: 0,
                  data: [650]
                }
              ]
            };
          },
          options: {
            scales:{
                xAxes:[{
                    ticks:{
                        beginAtZero: true,
                        steps: 12,
                        stepValue: 60,
                        max: 720
  
                    }
                }]
            }
        }
    };
    const betterOff = {
        data: canvas => {
            return {
              labels: ["Metric A"],
              datasets: [
                {
                label:"# of Participating Clients with Income above 200% of Federal Poverty Level at the time of Program Completions",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ["rgba(33,83,147,0.65)", "#DD5F32"],
                  hoverBackgroundColor: 'rgba(33,83,147,1)',
                  borderWidth: 0,
                  data: [235]
                }
              ]
            };
          },
          options: {
            scales:{
                xAxes:[{
                    ticks:{
                        beginAtZero: true,
                        steps: 12,
                        stepValue: 22,
                        max: 264
  
                    }
                }]
            }
        }
    };

module.exports = {
  howMuch,
  howWell,
  betterOff
};