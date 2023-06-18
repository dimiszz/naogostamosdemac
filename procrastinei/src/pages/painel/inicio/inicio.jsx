import React from 'react'
import BarraLateral from '../../../components/BarraLateral'
import {
    Box, Input, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import './styles.css'

export default function inicio() {
    return (
        <>
            <BarraLateral t1='Inicio' t2='Loja' t3='Ranking' />
            
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
									value={'Calculo'}
									className="form-control"
									placeholder="Digite seu nome completo"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="InputNome">Lista de tópicos para o resumo: </label>
								<textarea
									type="textbox"
                                    value='teste1
                                    teste2
                                    teste3
                                    teste4
                                    teste5'

									className="form-control h-auto"
									placeholder="Digite seu nome completo"
									id="inputNome"
									aria-describedby="Nome do usuario"
								/>
							</div>
							<div className="mb-3 text-center">
								<button
									className='btn btn-success'
                                    >
									Enviar
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
