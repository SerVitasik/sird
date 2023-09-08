import Image from "next/image";
import styles from "@/styles/components/Partners.module.scss"
import Container from "./ui/Container";

const Partners = () => {
    return(
       <section className={styles.Partners}>
            <div className={styles.Title}>
                <h3>Наші гловні партнери</h3>
                <Image
                    src='/partners/01.svg'
                    alt="News item"
                    width={192}
                    height={198}
                    />
            </div>
            <div className={styles.Banners}>
                <div className={styles.Items}>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/02.svg'
                        alt="News item"
                        width={192}
                        height={100}/>
                    </div>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/03.svg'
                        alt="News item"
                        width={192}
                        height={100}/>
                    </div>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/04.svg'
                        alt="News item"
                        width={192}
                        height={100}/>
                    </div>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/05.svg'
                        alt="News item"
                        width={192}
                        height={100}/>
                    </div>
                </div>
                <div className={styles.Items}>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/06.svg'
                        alt="News item"
                        width={192}
                        height={192}/>
                    </div>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/07.svg'
                        alt="News item"
                        width={192}
                        height={192}/>
                    </div>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/08.svg'
                        alt="News item"
                        width={192}
                        height={192}/>
                    </div>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/09.svg'
                        alt="News item"
                        width={192}
                        height={192}/>
                    </div>
                </div>
                <div className={styles.Items}>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/10.svg'
                        alt="News item"
                        width={192}
                        height={192}/>
                    </div>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/11.svg'
                        alt="News item"
                        width={192}
                        height={192}/>
                    </div>
                    <div className={styles.Item}>
                        <Image 
                        src='/partners/12.svg'
                        alt="News item"
                        width={413}
                        height={192}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;