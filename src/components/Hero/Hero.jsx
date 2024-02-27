import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import { check, down, info } from '@/assets/icons'
import { links, listing } from '@/constant'

export default function Hero() {
    return (
        <div className={styles.hero} >
            <h1 className={styles.heading}>Best Website builders in the US</h1>
            <hr className={styles.hr} />
            <article className={styles.details}>
                <div>
                    <Image src={check} alt='' width={20} height={20} />
                    <span className='dimmed'>Last Updated</span>
                    -
                    <span className='dimmed'>February 22, 2020</span>
                    <Image src={info} alt='' width={20} height={20} />
                    <span className='dimmed'>Advertising Disclosure</span>
                </div>
                <div>
                    <span className='dimmed'>Top Relevant</span>
                    <Image src={down} alt='' width={20} height={20} />
                </div>
            </article>
            <hr className={styles.hr} />
            <article className={styles.link}>
                {links.map(el => (
                    <span className='dimmed' key={el.id}>{el.link}</span>
                ))}
            </article>
            <article className={styles.listing}>
                {listing.map(el => (
                    <span className={`dimmed ${styles.listing}`} key={el.id}>
                        {el.link}

                    </span>
                ))}
            </article>

        </div>
    )
}
