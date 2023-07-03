
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useInter } from '@/utils/fonts'

const Layout = ({ children }) => {

    return (
        <>
            <Header useInter={useInter} />
            <main className={`${useInter.className}`}>
                {children}
            </main>
            <Footer useInter={useInter} />
        </>
    )

}

export default Layout