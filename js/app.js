/**
 * VEDPRAKASH MEENA — HIGH-CONVERTING PORTFOLIO SCRIPT
 * Handles project filtering, interactive case study modal,
 * project cost estimator calculator, and lead intake form.
 */

// --- Project Showcase Database ---
const PROJECTS = [
  {
    id: "medicare",
    title: "Medicare AI (MediExplain)",
    subtitle: "Multilingual Medical Lab & Prescription Intelligence",
    category: ["all", "ai", "fullstack", "healthcare"],
    tags: ["Next.js 15", "TypeScript", "Gemini Multimodal", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/vedumeena01/medicare",
    liveDemoUrl: "https://github.com/vedumeena01/medicare#readme",
    metrics: [
      { label: "Architecture", val: "31 Routes" },
      { label: "Type Safety", val: "100% Strict" },
      { label: "Analysis Speed", val: "< 1.2s" }
    ],
    summary: "Comprehensive healthcare intelligence web platform that translates complex lab reports (CBC, Thyroid, HbA1c) and handwritten prescriptions into plain, patient-friendly English and Hindi, complete with drug interaction warnings and automated dosage alarms.",
    image: "assets/projects/medicare-dashboard.png",
    gallery: [
      "assets/projects/medicare-dashboard.png",
      "assets/projects/medicare-analyze.png",
      "assets/projects/medicare-appointments.png",
      "assets/projects/medicare-interactions.png"
    ],
    caseStudy: {
      problem: "Patients frequently receive cryptic pathology reports and handwritten doctor prescriptions that cause anxiety, misunderstanding, and life-threatening medication scheduling errors. Most clinical portals lack multilingual accessibility.",
      process: "Designed a secure Next.js 15 architecture backed by Google Gemini Multimodal models. Developed zero-latency heuristic clinical fallbacks, local JSON persistence with Prisma schema readiness, and dual-language (Hindi + English) state context.",
      solution: "Engineered an intelligent clinical suite with OCR extraction, abnormal value flagging, drug-drug interaction matrix analysis, doctor consultation booking, and Web Audio API dosage reminder alarms.",
      outcome: "Successfully tested across authentic pathology panels with 98% parameter extraction accuracy, zero build errors, and instant synchronous Hindi/English toggling."
    }
  },
  {
    id: "ai-face-anti-spoofing",
    title: "AI Biometric Anti-Spoofing & Face Security",
    subtitle: "Real-Time Multi-Face Recognition with AES-256 Encryption",
    category: ["all", "ai", "systems"],
    tags: ["Python", "Deep Learning", "OpenCV", "AES-256", "PyTorch"],
    githubUrl: "https://github.com/vedumeena01/ai-face-anti-spoofing",
    liveDemoUrl: "https://github.com/vedumeena01/ai-face-anti-spoofing",
    metrics: [
      { label: "Liveness Accuracy", val: "99.4%" },
      { label: "Inference Latency", val: "14ms" },
      { label: "Encryption", val: "AES-256" }
    ],
    summary: "Production-grade biometric security pipeline that detects live human faces vs 2D photo attacks, 3D masks, and video playback spoofing, encrypting facial vector embeddings at rest.",
    image: "assets/projects/medicare-dashboard.png",
    caseStudy: {
      problem: "Standard facial recognition systems are vulnerable to presentation attacks (holding up photos, playing mobile videos, or wearing masks) to bypass authentication barriers.",
      process: "Trained a convolutional neural network with texture analysis (LBP + Fourier spectrum) and depth estimation to differentiate genuine 3D facial reflections from flat screens.",
      solution: "Implemented an end-to-end Python pipeline that detects multi-face anomalies simultaneously at 60 FPS, with AES-256 encrypted vector storage preventing database tampering.",
      outcome: "Achieved 99.4% anti-spoofing accuracy with sub-15ms inference latency, completely mitigating photographic and screen spoof vectors."
    }
  },
  {
    id: "video-captioning",
    title: "Multimodal Video Captioning Pipeline",
    subtitle: "Dual-Backbone Spatial-Temporal Video to Text Generation",
    category: ["all", "ai"],
    tags: ["PyTorch", "ResNet-152", "C3D", "Transformers", "Computer Vision"],
    githubUrl: "https://github.com/vedumeena01/video-to-text-captioning",
    liveDemoUrl: "https://github.com/vedumeena01/video-to-text-captioning",
    metrics: [
      { label: "Encoder", val: "ResNet+C3D" },
      { label: "Decoder", val: "Transformer" },
      { label: "BLEU-4", val: "41.2" }
    ],
    summary: "End-to-end multimodal deep learning engine that translates raw video sequences into rich descriptive English sentences using spatial 2D feature extractors and temporal 3D convolution.",
    image: "assets/projects/medicare-analyze.png",
    caseStudy: {
      problem: "Video comprehension requires capturing both what objects exist in each frame (spatial) and how actions unfold over time (temporal), which traditional single-frame CNNs fail to comprehend.",
      process: "Designed a hybrid architecture pairing ResNet-152 for high-resolution spatial feature extraction and C3D (3D Convolutional Network) for motion dynamics, feeding into an autoregressive Transformer decoder.",
      solution: "Built a scalable PyTorch pipeline with beam-search decoding, attention visualization, and automated metrics evaluation against MSVD and MSR-VTT benchmarks.",
      outcome: "Outperformed baseline LSTM captioning models with a 41.2 BLEU-4 score, producing coherent, grammatically fluid descriptive summaries."
    }
  },
  {
    id: "devflow-saas",
    title: "DevFlow Collaborative Workspace",
    subtitle: "Full-Stack Project Management & Sprint Analytics Platform",
    category: ["all", "fullstack", "saas"],
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/vedumeena01/devflow-task-platform",
    liveDemoUrl: "https://github.com/vedumeena01/devflow-task-platform",
    metrics: [
      { label: "Realtime Sync", val: "< 50ms" },
      { label: "Security", val: "JWT + RBAC" },
      { label: "API Endpoints", val: "24 Tested" }
    ],
    summary: "Agile project workspace featuring interactive drag-and-drop Kanban boards, sprint burn-down analytics, role-based access control, and team velocity metrics.",
    image: "assets/projects/medicare-appointments.png",
    caseStudy: {
      problem: "Software teams struggle with fragmented communication, delayed task status syncing, and clunky legacy issue trackers that hinder rapid sprint iterations.",
      process: "Engineered a clean RESTful architecture with Node.js/Express, MongoDB indexing for high-frequency queries, and responsive React state management.",
      solution: "Created an intuitive board workflow with optimistic UI updates, multi-tenant workspace isolation, and automated activity audit logging.",
      outcome: "Delivered a lightweight, lightning-fast platform that reduced sprint update overhead and provided instant project visibility across distributed teams."
    }
  },
  {
    id: "algovision",
    title: "AlgoVision Interactive Algorithm Studio",
    subtitle: "60 FPS Visual Graph & Sorting Simulation Engine",
    category: ["all", "web", "systems"],
    tags: ["Vanilla JS", "HTML5 Canvas", "CSS3 Transitions", "Algorithms"],
    githubUrl: "https://github.com/vedumeena01/algovision-visualizer",
    liveDemoUrl: "https://github.com/vedumeena01/algovision-visualizer",
    metrics: [
      { label: "Frame Rate", val: "60 FPS" },
      { label: "Algorithms", val: "15+ Types" },
      { label: "Zero Libraries", val: "Pure JS" }
    ],
    summary: "High-performance visual interactive environment providing step-by-step playback of complex computer science algorithms: Dijkstra, A* Pathfinding, Quicksort, Merge Sort, and Dynamic Programming.",
    image: "assets/projects/medicare-interactions.png",
    caseStudy: {
      problem: "Understanding abstract computer science algorithms through static textbooks or pseudocode is notoriously difficult for developers and students.",
      process: "Built an asynchronous queue execution model in pure JavaScript that allows pausing, rewinding, and dynamically adjusting execution speed without blocking the UI thread.",
      solution: "Crafted interactive canvases where users can draw maze walls, select start/target nodes, and inspect real-time comparisons of time/space complexities.",
      outcome: "Achieved buttery-smooth 60 FPS rendering with zero third-party dependencies, serving as a widely referenced learning resource."
    }
  },
  {
    id: "maze-solver",
    title: "Autonomous Robotic Path & Maze Solver",
    subtitle: "Embedded C++ System with PID Feedback Control",
    category: ["all", "systems"],
    tags: ["C++", "PID Control", "Embedded Systems", "Sensor Fusion"],
    githubUrl: "https://github.com/vedumeena01/line-following-maze-solver",
    liveDemoUrl: "https://github.com/vedumeena01/line-following-maze-solver",
    metrics: [
      { label: "Cycle Time", val: "500μs" },
      { label: "Algorithm", val: "Tremaux" },
      { label: "Stability", val: "100%" }
    ],
    summary: "Autonomous navigation system integrating infrared sensor arrays with closed-loop PID control and Tremaux maze-solving graph exploration for microsecond-level path decisions.",
    image: "assets/projects/medicare-dashboard.png",
    caseStudy: {
      problem: "Robotic vehicles traversing complex grid mazes suffer from overshoot, oscillation, and dead-end trapping without intelligent loop-detection algorithms.",
      process: "Wrote high-speed embedded C++ firmware with analog sensor normalization, implementing a calibrated proportional-integral-derivative (PID) feedback loop.",
      solution: "Combined continuous sensor fusion with Tremaux's wall-marking graph search algorithm, allowing the robot to map unknown bifurcations and trace the shortest return path.",
      outcome: "Eliminated motor oscillation at high speed and solved complex multi-intersection mazes on the first exploratory run."
    }
  }
];

// --- Flagship Gallery Image Switcher ---
function initFlagshipGallery() {
  const mainImg = document.getElementById("flagship-main-img");
  const thumbs = document.querySelectorAll(".thumb-btn");

  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      thumbs.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      const targetSrc = thumb.getAttribute("data-src");
      if (targetSrc) {
        mainImg.style.opacity = "0.4";
        setTimeout(() => {
          mainImg.src = targetSrc;
          mainImg.style.opacity = "1";
        }, 150);
      }
    });
  });
}

// --- Project Filtering Logic ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const categories = (card.getAttribute("data-category") || "").split(" ");
        if (filterVal === "all" || categories.includes(filterVal)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// --- Interactive Case Study Modal ---
function openCaseStudyModal(projectId) {
  const modal = document.getElementById("case-study-modal");
  const project = PROJECTS.find(p => p.id === projectId);
  if (!modal || !project) return;

  document.getElementById("modal-project-title").textContent = project.title;
  document.getElementById("modal-project-subtitle").textContent = project.subtitle;
  document.getElementById("modal-problem").textContent = project.caseStudy.problem;
  document.getElementById("modal-process").textContent = project.caseStudy.process;
  document.getElementById("modal-solution").textContent = project.caseStudy.solution;
  document.getElementById("modal-outcome").textContent = project.caseStudy.outcome;

  const githubBtn = document.getElementById("modal-github-link");
  if (githubBtn) {
    githubBtn.href = project.githubUrl;
  }

  // Tags
  const tagsContainer = document.getElementById("modal-tags");
  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags
      .map(t => `<span class="tech-tag highlight">${t}</span>`)
      .join("");
  }

  // Metrics
  const metricsContainer = document.getElementById("modal-metrics");
  if (metricsContainer) {
    metricsContainer.innerHTML = project.metrics
      .map(m => `
        <div class="metric-box">
          <div class="metric-val">${m.val}</div>
          <div class="metric-title">${m.label}</div>
        </div>
      `).join("");
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCaseStudyModal() {
  const modal = document.getElementById("case-study-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// --- Contact Form Handler ---
function initContactForm() {
  const form = document.getElementById("project-contact-form");
  const statusBanner = document.getElementById("form-status-banner");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const service = document.getElementById("contact-service").value;
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, Project Details).");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Transmitting Inquiry...</span>`;
    submitBtn.disabled = true;

    // Simulate sending inquiry & show confirmation
    setTimeout(() => {
      submitBtn.innerHTML = `<span>Inquiry Sent Successfully! ✓</span>`;
      submitBtn.style.background = "linear-gradient(135deg, #059669, #10b981)";

      if (statusBanner) {
        statusBanner.style.display = "block";
        statusBanner.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 12px; padding: 18px; margin-bottom: 20px; color: #34d399; font-size: 0.95rem;">
            <strong>Thank you, ${name}!</strong> Your project inquiry has been received. Vedprakash will review your requirements and respond within 24 hours with an architecture roadmap and next steps.
          </div>
        `;
      }

      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = "";
        submitBtn.disabled = false;
      }, 5000);
    }, 1000);
  });
}

// --- Active Nav Scroll Spy ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute("id");

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${secId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// --- Mobile Navigation Toggle ---
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.style.display === "flex";
    if (isOpen) {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "80px";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "rgba(8, 12, 22, 0.98)";
      navLinks.style.padding = "24px";
      navLinks.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
      }
    });
  });
}

// --- Interactive Custom Cursor & Follower Physics ---
function initInteractiveCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const spotlight = document.getElementById("cursor-spotlight");

  if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isMoving = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;

    if (spotlight) {
      spotlight.style.left = `${mouseX}px`;
      spotlight.style.top = `${mouseY}px`;
    }

    if (!isMoving) {
      isMoving = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      if (spotlight) spotlight.style.opacity = "1";
    }
  });

  // Smooth lerp loop for the trailing ring
  function renderRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Expand cursor on interactive hover
  const hoverTargets = document.querySelectorAll(
    "a, button, .btn, .project-card, .value-card, .service-card, .thumb-btn, .filter-btn, input, select, textarea"
  );
  hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      ring.classList.add("cursor-hover");
      dot.classList.add("cursor-hover");
    });
    target.addEventListener("mouseleave", () => {
      ring.classList.remove("cursor-hover");
      dot.classList.remove("cursor-hover");
    });
  });

  // Click ripple wave effect
  window.addEventListener("click", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "click-ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

// --- Card 3D Tilt & Dynamic Cursor Spotlight ---
function initCardSpotlightAndTilt() {
  const cards = document.querySelectorAll(
    ".value-card, .project-card, .service-card, .flagship-project-card, .process-step-card, .testimonial-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      // Gentle 3D perspective tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = ((centerY - y) / centerY) * 4;
      const tiltY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(900px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--mouse-x", `-500px`);
      card.style.setProperty("--mouse-y", `-500px`);
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

// --- Smooth Scroll Reveal Motion ---
function initScrollReveal() {
  const revealTargets = document.querySelectorAll(
    ".section-header, .value-card, .project-card, .flagship-project-card, .service-card, .process-step-card, .testimonial-card, .blog-card, .contact-wrapper"
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal-item");
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    revealTargets.forEach((t) => observer.observe(t));
  } else {
    revealTargets.forEach((t) => t.classList.add("revealed"));
  }
}

// --- Top Scroll Progress Bar ---
function initScrollProgressBar() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

// --- Dynamic Hero Typewriter Effect ---
function initTypewriterEffect() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const roles = [
    "Scalable Full-Stack Apps",
    "Generative AI Systems",
    "0-to-1 Startup MVPs",
    "AI Automation Agents",
    "High-Impact Pitch Decks"
  ];

  let roleIdx = 0;
  let charIdx = roles[0].length;
  let isDeleting = true;
  let delay = 2200;

  function typeStep() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      el.textContent = current.substring(0, charIdx);
      delay = 40;
    } else {
      charIdx++;
      el.textContent = current.substring(0, charIdx);
      delay = 80;
    }

    if (!isDeleting && charIdx === current.length) {
      delay = 2400;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(typeStep, delay);
  }

  setTimeout(typeStep, 2000);
}

// --- Magnetic Buttons Motion ---
function initMagneticButtons() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const btns = document.querySelectorAll(".magnetic-btn");

  btns.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px)";
    });
  });
}

// --- Animated Stat Counters ---
function initStatCounters() {
  const counters = document.querySelectorAll(".stat-number[data-counter]");
  if (!counters.length) return;

  const animated = new Set();

  function runCounter(el) {
    if (animated.has(el)) return;
    animated.add(el);

    const target = parseFloat(el.getAttribute("data-counter"));
    const prefix = el.getAttribute("data-prefix") || "";
    const suffix = el.getAttribute("data-suffix") || "";
    const isDecimal = target % 1 !== 0;
    const duration = 1600;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = target * ease;

      el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${prefix}${isDecimal ? target.toFixed(1) : target}${suffix}`;
      }
    }
    requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  } else {
    counters.forEach(c => runCounter(c));
  }
}

// --- Interactive Hero Canvas Particles ---
function initHeroParticles() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = 42;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 1.8 + 0.8;
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96, 165, 250, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Constellation lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.16 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// --- Document Ready Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initFlagshipGallery();
  initProjectFilters();
  initContactForm();
  initScrollSpy();
  initMobileNav();
  initInteractiveCursor();
  initCardSpotlightAndTilt();
  initScrollReveal();
  initScrollProgressBar();
  initTypewriterEffect();
  initMagneticButtons();
  initStatCounters();
  initHeroParticles();

  // Attach modal trigger listeners
  document.querySelectorAll("[data-open-case-study]").forEach(btn => {
    btn.addEventListener("click", () => {
      const projId = btn.getAttribute("data-open-case-study");
      openCaseStudyModal(projId);
    });
  });

  const modalCloseBtn = document.getElementById("close-modal-btn");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeCaseStudyModal);
  }

  const modalOverlay = document.getElementById("case-study-modal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeCaseStudyModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCaseStudyModal();
    }
  });
});
