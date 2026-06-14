"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/ui/icons";

const { promos, business } = siteConfig;
const promo = promos.summer;

export function SummerPromo() {
  const { t } = useLanguage();

  return (
    <Section id="summer" stacked className="overflow-hidden bg-white">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-4 h-60 w-60 rounded-full bg-accent/50 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-secondary/15 blur-3xl"
      />

      <div className="relative grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow={promo.eyebrow} title={promo.title} />
          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">
            {t(promo.body)}
          </p>
          {promo.note && business.instagram && (
            <a
              href={`https://instagram.com/${business.instagram.replace(/^@/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              <InstagramIcon className="h-5 w-5" />
              {t(promo.note)}
            </a>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-sm pb-10 pr-10 md:pb-12 md:pr-12">
            <span
              aria-hidden
              className="absolute inset-y-0 right-8 left-0 rotate-3 rounded-[2.5rem] bg-accent/40"
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

            <span className="absolute -top-3 left-2 inline-flex -rotate-6 items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-extrabold text-white shadow-lg">
              {t(promo.badge)}
            </span>

            {promo.secondaryImage && (
              <div className="absolute bottom-0 right-0 aspect-square w-2/5 rotate-6 overflow-hidden rounded-[1.75rem] border-[5px] border-white shadow-xl">
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
      </div>
    </Section>
  );
}
