import React from 'react'
import Devider from './Devider'

const HeroSection = () => {
    return (
        <section>
            <div className="container text-center">
                <h1 className="title_lg">Commandez votre lavage auto à domicile</h1>
                <h2 className="title_md mt-10">À Rennes et communes alentours, Clean Tonic vient nettoyer votre voiture, à votre domicile ou votre travail !</h2>
                <Devider className='my-[25px]' />
                <p className="subtitle_md">DISPO À RENNES, SAINT-GRÉGOIRE, CESSON-SÉVIGNÉ, CHANTEPIE, SAINT-JACQUES-DE-LA-LANDE ET VEZIN-LE-COQUET ET BIENTÔT CHEZ VOUS !</p>
                <p className="title_sm mt-10">Suivez les 5 étapes ci-dessous pour réserver votre lavage.</p>
            </div>
        </section>
    )
}

export default HeroSection