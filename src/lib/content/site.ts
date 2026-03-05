import type { HeroSectionProps, ProcessSectionProps, FaqSectionProps } from '$lib/types/sections'

export const site = {
  hero: {
    title: 'TRÁMITES DEL AUTOMOTOR',
    subtitle: 'Asesoramiento completo antes de firmar',
    // TODO: use ENV variables
    whatsappDigits: '5493513407726',// without + (eg. +49)
    whatsappPrefill: 'Hola, quiero consultar por un trámite.',
    locationLine: 'Córdoba, Argentina',
  } satisfies HeroSectionProps,
  process: {
    title: 'Así funciona',
    steps: [
      { title: 'Escribime por WhatsApp', body: 'Contame qué trámite necesitás y en qué estado está.' },
      { title: 'Revisamos la documentación', body: 'Te digo exactamente qué hace falta antes de avanzar.' },
      { title: 'Te acompaño hasta finalizar', body: 'Seguimos el proceso y lo cerramos sin sorpresas.' }
    ]
  } as ProcessSectionProps,
  services: [
    'Transferencia de vehículos',
    'Inscripción de 0km',
    'Alta y baja de motor',
    'Inscripción / cancelación de prendas',
    'Gestión de turnos para verificar',
    'Venta de formularios'
  ] as string[],
  reassurance: [
    'Asesoramiento inmediato',
    'Acompañamiento en todo el proceso',
    'Evitá multas y problemas futuros'
  ] as string[],
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Qué documentación necesito?',
        a: 'Depende del trámite. Escribime por WhatsApp y te confirmo la lista exacta antes de avanzar.'
      },
      {
        q: '¿Cuánto tarda el trámite?',
        a: 'Varía según el tipo de gestión y los turnos disponibles. Te doy un estimado realista al revisar la documentación.'
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'El costo depende del trámite y la situación. Te paso el detalle antes de iniciar para evitar sorpresas.'
      },
      {
        q: '¿Trabajás con turnos para verificar?',
        a: 'Sí. Gestiono turnos y te acompaño con los pasos para que salga rápido y sin errores.'
      },
      {
        q: '¿En qué zona atendés?',
        a: 'Córdoba, Argentina. Si estás en otra zona, consultame y vemos la mejor opción.'
      }
    ]
  },
  // TODO: use ENV variables
  personName: 'Sonia Fernández',
  instagramHandle: '@gestoriadelautomotorsonia'
} as const

