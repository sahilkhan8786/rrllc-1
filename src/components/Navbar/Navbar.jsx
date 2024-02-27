import React from 'react'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import { ham, search } from '@/assets/icons'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <nav className={`${styles.nav} container`}>
                <div className={styles.input}>
                    <Image src={search} alt='search' width={24} height={24} />
                    <input type="text" />
                </div>
                <p >Categories</p>
                <p >Website Builders</p>
                <p >Today&apos;s deals</p>
                <Image src={ham} alt='' width={24} height={24} className={styles.ham} />
            </nav>
        </div>
    )
}
