import React from 'react'

const Hero = () => {
    return (
        <section id="hero">
            <div>
                <h1>Macbook Pro</h1>
                <img src="/title.png" alt="Macbook Title" />
                <video src="/videos/hero.mp4" autoPlay muted playsInline />
                <button>Buy</button>
                <p>From £1,699 or £142/mo for 12 months</p>
                <p className="mt-5 text-sm">Apple Intelligence Now Available</p>
            </div>
        </section>
    )
}
export default Hero
