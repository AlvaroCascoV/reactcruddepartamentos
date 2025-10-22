import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuDepartamento from './components/MenuDepartamento'
import HomeDepartamentos from './components/HomeDepartamentos'
import CreateDepartamento from './components/CreateDepartamento'
import UpdateDepartamento from './components/UpdateDepartamento'

export default class Router extends Component {
    render() {
        function UpdateElement() {
            let { id, nombre, localidad } = useParams();
            return <UpdateDepartamento id={id} nombre={nombre} localidad={localidad} />
        }
        return (
            <BrowserRouter>
                <MenuDepartamento />
                <Routes>
                    <Route path="/" element={<HomeDepartamentos />} />
                    <Route path="/create" element={<CreateDepartamento />} />
                    <Route path="/update/:id/:nombre/:localidad" element={<UpdateElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}