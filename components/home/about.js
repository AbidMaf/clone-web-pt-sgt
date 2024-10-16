"use client"

import styles from './about.module.css';
import { useRef, useEffect, } from 'react';
import { gsap } from 'gsap';


export const AboutSection = () => {
    useEffect(() => {
        const load = async() => {
            if(typeof window !== undefined) {
                const ScrollMagic = (await import('scrollmagic')).default;
                const controller = new ScrollMagic.Controller();
                const aboutTl = gsap.timeline();

                aboutTl
                    .from('.video_about_ref', {
                        opacity: 0,
                        duration: 1,
                        y: -50,
                        ease: 'power1.out'
                    })
                    .to('.video_about_ref', {
                        opacity: 1,
                        duration: 1,
                        y: 0,
                        ease: 'power1.out'
                    })

                new ScrollMagic.Scene({
                    triggerElement: '.video_about_ref',
                    triggerHook: 1,
                    duration: 500,
                    reverse: true
                })
                    .setTween(aboutTl)
                    .addIndicators()
                    .addTo(controller)
            }
        }

        load();
    }, [])

    return (
        <section className={`${styles.about_container} px-48 py-32`}>
            <div className={`mb-16`}>
                <h2>We are</h2>
                <p>team of like-minded people, socially active companies, media personalities, volunteers who help low-income shelters and foster carers to support homeless animals.</p>
            </div>
            <div className={`mb-16`}>
                <h2>Our Primary Goal</h2>
                <p>is to provide animals with the most necessary things - food, medicine, and urgent needs for the livelihood of shelters. We believe in our power and the power of conscious citizens who care about the environment and their health, who understand the importance of helping each other, especially our little friends. Growth begins with your care for your loved ones. Animals are one of the closest creatures to humans who remain with us throughout our lives. We all know the healing power of warmth, grace, and big loving eyes.</p>
                <blockquote className={`${styles.quote_about} mx-8 my-12 p-4`}>
                    &quot;Animals need to have friends. Just like humans.&quot;<br />
                    - ames Herriot, All Creatures Great and Small
                </blockquote>
                <p>Who else if not we should support our younger brothers, especially in difficult times? Let&apos;s be friends!</p>
            </div>
            <div className={`${styles.video_about} video_about_ref`}>
                <iframe className={`w-full h-full`} src="https://www.youtube.com/embed/5Wk1rp99B7o?si=GOvowkOgSzC263R9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
            </div>
        </section>
    )
}