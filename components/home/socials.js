import styles from './socials.module.css';
import Image from 'next/image';

export const SocialsSection = () => {
    const socials = [
        { name: 'Oleksiy Tritenko', role: 'theater and film actor' },
        { name: 'Stanislav Boklan', role: "People's Artist of Ukraine" },
        { name: 'Alexander Rudinsky', role: 'theater and film actor' },
        { name: 'Oksana Zhdanova', role: 'theater and film actress' },
        { name: 'Natalka Denisenko', role: 'theater and film actress' },
        { name: 'Maksym Samchyk', role: 'theater and film actor' },
        { name: 'Kateryna Vyshneva', role: 'Honored Actress of Ukraine' },
        { name: 'Irma Vitovska', role: 'Honored Actress of Ukraine' },
    ]

    return (
        <section className={`${styles.socials_container} px-48 py-32`}>
            <h2>Socially active citizens</h2>
            <p>support us</p>
            <div className={styles.item_container_socials}>
                {socials.map((social, index) => (
                    <div key={index} className={`${styles.social_card_socials} flex flex-col gap-4`}>
                        <div className={`${styles.social_content_socials}`}>
                            <Image src='/images/portrait-1.jpeg' width={0} height={0} alt='team member' unoptimized />
                            <span className={styles.social_name}>{social.name}</span>
                            <span className={styles.social_role}>{social.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}