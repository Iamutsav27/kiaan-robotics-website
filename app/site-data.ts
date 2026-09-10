export const CONTACT = {
  phoneDisplay: "+91 83200 19151",
  phoneHref: "+918320019151",
  whatsapp: "918320019151",
  email: "kiaan.robotics@gmail.com",
  street: "18, Radhe Krishna Industrial Hub, Behind Hinglaj Mata Mandir, Kathwada",
  locality: "Ahmedabad",
  region: "Gujarat",
  postalCode: "382430",
  country: "IN",
};

export const ADDRESS_LINE = `${CONTACT.street}, ${CONTACT.locality} ${CONTACT.postalCode}`;

export const MAPS_URL =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;

export function whatsappLink(
  message = "Hello Kiaan Robotics, I would like to discuss an automation project.",
) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
];

export const SOLUTIONS = [
  {
    number: "01",
    title: "Robotic welding",
    text: "MIG, TIG and laser welding cells engineered for repeatable quality, higher throughput and safer production.",
  },
  {
    number: "02",
    title: "Machine tending & handling",
    text: "Reliable CNC, press and process-machine loading systems built around your actual cycle and floor layout.",
  },
  {
    number: "03",
    title: "Assembly & material dispensing",
    text: "Purpose-built assembly, gluing and material dispensing cells that keep production moving.",
  },
  {
    number: "04",
    title: "3D cutting & vision inspection",
    text: "Integrated 3D cutting and vision inspection applications for consistent quality and complex parts.",
  },
  {
    number: "05",
    title: "Spray painting & powder coating",
    text: "Automated spray painting and powder coating systems for repeatable, high-quality finishes.",
  },
  {
    number: "06",
    title: "SPM — Special Purpose Machine",
    text: "Custom-built automation engineered around your production process, cycle time and floor requirements.",
  },
];
