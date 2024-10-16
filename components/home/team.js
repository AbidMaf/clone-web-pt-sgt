'use client';

import styles from './team.module.css';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap, TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

export const TeamSection = () => {
    const teamRef = useRef([]);

    useEffect(() => {
        const load = async() => {
            if(typeof window !== undefined) {
                const ScrollMagic = (await import('scrollmagic')).default;
                ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
                const controller = new ScrollMagic.Controller();
                const teamTl = gsap.timeline();
        
                // console.log({teamRef})
                teamRef.current.length > 0 && teamRef.current.forEach((ref, index) => {
                    // console.log({ref})
                    teamTl
                        .from(`#team-list-${index}`, {
                            autoAlpha: 0,
                            duration: 1,
                            y: -100,
                            ease: 'power1.out',
                            immediateRender: false
                        })
                        .to(`#team-list-${index}`, {
                            autoAlpha: 1,
                            duration: 1,
                            y: 0,
                            ease: 'power1.out',
                            immediateRender: false
                        })
                    new ScrollMagic.Scene({
                        triggerElement: `#team_container`,
                        triggerHook: 1,
                        duration: 600,
                        reverse: true
                    })
                        .setTween(teamTl)
                        // .setClassToggle(`.member_card_team_ref`, 'active')
                        .addTo(controller)
                })
            }
        }

        load();
    })

    const teamMembers = [
        { name: 'Daryna Deriy', position: 'Chairman of the Board' },
        { name: 'Polina Snisarenko-Kulchytska', position: 'Curator of the Foundation' },
        { name: 'Bohdan Kulchytsky', position: 'Executive Manager' },
        { name: 'Mykhaylo Deriy', position: 'Operation Manager' },
        { name: 'Mykhaylo Deriy', position: 'Operation Manager' },
        { name: 'Mykhaylo Deriy', position: 'Operation Manager' },
        { name: 'Mykhaylo Deriy', position: 'Operation Manager' },
        { name: 'Mykhaylo Deriy', position: 'Operation Manager' },
    ]

    return (
        <section className={`${styles.team_container} px-48 py-32`}>
            <h2>Our team</h2>
            <p>consists of completely different people who are united by a common desire - to help</p>

            <div id='team_container' className={`${styles.team_list_container}`}>
                {teamMembers.map((member, index) => (
                    <div id={`team-list-${index}`} ref={el => teamRef.current[index] = el} key={index} className={`${styles.member_card_team} member_card_team_ref flex flex-col gap-4`}>
                        <div className={`${styles.member_content_team}`}>
                            <Image src='/images/portrait.jpeg' width={0} height={0} alt='team member' unoptimized />
                            <span className={styles.member_name}>{member.name}</span>
                            <span className={styles.member_role}>{member.position}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}