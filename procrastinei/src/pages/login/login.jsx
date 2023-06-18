import React from 'react'

export default function login() {
  return (
    <>
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<div class="login100-pic js-tilt" data-tilt>
						<img src="images/img-01.png" alt="IMG" />
					</div>

					<form class="login100-form validate-form">
						<span class="login100-form-title">
							Cadastrar-se
						</span>

						<span className=''> Nome de Usuário:</span>
					<div class="wrap-input100 validate-input">
						<input class="input100" type="text" placeholder="Nome de Usuário" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<span className=''> Email:</span>
						<input class="input100" type="text" name="email" placeholder="Email" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
					<span className=''> Senha:</span>
						<input class="input100" type="password" name="pass" placeholder="Senha" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
					<span className=''> Confirmar Senha:</span>
						<input class="input100" type="password" name="pass" placeholder="Confirmar senha" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
					<span className=''> Estação:</span>
						<input class="input100" type="text" placeholder="Digite sua estação" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Entrar
						</button>
					</div>

					<div class="text-center p-t-12">
						<a class="txt2" href="#">
							Esqueceu sua senha?
						</a>
					</div>

					<div class="text-center p-t-136">
						<span>Não possui uma conta? </span>
						<a class="txt2" href="#">
							Criar conta
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    </>
  )
}
