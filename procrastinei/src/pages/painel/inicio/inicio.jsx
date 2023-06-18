/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import BarraLateral from '../../../components/BarraLateral'
import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function inicio() {

    const navigate = useNavigate()

    function Redirect(){
        navigate('/resumo')
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
            
            <div className="container-fluid vh-100">
			<div className="d-flex justify-content-center align-items-center vh-md-100 vh-100">
				<div className="row mt-sm-5 vw-30 vw-sm-80" id="form-criar-conta">
					<div className="d-flex justify-content-center mb-3">
						{/* <Image src={} className="img-entrar align-self-center" height="100px" alt="Logo eletrix" /> */}
					</div>

					<div className="col-md-12 offset-md-0 col-12  ">
						<form>
							{/* nome do usuario */}
							<div className="mb-3">
								<label htmlFor="InputNome">Materia para estudar: </label>
								<input
									type="text"
									value={'História do Brasil'}
									className="form-control"
									placeholder="Digite seu nome completo"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="InputNome">Materia para estudar: </label>
								<input
									type="date"
									value={'2023-06-19'}
									className="form-control"
									placeholder="Digite seu nome completo"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="InputNome">Lista de tópicos para o resumo: </label>
								<p>
                                <textarea
									type="textbox"
                                    value='Brasil pré-colonial
                                    Brasil colônia
                                    Brasil monarquia
                                    Brasil república velha
                                    Era Vargas
                                    Ditadura Militar'

									className="w-100"
									placeholder="Digite os tópicos"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
                                </p>
							</div>
							<div className="mb-3 text-center">
								<button
									className='btn btn-success'
                                    onClick={e => Redirect()}
                                    >
									Criar resumo
								</button>
							</div>


						</form>
						<div className="row d-flex mt-4 text-center">
							{/* <Link to="/entrar" className="link-conta fw-bolder mb-3">Já possuo uma conta</Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>

        </>
    )
}
