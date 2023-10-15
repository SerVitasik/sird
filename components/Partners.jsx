"use client";
import Image from "next/image";
import styles from "./Partners.module.scss";
import Title from "./ui/Title";

const Partners = () => {
    return(
       <section className={styles.partners}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Title>Наші гловні партнери</Title>
                    <Image
                        src='/partners/01.svg'
                        alt="News item"
                        width={192}
                        height={198}
                        />
                </div>
                <div className={styles.banners}>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/02.svg'
                            alt="News item"
                            width={192}
                            height={100}/>
                        </div>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/03.svg'
                            alt="News item"
                            width={192}
                            height={100}/>
                        </div>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/04.svg'
                            alt="News item"
                            width={192}
                            height={100}/>
                        </div>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/05.svg'
                            alt="News item"
                            width={192}
                            height={100}/>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/06.svg'
                            alt="News item"
                            width={192}
                            height={192}/>
                        </div>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/07.svg'
                            alt="News item"
                            width={192}
                            height={192}/>
                        </div>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/08.svg'
                            alt="News item"
                            width={192}
                            height={192}/>
                        </div>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/09.svg'
                            alt="News item"
                            width={192}
                            height={192}/>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/10.svg'
                            alt="News item"
                            width={192}
                            height={192}/>
                        </div>
                        <div className={styles.item}>
                            <Image 
                            src='/partners/11.svg'
                            alt="News item"
                            width={192}
                            height={192}/>
                        </div>
                        <div className={`${styles.item} ${styles.big}`}>
                            <Image 
                            src='/partners/12.svg'
                            alt="News item"
                            width={413}
                            height={192}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;