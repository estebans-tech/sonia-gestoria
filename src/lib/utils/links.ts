export function whatsappUrl(input: string, text?: string) {
  // e164DigitsOnly: t.ex. "5493512345678" (no +, no spaces)
  const e164DigitsOnly = input.replace(/[^\d]/g, '') // remove + space, etc
  const base = `https://wa.me/${e164DigitsOnly}`

  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
