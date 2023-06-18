import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react';
import BarraLateral from '../../components/BarraLateral';

export default function login() {
	const navigate = useNavigate
	function Redirect() {
		window.location.href = 'http://localhost:3000/painel/inicio';
		navigate('http://localhost:3000/painel/inicio')
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
