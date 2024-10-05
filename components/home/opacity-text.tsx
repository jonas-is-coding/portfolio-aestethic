'use client';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "Coding is the art of creating digital solutions that solve problems and inspire innovation. From efficient algorithms to seamless user experiences, every line of code is a step towards building the future.";

const Text = () => {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const body = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `center`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    })
  }

  const splitWords = (phrase: string) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p className='text-[2.5vw] m-0 mr-[1.5vw] font-medium leading-[1.1]' key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = []
    word.split("").forEach((letter, i) => {
      letters.push(<span className='opacity-20' key={letter + "_" + i} ref={el => {if (el) refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

  return (
      <div ref={body} className="flex flex-wrap absolute left-20 top-80 z-40 pr-96">
        {splitWords(phrase)}
      </div>
  )
}

export default Text;