/* eslint-disable react-hooks/rules-of-hooks */
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import BarraLateral from './../../components/BarraLateral/barraLateral';
import { useNavigate } from 'react-router-dom';
import './styles.css'

export default function resumo() {

    const navigate = useNavigate()

    function Check(res){
        if(res == 1){
            alert('Você errou')
        }
        if(res == 2){
            alert('Você errou')
        }
        if(res == 3){
            alert('Parabens! Você Acertou e por conta disso ganhou um gatinho 😄😻')
            navigate('/painel/inicio')
        }
        if(res == 4){
            alert('Você errou')
        }
    }

    return (
        <>
            <BarraLateral
                t1='Inicio'
                t2='Miauvenventário'
                t3='Ranking'
                l1='http://localhost:3000/painel/inicio'
                l2='http://localhost:3000/painel/loja'
                l3='http://localhost:3000/painel/ranking'
            />

            <div className="container-fluid teste2">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row mt-sm-5 vw-30 vw-sm-80" id="form-criar-conta">
                        <div className=''>

                            <h2>QUIZ</h2>

                            <h3>
                                Qual foi o período em que ocorreu a Guerra do Paraguai?
                            </h3>
                            <p>
                                <button className='btn btn-outline-primary me-3' onClick={e => Check(1)}>
                                    A) Brasil pré-colonial
                                </button>
                            </p>
                            <p>
                                <button className='btn btn-outline-primary' onClick={e => Check(2)}>
                                    B) Brasil colônia
                                </button>
                            </p>
                            <p>
                                <button className='btn btn-outline-primary me-3' onClick={e => Check(3)}>
                                    C) Brasil monarquia
                                </button>
                            </p>
                            <p>
                                <button className='btn btn-outline-primary' onClick={e => Check(4)}>
                                    D) Brasil República Velha
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
