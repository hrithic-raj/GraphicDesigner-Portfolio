import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";

export default function Main() {
  return (
    <div className="h-screen">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
    </div>
  );
}
