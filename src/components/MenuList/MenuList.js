import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import {ReactComponent as Broom} from '../../img/broom.svg'
import {ReactComponent as Car} from '../../img/car.svg'
import {ReactComponent as Drill} from '../../img/drill.svg'
import {ReactComponent as Lightning} from '../../img/lightning.svg'
import {ReactComponent as Roller} from '../../img/roller.svg'
import {ReactComponent as Shield} from '../../img/shield.svg'
import {ReactComponent as Water} from '../../img/water.svg'
import {ReactComponent as Wrench} from '../../img/wrench.svg'
import Header from '../Header/Header'
import { useTelegram } from '../../hooks/useTelegram'


import anonymImg from '../../img/anonym.jpg'

export default function MenuList() {

   
    const {onClose} = useTelegram()

    const cleaningProducts = [
        {title: "Клининг мастер 1", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Клининг мастер 2", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Клининг мастер 3", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Клининг мастер 4", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'}
    ]

    const logisticProducts = [
        {title: "Перевозка мастер 1", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Перевозка мастер 2", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Перевозка мастер 3", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Перевозка мастер 4", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'}
    ]

    const renovProducts = [
        {title: "Ремонт мастер 1", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Ремонт мастер 2", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Ремнот мастер 3", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Ремнот мастер 4", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'}
    ]

    const electricianProducts = [
        {title: "Электрик мастер 1", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Электрик мастер 2", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Электрик мастер 3", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Электрик мастер 4", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'}
    ]

    const painterProducts = [
        {title: "Маляр мастер 1", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Mаляр мастер 2", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Mаляр мастер 3", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Mаляр мастер 4", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'}
    ]

    const secrProducts = [
        {title: "Охраник 1", subtitle: "На входе 1", photo: anonymImg, tel:'+79268021745'},
        {title: "Охраник 2", subtitle: "На входе 2", photo: anonymImg, tel:'+79268021745'},
        {title: "Охраник 3", subtitle: "У шлагбаума", photo: anonymImg, tel:'+79268021745'},
        {title: "Охраник 4", subtitle: "Во дворе", photo: anonymImg, tel:'+79268021745'}
    ]

    const waterProducts = [
        {title: "Доставка воды 1", subtitle: "100 руб/5л", photo: anonymImg, tel:'+79268021745'},
        {title: "Доставка воды 2", subtitle: "100 руб/5л", photo: anonymImg, tel:'+79268021745'},
        {title: "Доставка воды 3", subtitle: "100 руб/5л", photo: anonymImg, tel:'+79268021745'},
        {title: "Доставка воды 4", subtitle: "100 руб/5л", photo: anonymImg, tel:'+79268021745'}
    ]

    const plumberProducts = [
        {title: "Сантехник 1", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Сантехник 2", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Сантехник 3", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'},
        {title: "Сантехник 4", subtitle: "100 руб/час", photo: anonymImg, tel:'+79268021745'}
    ]


    const items = [
        {img: <Broom width={50} height={50}/>, text: "Клининг", products: cleaningProducts },
        {img: <Car width={50} height={50}/>, text: "Перевозка грузов", products: logisticProducts},
        {img: <Drill width={50} height={50}/>, text: "Ремонт квартир", products: renovProducts},
        {img: <Lightning width={50} height={50}/>, text: "Электрика", products: electricianProducts},
        {img: <Roller width={50} height={50}/>, text: "Маляры и штукатуры", products: painterProducts},
        {img: <Shield width={50} height={50}/>, text: "Охрана", products: secrProducts},
        {img: <Water width={50} height={50}/>, text: "Доставка воды", products: waterProducts},
        {img: <Wrench width={50} height={50}/>, text: "Сантехника", products: plumberProducts},
    ]

  return (
    <div>
        <Header btnText='Закрыть' title="Услуги" onBtnPress={onClose}/>
        <div style={{
            display: 'flex',
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
            width: 270,
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            {items.map((item) => {
                return <MenuItem item={item} />
            })}
        </div>
    </div>
  )
}
