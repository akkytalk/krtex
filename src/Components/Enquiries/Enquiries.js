import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Sidebar from "../Home/Sidebar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import * as actions from "../../reduxStore/actions/index";
import { connect } from "react-redux";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Enquiries(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    reference: "",
    Requirement: "",
    Address: "",
    Status: "",
  });

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: "",
    name: "",
    email: "",
    contact: "",
    reference: "",
    requirement: "",
    address: "",
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
    <Fragment>
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

                <Typography color="textPrimary">Enquiries Page</Typography>
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
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab label="Enquiries Page" {...a11yProps(0)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <div className="container">
                    <div className="flex-row">
                      <div className="flex-large">
                        <Button
                          className="btn-success pull-right"
                          onClick={toggle}
                        >
                          Add Product
                        </Button>
                        <Modal
                          className="modal-info modal-lg"
                          isOpen={modal}
                          toggle={toggle}
                        >
                          <ModalHeader toggle={toggle}>
                            Add New Category
                          </ModalHeader>
                          <ModalBody>
                            <form
                              onSubmit={(event) => {
                                event.preventDefault();
                                props.onPostAccountGroupData(user);
                              }}
                            >
                              <div
                                className="form-row"
                                style={{ fontSize: "12px" }}
                              >
                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4"> Name </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                    value={
                                      !editing ? user.name : currentUser.name
                                    }
                                    name="name"
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  />
                                </div>

                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4">
                                    {" "}
                                    Email{" "}
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                    value={
                                      !editing ? user.email : currentUser.email
                                    }
                                    name="email"
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  />
                                </div>

                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4">
                                    {" "}
                                    Contact No
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                    value={
                                      !editing
                                        ? user.contact
                                        : currentUser.contact
                                    }
                                    name="contact"
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  />
                                </div>

                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4">
                                    {" "}
                                    Reference{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                    value={
                                      !editing
                                        ? user.reference
                                        : currentUser.reference
                                    }
                                    name="reference"
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  />
                                </div>

                                <div className="form-group col-md-3">
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

                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4">
                                    {" "}
                                    Address{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                    value={
                                      !editing
                                        ? user.address
                                        : currentUser.address
                                    }
                                    name="address"
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  />
                                </div>

                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4"> City </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                    value={
                                      !editing ? user.city : currentUser.city
                                    }
                                    name="city"
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  />
                                </div>

                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4">
                                    {" "}
                                    state{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                    value={
                                      !editing ? user.state : currentUser.state
                                    }
                                    name="state"
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  />
                                </div>

                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4">
                                    {" "}
                                    pincode{" "}
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                    value={
                                      !editing
                                        ? user.pincode
                                        : currentUser.pincode
                                    }
                                    name="pincode"
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  />
                                </div>

                                <div className="form-group col-md-3">
                                  <label htmlFor="inputPassword4">
                                    {" "}
                                    Status{" "}
                                  </label>
                                  <select
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    name="status"
                                    value={
                                      editing ? currentUser.status : user.status
                                    }
                                    onChange={
                                      editing
                                        ? currentUserInputChange
                                        : handleInputChange
                                    }
                                  >
                                    <option>select</option>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                  </select>
                                </div>

                                <div className="form-group col-md-3 mt-4">
                                  {!editing ? (
                                    <button
                                      className="btn btn-primary "
                                      type="submit"
                                    >
                                      Add
                                    </button>
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
                      </div>
                      <div className="flex-large">
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
                              <th scope="col">Reference</th>
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
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps)(Enquiries);
