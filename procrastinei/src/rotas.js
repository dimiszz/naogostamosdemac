import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './pages/paginaInicial'
import Login from './pages/login'
import PainelInicio from './pages/painel/inicio'


export default function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                 <Route exact path="/" element={<PaginaInicial />} />
                 <Route exact path="/login" element={<Login />} />
                 <Route path="painel">
                     <Route exact path="inicio" element={<PainelInicio />} />
                 </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}