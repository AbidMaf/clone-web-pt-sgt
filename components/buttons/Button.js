import Link from 'next/link';
import styles from './Button.module.css';

export const Button = ({ children, classRef, href, borderColor="#000", style }) => {
    return (
        <div className={`${styles.button_container} ${classRef}`} style={style}>
            <Link href={href} style={{ flex: 1, alignItems: 'stretch' }}>
                <div
                    className={`${styles.button_content}`} 
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flex: 1,
                        borderColor: borderColor
                    }}
                >
                    {children}
                </div>
            </Link>
        </div>
    )
}