import { jsPDF } from "jspdf";

/**
 * Generates an executive, beautifully styled, ATS-compliant CV for Issam Badaoui.
 * Returns the jsPDF instance which can be saved or converted to Blob / DataURL.
 */
export function generateIssamResumePDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const leftMargin = 16;
  const rightMargin = 16;
  const contentWidth = pageWidth - leftMargin - rightMargin; // 178mm

  // Palette: Dark Navy & Electric Cyan + Slate Accents
  const primaryNavy = [11, 21, 40];      // #0B1528
  const headerDark = [15, 23, 42];       // #0F172A
  const cyanAccent = [0, 191, 255];      // #00BFFF
  const tealAccent = [14, 165, 233];     // #0EA5E9
  const textDark = [30, 41, 59];         // #1E293B
  const textMuted = [100, 116, 139];     // #64748B
  const textLight = [148, 163, 184];     // #94A3B8
  const borderLight = [226, 232, 240];   // #E2E8F0
  const bgBadge = [241, 245, 249];       // #F1F5F9

  let y = 0;

  // ---------------- HEADER BANNER ----------------
  const headerHeight = 44;
  doc.setFillColor(...headerDark);
  doc.rect(0, 0, pageWidth, headerHeight, "F");

  // Top accent line (Electric Cyan)
  doc.setFillColor(...cyanAccent);
  doc.rect(0, 0, pageWidth, 2.5, "F");

  // Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("ISSAM BADAOUI", leftMargin, 16);

  // Subtitle / Specialization
  doc.setTextColor(...cyanAccent);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("FULL STACK WEB DEVELOPER & CYBERSECURITY RESEARCHER", leftMargin, 22.5);

  // Contact Info Strip inside Header
  doc.setTextColor(226, 232, 240);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);

  const contactLine1 = "Email: badaouiissam660@gmail.com   |   GitHub: github.com/issambd29   |   Location: Algeria";
  doc.text(contactLine1, leftMargin, 30);

  const contactLine2 = "LinkedIn: linkedin.com/in/issam-badaoui   |   Portfolio: issam-badaoui.web.app";
  doc.text(contactLine2, leftMargin, 36);

  y = headerHeight + 8;

  // Helper for section headings with an accent bar
  function drawSectionHeading(title) {
    if (y > pageHeight - 30) {
      doc.addPage();
      y = 16;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...primaryNavy);
    doc.text(title.toUpperCase(), leftMargin, y);

    // Decorative line
    const textWidth = doc.getTextWidth(title.toUpperCase());
    doc.setDrawColor(...cyanAccent);
    doc.setLineWidth(0.8);
    doc.line(leftMargin, y + 1.8, leftMargin + textWidth + 3, y + 1.8);

    doc.setDrawColor(...borderLight);
    doc.setLineWidth(0.3);
    doc.line(leftMargin + textWidth + 5, y + 1.8, pageWidth - rightMargin, y + 1.8);

    y += 7.5;
  }

  // ---------------- 1. EXECUTIVE SUMMARY ----------------
  drawSectionHeading("Professional Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...textDark);

  const summary =
    "Results-driven Full-Stack Web Developer and Software Engineer with strong expertise in architecting scalable modern web applications (React, Tailwind CSS, Django, PostgreSQL) and cloud backends. Passionate cybersecurity enthusiast and active CTF player (TryHackMe & OverTheWire Natas) dedicated to web application penetration testing, OWASP Top 10 mitigation, and defensive coding. Proven track record delivering enterprise client platforms (Snai3i) and digital academic portals (Madrassat El-Itqane).";

  const splitSummary = doc.splitTextToSize(summary, contentWidth);
  doc.text(splitSummary, leftMargin, y);
  y += splitSummary.length * 4.2 + 4;

  // ---------------- 2. TECHNICAL SKILLS ----------------
  drawSectionHeading("Technical & Security Skills");
  doc.setFontSize(8.8);

  const skillGroups = [
    { label: "Frontend & UI:", items: "React.js, Next.js / Vite, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3, Three.js, Responsive Design, Figma" },
    { label: "Backend & DB:", items: "Python, Django, REST APIs, Node.js, Express.js, PostgreSQL, Firebase (Auth/Firestore), SQLite" },
    { label: "Cybersecurity:", items: "Web App Penetration Testing, OWASP Top 10, OverTheWire Natas, TryHackMe, Linux Security, Burp Suite" },
    { label: "DevOps & Tools:", items: "Git & GitHub CI/CD, Docker, Render, Vercel, Postman, Linux / Bash Scripting" },
  ];

  skillGroups.forEach((group) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...primaryNavy);
    doc.text(group.label, leftMargin, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...textDark);
    doc.text(group.items, leftMargin + 32, y);
    y += 4.6;
  });
  y += 3;

  // ---------------- 3. PROFESSIONAL EXPERIENCE ----------------
  drawSectionHeading("Work & Practical Experience");

  const experiences = [
    {
      role: "CTF Player & Aspiring Penetration Tester",
      company: "TryHackMe & OverTheWire (Natas)",
      date: "Sep 2026 - Present",
      points: [
        "Solving offensive security challenges & war-games (OverTheWire Natas), analyzing and exploiting web vulnerabilities including command injection, SQLi, directory traversal, and session manipulation.",
        "Mastering network reconnaissance, Linux privilege escalation, and modern web application security testing on TryHackMe.",
      ],
    },
    {
      role: "Full-Stack Engineer (React & Django / PostgreSQL)",
      company: "Snai3i Enterprise",
      date: "Sep 2025 - Present",
      points: [
        "Architected enterprise-grade client portal and Point Tracker backend using React, Tailwind CSS, Django REST Framework, and PostgreSQL hosted on Render.",
        "Engineered transactional customer loyalty logic, secure JWT authentication, responsive dashboards, and optimized relational database queries.",
      ],
    },
    {
      role: "Lead UI/UX & Web Developer",
      company: "Madrassat El-Itqane Quranic School",
      date: "Sep 2025 - Present",
      points: [
        "Designed and deployed the official institutional web platform and inventory ERP system featuring real-time Firebase syncing and custom Arabic RTL user interfaces.",
        "Delivered attendance tracking, student progress metrics, and secure administrative controls with 99.9% uptime.",
      ],
    },
    {
      role: "Frontend Web Developer & Mobile Developer",
      company: "Client & Independent Projects",
      date: "Sep 2024 - Sep 2025",
      points: [
        "Engineered pixel-perfect, accessible client applications using React, React Native (Expo), modern CSS, and RESTful API integrations.",
        "Collaborated closely with stakeholders to translate business requirements into high-conversion digital experiences.",
      ],
    },
  ];

  experiences.forEach((exp) => {
    // Header of experience
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...primaryNavy);
    doc.text(exp.role, leftMargin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...textMuted);
    const dateWidth = doc.getTextWidth(exp.date);
    doc.text(exp.date, pageWidth - rightMargin - dateWidth, y);

    y += 4.2;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.8);
    doc.setTextColor(...tealAccent);
    doc.text(exp.company, leftMargin, y);
    y += 4.2;

    // Bullet points
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);

    exp.points.forEach((pt) => {
      // Bullet dot
      doc.setFillColor(...cyanAccent);
      doc.circle(leftMargin + 1.5, y - 1, 0.7, "F");

      const ptSplit = doc.splitTextToSize(pt, contentWidth - 6);
      doc.text(ptSplit, leftMargin + 5, y);
      y += ptSplit.length * 3.8 + 1.2;
    });
    y += 2.5;
  });

  // ---------------- 4. KEY PROJECTS ----------------
  drawSectionHeading("Featured Enterprise & Web Projects");

  const keyProjects = [
    {
      name: "Snai3i Point Tracker (Enterprise Platform)",
      tech: "React, Tailwind, Django REST, PostgreSQL, Render",
      desc: "Comprehensive customer loyalty and transactional accounting web ecosystem with admin reporting dashboards and tokenized authorization.",
    },
    {
      name: "El-Itqane Educational Ecosystem & Manager",
      tech: "React, Firebase, Firestore, Tailwind CSS, Arabic RTL",
      desc: "Full-scale educational academic portal & cloud inventory management ERP for students, teachers, and school operations.",
    },
    {
      name: "Interactive 3D Portfolio & Web Experience",
      tech: "React, Three.js, React Three Fiber, Framer Motion, Tailwind",
      desc: "Cutting-edge responsive 3D developer showcase with interactive GLTF computer workstations and animated timelines.",
    },
  ];

  keyProjects.forEach((proj) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...primaryNavy);
    doc.text(proj.name, leftMargin, y);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(...textMuted);
    const techWidth = doc.getTextWidth(proj.tech);
    doc.text(proj.tech, pageWidth - rightMargin - techWidth, y);
    y += 4;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);
    const descSplit = doc.splitTextToSize(proj.desc, contentWidth);
    doc.text(descSplit, leftMargin, y);
    y += descSplit.length * 3.8 + 2.5;
  });

  // ---------------- 5. EDUCATION & LANGUAGES ----------------
  drawSectionHeading("Education & Languages");
  doc.setFontSize(8.8);

  doc.setFont("helvetica", "bold");
  doc.setTextColor(...primaryNavy);
  doc.text("Education:", leftMargin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...textDark);
  doc.text("High School Degree / Baccalaureate in Mathematics | Independent Engineering & Cybersecurity Scholar", leftMargin + 25, y);
  y += 4.5;

  doc.setFont("helvetica", "bold");
  doc.setTextColor(...primaryNavy);
  doc.text("Languages:", leftMargin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...textDark);
  doc.text("Arabic (Native), English (Professional Working Proficiency), French (Working Proficiency)", leftMargin + 25, y);
  y += 6;

  // Bottom footer decorative line
  doc.setDrawColor(...cyanAccent);
  doc.setLineWidth(0.6);
  doc.line(leftMargin, pageHeight - 10, pageWidth - rightMargin, pageHeight - 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(...textMuted);
  doc.text("Issam Badaoui — Full Stack Developer & Cybersecurity Enthusiast — CV 2026", leftMargin, pageHeight - 6.5);

  const pageInfo = "Page 1 of 1";
  const pWidth = doc.getTextWidth(pageInfo);
  doc.text(pageInfo, pageWidth - rightMargin - pWidth, pageHeight - 6.5);

  return doc;
}
