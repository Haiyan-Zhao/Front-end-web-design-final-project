import "./about.css";

import React from 'react';
import Modal from './Modal';

import Mission from './images/mission.jpg';
import Background from './images/background.jpg';
import Join from './images/join.jpg';


function About() {


    return (
        <div className="main-about">
            <h2 className="main-about__title">About Us</h2>

            <div className="main-about-grid">

                <div className="main-about__card">
                    <img
                        className="card__pic-right"
                        src={Mission}
                        alt="Three kittens cuddle together; one with striking blue eyes looks on, while another playfully gazes up.">
                    </img>
                    <div className="card__text-left">
                        <h3 className="card__title">Our Mission</h3>
                        <p className="card__content">The website was established on February 10th, 2024, with the purpose of popularizing knowledge about pandas to the public, providing a more comprehensive and professional platform for people all over the world to understand the giant panda.</p>
                    </div>
                </div>

                <div className="main-about__card">
                    <img
                        className="card__pic-left"
                        src={Background}
                        alt="A joyful cat with a yellow bandana meows or yawns, looking up into the camera with wide, expressive eyes.">
                    </img>

                    <div className="card__text-right">
                        <h3 className="card__title">Establishing Background</h3>
                        <p className="card__content">Through long periods of harsh competition for survival and natural selection, many animals that lived alongside them have become extinct, but the giant panda has prevailed as a strong species, emerging as a 'living fossil' preserved to this day.</p>
                        <p className="card__content">However, due to the extensive loss and high fragmentation of their habitat, the distribution area and population numbers of giant pandas have been increasingly shrinking, and they were once listed as an endangered species.</p>
                        <p className="card__content">We established this educational website hoping to bring more attention to the giant panda and to contribute to the efforts to save them.</p>
                    </div>
                </div>

                <div className="main-about__card-last">
                    <img
                        className="card__pic-right"
                        src={Join}
                        alt="Three kittens cuddle together; one with striking blue eyes looks on, while another playfully gazes up.">
                    </img>
                    <div className="card__text-left">
                        <h3 className="card__title">Join Us to Protect Pandas</h3>
                        <p className="card__content">As the guardians of one of the most cherished species on our planet, we face the challenge of habitat loss and the complexities of conservation. But there is hope, and that hope begins with action from people like you. </p>
                        <p className="card__content">Welcome to join the protection of giant pandas, whether through donations, volunteer service, or spreading knowledge. Let's write a story of survival together, not extinction.</p>

                        <Modal />

                    </div>
                </div>

            </div>

        </div>

    );
}

export default About;