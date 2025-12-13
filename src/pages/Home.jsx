import { useRef } from 'react';
import Hero from '../components/Hero';

const Home = ({ onPageChange }) => {
  const heroRef = useRef(null);

  return <Hero ref={heroRef} onPageChange={onPageChange} />;
};

export default Home;
