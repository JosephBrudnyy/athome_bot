import React from 'react'

const tg = window.Telegram.WebApp;


export default function Header() {

  const onClose = () => {
    tg.close()
  }


  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span className='username'>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  )
}
