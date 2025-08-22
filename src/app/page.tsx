'use client';
import HeroCarousel from '../components/HeroCarousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionNosotros from '../components/SectionNosotros';
import SectionServicios from '../components/SectionServicios';
import SectionClientes from '../components/SectionClientes';
import SectionContacto from '../components/SectionContacto';

export default function Home() {
  return (
    <>
  <HeroCarousel />
  <Navbar />
  <SectionNosotros />
  <SectionServicios />
  <SectionClientes />
  <SectionContacto />
  <Footer />
    </>
  );
}
