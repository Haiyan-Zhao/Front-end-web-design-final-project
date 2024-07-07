import "./FAQs.css";

import React from 'react';
import Accordion from "./Accordion";


function FAQs() {


    return (
        <div className="main-FAQs">
            <h2 className="main-title">Frequently Asked Questions About Pandas</h2>
            <p className="main-intro">
                The giant panda's round cheeks, big black eye patches, and chubby body are well-known to the general public. But what else do people find fascinating about these creatures? Here we've compiled the six most frequently asked questions about giant pandas, in hopes of satisfying your curiosity.
            </p>

            <div className="accordion-set">
                <Accordion id="question1" title="Q1: When was the giant panda discovered and named?">
                    <p>Father Armand David, a French missionary and naturalist, first discovered the giant panda in Sichuan's Baoxing County in March 1869, where it was known locally as the "white bear" or "flower bear". He gathered a specimen with unique black and white fur, resembling a bear yet distinct from any known animals.</p>
                    <p>The collected specimen was sent to France and analyzed by Alphonse Milne-Edwards, a scientist at the Paris Natural History Museum. Recognized as a new species, it was named "panda bear", and this finding was documented in the museum's reports of 1869.</p>
                </Accordion>

                <Accordion id="question2" title="Q2: What do giant pandas eat?">
                    <p>Giant pandas' diet is 99% bamboo, and there are more than 60 species of bamboo across 12 genera available for their consumption. In addition, wild giant pandas occasionally eat some animal carcasses or other plants.</p>
                </Accordion>

                <Accordion id="question3" title="Q3: What do giant pandas do all day?">
                    <p>Giant pandas spend half of their day eating, and the majority of the remaining time is spent sleeping. In the wild, giant pandas sleep for 2 to 4 hours between meals, and they enjoy lying flat, on their sides, prone, stretched out, or curled up in a ball. They are adept at climbing trees and enjoy frolicking.</p>
                </Accordion>

                <Accordion id="question4" title="Q4: How long is the lifespan of the giant panda?">
                    <p>The lifespan of the giant panda is approximately 18-20 years in the wild. However, in captivity, with excellent care management and medical treatment, some can live over 30 years. Adult giant pandas generally weigh between 80 to 150 kilograms.</p>

                </Accordion>

                <Accordion id="question5" title="Q5: What is the reproductive cycle of the giant panda?">
                    <p>Giant pandas reach sexual maturity between the ages of 4 and 8. Female giant pandas go into heat once a year for a brief period of just 2 to 3 days, with the mating season typically occurring between March and May each year. The gestation period ranges from 83 to 200 days, and the offspring are usually born around August.</p>
                </Accordion>

                <Accordion id="question6" title="Q6: How do giant pandas rear their young?">
                    <p>Giant pandas have a relatively low reproductive rate. One of the most remarkable aspects of giant panda breeding is the extreme immaturity of the newborns at birth, with the initial weight being just 0.1% of the mother's weight.</p>
                    <p>Newborns are pink with sparse fur, and for several weeks, the mother closely nurtures and carries them to ensure their warmth and safety. The cubs' cries are vital for communication, alerting the mother to their needs like feeding or discomfort.</p>
                </Accordion>

            </div>

        </div>

    );
}

export default FAQs;