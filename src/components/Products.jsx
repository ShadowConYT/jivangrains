import React from 'react';
import Basmati from '../assets/Basmati.webp';
import IdlyRice from '../assets/IdlyRice.jpg';
import Ponni from '../assets/Ponni.jpeg';
import Seeragasamba from '../assets/Seeragasamba.jpg';

const Rice =[
    {image:Basmati,title:"Basmati Rice", description:"Basmati is gluten-free and low in fat. In addition to containing all eight essential amino acids and folic acid, it's very low in sodium and cholesterol-free."}
]

const renderProucts = (card, index) => {
    return(
        <div key={index} className='flex justify-center space-x-10 '>
            <img src={card.image} alt={card.title} width={'300px'}/>
            <div className='text-white'>
                <h1 className='text-5xl font-mont font-bold uppercase'>{card.title}</h1>
                <p>{card.description}</p>
            </div>
        </div>
    )
}

const Products = () => {
  return (
    <div className='relative h-screen mt-16 products'>
        <section>
        <h1 className='p-10 text-white font-mont font-extrabold text-center uppercase text-6xl'>Our Products</h1>
        <div>
            {Rice.map(renderProucts)}
        </div>
        </section>
    </div>
  )
}

export default Products