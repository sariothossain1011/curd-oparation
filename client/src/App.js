import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Css/Style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {BrowserRouter} from "react-router-dom";
// import {Route, Switch} from "react-router";
import ReadPage from './Pages/ReadPage';
import CreatePage from './Pages/CreatePage';
import UpdatePage from './Pages/UpdatePage';
import AppNavbar from './Conponents/Common/AppNavbar';
const App = () => {
  return (
     <Fragment>
      <BrowserRouter>
        <AppNavbar/>
        <Routes>
          <Route index element={<ReadPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update/:id" element={<UpdatePage/>} />

          {/* <Route exact path="/" render={(props)=><ReadPage {...props} key={Date.now()} />}/>
          <Route exact path="/create" render={(props)=><CreatePage {...props} key={Date.now()} />}/>
          <Route exact path="/update/:id" render={(props)=><UpdatePage {...props} key={Date.now()} />}/> */}
        </Routes>
        </BrowserRouter>
     </Fragment>


     )
}

export default App

