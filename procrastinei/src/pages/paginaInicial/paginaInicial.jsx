import React from 'react'
import BarraLateral from '../../components/BarraLateral'

export default function paginaInicial() {
  return (
    <>
      <BarraLateral t1='Login' t2='Cadastro' t3=''/>
      <div class="limiter">
        <div class="pg-inicial">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>
          
          <div class="text-presentation">
            <a class="txt1">
              Procrastinei
            </a>
          </div>

          <div class="text-center">
            <a class="txt2" href="#">
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
