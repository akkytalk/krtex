import { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Consignment from "./Components/Consignment/Consignment";
import Enquiries from "./Components/Enquiries/Enquiries";
import Dashboard from "./Components/Home/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Customer from "./Components/KrtexMaster/Customer/Customer";
import LCMaster from "./Components/KrtexMaster/LCMaster/LCMaster";
import Logistics from "./Components/KrtexMaster/Logistics/Logistics";
import Product from "./Components/KrtexMaster/Product/Product";
import Vendor from "./Components/KrtexMaster/Vendor/Vendor";
import PerformaInvoice from "./Components/PerformaInvoice/PerformaInvoice";
import PurchaseOrder from "./Components/PurchaseOrder/PurchaseOrder";


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/enquires" component={Enquiries} />
          <Route path="/Customer" exact component={Customer} />
          <Route path="/vendor" component={Vendor} />
          <Route path="/product" component={Product} />
          <Route path="/logistics" component={Logistics} />
          <Route path="/lc-master" component={LCMaster} />
          <Route path="/consignment" component={Consignment} />
          <Route path="/performa-invoice" component={PerformaInvoice} />
          <Route path="/purchase-order" component={PurchaseOrder} />

          
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
