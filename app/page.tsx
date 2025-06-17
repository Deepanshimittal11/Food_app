import Drinks from "@/components/Drinks";
import Hero from "@/components/Hero";
import LoginSignUp from "@/components/LoginSignUp";
import Contact from "@/components/Contact";
import Veg from "@/components/Veg";
import NonVeg from "@/components/NonVeg";

export default function Home() {
  return (
    <>
      <LoginSignUp />
      <Hero />
      <Veg />
      <NonVeg />
      <Drinks />
      <Contact />
    </>
  )
}