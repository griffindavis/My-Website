import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { ContactBlock } from "../components/ContactBlock";

export default function Home() {
  return (
    <>
      <Header />
      <main className="page-shell" id="top">
        <Hero />

        <Section id="core-work" title="Core Work">
           <ProjectCard
            title="Prior Authorization Workflows"
            description="Developed software supporting the lifecycle of prior authorization requests, including intake, review workflows, and coverage determinations. This work required translating real-world operational processes into software systems and coordinating implementation across engineering, product, and domain experts."
          />
          <ProjectCard
            title="Pharmacy Authorizations"
            description="Core developer and technical lead for a new product area focused on pharmacy prior authorization workflows. Designed and implemented systems that support authorization requests, clinical review processes, and operational workflows used by health plans. Contributed across system architecture, workflow modeling, and delivery of new capabilities into production."
          />
          <ProjectCard
            title="Engineering Leadership"
            description="Led development efforts across complex healthcare software initiatives, helping guide technical direction, mentoring engineers, and supporting production escalations. Worked closely with product and customer teams to ensure engineering execution aligned with operational needs and product goals."
          />
        </Section>

        <Section id="how-i-work" title="How I Work">
          <p>
            I enjoy working on problems where understanding the operational workflow is just as
            important as writing the software.
          </p>
          <p>
            Prior authorization systems sit at the intersection of clinical policy, operational
            processes, and large-scale software systems. Building these systems requires
            translating real-world workflows into reliable software that teams can actually use.
          </p>
          <p>
            I enjoy melding the aspects of engineering, product design, and industry knowledge in my day to day work. Seeing the product from start to finish and working directly with users is a passion. 
          </p>
        </Section>

        <Section id="experiments" title="Experiments">
          <p>
           Outside of my work in healthcare software, I build small iOS apps that address everyday challenges I encounter. These projects typically begin as personal tools, whether to manage routines, split expenses with friends, or streamline small workflows. They serve as a sandbox for experimenting with product design, user experience, and lightweight software that improves daily life.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <ContactBlock />
        </Section>
      </main>
    </>
  );
}
