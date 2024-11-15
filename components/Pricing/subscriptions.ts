export type Sub = {
  id: number;
  type: string;
  duration: {
    en: string;
    es: string;
  };
  requestsTitle: {
    en: string;
    es: string;
  };
  benefits: Array<string>;
  titleButton: {
    en: string;
    es: string;
  };
  limits: Array<{
    price: number;
    requests: number;
    position: number;
  }>;
};
export const subscriptions: Array<Sub> = [
  {
    id: 1,
    type: "Free",
    duration: {
      en: "month",
      es: "mes",
    },
    requestsTitle: {
      en: "",
      es: "",
    },
    benefits: [
      "2 projects",
      "Email support",
      "Comercial use",
      "Production use",
    ],
    titleButton: {
      en: "Start with Free",
      es: "Iniciar con Free",
    },
    limits: [
      {
        price: 0,
        requests: 5000,
        position: 20,
      },
    ],
  },
  {
    id: 2,
    type: "Pro",
    duration: {
      en: "month",
      es: "mes",
    },
    requestsTitle: {
      en: "",
      es: "",
    },
    benefits: [
      "Infinite projects",
      "Email support",
      "Priority support",
      "Comercial use",
      "Production use",
    ],
    titleButton: {
      en: "Start with Pro",
      es: "Iniciar con Pro",
    },
    limits: [
      {
        price: 10,
        requests: 25000,
        position: 20,
      },
      {
        price: 30,
        requests: 100000,
        position: 40,
      },
      {
        price: 50,
        requests: 300000,
        position: 60,
      },
      {
        price: 75,
        requests: 500000,
        position: 80,
      },
      {
        price: 90,
        requests: 1000000,
        position: 100,
      },
    ],
  },
  {
    id: 3,
    type: "Gold",
    duration: {
      en: "Custom",
      es: "Custom",
    },
    requestsTitle: {
      en: "A plan based on your specific needs",
      es: "Un plan basado en tus necesidades específicas",
    },
    benefits: [
      "Custom billing",
      "Infinite projects",
      "Email support",
      "Priority support",
      "Comercial use",
      "Production use",
    ],
    titleButton: {
      en: "Start with Gold",
      es: "Iniciar con Gold",
    },
    limits: [
      {
        price: 0,
        requests: 5000,
        position: 20,
      },
    ],
  },
];
