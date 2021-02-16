import React, { useEffect, useState } from "react";
import * as actions from "../../reduxStore/actions/index";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import Sidebar from "../Home/Sidebar";

function PerformaInvoice(props) {
  useEffect(() => {
    console.log("currentUser data from redux ", currentUser);

    props.onAccountGroupGetData();
    props.onAccountGroupGetData();
    props.onDeleteAccountGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({
    customer_name: "",
    product_name: "",
    amount: "",
    gst: "",
    consignment_name: "",
    transport: "",
    start_point: "",
    destination_point: "",
    country_destination_point: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    term: "",
    package_kind: "",
    total_value: "",
    taxable_value: "",
    package: "",
    payment_status: "",
    paid_status: "",
  });

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: "",
    customer_name: "",
    product_name: "",
    amount: "",
    gst: "",
    consignment_name: "",
    transport: "",
    start_point: "",
    destination_point: "",
    country_destination_point: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    term: "",
    package_kind: "",
    total_value: "",
    taxable_value: "",
    package: "",
    payment_status: "",
    paid_status: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const currentUserInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <div className="wrapper">
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="n"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block ml-2">
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link color="inherit" href="/">
                  Home
                </Link>

                <Typography color="textPrimary">Performa Invoice</Typography>
              </Breadcrumbs>
            </li>
          </ul>
          {/* SEARCH FORM */}
        </nav>
        {/* /.navbar */}
        {/*  */}

        <Sidebar />
        <div class="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <Card>
                <CardHeader className="bg-warning text-white">
                  <strong>Performa Invoice</strong>
                  <Button className="btn-success  float-right" onClick={toggle}>
                    Add Performa Invoice
                  </Button>
                  <Modal
                    className="modal-info modal-lg"
                    isOpen={modal}
                    toggle={toggle}
                  >
                    <ModalHeader toggle={toggle}>
                      Add New Performa Invoice
                    </ModalHeader>
                    <ModalBody>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                          props.onPostAccountGroupData(user);
                        }}
                      >
                        <div className="form-row" style={{ fontSize: "12px" }}>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              Customer Name{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.customer_name
                                  : currentUser.customer_name
                              }
                              name="customer_name"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Product Name{" "}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.product_name
                                  : currentUser.product_name
                              }
                              name="product_name"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> Amount</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder="Enter Amount"
                              value={
                                !editing ? user.amount : currentUser.amount
                              }
                              name="amount"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> Discount </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder="Enter Discount Percent"
                              value={
                                !editing ? user.discount : currentUser.discount
                              }
                              name="discount"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> GST </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={!editing ? user.gst : currentUser.gst}
                              name="gst"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Consignment Name{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.consignment_name
                                  : currentUser.consignment_name
                              }
                              name="consignment_name"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Start Point{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.startpoint
                                  : currentUser.startpoint
                              }
                              name="startpoint"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Destination Point{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.destinationpoint
                                  : currentUser.destinationpoint
                              }
                              name="destinationpoint"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Country Destination Point{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.countrydestinationpoint
                                  : currentUser.countrydestinationpoint
                              }
                              name="countrydestinationpoint"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> Bank Name </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.bankname : currentUser.bankname
                              }
                              name="bankname"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Account Name{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.accountname
                                  : currentUser.accountname
                              }
                              name="accountname"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> IFSC Code </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.ifsc_code
                                  : currentUser.ifsc_code
                              }
                              name="ifsc_code"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Term of Delivery and Payment{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={!editing ? user.term : currentUser.trem}
                              name="term"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Package Kind{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.package_kind
                                  : currentUser.package_kind
                              }
                              name="package_kind"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Total value{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.total_value
                                  : currentUser.total_value
                              }
                              name="total_value"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Taxable Value{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.taxable_value
                                  : currentUser.taxable_value
                              }
                              name="taxable_value"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              {" "}
                              Number of Package{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.package : currentUser.package
                              }
                              name="package"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">
                              Payment Status{" "}
                            </label>
                            <select
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              name="payment_status"
                              value={
                                editing
                                  ? currentUser.payment_status
                                  : user.payment_status
                              }
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            >
                              <option>select</option>
                              <option value="1">yes</option>
                              <option value="0">no</option>
                            </select>
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Paid Status </label>
                            <select
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              name="paid_status"
                              value={
                                editing
                                  ? currentUser.paid_status
                                  : user.paid_status
                              }
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            >
                              <option>select</option>
                              <option value="1">active</option>
                              <option value="0">inactive</option>
                            </select>
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Paid Status </label>
                            <select
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              name="status"
                              value={editing ? currentUser.status : user.status}
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            >
                              <option>select</option>
                              <option value="1">active</option>
                              <option value="0">inactive</option>
                            </select>
                          </div>

                          <div className="form-group col-md-12 mt-4">
                            {!editing ? (
                              <Row style={{ justifyContent: "center" }}>
                                <Col md={4}>
                                  <Button type="reset" color="danger" block>
                                    <b>Reset</b>
                                  </Button>
                                </Col>
                                <Col md={4}>
                                  <Button type="submit" color="primary" block>
                                    Submit
                                  </Button>
                                </Col>
                              </Row>
                            ) : (
                              <div className="d-flex">
                                <button
                                  className="btn btn-success"
                                  type="button"
                                  onClick={() =>
                                    props.onUpdateAccountGroupData(
                                      currentUser.id,
                                      editing,
                                      setEditing,
                                      currentUser,
                                      setCurrentUser
                                    )
                                  }
                                >
                                  Update
                                </button>
                                <button
                                  className="btn btn-primary ml-3"
                                  type="button"
                                  onClick={() => setEditing(false)}
                                >
                                  Cancel
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </form>
                    </ModalBody>
                  </Modal>
                </CardHeader>
                <CardBody>
                  <table
                    className="table table-sm"
                    style={{ fontSize: "12px" }}
                  >
                    <thead>
                      <tr>
                        {/* <th>ID</th> */}
                        <th scope="col">Customer Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Amount</th>

                        <th scope="col">Number of Package</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Paid Status</th>

                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.accountGroup.length > 0 ? (
                        props.accountGroup.map((user) => (
                          <tr key={user.id}>
                            {/* <td>{user.id}</td> */}
                            <td>{user.name}</td>
                            <td>{user.under_group_name}</td>

                            <td className="d-flex">
                              <button
                                onClick={() =>
                                  props.onEditAccountGroupRow(
                                    user.id,
                                    editing,
                                    setEditing,
                                    currentUser,
                                    setCurrentUser
                                  )
                                }
                              >
                                <i
                                  className="fa fa-edit"
                                  aria-hidden="true"
                                ></i>
                              </button>

                              <button
                                className="ml-3"
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure you wish to delete this Account Group?"
                                    )
                                  )
                                    props.onDeleteAccountGroup(user.id);
                                }}
                              >
                                <i
                                  className="fa fa-trash-alt "
                                  value={user.id}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3}>No users</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    accountGroup: state.accountGroup.accountGroup,
    form: state.form.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAccountGroupGetData: () => dispatch(actions.accountGroupGetData()),
    onDeleteAccountGroup: (id) => dispatch(actions.deleteAccountGroup(id)),
    onPostAccountGroupData: (user) =>
      dispatch(actions.postAccountGroupData(user)),
    onUpdateAccountGroupData: (
      id,
      editing,
      setEditing,
      currentUser,
      setCurrentUser
    ) =>
      dispatch(
        actions.updateAccountGroupData(
          id,
          editing,
          setEditing,
          currentUser,
          setCurrentUser
        )
      ),
    onEditAccountGroupRow: (
      id,
      editing,
      setEditing,
      currentUser,
      setCurrentUser
    ) =>
      dispatch(
        actions.editAccountGroupRow(
          id,
          editing,
          setEditing,
          currentUser,
          setCurrentUser
        )
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PerformaInvoice);
