import { useRef } from 'react';
import Hero from '../components/Hero';

const Home = () => {
  const heroRef = useRef(null);

  return <Hero ref={heroRef} />;
};

export default Home;
