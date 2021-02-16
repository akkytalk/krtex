import React, { Component } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <Card outline color="success">
            <CardHeader className="bg-warning text-white">
              <h6 className="mb-0">Enquiries</h6>
            </CardHeader>
            <CardBody>
              <h2 className="mb-0">18</h2>
            </CardBody>
            <CardFooter>
              <h6>Total</h6>
            </CardFooter>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <Card>
            <CardHeader className="bg-danger text-white">
              <h6 className="mb-0">Number of Consignment</h6>
            </CardHeader>
            <CardBody>
              <h2 className="mb-0">5</h2>
            </CardBody>
            <CardFooter>
              <h6>Completed</h6>
            </CardFooter>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <Card>
            <CardHeader className="bg-info text-white">
              <h6 className="mb-0">Number of Purchase Order</h6>
            </CardHeader>
            <CardBody>
              <h2 className="mb-0">3</h2>
            </CardBody>
            <CardFooter>
              <h6>Pending</h6>
            </CardFooter>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <Card>
            <CardHeader className="bg-success text-white">
              <h6 className="mb-0">Invoice</h6>
            </CardHeader>
            <CardBody>
              <h2 className="mb-0">35</h2>
            </CardBody>
            <CardFooter>
              <h6>Pending</h6>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
}

export default Top;
