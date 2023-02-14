import React from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Header.css'




export default function Header({title, btnText, onBtnPress}) {

  const tg = window.Telegram.WebApp;

  return (
    <div className='header'>
      <h3>{title}</h3>
      <Button onClick={onBtnPress}>{btnText}</Button>
    </div>
  )
}
