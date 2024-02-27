import React from 'react'
import Image from 'next/image'
import styles from './Deals.module.scss'
import { deals } from '@/constant'
export default function Deals() {
    return (
        <div className={styles.deals}>
            <h1 className={styles.heading}>Related deals you might like for</h1>
            <div className={styles.container}>
                {deals.map(el => (
                    <article key={el.id}>
                        <div className={styles.imgContainer}>
                            <Image src={el.image} alt='image' width={141} height={103} />
                        </div>
                        <div>
                            <span className={styles.offer}>{el.off} Off</span>
                            <span className={styles.offer}>{el.time}</span>
                        </div>
                        <h2 className={styles.subheading}>{el.heading}</h2>
                        <p>{el.subheading}</p>
                        <div className={styles.priceBox}>
                            <span className={styles.price}>${el.price}</span>
                            <span className={styles.dimmedprice}>${el.dimmedprice}</span>
                            <span className={styles.off}>({el.off} Off)</span>
                        </div>
                        <button>View Deal</button>
                    </article>
                ))}

            </div>
        </div>
    )
}
