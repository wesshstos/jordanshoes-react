import Header from "./components/Header";
import Banner from './components/Banner'
import Card from "./components/Card";

// IMAGES
import ImgBanner from './assets/image/wallpaper.jpeg'
import shoes1 from './assets/image/1.png'
import shoes2 from './assets/image/2.png'
import shoes3 from './assets/image/3.png'
import shoes4 from './assets/image/4.png'
import shoes5 from './assets/image/5.png'
import shoes6 from './assets/image/6.png'
import shoes7 from './assets/image/7.png'
import shoes8 from './assets/image/8.png'
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full font-['Montserrat'] bg-[#f9f9f9]">
      <Header />
      <Banner
        title='A melhor loja de Air Jordans'
        subtitle='O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.'
        image={ImgBanner}
      />
      <div className="flex flex-wrap items-center justify-around content-center pt-10">
        <Card img={shoes1} />
        <Card img={shoes2} />
        <Card img={shoes3} />
        <Card img={shoes4} />
      </div>
      <div className="flex flex-wrap items-center justify-around content-center pb-10">
        <Card img={shoes5} />
        <Card img={shoes6} />
        <Card img={shoes7} />
        <Card img={shoes8} />
      </div>
      <Footer text='Todos os direitos reservados.'/>
    </div>
  )
}


