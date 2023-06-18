import React from 'react'

export default function paginaInicial() {
  return (
    <>
     <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">

            <div class="login100-pic js-tilt" data-tilt>
              <img src="images/img-01.png" alt="IMG" />
            </div>
              
              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                  Login
                </button>
                <button class="login100-form-btn">
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
        </div>
      </div>
    </>

  )
}
