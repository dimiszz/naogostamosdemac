import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

export default function login() {
	const navigate = useNavigate
	function Redirect() {
		window.location.href = 'http://localhost:3000/painel/inicio';
		navigate('http://localhost:3000/painel/inicio')
	}

	return (
		<>
			<Box w='100%' h='100vh' p={4}>
				<Box className='d-flex justify-content-center align-items-center' h='100%'>
					<div className='formulario_envio'>
						teste
						<FormControl>
							<FormLabel>Email address</FormLabel>
							<Input type='email' />
							<FormHelperText>We'll never share your email.</FormHelperText>
						</FormControl>
					</div>
				</Box>
			</Box>
		</>
	)
}
