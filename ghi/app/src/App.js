import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleForm from './VehicleForm';
import VehicleList from './VehicleList';

import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import TechnicianForm from './TechnicianForm';
import SalesPersonForm from './SalesPersonForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceAppointmentList from './ServiceAppointmentList';
import ServiceHistoryList from './ServiceHistoryList';
import CustomerForm from './CustomerForm';
import SaleRecordForm from './SaleRecordForm';
import SalesList from './SalesList';
import SalesHistoryList from './SalesHistoryList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturer" >
            <Route path ='' element={<ManufacturerList />} />
            <Route path='new' element={<ManufacturerForm />} />
          </Route>
          <Route path="/vehicle" >
            <Route path ='' element={<VehicleList />} />
            <Route path='new' element={<VehicleForm />} />
          </Route>
          <Route path="/automobile" >
            <Route path='' element={<AutomobileList />} />
            <Route path="/automobile/new" element={<AutomobileForm />} />
          </Route>
          <Route path='/technician' element={<TechnicianForm />} />
          <Route path="/salesperson" >
            <Route path="/salesperson/new" element={<SalesPersonForm />} />
          </Route>
          <Route path="/service">
            <Route path='' element={<ServiceAppointmentList />} />
            <Route path="/service/new" element={<ServiceAppointmentForm />} />
            <Route path="/service/history" element={<ServiceHistoryList />} />
          </Route>
          <Route path="/customer" >
            <Route path="/customer/new" element={<CustomerForm />} />
          </Route>
          <Route path="/salerecord" >
            <Route path="/salerecord/new" element={<SaleRecordForm />} />
          </Route>
          <Route path="/saleslist" >
            <Route path="" element={<SalesList />} />
          </Route>
          <Route path="/saleshistorylist" >
            <Route path="" element={<SalesHistoryList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
