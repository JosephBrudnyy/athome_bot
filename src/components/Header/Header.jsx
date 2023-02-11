import React from 'react'

const tg = window.Telegram.WebApp;


export default function Header() {

  return (
    <div className='header'>
      <Button onClick={onClose}>Закры</Button>
      <span className='username'>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  )
}
