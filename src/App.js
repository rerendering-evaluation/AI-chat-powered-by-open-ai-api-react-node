import React from 'react';
import { Header , Nav , About , Experience, Services, Portfolio, Testimonials, Contact, Footer} from './components/index';
export const App = () => {
  return (
    <>
      <Header />
       <Nav />
      <About />
      <Experience />
      <br />
      <Portfolio />
     {/* <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App;