import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const VIDEO_ONE = "/WhatsApp Video 2026-09-15 at 1.28.07 PM.mp4";
const VIDEO_TWO = "/WhatsApp Video 2026-09-15 at 1.28.01 PM.mp4";
const VIDEO_THREE = "/WhatsApp Video 2026-09-25 at 4.05.02 PM.mp4";
const VIDEO_FOUR = "/WhatsApp Video 2026-09-25 at 4.25.50 PM.mp4";

const videos = [
  { src: VIDEO_ONE, variant: "large" },
  { src: VIDEO_TWO, variant: "portrait" },
  { src: VIDEO_THREE, variant: "large" },
  { src: VIDEO_FOUR, variant: "large" },
];

export default function Transformation() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-lux">
        <Reveal>
          <SectionLabel label="Our Work" />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-serif text-forest text-5xl md:text-6xl lg:text-[4.5rem] mt-6 leading-[0.95] max-w-3xl">
            Designed to be experienced.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-4 max-w-xl text-forest/65 text-base md:text-lg leading-relaxed">
            From concept to completion, every detail is considered with intention.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {videos.map((video, index) => (
            <Reveal key={video.src} delay={0.16 + index * 0.06}>
              <div
                className={`overflow-hidden rounded-[18px] border border-forest/10 bg-ivory shadow-[0_14px_28px_rgba(23,60,50,0.05)] ${
                  video.variant === "portrait"
                    ? "p-2 lg:col-span-1"
                    : "lg:col-span-1"
                }`}
              >
                {video.variant === "portrait" ? (
                  <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[16px] bg-black">
                    <video
                      src={video.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="block aspect-[9/16] w-full object-contain"
                    />
                  </div>
                ) : (
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    className="block h-[320px] w-full object-cover md:h-[420px]"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
