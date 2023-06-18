import React from 'react'
import BarraLateral from '../../components/BarraLateral'

export default function paginaInicial() {
  return (
    <>
      <BarraLateral t1='outra coisa'/>
      <div class="limiter">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>
          
          <div class="container-logcad">
            <button class="logcad">
              Login
            </button>
            <button class="logcad">
              Cadastrar-se
            </button>
          </div>

          <div class="text-center p-t-136">
            <a class="txt2" href="#">
              Create your Account
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div class="container-login100">
          
        </div>
      </div>
    </>

  )
}
