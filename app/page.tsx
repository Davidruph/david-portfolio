"use client";

import Image from "next/image";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const projectStories = [
  {
    title: "GoKollect",
    type: "Public revenue infrastructure",
    href: "https://gokollect.bnsg.org.ng/",
    problem:
      "Payment collection needs trust at every handoff, from partner invoice to government reporting.",
    contribution:
      "Built the partner-facing collection and checkout experience, with secure API flows and live operational visibility."
  },
  {
    title: "QampusPlus",
    type: "Education management, rethought",
    href: "https://qampusplusapp.com/",
    problem:
      "Schools need one dependable system for learning, records and the operations around both.",
    contribution:
      "Led full-stack engineering across CBT exams, role-specific workflows, results and billing systems."
  },
  {
    title: "QampusPlus Legacy",
    type: "The Laravel foundation",
    href: "https://school.qampusplus.com/",
    problem:
      "The first generation of the platform needed to bring school administration, assessment and billing into one dependable system.",
    contribution:
      "Built the Laravel application foundation with role-specific dashboards, results, assessment flows and real-time features."
  },
  {
    title: "Ontology of Value",
    type: "A service business in motion",
    href: "https://ontologyofvalue.com/",
    problem:
      "A consultancy needed more than a brochure site: it needed a client operating layer.",
    contribution:
      "Created custom booking, payments and visual assessment reporting that connected the business experience end to end."
  }
];
const projects = PROJECTS.map((project, index) => {
  const story = projectStories.find((entry) => entry.href === project.link);
  return {
    number: String(index + 1).padStart(2, "0"),
    title: story?.title ?? project.title,
    type: story?.type ?? project.tagline,
    image: project.image,
    href: project.link,
    github: project.github,
    problem: story?.problem ?? project.description,
    contribution: story?.contribution ?? project.metrics.join(" · "),
    detailLabel: story ? "Behind the experience." : "Highlights.",
    stack: project.tags.join(" · ")
  };
});

const capabilities = [
  [
    "01",
    "Product",
    "Turning complex ideas into products people can use, understand and come back to.",
    "Discovery · UX systems · SaaS"
  ],
  [
    "02",
    "Architecture",
    "Choosing the boundaries, data models and foundations that let a product grow without drama.",
    "APIs · Multi-tenancy · Data design"
  ],
  [
    "03",
    "Engineering",
    "Building interfaces and backend systems with the same attention to reliability and detail.",
    "React · Next.js · Laravel · Node.js"
  ],
  [
    "04",
    "Applied AI",
    "Putting AI where it makes a workflow meaningfully faster, clearer or more capable.",
    "Integrations · Automations · Intelligence"
  ],
  [
    "05",
    "Leadership",
    "Giving teams the structure, technical context and momentum to ship thoughtful work.",
    "Code review · Mentoring · Delivery"
  ]
];
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }
};

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
  return (
    <article ref={ref} className={`project project-${index + 1}`}>
      <motion.div {...reveal} className="project-heading">
        <p className="eyebrow">
          {project.number} / {project.type}
        </p>
        <h3>{project.title}</h3>
        <p className="project-problem">{project.problem}</p>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Explore the live product <ArrowUpRight size={16} />
        </a>
      </motion.div>
      <motion.a
        style={reducedMotion ? undefined : { scale, rotateX }}
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="project-image"
        aria-label={`Visit ${project.title} (opens in a new tab)`}
      >
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <small>{new URL(project.href).hostname}</small>
        </div>
        <div className="project-screen">
          <Image
            src={project.image}
            alt={`${project.title} product interface`}
            fill
            sizes="(max-width: 767px) calc(100vw - 82px), (max-width: 1184px) calc((100vw - 188px) / 2), 498px"
          />
        </div>
        <span className="project-open">
          <ArrowUpRight />
        </span>
      </motion.a>
      <motion.div {...reveal} className="project-details">
        <p className="project-contribution">
          <b>{project.detailLabel}</b> {project.contribution}
        </p>
        <p className="project-stack">{project.stack}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <Github size={15} /> View source <ArrowUpRight size={14} />
          </a>
        )}
      </motion.div>
    </article>
  );
}

type Capability = (typeof capabilities)[number];

function CapabilityRow({ capability }: { capability: Capability }) {
  const [number, title, body, technology] = capability;
  return (
    <motion.div {...reveal} className="capability">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      <small>{technology}</small>
    </motion.div>
  );
}

function HeroProjectOrbit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused, reducedMotion]);

  const getPosition = (index: number) => {
    const total = projects.length;

    let offset = (index - activeIndex + total) % total;

    if (offset > total / 2) {
      offset -= total;
    }

    return offset;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.25 }}
      className="hero-showcase hero-orbit"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {projects.map((project, index) => {
        const position = getPosition(index);

        const isActive = position === 0;
        const isLeft = position === -1;
        const isRight = position === 1;

        const visible = isActive || isLeft || isRight;

        let x = "0%";
        let scale = 0.7;
        let rotateY = 0;
        let opacity = 0;
        let zIndex = 0;
        let y = 30;

        if (isActive) {
          x = "-50%";
          scale = 1;
          rotateY = 0;
          opacity = 1;
          zIndex = 3;
          y = 0;
        } else if (isLeft) {
          x = "-122%";
          scale = 0.76;
          rotateY = 18;
          opacity = 0.6;
          zIndex = 2;
          y = 25;
        } else if (isRight) {
          x = "22%";
          scale = 0.76;
          rotateY = -18;
          opacity = 0.6;
          zIndex = 2;
          y = 25;
        }

        return (
          <motion.a
            key={project.number}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="hero-orbit-card"
            aria-label={`View ${project.title}`}
            initial={false}
            animate={{
              x,
              y,
              scale,
              rotateY,
              opacity
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{
              zIndex,
              pointerEvents: visible ? "auto" : "none"
            }}
          >
            <div className="preview-label">
              <span />
              {project.title} / {project.type}
            </div>

            <div className="hero-orbit-image">
              <Image
                src={project.image}
                alt={`${project.title} project`}
                fill
                priority={isActive}
                sizes="(max-width: 767px) 86vw, 650px"
              />
            </div>
          </motion.a>
        );
      })}

      <div className="hero-orbit-indicators">
        {projects.map((project, index) => (
          <button
            key={`orbit-dot-${project.number}`}
            type="button"
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${project.title}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} id="home" className="hero-shell">
      <motion.div
        style={reducedMotion ? undefined : { y, opacity }}
        className="page-width hero-content"
      >
        <motion.p {...reveal} className="eyebrow">
          David Agbugba · Software architect &amp; team lead
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Ambitious ideas.
          <br />
          <em>Beautifully built.</em>
        </motion.h1>
        <motion.p {...reveal} className="hero-description">
          Thoughtful interfaces. Dependable systems.
          <br />I build the software that brings it all together.
        </motion.p>
        <motion.div {...reveal} className="hero-actions">
          <a href="#work" className="primary-link">
            Explore my work <ArrowDownRight size={17} />
          </a>
          <a href="#story" className="text-link">
            A little about me <ArrowUpRight size={17} />
          </a>
        </motion.div>
        <HeroProjectOrbit />
      </motion.div>
      <a href="#work" className="hero-index">
        SCROLL TO DISCOVER <ArrowDownRight size={14} />
      </a>
    </section>
  );
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <section id="story" className="story section page-width">
        <motion.p {...reveal} className="eyebrow">
          A product-minded engineer
        </motion.p>
        <motion.div {...reveal} className="story-grid">
          <h2>
            Good software makes the complicated feel <em>inevitable.</em>
          </h2>
          <div>
            <p>
              I work at the point where product ambition meets technical
              reality—shaping systems, guiding teams and carrying ideas from an
              early sketch to a dependable release.
            </p>
            <p>
              My practice moves easily between interface detail and backend
              architecture: SaaS platforms, payment systems, APIs, real-time
              applications and useful AI integrations. The through-line is
              always the same: make the next right thing easier to build.
            </p>
            <a className="text-link" href="/david-agbugba-cv.pdf" download>
              Read the full record <ArrowUpRight />
            </a>
          </div>
        </motion.div>
      </section>
      <section id="work" className="work section">
        <div className="page-width work-heading">
          <motion.p {...reveal} className="eyebrow">
            All projects / {projects.length} products
          </motion.p>
          <motion.h2 {...reveal}>
            Systems in the
            <br />
            <em>real world.</em>
          </motion.h2>
        </div>
        <div className="page-width project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${project.number}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
      <section id="thinking" className="capabilities section page-width">
        <motion.div {...reveal} className="capability-intro">
          <p className="eyebrow">How I build</p>
          <h2>
            More than a stack.
            <br />A way of <em>thinking.</em>
          </h2>
        </motion.div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <CapabilityRow
              key={`capability-${capability[0]}`}
              capability={capability}
            />
          ))}
        </div>
      </section>
      <section id="experience" className="experience section">
        <div className="page-width">
          <motion.p {...reveal} className="eyebrow">
            Experience
          </motion.p>
          <motion.div {...reveal} className="experience-title">
            <h2>
              Built with teams.
              <br />
              <em>Built to last.</em>
            </h2>
            <p>
              A concise record of roles where engineering judgment, product
              momentum and people all mattered.
            </p>
          </motion.div>
          <div className="experience-list">
            <div>
              <span>2022 — Present</span>
              <section>
                <h3>Software Architect / Developer</h3>
                <p>Techvibes International</p>
              </section>
              <b>
                Led product engineering, coached developers and delivered
                scalable education and subscription systems.
              </b>
            </div>
            <div>
              <span>2023 — 2024</span>
              <section>
                <h3>Frontend Developer, Contract</h3>
                <p>Oaks Intelligence</p>
              </section>
              <b>
                Built durable React systems and high-fidelity product interfaces
                across risk assessment and AI-enabled platforms.
              </b>
            </div>
            <div>
              <span>2020 — 2022</span>
              <section>
                <h3>Full-stack Developer</h3>
                <p>Independent / Fiverr</p>
              </section>
              <b>
                Partnered directly with global clients to ship reliable Laravel
                and JavaScript applications.
              </b>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact section">
        <div className="page-width">
          <motion.p {...reveal} className="eyebrow">
            Start a conversation
          </motion.p>
          <motion.h2 {...reveal}>
            Have something
            <br />
            worth <em>building?</em>
          </motion.h2>
          <motion.div {...reveal} className="contact-row">
            <p>
              Whether it needs a stronger technical foundation, a product-minded
              engineering partner or a team to move with more clarity, I&apos;d
              like to hear about it.
            </p>
            <a href="mailto:dagbugba@yahoo.com" className="contact-email">
              dagbugba
              <br />
              @yahoo.com <ArrowUpRight />
            </a>
          </motion.div>
          <div className="contact-foot">
            <a
              href="https://github.com/Davidruph"
              target="_blank"
              rel="noreferrer"
            >
              <Github /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/david-agbugba-119b2b120"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin /> LinkedIn
            </a>
            <span>© {new Date().getFullYear()} David Agbugba</span>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
