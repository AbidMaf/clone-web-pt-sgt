import Image from "next/image"
import styles from "./partners.module.css"

export const PartnersSection = () => {
    return (
        <section className={`px-48 py-32`}>
            <h2>Our partners</h2>
            <p>are take care of our fund and help us with many questions</p>
            <div className={styles.list_partners}>
                <div className={styles.partners_image}>
                    <Image src='/images/Logo-adviRES.jpeg' width={0} height={0} alt='partner' unoptimized />
                </div>
                <div className={styles.partners_image}>
                    <Image src='/images/ovid-wind-logo.png' width={0} height={0} alt='partner' unoptimized />
                </div>
                <div className={styles.partners_image}>
                    <Image src='/images/logo_tbs_industry.png' width={0} height={0} alt='partner' unoptimized />
                </div>
                <div className={styles.partners_image}>
                    <Image src='/images/logo_accurl.png' width={0} height={0} alt='partner' unoptimized />
                </div>
                <div className={styles.partners_image}>
                    <Image src='/images/logo_laudis_accountancy.png' width={0} height={0} alt='partner' unoptimized />
                </div>
                <div className={styles.partners_image}>
                    <Image src='/images/logo_kickbite.jpeg' width={0} height={0} alt='partner' unoptimized />
                </div>
            </div>
        </section>
    )
}