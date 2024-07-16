"use client"

import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { useStore } from '@/lib/store'
import { useScroll } from '@/hooks/use-scroll'
import { Landing } from "@/components/Landing/Landing";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const lenis = useStore(({ lenis }) => lenis)

  useScroll(ScrollTrigger.update)

  useEffect(() => {
    if (lenis) {
      ScrollTrigger.refresh()
      lenis?.start()
    }
  }, [lenis])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <Landing />
    </>
  );
}
