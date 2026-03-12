'use client';

import { Bell, Globe, Monitor } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Add your monitors',
    description: 'Connect your websites and APIs in seconds. Set your check frequency and regions.',
    icon: <Monitor className="h-8 w-8" />,
  },
  {
    number: 2,
    title: 'Get notified instantly',
    description: 'Receive alerts via email, Slack, or SMS the moment downtime is detected.',
    icon: <Bell className="h-8 w-8" />,
  },
  {
    number: 3,
    title: 'Share your status',
    description: 'Publish a beautiful public status page to keep your users informed.',
    icon: <Globe className="h-8 w-8" />,
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-muted/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started with OpenStatus in three simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="absolute left-0 right-0 top-1/4 hidden h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent md:block" />

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="rounded-lg border border-border bg-background p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                  {/* Number Badge */}
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - desktop only */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/4 hidden text-muted-foreground/30 md:block">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
