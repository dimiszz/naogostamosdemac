import React from 'react'
import BarraLateral from '../../../components/BarraLateral'
import './styles.css'
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Img
} from '@chakra-ui/react'
import Gato1 from './gato1.jpg'
import Gato2 from './gato2.jpg'
import Gato3 from './gato3.jpg'



export default function Loja() {
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

						<TableContainer>
							<Table variant='striped' colorScheme='teal'>
								<Thead>
									<Tr className='text-center'>
										<Th>Item</Th>
										<Th>Status</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr className='text-center me-2'>
										<Td><Img src={Gato1} h='100px' /></Td>
										<Td>Desbloqueado</Td>
									</Tr>
									<Tr className='text-center'>
										<Td><Img src={Gato2} h='100px' /></Td>
										<Td>Bloqueado</Td>
									</Tr>
									<Tr className='text-center'>
										<Td><Img src={Gato3} h='100px' w='100px' /></Td>
										<Td>Bloqueado</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</div>

		</>
	)
}
