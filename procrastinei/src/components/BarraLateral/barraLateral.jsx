/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styles.css'

export default function barraLateral({t1}) {
  return (
    <>
      <div className='teste'>
        <div className="sidebar">
          <ul>
            <a className="link" href="#">
              <li>{t1}</li>
            </a>
            <a className="link" href="#">
              <li >Loja</li>
            </a>
            <a className="link" href="#">
              <li>Ranking </li>
            </a>

          </ul>
        </div>
      </div>
    </>
  )
}
