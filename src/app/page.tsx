
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionNosotros from '../components/SectionNosotros';
import SectionServicios from '../components/SectionServicios';
import SectionClientes from '../components/SectionClientes';
import SectionContacto from '../components/SectionContacto';

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionNosotros />
      <SectionServicios />
      <SectionClientes />
      <SectionContacto />
      <Footer />
    </>
  );
}
