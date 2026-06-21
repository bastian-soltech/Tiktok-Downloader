"use client";
import React, { useId, useMemo, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  // Fungsi untuk memuat slim engine saat partikel diinisialisasi oleh komponen
  const particlesInit = async (engine) => {
    await loadSlim(engine);
    setInit(true);
  };

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  // Dibungkus useMemo untuk mencegah lag / infinite re-render pada Vite
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: background || "#0d47a1",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        bounce: {
          horizontal: { value: 1 },
          vertical: { value: 1 },
        },
        collisions: {
          absorb: { speed: 2 },
          bounce: {
            horizontal: { value: 1 },
            vertical: { value: 1 },
          },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        color: {
          value: particleColor || "#ffffff",
        },
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: { x: 3000, y: 3000 },
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          decay: 0,
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          outModes: {
            default: "out",
          },
          random: false,
          size: false,
          speed: {
            min: 0.1,
            max: 1,
          },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 400,
            height: 400,
          },
          value: particleDensity || 120,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 1,
          },
          animation: {
            count: 0,
            enable: true,
            speed: speed || 4,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        shape: {
          close: true,
          fill: true,
          type: "circle",
        },
        size: {
          value: {
            min: minSize || 1,
            max: maxSize || 3,
          },
        },
      },
      detectRetina: true,
    };
  }, [background, particleColor, particleDensity, speed, minSize, maxSize]);

  // Membersihkan ID generator bawaan React agar tidak error di HTML
  const cleanId = id || generatedId.replace(/:/g, "");

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      <Particles
        id={cleanId}
        className={cn("h-full w-full")}
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </motion.div>
  );
};