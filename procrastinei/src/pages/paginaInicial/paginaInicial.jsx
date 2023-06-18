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
            <a class="txt1">
              Procrastinei
            </a>
          </div>

          <div class="text">
            <a class="txt2">
              Create your Account
            </a>
          </div>
        </div>

        <div class="container-login100">
          
        </div>
      </div>
    </>

  )
}
