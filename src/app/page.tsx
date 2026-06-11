import type { Metadata } from "next";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";
<<<<<<< HEAD
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Awards } from "./components/Awards";
import { Published } from "./components/Published";
import { Summary } from "./components/Summary";
import { WorkExperience } from "./components/WorkExperience";
=======
import { Education } from "./components/education";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import { WorkExperience } from "./components/work-experience";
>>>>>>> origin/main

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://cv.jarocki.me/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    images: ["https://cv.jarocki.me/opengraph-image"],
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  const structuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
        id="main-content"
      >
        <div className="sr-only">
          <h1>{RESUME_DATA.name}&apos;s Resume</h1>
        </div>

        <section
          className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4 dark:bg-background"
          aria-label="Resume Content"
        >
          <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
            <Header />
          </div>

          <div className="space-y-8 print:space-y-4">
<<<<<<< HEAD
            <SectionErrorBoundary sectionName="Summary">
              <Suspense fallback={<SectionSkeleton lines={2} />}>
                <Summary summary={RESUME_DATA.summary} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Work Experience">
              <Suspense fallback={<SectionSkeleton lines={6} />}>
                <WorkExperience work={RESUME_DATA.work} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Education">
              <Suspense fallback={<SectionSkeleton lines={3} />}>
                <Education education={RESUME_DATA.education} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Skills">
              <Suspense fallback={<SectionSkeleton lines={2} />}>
                <Skills skills={RESUME_DATA.skills} />
              </Suspense>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Projects">
              <Suspense fallback={<SectionSkeleton lines={5} />}>
                <Projects projects={RESUME_DATA.projects} />
              </Suspense>
            </SectionErrorBoundary>
            <SectionErrorBoundary sectionName="Published">
              <Suspense fallback={<SectionSkeleton lines={3} />}>
                <Published published={RESUME_DATA.published} />
              </Suspense>
            </SectionErrorBoundary>
            <SectionErrorBoundary sectionName="Awards">
              <Suspense fallback={<SectionSkeleton lines={1} />}>
                <Awards awards={RESUME_DATA.awards} />
              </Suspense>
            </SectionErrorBoundary>
=======
            <div className="animate-fade-in" style={{ animationDelay: "75ms" }}>
              <Summary summary={RESUME_DATA.summary} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              <WorkExperience work={RESUME_DATA.work} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "225ms" }}
            >
              <Education education={RESUME_DATA.education} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Skills skills={RESUME_DATA.skills} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "375ms" }}
            >
              <Projects projects={RESUME_DATA.projects} />
            </div>
>>>>>>> origin/main
          </div>
        </section>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu links={getCommandMenuLinks()} />
        </nav>
      </main>
    </>
  );
}
