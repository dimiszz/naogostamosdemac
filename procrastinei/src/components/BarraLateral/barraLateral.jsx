/* eslint-disable jsx-a11y/anchor-is-valid */
import { Img } from '@chakra-ui/react'
import React from 'react'
import './styles.css'
import Gato from './gato3.png'

export default function barraLateral({t1, t2, t3, l1, l2, l3}) {
  return (
    <>
      <div className='teste'>
        <div className="sidebar">
          <div className='text-center'>
            <Img src={Gato} alt="IMG" h='130px'/>
          </div>
          <ul>

            <a className="link" href={l1}>
              <li>{t1}</li>
            </a>
            <a className="link" href={l2}>
              <li>{t2}</li>
            </a>
            <a className="link" href={l3}>
              <li>{t3} </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}
