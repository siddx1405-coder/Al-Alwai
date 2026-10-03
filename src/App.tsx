import { useRef, useState, type ReactNode } from "react";

const phone = "+97450176768";
const whatsapp = "97450176768";

type IconName =
  | "arrow"
  | "bolt"
  | "building"
  | "call"
  | "check"
  | "droplet"
  | "hammer"
  | "mail"
  | "map"
  | "paint"
  | "play"
  | "tiles"
  | "whatsapp"
  | "wrench";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6" />,
    bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
    building: (
      <>
        <path d="M4 22V7l8-4 8 4v15" />
        <path d="M9 22v-4h6v4M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01" />
      </>
    ),
    call: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />,
    check: <path d="m20 6-11 11-5-5" />,
    droplet: <path d="M12 2.7 6.6 8.1a7.6 7.6 0 1 0 10.8 0L12 2.7Z" />,
    hammer: (
      <>
        <path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9" />
        <path d="m17.6 15.4-9-9L12 3l9 9-3.4 3.4ZM14 5l-3.5 3.5" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    paint: (
      <>
        <path d="M14 6 4 16M15 5l4 4M13 3l8 8M2 22l4-1 12-12-4-4L2 17v5Z" />
        <path d="M8 19H3" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5V7Z" />,
    tiles: (
      <>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 1 1 17 0Z" />
        <path d="M8.6 8.2c.2 3.4 2.1 5.4 5.3 6.4l1.2-1.5" />
      </>
    ),
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5l-8.6 8.6a2.1 2.1 0 0 0 3 3l8.6-8.6a4 4 0 0 0 5-5L18 10l-2.4-2.4 2.3-2.3a4 4 0 0 0-3.2 1Z" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

const services: { title: string; description: string; icon: IconName; number: string }[] = [
  { title: "دهانات", description: "تشطيبات داخلية وخارجية بأعلى معايير الدقة والجودة", icon: "paint", number: "01" },
  { title: "كهرباء", description: "تمديدات وصيانة كهربائية آمنة للمنازل والمنشآت", icon: "bolt", number: "02" },
  { title: "سباكة", description: "حلول سباكة متكاملة وصيانة سريعة وموثوقة", icon: "wrench", number: "03" },
  { title: "تركيب بلاط", description: "تركيب احترافي للسيراميك والرخام والبورسلان", icon: "tiles", number: "04" },
  { title: "عزل مائي", description: "حماية الأسطح والخزانات بأفضل مواد العزل الحديثة", icon: "droplet", number: "05" },
  { title: "تعديل الجدران والحدادة", description: "إزالة وتعديل الجدران وتنفيذ جميع أعمال الحديد", icon: "hammer", number: "06" },
];

const photos = [
  ["/media/project-01.png", "مقر العاوي للوساطة العقارية"],
  ["/media/project-02.jpg", "صيانة وتمديدات كهربائية"],
  ["/media/project-03.jpg", "أعمال كهرباء داخلية"],
  ["/media/project-04.jpg", "أعمال الحدادة وتركيب الهياكل"],
  ["/media/project-05.jpg", "تجهيز وترميم الأسطح"],
  ["/media/project-06.jpg", "نماذج البلاط والتشطيبات"],
  ["/media/project-07.jpg", "خيارات البلاط الحديثة"],
  ["/media/project-08.jpg", "تنفيذ العزل المائي للأسطح"],
  ["/media/project-09.jpg", "تركيب وصيانة مضخات المياه"],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className="group flex items-center gap-3" href="#home" aria-label="العاوي للوساطة العقارية - الرئيسية">
      <span className="relative grid size-11 place-items-center overflow-hidden rounded-xl bg-teal text-cream shadow-sm">
        <Icon name="building" className="size-6" />
        <span className="absolute bottom-0 h-0.5 w-full bg-gold" />
      </span>
      <span>
        <strong className={`block text-[15px] font-extrabold leading-tight ${light ? "text-white" : "text-charcoal"}`}>
          العاوي للوساطة العقارية
        </strong>
        <span className={`mt-1 block text-[8px] font-bold tracking-[0.19em] ${light ? "text-white/55" : "text-muted"}`} dir="ltr">
          ALAWI REAL ESTATE
        </span>
      </span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-teal">
        <span className="h-px w-8 bg-teal" />
        {eyebrow}
        <span className="h-px w-8 bg-teal" />
      </div>
      <h2 className="text-3xl font-extrabold leading-tight text-charcoal md:text-5xl">{title}</h2>
      <p className="mt-4 leading-8 text-muted">{description}</p>
    </div>
  );
}

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const playProjectVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setVideoPlaying(true);
      setVideoError(false);
    } catch {
      setVideoError(true);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen overflow-x-hidden bg-cream text-charcoal">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/5 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-2 rounded-full border border-teal/15 bg-teal/5 px-3 py-2 text-center xl:flex">
            <span className="text-[11px] font-bold text-charcoal/80">سجل تجاري رقم</span>
            <span className="text-[12px] font-black text-teal" dir="ltr">13278</span>
          </div>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="التنقل الرئيسي">
            {[
              ["الرئيسية", "#home"],
              ["خدماتنا", "#services"],
              ["معرض الأعمال", "#portfolio"],
              ["اتصل بنا", "#contact"],
            ].map(([label, href], index) => (
              <a className={`nav-link ${index === 0 ? "active" : ""}`} href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a className="hidden items-center gap-2 rounded-xl border border-charcoal/10 px-4 py-3 text-sm font-bold transition hover:border-teal hover:text-teal sm:flex" href={`tel:${phone}`}>
              <Icon name="call" className="size-4" />
              اتصل الآن
            </a>
            <a className="flex items-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-white shadow-lg shadow-whatsapp/15 transition hover:-translate-y-0.5" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" className="size-4" />
              واتساب
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative min-h-[850px] pt-20 lg:min-h-screen">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute -right-40 top-28 size-96 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-teal/15 bg-white/70 px-4 py-2 text-sm font-bold text-teal shadow-sm">
                <span className="grid size-6 place-items-center rounded-full bg-teal text-white"><Icon name="check" className="size-3.5" /></span>
                خبرة محلية وحلول متكاملة في قطر
              </div>
              <h1 className="text-4xl font-black leading-[1.35] tracking-tight sm:text-5xl lg:text-7xl">
                خدمات عقارية ومقاولات
                <span className="relative mt-1 block text-teal">
                  متكاملة في قطر
                  <svg className="absolute -bottom-3 right-0 h-3 w-60 text-gold/70" viewBox="0 0 240 12" fill="none">
                    <path d="M2 9C59 2 150 1 238 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-9 max-w-xl text-lg leading-9 text-muted lg:text-xl">
                عقارات، سباكة، كهرباء، عزل مائي، بلاط، وأعمال الحديد والتهديم — ننفذ مشروعك باحتراف من الفكرة حتى التسليم.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="group flex items-center gap-3 rounded-2xl bg-charcoal px-6 py-4 font-bold text-white shadow-xl shadow-charcoal/15 transition hover:-translate-y-1 hover:bg-teal" href={`tel:${phone}`}>
                  <span className="grid size-10 place-items-center rounded-xl bg-white/10"><Icon name="call" /></span>
                  <span><small className="block text-xs font-medium text-white/55">تحدث معنا الآن</small><span dir="ltr">+974 5017 6768</span></span>
                </a>
                <a className="group flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white px-6 py-4 font-bold shadow-sm transition hover:-translate-y-1 hover:border-whatsapp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                  <span className="grid size-10 place-items-center rounded-xl bg-whatsapp/10 text-whatsapp"><Icon name="whatsapp" /></span>
                  راسلنا عبر واتساب
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 border-t border-charcoal/10 pt-6">
                <div><strong className="text-2xl font-black text-charcoal">+10</strong><span className="mr-2 text-sm text-muted">خدمات متخصصة</span></div>
                <div className="h-8 w-px bg-charcoal/10" />
                <div><strong className="text-2xl font-black text-charcoal">قطر</strong><span className="mr-2 text-sm text-muted">تغطية شاملة</span></div>
              </div>
            </div>

            <div className="relative mx-auto h-[500px] w-full max-w-2xl lg:h-[650px]">
              <div className="absolute left-0 top-6 h-[88%] w-[80%] overflow-hidden rounded-[2rem] shadow-2xl shadow-charcoal/15">
                <img className="h-full w-full object-cover" src={photos[0][0]} alt="مقر العاوي للوساطة العقارية" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 text-white">
                  <span className="mb-2 block text-xs font-bold text-white/65">مشاريع مختارة</span>
                  <strong className="text-xl">جودة تظهر في كل تفصيل</strong>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 h-[42%] w-[47%] overflow-hidden rounded-[1.7rem] border-8 border-cream shadow-xl">
                <img className="h-full w-full object-cover" src={photos[7][0]} alt="أعمال العزل المائي" />
              </div>
              <div className="absolute right-1 top-10 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur md:right-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-teal/10 text-teal"><Icon name="building" /></span>
                  <div><strong className="block text-sm">حلول موثوقة</strong><span className="text-xs text-muted">للعقار والمقاولات</span></div>
                </div>
              </div>
              <div className="absolute left-[-2%] top-[42%] grid size-20 place-items-center rounded-full border-[10px] border-cream bg-gold text-white shadow-xl">
                <Icon name="check" className="size-7" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTitle eyebrow="خدماتنا" title="كل ما يحتاجه مشروعك تحت سقف واحد" description="فريق متخصص يقدم حلولاً متكاملة للمنازل والمباني التجارية بجودة موثوقة وتنفيذ دقيق." />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article className="service-card group relative overflow-hidden rounded-3xl border border-charcoal/8 bg-cream p-7 transition duration-300 hover:-translate-y-2 hover:border-teal/30 hover:bg-white hover:shadow-2xl hover:shadow-charcoal/8" key={service.title}>
                  <span className="absolute left-6 top-5 text-5xl font-black text-charcoal/[0.035] transition group-hover:text-teal/5">{service.number}</span>
                  <div className="mb-8 grid size-14 place-items-center rounded-2xl bg-white text-teal shadow-sm transition group-hover:bg-teal group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal/20">
                    <Icon name={service.icon} className="size-7" />
                  </div>
                  <h3 className="text-xl font-extrabold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{service.description}</p>
                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-teal opacity-80">
                    اطلب الخدمة <Icon name="arrow" className="size-4 rotate-180 transition group-hover:-translate-x-1" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTitle eyebrow="معرض الأعمال" title="أعمال تتحدث عن مستوى الجودة" description="لقطات مختارة من أعمالنا في المقاولات والتشطيبات والعقارات، حيث نهتم بأدق التفاصيل." />
            <div className="gallery-grid">
              {photos.map(([src, alt], index) => (
                <figure className={`gallery-item group ${index === 0 || index === 5 ? "featured" : ""}`} key={src}>
                  <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={src} alt={alt} loading={index > 3 ? "lazy" : "eager"} />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-charcoal/80 to-transparent p-5 pt-12 text-sm font-bold text-white transition duration-300 group-hover:translate-y-0">
                    {alt}
                  </figcaption>
                </figure>
              ))}
              <div className="video-card relative col-span-full grid overflow-hidden rounded-3xl bg-charcoal text-white lg:grid-cols-[1fr_0.72fr]">
                <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
                  <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-teal text-white">
                    <Icon name="play" className="size-6 fill-current" />
                  </span>
                  <span className="text-sm font-bold text-teal-light">فيديو من موقع العمل</span>
                  <h3 className="mt-3 max-w-lg text-3xl font-black leading-tight md:text-4xl">
                    تنفيذ الهياكل وأعمال الحدادة باحتراف
                  </h3>
                  <p className="mt-5 max-w-xl leading-8 text-white/55">
                    شاهد جانباً من مراحل التنفيذ الفعلية بواسطة فريقنا، بدءاً من التجهيز وحتى تركيب الهيكل المعدني.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {["تنفيذ ميداني", "فريق متخصص", "دقة في القياس"].map((item) => (
                      <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/70" key={item}>
                        <Icon name="check" className="size-3.5 text-teal-light" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative flex items-center justify-center bg-black/30 p-4 md:p-7 lg:p-10">
                  <div className="relative w-full max-w-[620px] rounded-2xl border border-white/10 bg-black shadow-2xl">
                    <video
                      ref={videoRef}
                      className="block h-auto w-full rounded-2xl bg-black"
                      controls
                      playsInline
                      preload="metadata"
                      poster="/media/project-04.jpg"
                      aria-label="فيديو تنفيذ أعمال الحدادة والهياكل المعدنية"
                      onPlay={() => {
                        setVideoPlaying(true);
                        setVideoError(false);
                      }}
                      onPause={() => setVideoPlaying(false)}
                      onEnded={() => setVideoPlaying(false)}
                      onError={() => setVideoError(true)}
                    >
                      <source src="/media/project-video.mp4" type="video/mp4" />
                      متصفحك لا يدعم تشغيل الفيديو.
                    </video>
                    {!videoPlaying && !videoError && (
                      <button
                        className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-4 bg-black/25 text-white transition hover:bg-black/35"
                        type="button"
                        onClick={playProjectVideo}
                        aria-label="تشغيل فيديو المشروع"
                      >
                        <span className="grid size-20 place-items-center rounded-full border border-white/40 bg-teal shadow-2xl transition hover:scale-105">
                          <Icon name="play" className="mr-1 size-8 fill-current" />
                        </span>
                        <span className="rounded-full bg-black/50 px-4 py-2 text-sm font-bold backdrop-blur">اضغط لتشغيل الفيديو</span>
                      </button>
                    )}
                    {videoError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/95 p-6 text-center">
                        <strong className="text-lg">تعذر التشغيل داخل المعاينة</strong>
                        <span className="mt-2 text-sm leading-6 text-white/55">يمكنك فتح الفيديو مباشرة في نافذة مستقلة.</span>
                        <a
                          className="mt-5 flex items-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-bold text-white"
                          href="/media/project-video.mp4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="play" className="size-4 fill-current" />
                          فتح الفيديو
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-charcoal text-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="px-5 py-20 lg:px-8 lg:py-28">
              <span className="text-sm font-bold text-teal-light">ابدأ مشروعك معنا</span>
              <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight md:text-5xl">هل لديك مشروع؟ دعنا نحوله إلى واقع.</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/55">تواصل معنا اليوم للحصول على استشارة ومناقشة احتياجات مشروعك العقاري أو الإنشائي.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="flex items-center gap-3 rounded-2xl bg-teal px-6 py-4 font-bold transition hover:bg-teal-light" href={`tel:${phone}`}>
                  <Icon name="call" /> اتصل الآن <span dir="ltr">+974 5017 6768</span>
                </a>
                <a className="flex items-center gap-3 rounded-2xl bg-whatsapp px-6 py-4 font-bold transition hover:brightness-110" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" /> واتساب
                </a>
              </div>
            </div>
            <div className="relative min-h-96 overflow-hidden bg-teal-dark p-8 lg:p-12">
              <div className="absolute inset-0 contact-pattern opacity-20" />
              <div className="relative flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur md:p-10">
                <div className="mb-8 flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-teal text-white"><Icon name="map" /></span>
                  <div><span className="text-sm text-white/45">موقعنا</span><strong className="mt-1 block text-lg">شارع العزيزية، الدوحة، الريان</strong><p className="mt-2 text-sm text-white/55" dir="ltr">Zone 55, Street 185, Building 82</p></div>
                </div>
                <div className="mb-8 flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-teal text-white"><Icon name="mail" /></span>
                  <div><span className="text-sm text-white/45">البريد الإلكتروني</span><a className="mt-1 block font-bold hover:text-teal-light" dir="ltr" href="mailto:jahangirmizi5017@gmail.com">jahangirmizi5017@gmail.com</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-teal text-white"><Icon name="call" /></span>
                  <div><span className="text-sm text-white/45">رقم التواصل</span><a className="mt-1 block text-lg font-bold hover:text-teal-light" dir="ltr" href={`tel:${phone}`}>+974 5017 6768</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal-deep text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-b border-white/10 px-5 py-10 text-center md:flex-row md:text-right lg:px-8">
          <Logo light />
          <div className="flex gap-6 text-sm font-bold text-white/65">
            <a className="hover:text-teal-light" href="#services">خدماتنا</a>
            <a className="hover:text-teal-light" href="#portfolio">أعمالنا</a>
            <a className="hover:text-teal-light" href="#contact">تواصل معنا</a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-white/35 lg:px-8">
          <p>© 2025 العاوي للوساطة العقارية. جميع الحقوق محفوظة.</p>
          <p className="mt-2 font-medium text-white/55">
            Developer Credits: Made by <span className="font-bold text-teal-light">@Xenosys Qatar</span>, Xenosysweb.com, +974 70643918
          </p>
        </div>
      </footer>
    </div>
  );
}
