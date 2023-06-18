import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './pages/paginaInicial'
import Login from './pages/login'


export default function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                 <Route exact path="/" element={<PaginaInicial />} />
                 <Route exact path="/login" element={<Login />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}