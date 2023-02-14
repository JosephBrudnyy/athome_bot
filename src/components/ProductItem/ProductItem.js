import React from 'react'
import './ProductItem.css'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram';

export default function ProductItem({product, className, btnText}) {
    

    const {tg} = useTelegram();

    const onClick = () => {
        try{
            tg.sendData(JSON.stringify({first_name: product.title, tel: product.tel }))
            tg.close()
            
        }catch(e){
            tg.showAlert(e)
        }
    }

  return (
    <div className={'product ' + className}>
        <img className='img' src={product.photo} />
        <div className='title' style={{marginBottom: 5}}>{product.title}</div>
        <div className='description' style={{marginBottom: 5}}>{product.subtitle}</div>
        <Button className={'add-btn'} onClick={onClick}>
            {btnText}
        </Button>
    </div>
  
  )
}
