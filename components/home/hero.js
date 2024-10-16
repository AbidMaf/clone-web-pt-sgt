'use client';

import styles from './hero.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

export const HeroSection = () => {
    useLayoutEffect(() => {
        const load = async() => {
            if(typeof window !== undefined) {
                const ScrollMagic = (await import('scrollmagic')).default;
                const controller = new ScrollMagic.Controller();
                const heroTl = gsap.timeline();

                heroTl
                    .from('.logo_wrapper_ref', {
                        opacity: 0,
                        duration: 0.5,
                        x: "-=15",
                        ease: 'power1.out'
                    })
                    .to('.logo_wrapper_ref', {
                        opacity: 1,
                        duration: 0.5,
                        x: 0,
                        ease: 'power1.out'
                    })
                    .from('.heading_ref', {
                        opacity: 0,
                        duration: 1,
                        x: "+=15",
                        ease: 'power1.out'
                    })
                    .to('.heading_ref', {
                        opacity: 1,
                        duration: 1,
                        x: 0,
                        ease: 'power1.out'
                    })
                    .from('.desc_about_hero_ref', {
                        opacity: 0,
                        duration: 1,
                        y: "+=15",
                        ease: 'power1.out'
                    })
                    .to('.desc_about_hero_ref', {
                        opacity: 1,
                        duration: 1,
                        y: 0,
                        ease: 'power1.out'
                    })

                new ScrollMagic.Scene({
                    triggerElement: '#hero-container',
                    triggerHook: 0,
                    offset: -200,
                    duration: 600,
                    reverse: true
                })
                    .setTween(heroTl)
                    .addTo(controller)
            }
        }

        load();
    }, [])

    return (
        <section id='hero-container' className={`${styles.main} main_ref mx-auto grid`}>
            <div className='container mx-auto p-0 sm:p-20'>
                <div className={`${styles.logo_wrapper} logo_wrapper_ref`}>
                    <div className={`mr-12`}>
                        <Image 
                            src='/images/isa-logo-cat-clean.svg'
                            alt='logo'
                            width={200}
                            height={200}
                        />
                    </div>
                    <h1 className={`${styles.text} heading_ref`}>
                        Innovative <br />
                        Solutions <br />
                        for <br />
                        Animals
                    </h1>
                </div>
                <div className={`${styles.text} ${styles.desc_about_hero} desc_about_hero_ref mt-4`}>charity organization</div>
            </div>
        </section>
    )
}