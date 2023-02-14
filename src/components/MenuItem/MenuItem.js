import React from 'react'
import { useNavigate } from 'react-router-dom'

import {ReactComponent as Broom} from '../../img/broom.svg'


export default function MenuItem({item}) {
    const navigate = useNavigate()
    const onClick= () => {navigate('/item', {state: {products: item.products, title:item.text}})}

  return (
    <div onClick={onClick} style={{
        width: 100,
        height: 130,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 10,
        textAlign: "center",
        backgroundColor: 'var(--tg-theme-button-color)'
    }}>
        <div style={{
            width: 50,
            height: 50
        }}>
        {item.img}
        </div>
        <button  style={{
            width: "100%",
            background: 'var(--tg-theme-button-color)',
            borderRadius: 10,
            height: 50
        }}>
            <p style={{fontWeight: "bold", color: "white", fontSize: 15, flexWrap: "wrap"}}>{item.text}</p>
        </button>
    </div>
  )
}
