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

function Consignment(props) {
  useEffect(() => {
    console.log("currentUser data from redux ", currentUser);

    props.onAccountGroupGetData();
    props.onAccountGroupGetData();
    props.onDeleteAccountGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({
    startdate: "",
    enddate: "",
    customer_name: "",
    requirement: "",
    status: "",
  });

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: "",
    startdate: "",
    enddate: "",
    customer_name: "",
    requirement: "",
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

                <Typography color="textPrimary">Consignment</Typography>
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
                  <strong>Consignment</strong>
                  <Button className="btn-success  float-right" onClick={toggle}>
                    Add Consignment
                  </Button>
                  <Modal
                    className="modal-info modal-lg"
                    isOpen={modal}
                    toggle={toggle}
                  >
                    <ModalHeader toggle={toggle}>
                      Add New Consignment
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
                              Customer Name
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
                              Requirement{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.requirement
                                  : currentUser.requirement
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
                            <label htmlFor="inputPassword4"> Start Date </label>
                            <input
                              type="date"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing
                                  ? user.startdate
                                  : currentUser.startdate
                              }
                              name="startdate"
                              onChange={
                                editing
                                  ? currentUserInputChange
                                  : handleInputChange
                              }
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4"> End Date </label>
                            <input
                              type="date"
                              className="form-control"
                              id="inputPassword4"
                              placeholder=""
                              value={
                                !editing ? user.enddate : currentUser.enddate
                              }
                              name="enddate"
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
                              <option value={1}>active</option>
                              <option value={0}>inactive</option>
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
                        <th scope="col">Customer name</th>
                        <th scope="col">Requirement</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>

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
export default connect(mapStateToProps, mapDispatchToProps)(Consignment);
