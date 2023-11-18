import React from 'react';
import Basmati from '../assets/Basmati.webp';
import IdlyRice from '../assets/IdlyRice.jpg';
import Ponni from '../assets/Ponni.jpeg';
import Seeragasamba from '../assets/Seeragasamba.jpg';
import Redrice from '../assets/Redrice.jpg';
import Sona from '../assets/Sona.jpg';
import PonniB from '../assets/PonniB.jpg';

const Rice =[
    {image:Basmati,title:"Basmati Rice", description:"Basmati is gluten-free and low in fat. In addition to containing all eight essential amino acids and folic acid, it's very low in sodium and cholesterol-free."},
    {image:IdlyRice,title:"Idly Rice", description:"Idly Rice is a variety of parboiled rice that is popular in South India, especially Tamil Nadu, and is a good choice for everyday consumption."},
    {image:Ponni,title:"Ponni Rice", description:"Ponni rice is a variety of rice developed by Tamil Nadu Agricultural University in 1986. It is widely cultivated in Tamil Nadu, a state in India, and is a hybrid variety of Taichung65 and Myang Ebos 6080/2."},
    {image:Seeragasamba,title:"Seeragasamba", description:"Seeraga samba rice is a traditional rice variety of Tamil Nadu, India. The rice is named after its resemblance to the shape of the cumin seed, and it has a rich aroma that is said to be similar to that of popcorn."},
    {image:Redrice,title:"Red Rice", description:"Red rice is a variety of rice that is colored red by its anthocyanin content. It is usually eaten unhulled or partially hulled, and has a red husk, rather than the more common brown."},
    {image:Sona,title:"Sona Masoori", description:"Sona Masoori is a medium-grain rice grown largely in the Indian states of Telangana, Andhra Pradesh and Karnataka. In Telugu, Sona Masoori rice is called Bangaru Theegalu, which means Golden Ivy."},
    {image:PonniB,title:"Ponni Boiled", description:"Ponni Boiled Rice is a variety of rice developed by Tamil Nadu Agricultural University in 1986. It is widely cultivated in Tamil Nadu, a state in India, and is a hybrid variety of Taichung65 and Myang Ebos 6080/2."}
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
    </section>
    </div>
  )
}

export default Products