"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type ServicesOverviewProps = {
  showAll?: boolean;
};

export function ServicesOverview({ showAll = false }: ServicesOverviewProps) {
  const visibleServices = useMemo(
    () => siteContent.services.filter((service) => service.title !== "Cajones de traspaso"),
    []
  );
  const services = useMemo(
    () => (showAll ? visibleServices : visibleServices.slice(0, 3)),
    [showAll, visibleServices]
  );
  const initialSelectedServiceIndex = Math.max(
    0,
    services.findIndex((service) => service.carouselImages?.length)
  );
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(initialSelectedServiceIndex);
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [cardCarouselImageIndex, setCardCarouselImageIndex] = useState(0);
  const selectedService = services[selectedServiceIndex];
  const selectedServiceImages = selectedService?.carouselImages ?? [];
  const activeBackgroundImage = selectedServiceImages.length
    ? selectedServiceImages[backgroundImageIndex % selectedServiceImages.length]
    : undefined;
  const selectedServiceHasCarousel = selectedServiceImages.length > 1;

  useEffect(() => {
    if (!showAll) {
      return;
    }

    services.forEach((service) => {
      service.carouselImages?.forEach((src) => {
        const image = new window.Image();
        image.src = src;
      });
    });
  }, [services, showAll]);

  useEffect(() => {
    if (!showAll || !selectedServiceHasCarousel) {
      return;
    }

    const interval = window.setInterval(() => {
      setCardCarouselImageIndex((current) => current + 1);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [selectedServiceHasCarousel, showAll]);

  const selectService = (index: number) => {
    if (selectedServiceIndex === index) {
      return;
    }

    const nextServiceImages = services[index]?.carouselImages ?? [];

    setSelectedServiceIndex(index);

    if (nextServiceImages.length) {
      setBackgroundImageIndex((current) => (current + 1) % nextServiceImages.length);
    } else {
      setBackgroundImageIndex(0);
    }
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        showAll ? "border-y border-[#D6D9DC] bg-[#F4F5F7]" : "mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      )}
    >
      {showAll ? (
        <>
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-[background-image,opacity] duration-700",
              activeBackgroundImage ? "opacity-55" : "opacity-0"
            )}
            style={{ backgroundImage: activeBackgroundImage ? `url(${activeBackgroundImage})` : "none" }}
          />
          <div
            className={cn(
              "absolute inset-0 bg-[linear-gradient(90deg,rgba(244,245,247,0.88)_0%,rgba(244,245,247,0.78)_48%,rgba(244,245,247,0.52)_100%)] transition-opacity duration-700",
              activeBackgroundImage ? "opacity-100" : "opacity-0"
            )}
          />
        </>
      ) : null}
      <div className={cn("relative", showAll && "mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-6 lg:px-10")}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
            Servicios principales
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#4A4F55] sm:text-3xl">
            Capacidades para fabricación, piping y piezas especiales
          </h2>
        </div>
        {!showAll ? (
          <Link href="/servicios" className="text-sm font-semibold text-[#C81010] hover:text-[#9A0D0D]">
            Ver todos los servicios
          </Link>
        ) : null}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          showAll ? (
            <Card
              key={service.title}
              role="button"
              tabIndex={0}
              aria-pressed={selectedServiceIndex === index}
              onClick={() => selectService(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  selectService(index);
                }
              }}
              className={cn(
                "relative h-full cursor-pointer rounded-sm border-[#D6D9DC] bg-[#F4F5F7] py-0 shadow-none transition-colors before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:bg-[#C81010] hover:border-[#C81010]",
                selectedServiceIndex === index && "border-[#C81010] ring-2 ring-[#C81010]/20"
              )}
            >
              <CardHeader className="items-center px-5 pb-3 pt-6 text-center">
                <CardTitle className="text-lg font-semibold text-[#4A4F55]">{service.title}</CardTitle>
                <Badge className="mt-2 w-fit rounded-sm bg-white text-[#C81010] ring-1 ring-[#D6D9DC] hover:bg-white">
                  {service.code}
                </Badge>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <div className="relative overflow-hidden rounded-sm border border-[#D6D9DC] bg-white">
                  <div className="relative aspect-[4/3]">
                    {service.carouselImages?.length ? (
                      <>
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${service.carouselImages[0]})` }}
                        />
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-700"
                          style={{
                            backgroundImage: `url(${
                              service.carouselImages[
                                selectedServiceIndex === index
                                  ? cardCarouselImageIndex % service.carouselImages.length
                                  : 0
                              ]
                            })`,
                          }}
                        />
                        {selectedServiceIndex === index ? (
                          <div className="absolute bottom-2 left-2 right-2 flex gap-1.5">
                            {service.carouselImages.map((image, imageIndex) => (
                              <span
                                key={image}
                                className={cn(
                                  "h-1.5 flex-1 rounded-sm bg-white/35",
                                  cardCarouselImageIndex % service.carouselImages!.length ===
                                    imageIndex && "bg-[#C81010]/70"
                                )}
                              />
                            ))}
                          </div>
                        ) : null}
                      </>
                    ) : service.image ? (
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#F4F5F7] px-4 text-center text-xs font-semibold uppercase tracking-wide text-[#8C9197]">
                        Imagen pendiente
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-[#4A4F55]">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.applications.map((application) => (
                    <span key={application} className="rounded-sm border border-[#D6D9DC] bg-white px-2 py-1 text-xs font-medium text-[#4A4F55]">
                      {application}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card key={service.title} className="relative h-full rounded-sm border-[#D6D9DC] bg-white shadow-none before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#C81010]">
              <CardHeader>
                <Badge className="w-fit rounded-sm bg-[#F4F5F7] text-[#C81010] ring-1 ring-[#D6D9DC] hover:bg-[#F4F5F7]">
                  {service.code}
                </Badge>
                <CardTitle className="text-lg font-semibold text-[#4A4F55]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-[#4A4F55]">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.applications.map((application) => (
                    <span key={application} className="rounded-sm border border-[#D6D9DC] px-2 py-1 text-xs font-medium text-[#4A4F55]">
                      {application}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        ))}
      </div>
      </div>
    </section>
  );
}
