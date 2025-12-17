import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Awards = (typeof RESUME_DATA)["awards"][number];

interface AwardsPeriodProps {
  year: Awards["year"];
}

/**
 * Displays the awards period in a consistent format
 */
function AwardsPeriod({ year }: AwardsPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      title={`Period: ${year}`}
    >
      {year}
    </div>
  );
}

interface AwardsItemProps {
  awards: Awards;
}

/**
 * Individual awards card component
 */
function AwardsItem({ awards }: AwardsItemProps) {
  const { award, year } = awards;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <p
            className="font-semibold leading-none "
            id={`awards-${award.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {award}
          </p>
          <AwardsPeriod year={year} />
        </div>
      </CardHeader>
    </Card>
  );
}

interface AwardsListProps {
  awards: readonly Awards[];
}

/**
 * Main awards section component
 * Renders a list of awards experiences
 */
export function Awards({ awards }: AwardsListProps) {
  return (
    <Section>
      <h2 className="text-2xl font-bold" id="awards-section">
        Awards
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="awards-section"
      >
        {awards.map((item) => (
          <article key={item.award}>
            <AwardsItem awards={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
