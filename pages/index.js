import Header from './components/Header/Header';
import CarouselSection from './components/Homepage/CarouselSection';
import ExploreSection from './components/Homepage/ExploreSection';
import AddSection from './components/Homepage/AddSection';
import Services from './components/Homepage/Services';
import Relations from './components/Homepage/Relations';
import WorkLearnGrow from './components/Homepage/WorkLearnGrow';
import Footer from './components/Footer/Footer';

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
