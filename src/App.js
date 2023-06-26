import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from './Routes/Home'
import Student from './Routes/Student'
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import NavBar from './components/Navbar';

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="student" >
                    <Route index  element={<Student />}></Route>
                    <Route path=":id" element={<EditStudent />}></Route>
                </Route>
                <Route path="add"  element={<AddStudent />}></Route>
                <Route path="*"  element={<NotFound />}></Route>     
            </Routes> 
        </>
    );
};

export default App;
