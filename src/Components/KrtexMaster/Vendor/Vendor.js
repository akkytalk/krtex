import React, { useEffect, useState } from "react";
import * as actions from "../../../reduxStore/actions/index";
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
import Sidebar from "../../Home/Sidebar";

function Vendor(props) {
  useEffect(() => {
    console.log("currentUser data from redux ", currentUser);

    props.onAccountGroupGetData();
    props.onAccountGroupGetData();
    props.onDeleteAccountGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    lut_no: "",
    gst_no: "",
    pan_no: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    status: "",
  });

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: "",
    name: "",
    email: "",
    contact: "",
    lut_no: "",
    gst_no: "",
    pan_no: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    status: "",
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
                <Link color="inherit">Master</Link>

                <Typography color="textPrimary">Vendor</Typography>
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
                <CardHeader className="bg-success text-white">
                  <strong>Vendor</strong>
                  <Button className="btn-warning  float-right" onClick={toggle}>
                    Add Vendor
                  </Button>
                  <Modal
                    className="modal-info modal-lg"
                    isOpen={modal}
                    toggle={toggle}
                  >
                    <ModalHeader toggle={toggle}>Add New Vendor</ModalHeader>
                    <ModalBody>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                          props.onPostAccountGroupData(user);
                        }}
                      >
                        <div className="form-row" style={{ fontSize: "12px" }}>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> Name </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={!editing ? user.name : currentUser.name}
                              name="name"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> Email </label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={!editing ? user.email : currentUser.email}
                              name="email"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> Contact No</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.contact : currentUser.contact
                              }
                              name="contact"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> LUT Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.lut_no : currentUser.lut_no
                              }
                              name="lut_no"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">GST Number </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.gst_no : currentUser.gst_no
                              }
                              name="requirement"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">PAN Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.pan_no : currentUser.pan_no
                              }
                              name="requirement"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> Address </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.address : currentUser.address
                              }
                              name="address"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> City </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={!editing ? user.city : currentUser.city}
                              name="city"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> state </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={!editing ? user.state : currentUser.state}
                              name="state"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> pincode </label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.pincode : currentUser.pincode
                              }
                              name="pincode"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> Status </label>
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
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">LUT Number</th>
                        <th scope="col">GST Number</th>
                        <th scope="col">PAN Number</th>
                        <th scope="col">Status</th>

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
export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
