import React, { useEffect } from 'react'

import './Landing.scss'

import gsap from "gsap";

export const Landing = () => {
  // document.addEventListener('mousemove', mouseMoveFunc);
  function mouseMoveFunc(e) {

  }

  // Function to handle mouse move
  // Get the box element
  const box = document.getElementById('box');

  // Function to handle mouse move
  function handleMouseMove(event) {
    if (typeof window !== "undefined") {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      const rotateY = (centerX - mouseX) / centerX * 5; // 45 degrees rotation max
      const rotateX = (mouseY - centerY) / centerY * 5; // 45 degrees rotation max
  
      // Convert degrees to radians
      const degToRad = (deg) => deg * (Math.PI / 180);
  
      // Convert rotation to radians
      const radY = degToRad(rotateY);
      const radX = degToRad(rotateX);
  
      // Create the 3D transform matrix
      const matrix = [
        Math.cos(radY), Math.sin(radX) * Math.sin(radY), Math.cos(radX) * Math.sin(radY), 0,
        0, Math.cos(radX), -Math.sin(radX), 0,
        -Math.sin(radY), Math.sin(radX) * Math.cos(radY), Math.cos(radX) * Math.cos(radY), 0,
        0, 0, 0, 1
      ];
  
      const depth = 200;
      const moveX = ((event.pageX) - (window.innerWidth / 2)) / depth;
      const moveY = ((event.pageY) - (window.innerHeight / 2)) / depth;
      // gsap.to(".sketches-item", {
      //   duration: 1,
      //   // x: moveX,
      //   // y: moveY,
      //   rotateY: moveX,
      //   ease: "slow",
      //   stagger: 0.008,
      //   overwrite: true
      // });
  
      // Apply 3D transform using GSAP
      const imgMoveX = ((event.pageX) - (window.innerWidth / 2)) / 50;
      gsap.to('.sketch img', {
        // transform: `matrix3d(${matrix.join(',')})`,
        translateX: imgMoveX,
        rotateY: moveX,
  
        duration: 1,
        ease: "slow",
        // stagger: 0.008,
      });
    }
  
      // Add event listener for mouse move
      document.addEventListener('mousemove', handleMouseMove);
    
      window.addEventListener('resize', calculateNewScale);
  }

  function calculateNewScale() {
    var percentageOn1 = window.innerWidth / 3275;

    const wordInners = document.querySelectorAll('.word-inner-js')
    if (wordInners.length > 0) {
      wordInners.forEach((item, index) => {
        item.style.transform = "scale(" + percentageOn1 + ")"
        if (index == 1) {
          item.style.transform = "translate(0px, 440.5px) scale(" + percentageOn1 + ")"
        }
      })
    }
  }
  calculateNewScale(); // if the user go to the page and his window is less than 1920px

  useEffect(() => {
    calculateNewScale()
    const wordItems = document.querySelectorAll('.word-item-js')

    // Create a timeline for the animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    wordItems.forEach((item) => {
      item.style.height = window.innerHeight / 3 + 'px'

      // Add animations to the timeline
      tl.to(wordItems, {
        scaleY: 1.7,
        duration: 1,
        ease: "power1.inOut",
        stagger: {
          each: 0.2, // Delay of 0.2 seconds between each item's animation
          from: "start" // Animation order: start from the beginning
        }
      }, "key1")
        .to(wordItems, {
          scaleY: 1.2,
          duration: 1,
          ease: "power1.inOut",
          stagger: {
            each: 0.2,
            from: "start"
          }
        }, "key2")
        .to(wordItems, {
          scaleY: 0.7,
          duration: 1,
          ease: "power1.inOut",
          stagger: {
            each: 0.2,
            from: "start"
          }
        }, "key3")
    })
    if (wordItems.length > 0) {
    }

    const twoWordItems = document.querySelectorAll('.two-word-item-js')

    // Create a timeline for the animation
    // const tl = gsap.timeline({ repeat: -1, yoyo: true });

    twoWordItems.forEach((item) => {
      item.style.height = window.innerHeight / 3 + 'px'

      // Add animations to the timeline
      tl.to(twoWordItems, {
        scaleY: 0.7,
        duration: 1,
        ease: "power1.inOut",
        stagger: {
          each: 0.2, // Delay of 0.2 seconds between each item's animation
          from: "start" // Animation order: start from the beginning
        }
      }, "key1")
        .to(twoWordItems, {
          scaleY: 1.2,
          duration: 1,
          ease: "power1.inOut",
          stagger: {
            each: 0.4,
            from: "start"
          }
        }, "key2")
        .to(twoWordItems, {
          scaleY: 1.7,
          duration: 1,
          ease: "power1.inOut",
          stagger: {
            each: 0.4,
            from: "start"
          }
        }, "key3")
    })
    if (twoWordItems.length > 0) {
    }

  }, [])

  return (
    <div className='landing'>
      <div className="line-type landing__lineType">
        <canvas></canvas>
      </div>

      <div className="landing-sketches">
        <div className="sketches__renderer">
          <div className="sketchesRenderer">
            <div className="sketches-item">
              <div className="sketch sketch-1" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/center-1.webp" alt="" />
              </div>
              <div className="sketch sketch-2" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/center-2.webp" alt="" />
              </div>
              <div className="sketch sketch-3" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/center-3.webp" alt="" />
              </div>
              <div className="sketch sketch-4" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/center-4.webp" alt="" />
              </div>
              <div className="sketch sketch-5" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/left-1.webp" alt="" />
              </div>
              <div className="sketch sketch-6" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/left-2.webp" alt="" />
              </div>
              <div className="sketch sketch-7" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/left-3.webp" alt="" />
              </div>
              <div className="sketch sketch-8" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/left-4.webp" alt="" />
              </div>
              <div className="sketch sketch-9" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/left-5.webp" alt="" />
              </div>
              <div className="sketch sketch-10" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/left-6.webp" alt="" />
              </div>
              <div className="sketch sketch-11" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/left-7.webp" alt="" />
              </div>
              <div className="sketch sketch-12" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/right-1.webp" alt="" />
              </div>
              <div className="sketch sketch-13" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/right-2.webp" alt="" />
              </div>
              <div className="sketch sketch-14" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/right-3.webp" alt="" />
              </div>
              <div className="sketch sketch-15" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/top-1.webp" alt="" />
              </div>
              <div className="sketch sketch-16" draggable="false">
                <img data-v-dd9174ea="" src="/images/intro/sketches/0.8x/top-2.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing__ui">
        <div className="landing__hint">
          <p className="text"> [Scroll for story] </p>
        </div>
        <div className="intro-tagline landing__tagline">
          <div className="content">
            <div className="line">How Frank Gehry and his team designed a </div>
            <div className="line">monument to music — the story of the Walt </div>
            <div className="line">Disney Concert Hall</div>
          </div>
        </div>
      </div>

      <div className="landing__pin">
        <div className="landing__titleWrapper">
          <div className="introTitle__wordWrapper">
            <div className="introTitle__word">
              <div className="inner word-inner-js">
                <div className="svgRoot">
                  <div className="item word-item-js">
                    <svg viewBox="0 0 168 677.9000244140625" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M82.9 677.9C25.7 677.9 0 652.1 0 576.3V389.7c0-3 2.5-5.5 5.5-5.5h68.3c3 0 5.5 2.5 5.5 5.5v172.8c0 17.5.7 18.5 4.4 18.5s4.4-.9 4.4-18.5v-157c0-7.2 0-12.6-2-17.2-.1-.3-.2-.5-.3-.8-2.4-7.3-11.3-14.7-32.2-32.8C11 318.6.7 299.2 0 254.9V93.3C0 32.3 33 0 85.8 0 137.9 0 168 31.4 168 82.2v170c0 3-2.5 5.5-5.5 5.5h-69c-3 0-5.5-2.5-5.5-5.5V107.1c0-15.7-.7-16.6-4.4-16.6s-4.4.9-4.4 16.6V241c0 4.6.7 9.2 1.5 12.9 2.2 6.5 11.7 14.8 41.1 40.6 35.2 30.5 46.2 49 46.2 97v182.9c0 77.7-29.4 103.5-85.1 103.5z" transform="translate(0 0)"></path></svg>
                  </div>
                  <div className="item word-item-js">
                    <svg viewBox="0 0 345.10009765625 677.9000244140625" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M351.1 677.9c-109.5 0-172.1-49.2-172.1-192.3V192.3C178.9 58.3 242.4 0 355.2 0 473 0 524.1 55.6 524.1 192.3v130.1c0 3-2.5 5.5-5.5 5.5H364.8c-3 0-5.5-2.5-5.5-5.5V192.3c0-34.6-2.5-35.5-8.2-35.5-9.1 0-9.1 2.7-9.1 35.5v287c0 32.8 1.6 35.5 9.1 35.5 6.6 0 8.2-2.7 8.2-35.5V347.4c0-3 2.5-5.5 5.5-5.5h153.8c3 0 5.5 2.5 5.5 5.5v138.2c0 136.7-65.1 192.3-173 192.3z" transform="translate(-178.9998779296875 0)"></path></svg>
                  </div>
                  <div className="item word-item-js">
                    <svg viewBox="0 0 677.5 677.9000244140625" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M870.9 677.9c-231.4 0-335.9-75.6-335.9-275.8V5.5c0-3 2.5-5.5 5.5-5.5h313.7c3 0 5.5 2.5 5.5 5.5v393.9c0 28.6 4.5 33.2 14.6 33.2 12.4 0 14.6-4.6 14.6-33.2V5.5c0-3 2.5-5.5 5.5-5.5H1207c3 0 5.5 2.5 5.5 5.5v396.7c0 69.2-14.6 123.6-42.7 164.2-57.3 80.2-160.7 111.5-298.9 111.5z" transform="translate(-535 0)"></path></svg>
                  </div>
                  <div className="item word-item-js">
                    <svg viewBox="0 0 228.2999267578125 678" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M1232.5 677.9c-3 0-5.5-2.5-5.5-5.5V5.5c0-3 2.5-5.5 5.5-5.5h139.2c3 0 5.5 2.5 5.5 5.5v477.7c0 3 2.5 5.5 5.5 5.5h67.1c3 0 5.5 2.5 5.5 5.5v178.3c0 3-2.5 5.5-5.5 5.5l-217.3-.1z" transform="translate(-1227 0)"></path></svg>
                  </div>
                  <div className="item word-item-js">
                    <svg viewBox="0 0 204.60009765625 678" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M1567 472.7c-3 0-5.5 2.5-5.5 5.5v194.3c0 3-2.5 5.5-5.5 5.5h-84.3c-3 0-5.5-2.5-5.5-5.5V5.5c0-3 2.5-5.5 5.5-5.5h103.8c66.4 0 95.3 33 95.3 84.7v291.9c0 56.5-26.2 96-94.4 96h-9.4v.1zm-3.7-386.1c-1 0-1.7.8-1.7 1.7v286.5c0 1 .8 1.7 1.7 1.7 7 0 8.7-.9 8.7-9.4V96c0-6.6-2.6-9.4-8.7-9.4z" transform="translate(-1466.199951171875 0)"></path></svg>
                  </div>
                  <div className="item word-item-js">
                    <svg viewBox="0 0 286.699951171875 678" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M1912.8 176.1c-3 0-5.5 2.5-5.5 5.5v490.9c0 3-2.4 5.5-5.5 5.5h-153.6c-3 0-5.5-2.5-5.5-5.5v-491c0-3-2.5-5.5-5.5-5.5h-50.1c-3 0-5.5-2.5-5.5-5.5V5.5c0-3 2.5-5.5 5.5-5.5h275.7c3 0 5.5 2.5 5.5 5.5v165.1c0 3-2.4 5.5-5.5 5.5h-50z" transform="translate(-1681.60009765625 0)"></path></svg>
                  </div>
                  <div className="item word-item-js">
                    <svg viewBox="0 0 100.5 678" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M1984.8 5.5c0-3 2.4-5.5 5.5-5.5h89.5c3 0 5.5 2.5 5.5 5.5v667c0 3-2.4 5.5-5.5 5.5h-89.5c-3 0-5.5-2.5-5.5-5.5V5.5z" transform="translate(-1984.800048828125 0)"></path></svg>
                  </div>
                  <div className="item word-item-js">
                    <svg viewBox="0 0 474.800048828125 678" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M2299.3 672.4c0 3-2.4 5.5-5.5 5.5h-186.6c-3 0-5.5-2.5-5.5-5.5V5.5c0-3 2.4-5.5 5.5-5.5h228.9c2.6 0 4.9 1.7 5.4 4.3 8.7 46.5 85.3 455 89.2 454.2 4-.8-45.1-316.7-46.5-325.6-.1-.3 0-.3 0-.6V5.5c0-3 2.4-5.5 5.5-5.5H2571c3 0 5.5 2.5 5.5 5.5v667c0 3-2.4 5.5-5.5 5.5h-219.6c-2.6 0-4.9-1.7-5.4-4.3-8.6-46-83.5-444.3-89.2-443.9-5.9.4 40.8 286.1 42.4 295.4.1.3 0 .4 0 .7v146.5h.1z" transform="translate(-2101.699951171875 0)"></path></svg>
                  </div>
                  <div className="item word-item-js">
                    <svg viewBox="0 0 611.5673828125 677.9000244140625" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M2950.6 568.5c-.8-6.6-13.9-6.8-15.6-.4-18.5 69.2-64.1 109.8-156.2 109.8-49.3 0-87-9-115-26.2-56-36.2-76.3-114.8-76.3-251.3V285.6C2587.4 85.9 2699.5 0 2905.3 0s296.6 82.3 293.7 263v1.8c0 3-2.4 5.5-5.5 5.5h-276.1c-3 0-5.4-2.4-5.4-5.4 0-38.9-1.9-42.5-16.4-42.5-4.8 0-8.7.9-11.6 3.6-4.8 4.5-6.8 19.9-6.8 58.8v141c0 52.4 3.9 59.7 24.2 59.7 15.2 0 23-12.5 24-35.2.1-3-2.3-5.5-5.4-5.5h-17.1c-3 0-5.5-2.5-5.5-5.5v-141c0-3 2.5-5.5 5.5-5.5h290.5c3 0 5.5 2.5 5.5 5.5v374.1c0 3-2.4 5.5-5.5 5.5H2968c-2.8 0-5.1-2.1-5.4-4.8l-12-104.6z" transform="translate(-2587.5 0)"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="introTitle__word">
              <div className="inner word-inner-js">
                <div className="svgRoot">
                  <div className="item two-word-item-js">
                    <svg viewBox="0 0 526.0999755859375 677.7999267578125" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M261.4 494.8c0-8.4-1.9-15-4.3-15s-4.3 6.6-4.3 15v163.9c0 10.4-2.5 19.1-5.5 19.1H5.5c-3 0-5.5-8.7-5.5-19.1V19.1C0 8.7 2.5 0 5.5 0h241.9c3 0 5.5 8.7 5.5 19.1V182c0 8.4 1.9 15 4.3 15s4.3-6.6 4.3-15V19.1C261.5 8.7 264 0 267 0h253.6c3 0 5.5 8.7 5.5 19.1v639.3c0 10.4-2.5 19.1-5.5 19.1H266.8c-3 0-5.5-8.7-5.5-19.1V494.8h.1z" transform="translate(0 0)"></path></svg>
                  </div>
                  <div className="item two-word-item-js">
                    <svg viewBox="0 0 235.7947998046875 677.4999389648438" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M668.3 641.4c-.5-9-2.7-15.6-5.4-15.6H639c-2.7 0-4.9 6.6-5.4 15.6l-1 20.1c-.5 9-2.7 15.6-5.4 15.6h-88.7c-3.6 0-6.2-11.8-5.3-24l49.6-638.9c.6-8.4 2.8-14.3 5.3-14.3h122.6c2.4 0 4.6 5.6 5.3 13.9l52.6 639.3c1 12.2-1.6 24.3-5.3 24.3h-88.6c-2.7 0-4.9-6.6-5.4-15.6l-1-20.4zm-25.5-164.3h16.3l-5.3-91.3-3.7-138.2-2.6 138.2-4.7 91.3z" transform="translate(-533.0206298828125 0.10004901885986328)"></path></svg>
                  </div>
                  <div className="item two-word-item-js">
                    <svg viewBox="0 0 446.60003662109375 677.3999633789062" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M979.7 492.1c-1.1 0-2 3.1-2 6.9v159.3c0 10.4-2.5 19.1-5.5 19.1H779.7c-3 0-5.5-8.7-5.5-19.1V19.1c0-10.4 2.5-19.1 5.5-19.1h236.6c46.3 0 84.4 7.6 116 19.8 62.6 27.5 88.5 86.4 88.5 193.7 0 41.3-6.1 73.3-18.8 95.8-24.4 44.1-64.1 59.4-122.1 63.9 58.5 0 94.1 9.4 114.4 36.8 19.8 29.1 26.4 79.8 26.4 166.7v81.6c0 10.4-2.4 19.1-5.4 19.1h-214c-3 0-5.4-8.7-5.4-19.1V515.6c.1-19.7-4-23.5-16.2-23.5zm-2-227.5v63.2h13.7c12.2 0 17.8-11.5 17.8-32.9 0-19.8-5.6-30.3-17.8-30.3h-13.7z" transform="translate(-774.2000122070312 0)"></path></svg>
                  </div>
                  <div className="item two-word-item-js">
                    <svg viewBox="0 0 680.39990234375 677.7999267578125" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M1459 658.3c0 10.4-2.5 19.1-5.5 19.1h-220.3c-3 0-5.5-8.7-5.5-19.1V19.1c0-10.4 2.5-19.1 5.5-19.1h309.3c2.4 0 4.5 5.2 5.2 13.2l18 193c.1 1 .2 2.5.2 3.5.3 17.7 7.8 16.7 8.3-1 0-1.3.1-2.5.2-3.5l20.4-192.7c.8-7.7 2.8-12.5 5.1-12.5h302.7c3 0 5.5 8.7 5.5 19.1v639.6c0 10.4-2.4 19.1-5.5 19.1h-221.2c-3 0-5.5-8.7-5.5-19.1V538c0-2.1.1-4.1.3-6.3l26.3-267.8c.7-7.3-2.3-11.8-3.3-4.9l-62.1 408.6c-.9 6.3-2.8 10.1-4.8 10.1H1501c-2.1 0-4-4.1-4.9-10.4l-58.8-406.6c-1-6.9-4.1-2.8-3.4 4.9l24.7 267.5c.2 1.8.3 3.8.3 5.9v119.2h.1v.1z" transform="translate(-1227.699951171875 0)"></path></svg>
                  </div>
                  <div className="item two-word-item-js">
                    <svg viewBox="0 0 420 677.7999877929688" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M2123.4 677.8c-44.8 0-82.9-8.1-113.7-25.2-62.9-34.3-94.3-109.3-94.3-244.4V278.1c0-67.6 8.7-121.1 25.4-162.4C1975.6 33.3 2039.2 0 2125.4 0c42.8 0 79.6 9.1 111.7 27.2 62.9 38 98.3 115.7 98.3 250.7V408c0 64.9-8.7 117.4-24.7 157-33.4 79.5-97 112.8-187.3 112.8zm2-216.5c7.4 0 9.4-6.4 9.4-28.9V241.1c0-22.5-2-27.2-9.4-27.2-6 0-9.4 3.7-9.4 27.9v191.3c.1 21.9 3.4 28.2 9.4 28.2z" transform="translate(-1915.39990234375 0)"></path></svg>
                  </div>
                  <div className="item two-word-item-js">
                    <svg viewBox="0 0 233.80029296875 677.4999389648438" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M2440 658.3c0 10.4-2.4 19.1-5.5 19.1h-86.3c-3 0-5.5-8.7-5.5-19.1V19.1c0-10.4 2.4-19.1 5.5-19.1h108.1c2.4 0 4.5 5.2 5.2 13.2 6.8 75.4 40.8 448.6 43.1 445.2 2.5-3.5-20.5-294.4-22.7-323.3-.1-1.8-.2-3.1-.2-4.9V19.1c0-10.4 2.4-19.1 5.5-19.1h83.8c3 0 5.5 8.7 5.5 19.1v639.3c0 10.4-2.4 19.1-5.5 19.1h-103.5c-2.4 0-4.5-5.2-5.2-13.2-6.7-74.7-39.5-440.6-43.1-434.7-3.8 6.3 18.2 264.6 20.7 292.8.2 1.8.2 3.5.2 5.2v130.9h-.1v-.2z" transform="translate(-2342.699951171875 0)"></path></svg>
                  </div>
                  <div className="item two-word-item-js">
                    <svg viewBox="0 0 609.70361328125 677.4000244140625" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" d="M2766.3 677.4c-3 0-5.5-8.7-5.5-19.1V471.5c0-5.9-.8-11.8-2.2-15.3L2595.2 34.4c-4.2-10.7-2-34.4 3.3-34.4h255.8c1.5 0 2.8 2.1 3.9 5.6l31.3 109c.9 3.1 1.5 7.3 1.6 11.8.8 29.1 3.9 141.4 5.8 141 1.9-.3 5.9-113.6 6.8-141.7.1-4.1.6-7.6 1.4-10.7l29.1-108.6c1-3.8 2.5-6.3 4-6.3h259c5.3 0 7.5 23.2 3.3 34.4L3037 456.2c-1.4 3.5-2.2 9.4-2.2 15.3v186.8c0 10.4-2.4 19.1-5.5 19.1h-263z" transform="translate(-2592.998291015625 0)"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
