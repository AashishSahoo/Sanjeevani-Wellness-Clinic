// Central content file — edit copy here without touching components.

export const site = {
  clinicName: "Sanjeevani Wellness Clinic",
  doctorName: "Dr. Ananya Rao, MD",
  tagline: "Internal Medicine & Preventive Care",
  phone: "+91 98765 43210",
  telephone: "+91 20 4123 5678",
  email: "care@sanjeevaniclinic.in",
  whatsapp: "https://wa.me/919876543210",
  address: "482 Bhandarkar Road, Deccan Gymkhana, Pune, Maharashtra 411004",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8410!3d18.5203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjEiTiA3M8KwNTAnMjcuNiJF!5e0!3m2!1sen!2sin!4v1700000000000",
  directionsUrl:
    "https://maps.google.com/?q=482+Bhandarkar+Road+Deccan+Gymkhana+Pune",
};

export const stats = [
  { label: "Years of Experience", value: 18, suffix: "+" },
  { label: "Happy Patients", value: 24000, suffix: "+" },
  { label: "Treatments Offered", value: 32, suffix: "" },
  { label: "Patient Rating", value: 4.9, suffix: "/5" },
];

export const doctor = {
  name: "Dr. Ananya Rao, MD",
  title: "Founder & Lead Physician, Internal Medicine",
  portrait: "/assets/doctor/portrait-main.jpg",
  portraitAlt: "/assets/doctor/portrait-alt.png",
  bio: [
    "Dr. Ananya Rao has spent the last eighteen years building a practice where patients are treated as whole people, not appointment slots. Her approach blends rigorous internal medicine with genuine, unhurried listening.",
    "After completing her residency, she chose to open an independent clinic rather than join a large hospital network — a decision rooted in her belief that continuity of care and time with patients produce better outcomes than volume ever could.",
  ],
  qualifications: [
    "M.D. (Internal Medicine), All India Institute of Medical Sciences (AIIMS), New Delhi",
    "M.B.B.S., Grant Medical College, Mumbai",
    "Residency in Internal Medicine, King Edward Memorial (KEM) Hospital, Mumbai",
    "Fellowship in Preventive Medicine, Christian Medical College, Vellore",
  ],
  certifications: [
    "Board Certified — Medical Council of India (National Medical Commission)",
    "Certified in Advanced Cardiovascular Life Support (ACLS)",
    "Certified in Basic Life Support (BLS)",
    "Diplomate — Indian College of Physicians",
  ],
  licenses: [
    "Maharashtra Medical Council Registration #MH-48219",
    "National Medical Commission Registration #NMC-1234567",
    "National Provider Identifier (NPI) #1234567890",
  ],
  experienceYears: 18,
  awards: [
    { year: "2023", title: "Top Doctor — Pune Times Health Awards" },
    {
      year: "2021",
      title:
        "Excellence in Patient Care Award, Maharashtra Medical Association",
    },
    { year: "2019", title: "40 Under 40 Healthcare Leaders, India" },
    { year: "2016", title: "Resident Teaching Award, KEM Hospital, Mumbai" },
  ],
  specializationsShort: [
    "Internal Medicine",
    "Preventive Health Screening",
    "Chronic Disease Management",
    "Cardiometabolic Health",
  ],
  memberships: [
    "Association of Physicians of India (API)",
    "Indian Medical Association (IMA)",
    "Maharashtra Medical Council",
    "Indian College of Physicians",
  ],
  philosophy:
    "Every patient deserves enough time to be understood, a clear explanation of their options, and a plan built around their life — not a generic protocol. Prevention, honesty, and partnership guide every visit.",
  gallery: [
    "/assets/doctor/gallery-1.png",
    "/assets/doctor/gallery-2.png",
    "/assets/doctor/gallery-3.jpg",
  ],
};

export type Specialization = {
  icon: string;
  title: string;
  description: string;
};

export const specializations: Specialization[] = [
  {
    icon: "solar:heart-pulse-bold-duotone",
    title: "Cardiometabolic Health",
    description:
      "Comprehensive risk assessment and management of blood pressure, cholesterol, and metabolic syndrome.",
  },
  {
    icon: "solar:stethoscope-bold-duotone",
    title: "Internal Medicine",
    description:
      "Diagnosis and long-term management of adult illness, from acute concerns to complex conditions.",
  },
  {
    icon: "solar:shield-plus-bold-duotone",
    title: "Preventive Care",
    description:
      "Annual physicals, screenings, and early-detection programs tailored to your age and risk profile.",
  },
  {
    icon: "solar:leaf-bold-duotone",
    title: "Lifestyle Medicine",
    description:
      "Evidence-based guidance on nutrition, sleep, movement, and stress to prevent and reverse disease.",
  },
  {
    icon: "solar:test-tube-bold-duotone",
    title: "Chronic Disease Management",
    description:
      "Ongoing care plans for diabetes, hypertension, thyroid disorders, and other long-term conditions.",
  },
  {
    icon: "solar:syringe-bold-duotone",
    title: "Immunizations & Travel Health",
    description:
      "Routine and travel vaccinations, plus pre-travel health consultations for international trips.",
  },
];

export type Facility = {
  icon: string;
  title: string;
  description: string;
};

export const facilities: Facility[] = [
  {
    icon: "solar:medical-kit-bold-duotone",
    title: "Consultation Rooms",
    description:
      "Private, calm rooms designed for unhurried, one-on-one conversations.",
  },
  {
    icon: "solar:radar-2-bold-duotone",
    title: "Diagnostic Equipment",
    description:
      "In-house ECG, ultrasound, and digital imaging for faster, accurate diagnosis.",
  },
  {
    icon: "solar:flask-bold-duotone",
    title: "Laboratory Services",
    description:
      "On-site blood work and rapid testing with same-day results for most panels.",
  },
  {
    icon: "solar:health-bold-duotone",
    title: "Pharmacy",
    description:
      "Convenient in-clinic pharmacy for prescriptions filled the same visit.",
  },
  {
    icon: "solar:siren-bold-duotone",
    title: "Emergency Care",
    description:
      "Urgent-care capacity for existing patients during clinic hours.",
  },
  {
    icon: "solar:sofa-bold-duotone",
    title: "Waiting Lounge",
    description:
      "A quiet, comfortable lounge with refreshments and complimentary WiFi.",
  },
  {
    icon: "solar:wheel-bold-duotone",
    title: "Parking",
    description:
      "Free on-site parking with dedicated visitor spaces steps from the entrance.",
  },
  {
    icon: "solar:wheelchair-bold-duotone",
    title: "Accessibility",
    description:
      "Step-free access, wide corridors, and accessible restrooms throughout.",
  },
];

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "solar:clipboard-heart-bold-duotone",
    title: "Annual Physical Exams",
    description:
      "A thorough head-to-toe assessment and personalized health plan for the year ahead.",
  },
  {
    icon: "solar:chart-2-bold-duotone",
    title: "Chronic Disease Management",
    description:
      "Structured, ongoing care for diabetes, hypertension, and other long-term conditions.",
  },
  {
    icon: "solar:heart-bold-duotone",
    title: "Cardiovascular Screening",
    description:
      "ECG, lipid panels, and risk modeling to catch heart disease before symptoms appear.",
  },
  {
    icon: "solar:notes-bold-duotone",
    title: "Lab Testing & Diagnostics",
    description:
      "Same-day in-house blood work, urinalysis, and rapid diagnostic panels.",
  },
  {
    icon: "solar:syringe-bold-duotone",
    title: "Vaccinations",
    description:
      "Routine immunizations, flu shots, and travel vaccines administered on-site.",
  },
  {
    icon: "solar:apple-bold-duotone",
    title: "Nutrition & Lifestyle Coaching",
    description:
      "One-on-one coaching to build sustainable habits around food, movement, and sleep.",
  },
  {
    icon: "solar:moon-sleep-bold-duotone",
    title: "Sleep & Stress Consultation",
    description:
      "Assessment and management plans for sleep disorders and chronic stress.",
  },
  {
    icon: "solar:document-medicine-bold-duotone",
    title: "Second Opinion Consultations",
    description:
      "A thorough independent review of an existing diagnosis or treatment plan.",
  },
];

export const galleryImages = [
  {
    src: "/assets/gallery/exterior.jpg",
    alt: "Clinic exterior",
    category: "Infrastructure",
  },
  {
    src: "/assets/gallery/reception.jpg",
    alt: "Reception area",
    category: "Reception",
  },
  {
    src: "/assets/gallery/consultation-1.jpg",
    alt: "Consultation room",
    category: "Consultation Rooms",
  },
  {
    src: "/assets/gallery/consultation-2.jpg",
    alt: "Consultation room",
    category: "Consultation Rooms",
  },
  {
    src: "/assets/gallery/equipment-1.jpg",
    alt: "Diagnostic equipment",
    category: "Equipment",
  },
  {
    src: "/assets/gallery/equipment-2.jpg",
    alt: "Laboratory",
    category: "Equipment",
  },
  {
    src: "/assets/gallery/lounge.jpg",
    alt: "Waiting lounge",
    category: "Reception",
  },
  {
    src: "/assets/gallery/doctor-1.png",
    alt: "Dr. Rao with patient",
    category: "Doctor",
  },
  {
    src: "/assets/gallery/corridor.jpg",
    alt: "Clinic corridor",
    category: "Infrastructure",
  },
];

export type Testimonial = {
  name: string;
  image: string;
  rating: number;
  quote: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Meera Iyer",
    image: "/assets/testimonials/patient-1.jpg",
    rating: 5,
    quote:
      "Dr. Rao is the first doctor who has ever taken the time to actually explain what was happening with my health, not just hand me a prescription.",
    role: "Patient since 2019",
  },
  {
    name: "Rohan Deshmukh",
    image: "/assets/testimonials/patient-2.jpg",
    rating: 5,
    quote:
      "The clinic feels calm the moment you walk in. Same-day lab results meant I didn't spend a week anxious about test results.",
    role: "Patient since 2021",
  },
  {
    name: "Priya Nair",
    image: "/assets/testimonials/patient-3.jpg",
    rating: 5,
    quote:
      "I switched clinics after years of feeling rushed. Here, appointments never feel like they're on a timer.",
    role: "Patient since 2022",
  },
  {
    name: "Arjun Kulkarni",
    image: "/assets/testimonials/patient-4.jpg",
    rating: 4,
    quote:
      "Managing my diabetes finally feels collaborative instead of like homework I keep failing.",
    role: "Patient since 2018",
  },
];

export const workingHours = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 7:00 PM" },
  { day: "Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const holidayNote =
  "Closed on all national holidays. Reduced hours observed the day before major festivals — please call ahead to confirm.";

export const emergencyNote =
  "For existing patients, urgent same-day slots are held each morning. For life-threatening emergencies, call 108 or go to your nearest emergency room.";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Specializations", href: "#specializations" },
  { label: "Facilities", href: "#facilities" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { icon: "mdi:instagram", href: "#", label: "Instagram" },
  { icon: "mdi:facebook", href: "#", label: "Facebook" },
  { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
  { icon: "mdi:twitter", href: "#", label: "Twitter" },
];
