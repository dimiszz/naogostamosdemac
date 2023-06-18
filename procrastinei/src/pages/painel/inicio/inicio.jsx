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
            <div className='espaco'>
                <Box w='100%' h='100vh' p={4}>
                    <Box className='d-flex justify-content-center align-items-center' h='100%'>
                        <div className='formulario_envio'>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input type='email' />
                                <FormHelperText>We'll never share your email.</FormHelperText>
                            </FormControl>
                        </div>
                    </Box>
                </Box>
            </div>
        </>
    )
}
