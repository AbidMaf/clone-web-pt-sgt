'use client';

import styles from './projects.module.css';
import { Button } from '../buttons/Button';
import { gsap, TweenMax, TimelineMax } from 'gsap';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

export const ProjectsSection = () => {
    const projectsContainer = useRef(null);
    const projectsRef = useRef(null);
    
    useLayoutEffect(() => {
        const load = async() => {
            if(typeof window !== undefined) {
                const ScrollMagic = (await import('scrollmagic')).default;
                ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
                const controller = new ScrollMagic.Controller();
                const projectsTl = gsap.timeline();
        
                projectsTl
                    .from('.projects', {
                        opacity: 0,
                        duration: 1,
                        x: -50,
                        ease: 'power1.out',
                        immediateRender: false
                    })
                    .to('.projects', {
                        opacity: 1,
                        duration: 1,
                        x: 0,
                        ease: 'power1.out',
                        immediateRender: false
                    })
        
                new ScrollMagic.Scene({
                    triggerElement: '#projects_ref',
                    triggerHook: 1,
                    offset: 100,
                    duration: 600,
                    reverse: true
                })
                    .setTween(projectsTl)
                    .addIndicators()
                    .addTo(controller)
            }
        }

        load();
    }, [])

    return (
        <section className={`${styles.projects_container} px-48 py-32`}>
            <h2>Our projects</h2>
            <p className='mb-8'>are very different in terms of priority, scale and complexity of implementation</p>
            <div ref={projectsContainer} id='projects_ref' className='flex flex-col gap-12'>
                <Button
                ref={projectsRef}
                classRef='projects'
                href='/projects' 
                borderColor='#fff' 
                style={{
                    backgroundColor: '#000',
                    color: '#fff',
                }}>
                    <div className=' p-8'>
                        <h3 className='mb-4'>Emergency Aid. War 2022.</h3>
                        <span>providing food and medicine to the shelters and animals which lost their homes and families due to the war</span>
                    </div>
                </Button>
                <Button
                ref={projectsRef}
                classRef='projects'
                href='/projects' 
                borderColor='#fff' 
                style={{
                    backgroundColor: '#31be32',
                    color: '#fff',
                }}>
                    <div className=' p-12'>
                        <h3 className='mb-4'>Non-commercial feed line</h3>
                        <span>construction of industrial production base where food for shelters will be produced on a free basis</span>
                    </div>
                </Button>
                <Button
                ref={projectsRef}
                classRef='projects'
                href='/projects' 
                borderColor='#fff' 
                style={{
                    backgroundColor: '#ff97d0',
                    color: '#fff',
                }}>
                    <div className=' p-12'>
                        <h3 className='mb-4'>Education and Control</h3>
                        <span>lectures on communication, organisation and coordination of processes, control over the use of aid</span>
                    </div>
                </Button>
            </div>
        </section>
    )
}