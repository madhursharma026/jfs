import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Homepage/Services';
import Relations from './components/Homepage/Relations';
import AddSection from './components/Homepage/AddSection';
import WorkLearnGrow from './components/Homepage/WorkLearnGrow';
import ExploreSection from './components/Homepage/ExploreSection';
import CarouselSection from './components/Homepage/CarouselSection';

export default function Home() {
  return (
    <>
      <Header />
      <CarouselSection />
      <ExploreSection />
      <AddSection />
      <Services />
      <Relations />
      <WorkLearnGrow />
      <Footer />
    </>
  )
}
