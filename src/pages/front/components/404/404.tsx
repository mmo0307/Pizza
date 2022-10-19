import React from 'react'
import { Link } from 'react-router-dom'
import Pizza_404 from '../../../../images/pizza/pizza_404.png'

export const FailPage = () => {
  return (
    <div style={{
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <img src={Pizza_404} alt="404 Pizza" width={300} height={300}/>
        <h1>404 Ошибка</h1>
        <Link to="/" className="link-btn">Назад на главный экран</Link>
    </div>
  )
}
