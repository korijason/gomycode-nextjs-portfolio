import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Image src="/profile.jpg" alt="Profile" width={150} height={150} />
    </div>
  );
}


export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Hi, I'm Jason Kori </h1>
        <p>Welcome to my portfolio! Explore my projects and get in touch.</p>
      </main>
      <Footer />
    </div>
  );
}
