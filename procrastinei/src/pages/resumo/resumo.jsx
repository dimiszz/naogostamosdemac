/* eslint-disable react-hooks/rules-of-hooks */
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import BarraLateral from './../../components/BarraLateral/barraLateral';
import { useNavigate } from 'react-router-dom';
import './styles.css'

export default function resumo() {

    const [resposta, setResposta] = useState('');

    const navigate = useNavigate()

    function Redirect(){
        navigate('/quiz')
    }

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

            <div className="container-fluid teste2">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row mt-sm-5 vw-30 vw-sm-80" id="form-criar-conta">
                        <div className=''>
                            <h1>
                                História do Brasil
                            </h1>
                            <h2>
                                Tópicos
                            </h2>
                            <p>
                                Topico: Brasil pré-colonial
                            </p>
                            <p>
                                Topico: Brasil colônia
                            </p>
                            <p>
                                Topico: Brasil monarquia
                            </p>
                            <p>
                                Topico: Brasil republica velha
                            </p>
                            <p>
                                Topico: Era Vargas
                            </p>
                            <p>
                                Topico: Brasil Ditadura Militar
                            </p>
                            <h2>
                                Brasil pré-colonial:
                            </h2>
                        </div>

                        <p>
                            - Chegada dos primeiros habitantes há mais de 12.000 anos;
                        </p>
                        <p>
                            - Formação de diversas tribos indígenas espalhadas pelo território brasileiro;
                        </p>
                        <p>
                            - Desenvolvimento de sociedades complexas, como a dos Tupinambás e dos Guaranis;
                        </p>
                        <p>
                            - Cultivo de alimentos como milho, feijão, mandioca e batata-doce;
                        </p>
                        <p>
                            - Prática de rituais religiosos e uso de artefatos cerimoniais;
                        </p>
                        <p>
                            - Contato com exploradores estrangeiros, como os portugueses, a partir do século XVI.
                        </p>

                        <h2>
                            Brasil colônia:
                        </h2>
                        <p>
                            - Chegada dos portugueses ao território brasileiro em 1500;
                        </p>
                        <p>
                            - Exploração do pau-brasil pelos europeus;
                        </p>
                        <p>
                            - Instalação de feitorias - como a de São Vicente - para a realização de comércio com os indígenas;
                        </p>
                        <p>
                            - Implantação do sistema de plantation, com o cultivo de cana-de-açúcar pelos colonos;
                        </p>
                        <p>
                            - Tráfico de escravos africanos para o trabalho nas lavouras e nas minas;
                        </p>
                        <p>
                            - Governo geral do Brasil criado em 1549, com a fundação de Salvador.
                        </p>

                        <h2>
                            Brasil monarquia:
                        </h2>

                        <p>
                            - Proclamação da independência em 1822, com a coroação de D. Pedro I como imperador;
                        </p>
                        <p>
                            - Adoção de uma Constituição liberal em 1824;
                        </p>
                        <p>
                            - Industrialização crescente a partir da década de 1850, com o desenvolvimento de fábricas têxteis e metalúrgicas;
                        </p>
                        <p>
                            - Guerra do Paraguai contra a Tríplice Aliança, de 1864 a 1870;
                        </p>
                        <p>
                            - Abolição da escravatura em 1888;
                        </p>
                        <p>
                            - Proclamação da República em 1889, com a destituição de D. Pedro II do trono.
                        </p>

                        <h2>
                            Brasil República Velha:
                        </h2>

                        <p>
                            - Período de 1889 a 1930, marcado pela alternância de poder entre as oligarquias estaduais;
                        </p>
                        <p>
                            - Imposição do voto censitário, que restringia o direito ao voto a uma parcela privilegiada da população;
                        </p>
                        <p>
                            - Surgimento de movimentos sociais como a Liga Antiescravista, o movimento pelo voto feminino e os movimentos anarquistas;
                        </p>
                        <p>
                            - Política do café com leite, que se alternava entre as oligarquias de São Paulo e Minas Gerais;
                        </p>
                        <p>
                            - Tenentismo, movimento liderado por militares que reivindicavam reformas políticas e sociais.
                        </p>

                        <h2>
                            Era Vargas:
                        </h2>

                        <p>
                            - Período de 1930 a 1945, marcado pela chegada ao poder de Getúlio Vargas;
                        </p>
                        <p>
                            - Implementação de uma política de industrialização baseada na substituição de importações;
                        </p>import { useNavigate } from 'react-router-dom';

                        <p>
                            - Criação de leis trabalhistas e previdenciárias, como a CLT e o INSS;
                        </p>
                        <p>
                            - Criação do Estado Novo em 1937, com a instauração de um regime autoritário;
                        </p>
                        <p>
                            - Participação do Brasil na Segunda Guerra Mundial ao lado dos Aliados.
                        </p>

                        <h2>
                            Brasil Ditadura Militar:
                        </h2>

                        <p>
                            - Período de 1964 a 1985, marcado pela tomada do poder pelos militares com o apoio dos Estados Unidos;
                        </p>
                        <p>
                            - Suspensão de garantias constitucionais e início de um regime ditatorial;
                        </p>
                        <p>
                            - Perseguição política, tortura e assassinatos de opositores ao regime;
                        </p>
                        <p>
                            - Implementação do AI-5 em 1968, que concedeu plenos poderes aos militares;
                        </p>
                        <p>
                            - Crise econômica durante o governo do General Emílio Garrastazu Médici, de 1969 a 1974;
                        </p>
                        <p>
                            - Governo do General João Baptista Figueiredo, que iniciou a abertura política e promulgou a Lei da Anistia, em 1979.
                        </p>


                        <p>
                            <button className='btn btn-success' onClick={e => Redirect()}>
                                Ir para o Quiz
                            </button>
                        </p>
                        {/* <h2>QUIZ</h2> */}

                        {/* <h3>
                            Qual foi o período em que ocorreu a Guerra do Paraguai?
                        </h3> */}

                        {/* <RadioGroup onChange={setResposta} value={1}>
                            <Stack direction='row'>
                                <p>
                                    <Radio value='1'>A) Brasil pré-colonial</Radio>
                                </p>
                                <p>
                                    <Radio value='1'>B) Brasil colônia</Radio>
                                </p>
                                <p>
                                    <Radio value='1'> C) Brasil monarquia (CERTA)</Radio>
                                </p>
                            </Stack>
                        </RadioGroup>

                        <p>
                        </p>
                        <p>
                            <button className='btn btn-success'>
                                Verificar Resposta
                            </button> */}
                        {/* </p> */}
                    </div>
                </div>
            </div>

        </>
    )
}
