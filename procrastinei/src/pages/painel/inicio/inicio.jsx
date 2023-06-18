import React from 'react'
import BarraLateral from '../../../components/BarraLateral'
import { Box } from '@chakra-ui/react'

export default function inicio() {
    return (
        <>
            <BarraLateral t1='outra coisa'/>
            <div className='espaco'>
                <Box bg='tomato' w='100%' h='100vh' p={4} color='white'>
                    <div className='d-flex justify-content-center'>
                    This is the Box
                    </div>
                </Box>
            </div>
        </>
    )
}
