import React from "react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import type { RESUME_DATA } from "../../data/resume-data";

type Published = (typeof RESUME_DATA)["published"];


type PublishedItemType = Published[number];

interface PublishedItemProps {
  published: PublishedItemType;
}


function PublishedItem({published}: PublishedItemProps) {
  const { title, pub, year } = published; 

  return (
    <Card className="flex h-full flex-col overflow-hidden border p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            {title} 
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">

      </CardContent>
    </Card>
  );
}

interface PublishedProps {
  published: (typeof RESUME_DATA)["published"];
}

/**
 * Section component displaying all side published
 */
export function Published({
  published,
}: PublishedProps) {
  return (
    <Section className="scroll-mb-16 print:space-y-4">
      <h2 className="text-2xl font-bold" id="side-published">
        Published
      </h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
        role="feed" aria-labelledby="side-published">
        {published.map((item) => (
          <article key={item.title}
            className="h-full">
            < PublishedItem published={item}  
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
