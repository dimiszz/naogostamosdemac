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
} from '@chakra-ui/react'
export default function ranking() {
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
								<Tr>
									<Th>Usuário</Th>
									<Th>Pontos</Th>
									<Th isNumeric>Colocação</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr className='text-center'>
									<Td>TESTE</Td>
									<Td>10</Td>
									<Td isNumeric>1</Td>
								</Tr>
								<Tr className='text-center'>
									<Td>TESTE2</Td>
									<Td>9</Td>
									<Td isNumeric>2</Td>
								</Tr>
								<Tr className='text-center'>
									<Td>TESTE3</Td>
									<Td>8</Td>
									<Td isNumeric>3</Td>
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
