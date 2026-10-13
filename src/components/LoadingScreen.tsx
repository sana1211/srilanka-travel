import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';

import elephantVideo from '../assets/video/elephant-side-walk-transparent.webm';
import elephantSound from '../assets/audio/elephant-trumpet.wav';

/* =========================================================
   CHROMA KEY ELEPHANT VIDEO

   Some mobile browsers do not display WebM transparency
   correctly.

   This component:
   1. Plays the elephant video invisibly.
   2. Draws every frame into a canvas.
   3. Removes green pixels.
   4. Displays only the elephant.
========================================================= */

interface ChromaKeyElephantProps {
  flipped?: boolean;
  className?: string;
}

const ChromaKeyElephant: React.FC<
  ChromaKeyElephantProps
> = ({
  flipped = false,
  className = '',
}) => {
  const videoRef =
    useRef<HTMLVideoElement | null>(null);

  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const animationFrameRef =
    useRef<number | null>(null);

  const [ready, setReady] =
    useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const context =
      canvas.getContext('2d', {
        willReadFrequently: true,
      });

    if (!context) return;

    const setupCanvas = () => {
      /*
        Keep internal canvas resolution reasonable.

        A smaller internal resolution performs
        much better on mobile devices.
      */

      const originalWidth =
        video.videoWidth || 640;

      const originalHeight =
        video.videoHeight || 360;

      const maxWidth = 520;

      const scale = Math.min(
        1,
        maxWidth / originalWidth
      );

      canvas.width =
        Math.round(
          originalWidth * scale
        );

      canvas.height =
        Math.round(
          originalHeight * scale
        );

      setReady(true);
    };

    const renderFrame = () => {
      if (
        video.readyState >=
        HTMLMediaElement.HAVE_CURRENT_DATA
      ) {
        context.clearRect(
          0,
          0,
          canvas.width,
          canvas.height
        );

        context.drawImage(
          video,
          0,
          0,
          canvas.width,
          canvas.height
        );

        try {
          const frame =
            context.getImageData(
              0,
              0,
              canvas.width,
              canvas.height
            );

          const pixels = frame.data;

          /*
            ==================================================
            GREEN SCREEN REMOVAL
            ==================================================

            r = Red
            g = Green
            b = Blue

            Pixels where green is clearly dominant
            are made transparent.
          */

          for (
            let i = 0;
            i < pixels.length;
            i += 4
          ) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];

            /*
              Strong green background
            */

            const greenDominance =
              g - Math.max(r, b);

            const isGreen =
              g > 55 &&
              greenDominance > 15 &&
              g > r * 1.08 &&
              g > b * 1.05;

            if (isGreen) {
              /*
                Feather edges instead of
                immediately removing everything.
              */

              if (
                greenDominance > 45
              ) {
                pixels[i + 3] = 0;
              } else {
                const alpha =
                  255 -
                  Math.min(
                    255,
                    greenDominance * 5
                  );

                pixels[i + 3] =
                  Math.max(
                    0,
                    alpha
                  );
              }
            }
          }

          context.putImageData(
            frame,
            0,
            0
          );
        } catch (error) {
          /*
            If browser does not allow
            canvas processing, keep video frame.

            Since the video is local project asset,
            this normally should not happen.
          */

          console.warn(
            'Elephant chroma key error:',
            error
          );
        }
      }

      animationFrameRef.current =
        window.requestAnimationFrame(
          renderFrame
        );
    };

    video.addEventListener(
      'loadedmetadata',
      setupCanvas
    );

    video.addEventListener(
      'play',
      renderFrame
    );

    const startVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log(
          'Elephant video autoplay blocked:',
          error
        );
      }
    };

    startVideo();

    return () => {
      video.removeEventListener(
        'loadedmetadata',
        setupCanvas
      );

      video.removeEventListener(
        'play',
        renderFrame
      );

      if (
        animationFrameRef.current !==
        null
      ) {
        window.cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      video.pause();
    };
  }, []);

  return (
    <div
      className={`
        relative
        ${className}
      `}
      style={{
        transform: flipped
          ? 'scaleX(-1)'
          : undefined,
      }}
    >
      {/* Hidden source video */}

      <video
        ref={videoRef}
        src={elephantVideo}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className="
          absolute
          pointer-events-none
          opacity-0
          w-px
          h-px
        "
      />

      {/* Visible transparent canvas */}

      <canvas
        ref={canvasRef}
        className={`
          block
          w-full
          h-auto
          object-contain
          pointer-events-none
          select-none

          transition-opacity
          duration-300

          ${
            ready
              ? 'opacity-100'
              : 'opacity-0'
          }
        `}
      />
    </div>
  );
};

/* =========================================================
   LOADING SCREEN
========================================================= */

export const LoadingScreen:
  React.FC = () => {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const trumpetTimerRef =
    useRef<number | null>(null);

  const [
    soundBlocked,
    setSoundBlocked,
  ] = useState(false);

  const [
    soundPlayed,
    setSoundPlayed,
  ] = useState(false);

  const [
    audioUnlocked,
    setAudioUnlocked,
  ] = useState(false);

  /* =======================================================
     AUDIO INITIALIZATION
  ======================================================= */

  useEffect(() => {
    const audio =
      new Audio(elephantSound);

    audio.preload = 'auto';
    audio.volume = 0.95;

    audioRef.current = audio;

    /*
      Elephant animation takes around 4.3 sec.

      Trumpet starts when elephants
      reach the centre.
    */

    trumpetTimerRef.current =
      window.setTimeout(
        async () => {
          try {
            audio.currentTime = 0;

            await audio.play();

            setSoundPlayed(true);
            setSoundBlocked(false);
          } catch (error) {
            /*
              iOS / Android browsers can
              reject autoplay audio.
            */

            console.log(
              'Autoplay audio blocked:',
              error
            );

            setSoundBlocked(true);
          }
        },
        4200
      );

    return () => {
      if (
        trumpetTimerRef.current !==
        null
      ) {
        window.clearTimeout(
          trumpetTimerRef.current
        );
      }

      audio.pause();
      audio.currentTime = 0;

      audioRef.current = null;
    };
  }, []);

  /* =======================================================
     MOBILE AUDIO UNLOCK
  ======================================================= */

  useEffect(() => {
    const unlockAudio = async () => {
      const audio =
        audioRef.current;

      if (
        !audio ||
        audioUnlocked ||
        soundPlayed
      ) {
        return;
      }

      try {
        /*
          Mobile browsers usually allow audio
          after a real user interaction.

          Start audio silently, immediately stop,
          then reset it.
        */

        const currentVolume =
          audio.volume;

        audio.volume = 0;
        audio.currentTime = 0;

        await audio.play();

        audio.pause();

        audio.currentTime = 0;
        audio.volume =
          currentVolume;

        setAudioUnlocked(true);
        setSoundBlocked(false);
      } catch (error) {
        console.log(
          'Mobile audio unlock failed:',
          error
        );
      }
    };

    window.addEventListener(
      'pointerdown',
      unlockAudio,
      {
        once: true,
      }
    );

    window.addEventListener(
      'touchstart',
      unlockAudio,
      {
        once: true,
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        'pointerdown',
        unlockAudio
      );

      window.removeEventListener(
        'touchstart',
        unlockAudio
      );
    };
  }, [
    audioUnlocked,
    soundPlayed,
  ]);

  /* =======================================================
     MANUAL SOUND
  ======================================================= */

  const playElephantSound =
    async () => {
      const audio =
        audioRef.current;

      if (!audio) return;

      try {
        audio.pause();

        audio.currentTime = 0;
        audio.volume = 0.95;

        await audio.play();

        setAudioUnlocked(true);
        setSoundBlocked(false);
        setSoundPlayed(true);
      } catch (error) {
        console.log(
          'Elephant sound failed:',
          error
        );
      }
    };

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className="
        fixed
        inset-0
        z-[9999]
        min-h-[100svh]
        w-full
        overflow-hidden

        bg-[#0F2E22]
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-[#14392A]
          via-[#0F2E22]
          to-[#081710]
        "
      />

      {/* Golden Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[65vw]
          w-[65vw]

          max-h-[700px]
          max-w-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-amber-300/[0.05]

          blur-[90px]
        "
      />

      {/* ===================================================
          ELEPHANTS
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          z-10

          flex
          items-center
          justify-center

          overflow-hidden
        "
      >
        {/* ===============================================
            LEFT ELEPHANT
        =============================================== */}

        <motion.div
          initial={{
            x: '-95vw',
          }}
          animate={{
            x: '-22vw',
          }}
          transition={{
            duration: 4.25,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            absolute

            left-1/2
            top-[45%]

            -translate-x-1/2
            -translate-y-1/2

            z-10
          "
        >
          <ChromaKeyElephant
            className="
              w-[54vw]
              min-w-[185px]
              max-w-[450px]

              sm:w-[42vw]
              md:w-[35vw]
              lg:w-[31vw]
            "
          />
        </motion.div>

        {/* ===============================================
            RIGHT ELEPHANT
        =============================================== */}

        <motion.div
          initial={{
            x: '95vw',
          }}
          animate={{
            x: '22vw',
          }}
          transition={{
            duration: 4.25,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            absolute

            left-1/2
            top-[45%]

            -translate-x-1/2
            -translate-y-1/2

            z-10
          "
        >
          <ChromaKeyElephant
            flipped
            className="
              w-[54vw]
              min-w-[185px]
              max-w-[450px]

              sm:w-[42vw]
              md:w-[35vw]
              lg:w-[31vw]
            "
          />
        </motion.div>

        {/* ===============================================
            TRUMPET EFFECT
        =============================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            opacity: [
              0,
              0,
              0.55,
              0,
            ],
            scale: [
              0.4,
              0.4,
              1,
              1.7,
            ],
          }}
          transition={{
            duration: 1.6,
            delay: 4.1,
            ease: 'easeOut',
          }}
          className="
            pointer-events-none
            absolute

            left-1/2
            top-[45%]

            z-20

            h-20
            w-20

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            border
            border-amber-300/40
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            opacity: [
              0,
              0,
              0.4,
              0,
            ],
            scale: [
              0.3,
              0.3,
              1,
              2,
            ],
          }}
          transition={{
            duration: 1.9,
            delay: 4.25,
            ease: 'easeOut',
          }}
          className="
            pointer-events-none
            absolute

            left-1/2
            top-[45%]

            z-20

            h-28
            w-28

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            border
            border-amber-200/25
          "
        />
      </div>

      {/* ===================================================
          LOADING TEXT
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
        className="
          absolute

          bottom-[8%]
          left-1/2

          z-30

          w-full
          max-w-xl

          -translate-x-1/2

          px-5

          text-center

          sm:bottom-[9%]
          md:bottom-[10%]
        "
      >
        <p
          className="
            mb-2

            text-[9px]
            font-semibold

            uppercase

            tracking-[0.22em]

            text-amber-300

            sm:text-[11px]
            sm:tracking-[0.3em]
          "
        >
          Ayubowan • ආයුබෝවන් •
          ஆயுபோவன்
        </p>

        <h2
          className="
            font-display

            text-xl
            font-medium

            tracking-wide

            text-white

            sm:text-2xl
            md:text-3xl
          "
        >
          Discover Sri Lanka
        </h2>

        <p
          className="
            mx-auto
            mt-2

            max-w-sm

            text-[11px]
            font-light

            leading-5

            text-stone-300

            sm:max-w-none
            sm:text-sm
          "
        >
          Journey Through the Pearl of
          the Indian Ocean
        </p>

        {/* LOADING PROGRESS */}

        <div
          className="
            mx-auto
            mt-5

            h-[2px]
            w-28

            overflow-hidden

            rounded-full

            bg-white/10

            sm:w-36
          "
        >
          <motion.div
            initial={{
              x: '-100%',
            }}
            animate={{
              x: '200%',
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              h-full
              w-1/2

              rounded-full

              bg-amber-300
            "
          />
        </div>
      </motion.div>

      {/* ===================================================
          MOBILE SOUND FALLBACK
      =================================================== */}

      {soundBlocked && (
        <motion.button
          type="button"
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          onClick={
            playElephantSound
          }
          className="
            absolute

            left-1/2
            top-5

            z-50

            flex
            -translate-x-1/2
            items-center
            justify-center
            gap-2

            whitespace-nowrap

            rounded-full

            border
            border-amber-300/20

            bg-black/35

            px-4
            py-2.5

            text-[11px]
            font-medium

            text-white

            shadow-lg

            backdrop-blur-md

            transition-colors
            duration-200

            hover:bg-white/10

            sm:left-auto
            sm:right-6
            sm:top-6
            sm:translate-x-0
            sm:text-xs
          "
        >
          <Volume2
            className="
              h-4
              w-4

              text-amber-300
            "
          />

          Tap for Elephant Call
        </motion.button>
      )}
    </motion.div>
  );
};

export default LoadingScreen;