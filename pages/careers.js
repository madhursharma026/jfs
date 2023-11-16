import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Financial from './components/Careers/Financial';
import Life from './components/Careers/Life';
import Growth from './components/Careers/Growth';

export default function Careers() {
    return (
        <>
            <Header pageName='careers' />
            <Financial />
            <Life />
            <Growth />
            <Footer />
        </>
    )
}
