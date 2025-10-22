import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/Login'
import Dashboard from './pages/DashBoard'
import Sidebar from './layout/Sidebar'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import AddCustomer from './pages/AddCustomer'
import CustomerList from './pages/CustomerList'
import ClientProfile from './pages/ClientProfile'
import RecordPayment from './pages/RecordPayment'
import AttendancePage from './pages/AttendancePage'
import SubscriptionPlans from './pages/SubscriptionPlans'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/customers' element={<AddCustomer />} />

          <Route path='/payment' element={<RecordPayment />} />

          <Route path='/customerlist' element={<CustomerList />} />
          <Route path='/clientprofile' element={<ClientProfile />} />
          <Route path='/attendance' element={<AttendancePage />} />
          <Route path='/subscriptions' element={<SubscriptionPlans />} />

          <Route path='/*' element={<>Not Found</>} />






        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
