import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './pages/paginaInicial'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import PainelInicio from './pages/painel/inicio'
import PainelLoja from './pages/painel/loja'
import PainelRanking from './pages/painel/ranking'
import Resumo from './pages/resumo'
import Quiz from './pages/quiz'


export default function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                 <Route exact path="/" element={<Cadastro />} />
                 <Route exact path="/login" element={<Login />} />
                 <Route exact path="/cadastro" element={<Cadastro />} />
                 <Route exact path="/resumo" element={<Resumo />} />
                 <Route exact path="/quiz" element={<Quiz />} />

                 <Route path="painel">
                     <Route exact path="inicio" element={<PainelInicio />} />
                     <Route exact path="loja" element={<PainelLoja />} />
                     <Route exact path="ranking" element={<PainelRanking />} />
                 </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}