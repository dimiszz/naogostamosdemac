import React from 'react'
import BarraLateral from '../../components/BarraLateral'

export default function paginaInicial() {
  return (
    <>
      <BarraLateral t1='Login' t2='Cadastro' t3=''/>
      <div class="limiter">
        <div class="pg-inicial">
          
          <img src="gato.jpg" alt="Gato" />
          
          <div class="text">
            <p class="txt1">
              <strong>Procrastinei</strong>
            </p>
          </div>

          <div class="text">
            <p class="txt2">
              Create your Account
            </p>
          </div>
        </div>

        <div class="container-login100">
          
        </div>
      </div>
    </>

  )
}
