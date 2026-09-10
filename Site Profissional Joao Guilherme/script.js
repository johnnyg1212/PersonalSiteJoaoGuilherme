/* ============================================================
   João Guilherme Fernandes Frota — personal site
   Bilingual (PT / EN) with persistent language toggle
   ============================================================ */

// English overrides. Any key NOT present here keeps the Portuguese
// text already written in index.html.
const EN = {
  meta_desc:
    "João Guilherme Fernandes Frota — Software, data, cloud and AI developer. Information Systems student at Unicamp.",

  nav_about: "About",
  nav_experience: "Experience",
  nav_projects: "Projects",
  nav_skills: "Skills",
  nav_contact: "Contact",

  hero_kicker: "// Information Systems · Unicamp",
  hero_tagline:
    "Software development, data, cloud computing and artificial intelligence — building scalable solutions that bring together technology and market intelligence.",
  hero_cta_primary: "Let's talk",
  hero_cta_secondary: "See my track record",
  hero_meta_loc: "📍 Limeira, SP — Brazil",
  hero_meta_lang: "🌐 Portuguese (native) · English (C1)",
  hero_meta_open: "🟢 Open to partnerships and opportunities",

  about_title: "About",
  about_p1:
    "I'm an Information Systems undergraduate at the University of Campinas (Unicamp), with experience in data, AI, cloud computing and full-stack software development in production environments.",
  about_p2:
    "I combine a business and IT perspective with a focus on operational process optimization and strategic planning. I enjoy joining multidisciplinary teams and delivering high-value results that unite technology and market intelligence.",
  about_h1: "student communities and organizations led or co-founded",
  about_h2: "cloud focus, with official certifications",
  about_h3: "expected graduation from the bachelor's degree",

  exp_title: "Experience",
  exp1_role: "Community Leader",
  exp1_desc:
    "Student group promoting knowledge of cloud computing, AI and Amazon Web Services (AWS) at Unicamp. I lead the community's organization, the promotion of courses and certifications, and the running of university events.",
  exp2_role: "Cofounder",
  exp2_org: "Google Cloud Study Group — Unicamp",
  exp2_desc:
    "Cofounded a group dedicated to training the university community in cloud computing and tools within the Google Cloud ecosystem, with theoretical and hands-on technical training and official certification.",
  exp3_role: "Founder · Community Leader",
  exp3_org: "Unicamp Language Community",
  exp3_desc:
    "Founded a language-learning community for Unicamp members, promoting professional development, networking and interpersonal skills. I lead the community and a dedicated internal team, with monetization initiatives, event organization and partnership development.",
  exp4_role: "Instructor and Teaching Assistant",
  exp4_org: "Community Outreach Project — Semeia Code",
  exp4_desc:
    "Teaching Python to high school students in public schools.",
  exp5_role: "Finance",
  exp5_org: "Computing Student Association (CDI) — Unicamp",
  exp5_desc:
    "The political and academic association for IT courses at Unicamp's School of Technology (FT — Unicamp). I contribute to the organization's internal financial health and to product development and sales.",
  exp6_role: "Marketing · Acceleration Squad",
  exp6_org: "Startup League (LIUP) — Unicamp",
  exp6_desc:
    "A group focused on entrepreneurship and startups, business idea modeling, and developing communication and sales skills. I helped organize StartLab, Unicamp's entrepreneurship event, working on marketing and speaker recruitment — including an iFood cofounder and Sebrae for Startups.",

  proj_title: "Projects",
  proj1_name: "Power BI — Box Office Analysis Using Market Data",
  proj1_role: "Project lead and sole contributor",
  proj1_desc:
    "A business intelligence project built to solve a case study from the British School of Creative Arts and Technology (EBAC), using relational datasets on films and box office revenue to identify the factors that most influence a release's success.",

  skills_title: "Skills",
  skills_g1: "Development & Programming",
  skills_g1_logic: "Programming Logic",
  skills_g2: "Data & Artificial Intelligence",
  skills_g2_da: "Data Analysis",
  skills_g2_ds: "Data Structures",
  skills_g2_ai: "AI Agents",
  skills_g2_auto: "Automation",
  skills_g3: "Cloud",
  skills_g4: "Tools",
  skills_g5: "Core Competencies",
  skills_g5_1: "Software Engineering",
  skills_g5_2: "Agile Methodologies (Scrum/Kanban)",
  skills_g5_3: "Project Management",
  skills_g5_4: "Business Acumen",
  skills_g5_5: "Market Analysis",
  skills_g5_6: "Strategic Planning",
  skills_g5_7: "Partnership Development",
  skills_g5_8: "Community Management",
  skills_g6: "Soft Skills",
  skills_g6_1: "Effective Communication",
  skills_g6_2: "Teamwork",
  skills_g6_3: "Leadership",
  skills_g6_4: "Adaptability",
  skills_g6_5: "Resilience",
  skills_g6_6: "Continuous Learning",
  skills_g6_7: "Networking",
  skills_g6_8: "Negotiation",

  edu_title: "Education",
  edu1: "Bachelor's Degree in Information Systems — In progress · Limeira, SP",
  edu2: "High School — Completed · Vitória da Conquista, BA",
  edu3: "English Language Course — Completed · Vitória da Conquista, BA",
  edu4_name: "Financial Design Course",
  edu4: "High School Elective — Completed · Vitória da Conquista, BA",

  contact_title: "Contact",
  contact_lead:
    "Open to partnerships, projects and opportunities in software development, data, cloud and AI. Let's build something together.",
  contact_phone: "Phone",

  footer_built: "Built with HTML, CSS & JavaScript",
};

// Snapshot the original Portuguese text on load so we can switch back.
const PT = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  PT[el.dataset.i18n] = el.dataset.i18n === "meta_desc" ? el.content : el.innerHTML;
});

function applyLang(lang) {
  const dict = lang === "en" ? EN : PT;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = dict[key] ?? PT[key];
    if (val == null) return;
    if (key === "meta_desc") el.content = val;
    else el.innerHTML = val;
  });

  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

  document.querySelectorAll(".lang-opt").forEach((o) => {
    o.classList.toggle("active", o.dataset.lang === lang);
  });

  try {
    localStorage.setItem("jg-lang", lang);
  } catch (e) {}
}

// Initial language: saved choice → browser language → Portuguese
let initial = "pt";
try {
  const saved = localStorage.getItem("jg-lang");
  if (saved === "en" || saved === "pt") initial = saved;
  else if (navigator.language && !navigator.language.toLowerCase().startsWith("pt"))
    initial = "en";
} catch (e) {}
applyLang(initial);

document.getElementById("langToggle").addEventListener("click", () => {
  const current = document.documentElement.lang.startsWith("en") ? "en" : "pt";
  applyLang(current === "en" ? "pt" : "en");
});

// ===== Year in footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Scroll reveal =====
const revealEls = Array.from(
  document.querySelectorAll(".section, .hero > *")
);

function revealAll() {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  // Safety net: never leave content hidden if the observer misbehaves
  // (background tabs, throttled rendering, fast jump-scrolls to an anchor).
  const failSafe = () => {
    revealEls.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("is-visible");
      }
    });
  };
  window.addEventListener("scroll", failSafe, { passive: true });
  window.addEventListener("resize", failSafe, { passive: true });
  window.addEventListener("hashchange", failSafe);
  setTimeout(revealAll, 4000);
} else {
  revealAll();
}
