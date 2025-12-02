import Navbar from "@/components/Navbar";
import bg from '../assets/bg.png';
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
