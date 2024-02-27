import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { down } from '@/assets/icons'
import { footerCategories, footerContacts } from '@/constant'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.columns}>
                    <h1 className={styles.heading}>Categories</h1>
                    {footerCategories.map(el => (
                        <span className={styles.dimmed} key={el.id}>{el.category}</span>

                    ))}

                </div>
                <div className={styles.columns}>
                    <h1 className={styles.heading}>Contact</h1>
                    {footerContacts.map(el => (
                        <span className={styles.dimmed} key={el.id}>{el.category}</span>

                    ))}
                </div>
                <div className={styles.country}>
                    <span className={styles.dimmed}>United States</span>
                    <Image src={down} alt="" width={15} height={9} />
                </div>
            </div>
        </div>
    )
}
