import type { SiteConfig } from "./site.types";

export const siteConfig: SiteConfig = {
  site: {
    url: "https://iceicecream.mx",
    defaultLocale: "es",
  },
  business: {
    name: "I.C.E Ice Cream",
    legalName: "I.C.E Ice Cream",
    logoText: "I.C.E",
    logo: "/logo.jpg",
    phone: "+52 664 000 0000",
    whatsapp: "526640000000",
    email: "hola@iceicecream.mx",
    address: "Tijuana, B.C., México",
    mapUrl: "https://maps.google.com/?q=I.C.E+Ice+Cream+Tijuana",
    instagram: "ice.icecream",
    hours: {
      es: "Todos los días · 12:00 a 22:00 h",
      en: "Every day · 12:00 PM to 10:00 PM",
    },
  },
  brand: {
    headingFont: "Baloo 2",
    bodyFont: "Nunito",
  },
  sections: ["hero", "summer", "breakfast", "about", "contact"],
  hero: {
    eyebrow: {
      es: "Heladería artesanal en Tijuana",
      en: "Artisan ice cream in Tijuana",
    },
    title: {
      es: "El antojo helado que Tijuana ama",
      en: "The frozen treat Tijuana loves",
    },
    subtitle: {
      es: "Helados artesanales, malteadas y antojos para endulzar tu día. Ven, prueba y enamórate de cada sabor.",
      en: "Artisan ice cream, shakes and treats to sweeten your day. Come in, taste, and fall for every flavor.",
    },
    ctaText: {
      es: "Pide por WhatsApp",
      en: "Order on WhatsApp",
    },
    backgroundImage: "/hero-cono.webp",
    secondaryImage: "/hero-scoops.avif",
  },
  offerings: {
    kind: "services",
    title: {
      es: "Promociones",
      en: "Promotions",
    },
    items: [],
  },
  promos: {
    summer: {
      badge: {
        es: "Próximamente",
        en: "Coming soon",
      },
      eyebrow: {
        es: "Promo de temporada",
        en: "Seasonal promo",
      },
      title: {
        es: "Promo de Verano",
        en: "Summer Promo",
      },
      body: {
        es: "Se viene lo más fresco del año: sabores de temporada, malteadas heladas y antojos pensados para los días de calor en Tijuana. Estamos preparando algo muy especial para ti.",
        en: "The coolest time of the year is on its way: seasonal flavors, ice-cold shakes and treats made for Tijuana's hot days. We're cooking up something special for you.",
      },
      note: {
        es: "Síguenos en Instagram y entérate primero",
        en: "Follow us on Instagram to hear it first",
      },
      image: "/promo-verano.png",
      secondaryImage: "/promo-frappe.png",
    },
    breakfast: {
      eyebrow: {
        es: "De lunes a viernes",
        en: "Monday to Friday",
      },
      title: {
        es: "Tiempo del Desayuno",
        en: "Breakfast Time",
      },
      schedule: {
        es: "Lun a Vie · 7:00 a 14:00 h",
        en: "Mon to Fri · 7:00 AM to 2:00 PM",
      },
      body: {
        es: "Arranca tu día con nosotros. Antes del helado, una mesa servida con lo mejor del desayuno mexicano, café recién hecho y jugos naturales.",
        en: "Start your day with us. Before the ice cream, a table set with the best of Mexican breakfast, fresh-brewed coffee and natural juices.",
      },
      menu: {
        es: [
          "Café",
          "Hot cakes",
          "Waffles",
          "Chilaquiles",
          "Enchiladas",
          "Tortas",
          "Cóctel de fruta",
          "Jugo natural",
        ],
        en: [
          "Coffee",
          "Hot cakes",
          "Waffles",
          "Chilaquiles",
          "Enchiladas",
          "Tortas",
          "Fruit cup",
          "Fresh juice",
        ],
      },
      image: "/promo-desayuno.png",
      secondaryImage: "/promo-visitanos.png",
    },
  },
  about: {
    eyebrow: {
      es: "Nuestra historia",
      en: "Our story",
    },
    title: {
      es: "Hechos en Tijuana, con amor",
      en: "Made in Tijuana, with love",
    },
    body: {
      es: [
        "I.C.E nació en Tijuana con una idea simple: que cada cucharada sea un momento feliz. Preparamos nuestros helados de forma artesanal, con ingredientes frescos y sabores que te recuerdan a casa.",
        "Más que una heladería, somos el punto de encuentro de amigos, familias y antojados. Desde un buen desayuno hasta la malteada perfecta, aquí siempre hay un motivo para volver.",
      ],
      en: [
        "I.C.E was born in Tijuana with a simple idea: that every spoonful should be a happy moment. We craft our ice cream by hand, with fresh ingredients and flavors that taste like home.",
        "More than an ice cream shop, we're the meeting spot for friends, families and sweet-tooths. From a great breakfast to the perfect shake, there's always a reason to come back.",
      ],
    },
    highlights: [
      { value: "+30", label: { es: "Sabores artesanales", en: "Artisan flavors" } },
      { value: "100%", label: { es: "Hecho en el día", en: "Made fresh daily" } },
      { value: "TJ", label: { es: "Orgullo de Tijuana", en: "Tijuana proud" } },
    ],
    image: "/about-variedad.jpg",
    secondaryImage: "/about-cups.png",
  },
  contact: {
    title: {
      es: "Pasa por tu antojo",
      en: "Come for your treat",
    },
    subtitle: {
      es: "Escríbenos por WhatsApp para pedidos, eventos o lo que se te antoje.",
      en: "Message us on WhatsApp for orders, events or whatever you're craving.",
    },
    whatsappMessage: {
      es: "¡Hola I.C.E! Quiero hacer un pedido 🍦",
      en: "Hi I.C.E! I'd like to place an order 🍦",
    },
  },
  seo: {
    title: {
      es: "I.C.E Ice Cream — Heladería artesanal en Tijuana",
      en: "I.C.E Ice Cream — Artisan ice cream in Tijuana",
    },
    description: {
      es: "Helados artesanales, malteadas y desayunos en Tijuana. Promociones toda la semana. Ven, prueba y enamórate de cada sabor en I.C.E Ice Cream.",
      en: "Artisan ice cream, shakes and breakfast in Tijuana. Weekly promos. Come taste and fall in love with every flavor at I.C.E Ice Cream.",
    },
    keywords: [
      "heladería tijuana",
      "helados artesanales",
      "malteadas tijuana",
      "ice cream tijuana",
      "desayunos tijuana",
      "I.C.E Ice Cream",
    ],
  },
};
