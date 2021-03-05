import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import * as actions from "../../reduxStore/actions/index";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
} from "reactstrap";


import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import Link from "@material-ui/core/Link";
import Sidebar from "../Home/Sidebar";

function Statistics(props) {
  useEffect(() => {
    console.log("currentUser data from redux ", currentUser);

    props.onAccountGroupGetData();
    props.onAccountGroupGetData();
    props.onDeleteAccountGroup();
    //static
    props.onShowOnTimeline();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({
    startdate: "",
    enddate: "",
    customer_name: "",
    requirement: "",
    status: "",
  });

  // static user
  const [staticUser, setStaticUser] = useState({
    startdate: "5-3-2021",
    enddate: "6-4-2021",
    customer_name: "Microsoft",
    requirement: "nothing",
    status: "active",

  })

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

  // const addToTimeline = (userData) => {
  //   props.showOnTimeline(userData);
  // }

  // static
  // const toTimeline = () => {
  //   history.push("/timeline")
  // }

  return (
    <Fragment>
      <div className="wrapper">
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="/"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            {/* <li className="nav-item d-none d-sm-inline-block">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li> */}
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
                  <strong>Statistics</strong>
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
                            <td>start</td>
                            <td>end</td>
                            <td>status</td>

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
                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                          <tr>
                            <td colSpan={5}>no users</td>
                            <td>
                              <Link to="/timeline">
                                <Button onClick={() => props.onShowOnTimeline(staticUser)} >
                                  View
                                </Button>
                              </Link>

                            </td>
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
    </Fragment >
  );
}

const mapStateToProps = (state) => {
  return {
    accountGroup: state.accountGroup.accountGroup,
    timelineUsers: state.timelineUsers.staticUsers,
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
    onShowOnTimeline: (staticUser) => dispatch(actions.showOnTimeline(staticUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
