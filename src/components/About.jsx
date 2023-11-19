import React from 'react'

const aboutUs = [
    {image:"",headContent:"Quality Products",content:"Get only high quality and standard products from Rice Industries. Our all products are well tested and examine before delivering to our dealers."},
    {image:"",headContent:"Perfect Service",content:"We believe in providing perfect service to our clients. We follow the approach of one time promise and long time service from our end."},
    {image:"",headContent:"100% Natural",content:"All of our rice is produced with natural process only. We don't use chemicals and any other artificial products."},
    {image:"",headContent:"Environmentally friendly",content:"All of our products and manufacturing processes are 100% natural and environmentally friendly. We make an effort to deliver you high quality rice."}
]

const renderAboutCard = (card, index) => {
    return(
        <div key={index} className="bg-[#e3d474] rounded-lg shadow divide-y divide-gray-200 m-5 mr-0">
            <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-sm font-medium truncate">{card.headContent}</h3>
                    </div>
                    <p className="mt-1 text-black text-sm">{card.content}</p>
                </div>
            </div>
        </div>
        
    )
}

const About = () => {
  return (
    <div id='about'>
      <section className="about-us-area h-screen bg-white pr-32 pl-32">
        <div className="h-auto align-middle">
            <div className="grid grid-cols-2 text-black">
                <div className='flex items-center h-screen mr-2'>
                    <div className='border-r-gray-500 border-r-[1px]'>
                        <div className="pb-5">
                            <h2 className='text-2xl font-mono font-bold'>ABOUT US</h2>
                            <br/>
                            <p>We are leading in the rice export field.</p>
                        </div>
                        <p className="pb-5">We welcome you to Rice Indutries, best wholesale rice Processor, Exporter, Rice Milling &amp; Supplier </p>
                        <p className="pb-5">Rice Industries commenced its operation in India in 2008. We are dedicated to the best customer service for non basmati rice, and we hope you will help us to colour people happy.</p>
                        <p className="pb-5">We are passionate about delivering the highest quality ingredients. Our Rice has been patiently mature to preserve its delicate aromas.
                            The company's vision is to focus on a long-term business growth and our drive to innovate has set a steep bar for the food industry to follow.
                            We value every single person with a unique idea or a new vision that could contribute to the next chapter of our story.
                        </p>
                        <p className="pb-5">We have RICE dealers all over the globe. Each store is different and have its own personality, and we embrace this.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className="grid grid-cols-2">
                        {aboutUs.map(renderAboutCard)}
                    </div>
                </div>
                
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="border-line"></div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default About