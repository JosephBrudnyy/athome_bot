import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'
import Header from '../Header/Header'
import { useLocation, useNavigate } from 'react-router-dom'





const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price 
    })
}

export default function ProductList(    ) {

    const location = useLocation()

    const products = location.state.products

    const navigate = useNavigate()
    const [addedItems, setAddedItems] = React.useState([])
    

  return (
    <div>
        <Header btnText="Назад" title={location.state.title} onBtnPress={() => navigate('/')}/>
        <div className='list'>
            {products.map(item => {
                return <ProductItem
                    product={item}
                    className={'item'}
                    btnText={'Вызвать'}
                />
            })}

        </div>
    </div>
  )
}
