export type HeroSectionProps = {
  title: string;
  subtitle: string;
  whatsappDigits: string; // digits only, t.ex. "549351..."
  whatsappPrefill?: string;

  personName?: string;
  locationLine?: string;
  instagramHandle?: string;
}

export type SiteSectionProps = {
  services: string[];
  reassurance: string[];
}

export type ProcessStep = {
  title: string;
  body: string;
}

export type ProcessSectionProps = {
  title?: string;
  steps: ProcessStep[];
}

export type FaqItem = {
  q: string;
  a: string;
}

export type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
}

export type FooterSectionProps = {
  personName?: string
  locationLine?: string
  instagramHandle?: string
  whatsappDigits?: string
  whatsappPrefill?: string
}

