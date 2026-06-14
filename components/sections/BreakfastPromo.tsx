"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ClockIcon } from "@/components/ui/icons";

const { promos } = siteConfig;
const promo = promos.breakfast;

export function BreakfastPromo() {
  const { t } = useLanguage();

  return (
    <Section
      id="breakfast"
      className="overflow-hidden bg-primary text-white"
      topDivider={<WaveDivider className="fill-primary" />}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-secondary/30 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative grid items-center gap-10 md:grid-cols-2">
        <Reveal className="order-last md:order-first">
          <div className="relative mx-auto w-full max-w-sm pb-10 pl-10 md:pb-12 md:pl-12">
            <span
              aria-hidden
              className="absolute inset-x-8 inset-y-0 rotate-3 rounded-[2.5rem] bg-secondary/30"
            />
            <div className="relative aspect-[4/5] w-full -rotate-2 overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-2xl">
              <Image
                src={promo.image}
                alt={t(promo.title)}
                fill
                sizes="(max-width: 768px) 80vw, 380px"
                className="object-cover"
              />
            </div>

            {promo.secondaryImage && (
              <div className="absolute bottom-0 left-0 aspect-square w-2/5 -rotate-6 overflow-hidden rounded-[1.75rem] border-[5px] border-white shadow-xl">
                <Image
                  src={promo.secondaryImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 32vw, 150px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-extrabold text-primary shadow-sm">
            <ClockIcon className="h-4 w-4" />
            {t(promo.schedule)}
          </span>

          <div className="mt-4">
            <SectionHeading
              eyebrow={promo.eyebrow}
              title={promo.title}
              tone="onColor"
            />
          </div>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
            {t(promo.body)}
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
            {t(promo.menu).map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-semibold md:text-base">
                <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
