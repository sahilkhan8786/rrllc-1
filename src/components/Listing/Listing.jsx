import React from 'react'
import styles from './Listing.module.scss'
import { image } from '@/assets/images'
import Image from 'next/image'
import { downBlue, rating5, trophy } from '@/assets/icons'
import { listingDeals } from '@/constant'
export default function Listing() {
    return (
        <div className={styles.listing}>
            <div className={styles.container}>
                {listingDeals.map(el => (
                    <article key={el.id}>
                        <div className={styles.listNo} >{el.id}</div>
                        {el.isBest && (
                            <div className={styles.best}>
                                <Image src={el.bestIcon} alt='' width={20} height={20} />
                                <span>
                                    Best {el.bestValue}
                                </span>
                            </div>
                        )}

                        <div className={styles.imgContainer}>
                            <Image src={el.mainImg} alt='' width={141} height={103} />
                            <span>{el.imageDetail}</span>
                        </div>
                        <div className={styles.details}>
                            {
                                el.details.map(elD => (
                                    <div key={elD.dId}>
                                        <span className={styles.heading}>
                                            {elD.heading}
                                        </span>

                                        <span> {elD.para}
                                            {el?.offAvail &&
                                                (<div className={styles.offAvail}>
                                                    {elD?.offValue}
                                                </div>)}
                                            {elD?.bgAvail &&
                                                (<div className={styles.bgDetails}>

                                                    {elD?.moreData?.map(elED => (
                                                        <div key={elED.id}>
                                                            <span className={styles.hvValue}>
                                                                {elED.no}
                                                            </span>
                                                            <span className={styles.data}>
                                                                {elED.value}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>)}
                                            {elD?.extraParaAvail &&
                                                (<div className={styles.extraParaDetails}>

                                                    {elD?.extraPara?.map(elED => (
                                                        <div key={elED.heading}>
                                                            <div className={styles.heading}>
                                                                {elED.heading}
                                                            </div>
                                                            <div className={styles.data}>
                                                                {elED?.data?.map(elData => (
                                                                    <div key={elData.value}>
                                                                        <Image src={elData.icon} alt='' width={24} height={24} />
                                                                        {elData?.value}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>)}

                                        </span>

                                    </div>
                                ))
                            }

                            <div className={styles.show}>
                                <span >
                                    Show more
                                </span>
                                <Image src={downBlue} alt='' />
                            </div>
                        </div>
                        <div className={styles.rating}>
                            <div>
                                <span className={styles.no}>{el.ratingNo}</span>
                                <span className={styles.rate}>{el.ratingRate}</span>
                                <Image src={el.ratingImage} alt='' width={66} height={11} />
                            </div>
                            <button>View </button>
                        </div>
                    </article>
                ))}


            </div>
        </div>
    )
}
