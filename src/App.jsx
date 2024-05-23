import { Hero, About, Skills, Projects, Contact } from './Sections';
import Navbar from './Components/Navbar';
import Footer from './Sections/Footer';

const App = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='xl:padding-l wide:padding-r'>
        <Hero />
      </section>
      <section className='p-0'>
        <About /> 
      </section>
      <section className='p-0'>
        <Skills />
      </section>
      <section className=''>
        <Projects />
      </section>
      <section className='padding'>
        <Contact />
      </section>
      <section className=''>
        <Footer />
      </section>
    </main>
  )
}

export default App

