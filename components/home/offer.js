'use client';

import styles from './offer.module.css';
import { Button } from '../buttons/Button';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap, TweenMax, TimelineMax, Linear } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

export const OfferSection = () => {
    const offerRef = useRef([]);

    const offerItems = ["Shelter of Victoria Bulbyna", "City of faithul hearts", "Shelter of Natalia Tymoshenko", "Shelter of Jeanne Sass", "Shelter of Victoria Bondarenko", "Sterilization center", "Zoo chance", "Save lives", "City Center for the Treatment of Animals"]

    useEffect(() => {
        const load = async() => {
            if(typeof window !== undefined) {
                const ScrollMagic = (await import('scrollmagic')).default;
                
                ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
                const controller = new ScrollMagic.Controller();
                const offerT2 = gsap.timeline();
                // TODO: Flickering di sini
                offerRef.current.length > 0 && offerRef.current.forEach((ref, index) => {
                    const offerTl = gsap.timeline().from(`#offer-list-${index}`, 0.5, {
                            autoAlpha: 0,
                            y: "-=50",
                            ease: Linear.easeNone,
                        })
                
                        new ScrollMagic.Scene({
                            triggerElement: `#offer-list-${index}`,
                            triggerHook: 0.5,
                            // offset: 150,
                            duration: 600,
                            reverse: true
                        })
                            .setTween(offerTl)
                            .addTo(controller)
                })
            }
        }

        load()
    }, [])
    
    return (
        <section className={`${styles.offer_container} px-48 py-32`}>
            <h2>We want to help</h2>
            <p>homeless packs, volunteers, guardians, overstayers, shelters and other organisations</p>
            <div id='offer_ref' className={`${styles.item_container_offer} gap-2`}>
                {offerItems.map((item, index) => (
                    <div ref={el => offerRef.current[index] = el} key={index} id={`offer-list-${index}`} className={`${styles.offer_list} offer_list_ref`}>
                        <div className={styles.offer_content}>
                            <Link href='/projects'>
                                <span className={styles.offer_text}>{item}</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            <Button borderColor='#000' href='/apply' classRef='apply-button' style={{ backgroundColor: '#ff97d0', color: '#000', alignSelf: 'stretch', minWidth: '30%', minHeight: '100%', paddingInline: '12', paddingBlock: '8', marginTop: 24 }}>
                <span style={{ textAlign: 'center', paddingLeft: 16 }}>apply for help</span>
            </Button>
        </section>
    )
}