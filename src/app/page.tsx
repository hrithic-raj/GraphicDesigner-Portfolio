import Navbar from "@/components/Navbar";
import bg from '../assets/Muhsin1.png';
// import bg from '../assets/hj.jpg';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div>
        <img src={bg.src} alt="" />
      </div>
      <div>
        <img src={bg.src} alt="" />
      </div>
      <div>
        <img src={bg.src} alt="" />
      </div>
      <div>
        <img src={bg.src} alt="" />
      </div>
      <div>
        <img src={bg.src} alt="" />
      </div>
    </div>
  );
}
