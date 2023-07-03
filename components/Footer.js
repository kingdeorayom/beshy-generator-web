
import styles from '@/styles/Footer.module.css'
import { useInter } from '@/utils/fonts'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={`${useInter.className} ${styles.footer}`}>
            <h5 className={styles.name}>
                Developed by{' '}
                <Link href='https://github.com/kingdeorayom' target='_blank'>
                    <span className={styles.link}>Serking</span>
                </Link>.
            </h5>
        </footer>
    )
}

export default Footer