/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styles.css'

export default function barraLateral({t1, t2, t3}) {
  return (
    <>
      <div className='teste'>
        <div className="sidebar">
          <div class="applogo" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>
          <ul>

            <a className="link" href="#">
              <li>{t1}</li>
            </a>
            <a className="link" href="#">
              <li>{t2}</li>
            </a>
            <a className="link" href="#">
              <li>{t3} </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}
