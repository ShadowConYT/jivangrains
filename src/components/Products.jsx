import React from 'react';

//Rice Imports
import Basmati from '../assets/Rice/Basmati.webp';
import IdlyRice from '../assets/Rice/IdlyRice.jpg';
import Ponni from '../assets/Rice/Ponni.jpeg';
import Seeragasamba from '../assets/Rice/Seeragasamba.jpg';
import Redrice from '../assets/Rice/Redrice.jpg';
import Sona from '../assets/Rice/Sona.jpg';
import PonniB from '../assets/Rice/PonniB.jpg';

//Dhall Imports
import Toor from '../assets/Dhall/Toor.jpg';
import UradDal from '../assets/Dhall/UradDal.jpg';
import Bengal from '../assets/Dhall/Bengal.webp';

//Spices Imports
import BlackPep from '../assets/Spices/BlackPep.webp';
import PurpleGarlic from '../assets/Spices/PurpleGarlic.jpg';
import WhiteGarlic from '../assets/Spices/WhiteGarlic.jpg';
import RedChilli from '../assets/Spices/RedChilli.jpg';



const Rice =[
    {image:Basmati,title:"Basmati Rice", description:"Basmati is gluten-free and low in fat. In addition to containing all eight essential amino acids and folic acid, it's very low in sodium and cholesterol-free."},
    {image:IdlyRice,title:"Idly Rice", description:"Idly Rice is a variety of parboiled rice that is popular in South India, especially Tamil Nadu, and is a good choice for everyday consumption."},
    {image:Ponni,title:"Ponni Rice", description:"Ponni rice is a variety of rice developed by Tamil Nadu Agricultural University in 1986. It is widely cultivated in Tamil Nadu, a state in India, and is a hybrid variety of Taichung65 and Myang Ebos 6080/2."},
    {image:Seeragasamba,title:"Seeragasamba", description:"Seeraga samba rice is a traditional rice variety of Tamil Nadu, India. The rice is named after its resemblance to the shape of the cumin seed, and it has a rich aroma that is said to be similar to that of popcorn."},
    {image:Redrice,title:"Red Rice", description:"Red rice is a variety of rice that is colored red by its anthocyanin content. It is usually eaten unhulled or partially hulled, and has a red husk, rather than the more common brown."},
    {image:Sona,title:"Sona Masoori", description:"Sona Masoori is a medium-grain rice grown largely in the Indian states of Telangana, Andhra Pradesh and Karnataka. In Telugu, Sona Masoori rice is called Bangaru Theegalu, which means Golden Ivy."},
    {image:PonniB,title:"Ponni Boiled", description:"Ponni Boiled Rice is a variety of rice developed by Tamil Nadu Agricultural University in 1986. It is widely cultivated in Tamil Nadu, a state in India, and is a hybrid variety of Taichung65 and Myang Ebos 6080/2."}
]

const Dhall = [
    {image:Toor,title:"Toor Dhall", description:"Toor dal is a member of the legume family, and this meal is not only delicious, it also has a number of health benefits."},
    {image:UradDal,title:"Urad Dhall", description:"Urad dal, also known as Split Black Gram, is one of the famous lentils used in southern part of Asia, especially in Indian cuisine. Rich in protein, fat and carbohydrates, urad dal is brimming with many health benefits."},
    {image:Bengal,title:"Bengal Gram", description:"Bengal gram, closely related to the chickpea family, is a yellow lentil, rounded on one side and flat on the other. It is also known as chana dal, kamani or simply chana in Northern India."}
]

const Spices = [
    {image:BlackPep,title:"Black Pepper", description:"Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning."},
    {image:PurpleGarlic,title:"Purple Garlic", description:"Garlic is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, Welsh onion and Chinese onion."},
    {image:WhiteGarlic,title:"White Garlic", description:"Garlic is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, Welsh onion and Chinese onion."},
    {image:RedChilli,title:"Red Chilli", description:"The chili pepper, from Nahuatl chīlli, is the fruit of plants from the genus Capsicum which are members of the nightshade family, Solanaceae. Chili peppers are widely used in many cuisines as a spice to add heat to dishes."}
]

const renderProucts = (card, index) => {

    const isLastitem = index === Rice.length - 1;
    const additionalClass = isLastitem ? 'col-start-2 col-end-3 mb-10': '';

    return(
        <div key={index} className={`flex justify-center space-x-4 max-w-xl rounded-lg p-5 card ${additionalClass}`}>
            <img className='w-32' src={card.image} alt={card.title} />
            <div className='text-white'>
                <h1 className='text-xl font-mont font-bold uppercase'>{card.title}</h1>
                <p className='text-sm'>{card.description}</p>
            </div>
        </div>
    )
}

const Products = () => {
  return (
    <div className='relative pl-40 pr-40 h-screen mt-16 products'>
    <section>
        <h1 className='p-10 text-white font-mont font-extrabold text-center uppercase text-6xl'>Our Products</h1>

        <h3 className='p-10 text-white font-mont font-extrabold text-center uppercase text-6xl'>RICE</h3>
        <div className='grid grid-cols-3 gap-5 text-justify'>
            {Rice.map(renderProucts)}
        </div>

        <h3 className='p-10 text-white font-mont font-extrabold text-center uppercase text-6xl'>Dhall</h3>
        <div className='grid grid-cols-3 gap-5 text-justify'>
            {Dhall.map(renderProucts)}
        </div>

        <h3 className='p-10 text-white font-mont font-extrabold text-center uppercase text-6xl'>Spices</h3>
        <div className='grid grid-cols-3 gap-5 text-justify'>
            {Spices.map(renderProucts)}
        </div>
    </section>
    </div>
  )
}

export default Products