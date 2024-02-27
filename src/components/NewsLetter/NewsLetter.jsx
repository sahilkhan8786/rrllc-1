import React from 'react'
import styles from './NewsLetter.module.scss'
export default function NewsLetter() {
    return (
        <div className={styles.newsletter}>
            <h1 className={styles.heading}>
                Sign up and get exclusive special deals
            </h1>
            <div className={styles.input}>
                <input type="text" />
                <button>Sign&nbsp;up</button>
            </div>
        </div>
    )
}
