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
import React, { useState } from "react";
// react plugin used to create charts
import {HorizontalBar} from "react-chartjs-2";
import Tabs from "components/Tabs";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  howMuch,
  howMuch2,
  howMuch3,
  howWell1,
  howWell2,
  betterOff1,
  betterOff2,
  betterOff3
} from "variables/strategy_charts.jsx";

const data = {
  labels: ['Metric 1', 'Metric 2', 'Metric 3'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80]
    }
  ]
};

class Strategy extends React.Component {
  render() {
    return (
        <div className="content">
          <Tabs/>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Strategy A</CardTitle>
                  <p >Provide and/or build capacity for organizations that offer education and workforce development (e.g. adult basic
education and/or non-degree certificates, industry-specific certificates or other career pathways) to clients at or
below 200% of FPL. </p>
                </CardHeader>
                <CardBody>
                  
                  <p className="card-category">How Much</p>
                  <HorizontalBar
                    height={20} data={howMuch.data} options = {howMuch.options}/>
                    <HorizontalBar
                    height={20} data={howMuch2.data} options = {howMuch2.options} />
                     <HorizontalBar
                    height={20} data={howMuch3.data} options = {howMuch3.options} />
                    <br/>

                    <p className="card-category">How Well</p>
                    <HorizontalBar
                    height={20} data={howWell1.data} options = {howWell1.options}/>
                    <HorizontalBar
                    height={20} data={howWell2.data} options = {howWell2.options} />
                    <br/>

                    <p className="card-category">Better Off</p>
                    <HorizontalBar
                    height= {20} data={betterOff1.data} options = {betterOff1.options}/>
                    <HorizontalBar
                    height={20} data={betterOff2.data} options = {betterOff2.options} />
                    <HorizontalBar
                    height={20} data={betterOff3.data} options = {betterOff3.options} />
                    

                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
    );
  }
}

export default Strategy;
