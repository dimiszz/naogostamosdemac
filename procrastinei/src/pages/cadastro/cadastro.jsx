/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function cadastro() {
	const navigate = useNavigate();
	function Redirect() {
		//window.location.href = 'http://localhost:3000/painel/inicio';
		navigate('/painel/inicio')
	}

	return (
		<div className="container-fluid vh-100">
			<div className="d-flex justify-content-center align-items-center vh-md-100 vh-100">
				<div className="row mt-sm-5 vw-30 vw-sm-80" id="form-criar-conta">
					<div className="d-flex justify-content-center mb-3">
						{/* <Image src={} className="img-entrar align-self-center" height="100px" alt="Logo eletrix" /> */}
					</div>

					<div className="col-md-12 offset-md-0 col-12  ">
						<form>
							{/* materia
							lista de topicos (5) */}
							
							{/* nome do usuario */}
							<div className="mb-3">
								<label htmlFor="InputNome">Nome Usuario: </label>
								<input
									type="text"
									value={'Estudante'}
									className="form-control"
									placeholder="Digite seu nome completo"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
							</div>
							{/* email do usuario */}
							<div className="mb-3">
								<label htmlFor="InputEmail">E-mail: </label>
								<input
									type="text"
									value={'estudante@gmail.com'}
									className="form-control"
									placeholder="Digite seu Email"
									id="inputEmail"
									aria-describedby="Email"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="InputNome">Senha: </label>
								<input
									type="password"
									value={'1234'}
									className="form-control"
									placeholder="Digite seu nome completo"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="InputNome">Confirmar senha: </label>
								<input
									type="password"
									value={'1234'}
									className="form-control"
									placeholder="Digite seu nome completo"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="InputNome">Estação: </label>
								<input
									type="text"
									value={'Itaquaquecetuba'}
									className="form-control"
									placeholder="Digite seu nome completo"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
							</div>
                            <div className="mb-3">
								<label htmlFor="InputNome">Turno de estudos: </label>
                                <select className='form-select'>
                                    <option value="Matutino">Matutino</option>
                                    <option value="Noturno">Noturno</option>
                                </select>
							</div>
							<div className="mb-3 text-center">
								<label>Já possui uma conta? <a href="/login">Entrar</a> </label>
							</div>
							<div className="mb-3 text-center">
								<button
									className='btn btn-success'
									onClick={e => Redirect()}>
									Entrar
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
	)
}
