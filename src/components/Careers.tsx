"use client";

import { useState } from "react";
import {
  Briefcase,
  Heart,
  Calendar,
  ChevronDown,
  MapPin,
} from "lucide-react";

const benefits = [
  { icon: Heart, label: "Health, Dental, Life & Disability Insurance" },
  { icon: Calendar, label: "PTO and Flexible Work Schedules" },
  { icon: Briefcase, label: "Competitive Salary & Benefits" },
];

interface Job {
  title: string;
  location: string;
  type: string;
  summary: string;
  qualifications: string[];
}

const openPositions: Job[] = [
  {
    title: "Professional Land Surveyor",
    location: "Lewes Office",
    type: "Full Time",
    summary:
      "A Professional Land Surveyor plays a crucial role in accurately defining property boundaries and providing essential spatial data for various projects, including construction, land development, and legal documentation.",
    qualifications: [
      "Valid Professional Land Surveyor (PLS) license in Delaware, or ability to obtain one through reciprocity",
      "Bachelor's degree in surveying, civil engineering, or related field",
      "Proficiency in GPS systems, GIS software, and CAD software (AutoCAD, Civil 3D)",
      "Strong communication and interpersonal skills",
    ],
  },
  {
    title: "Survey Party Chief",
    location: "Lewes Office",
    type: "Full Time",
    summary:
      "The primary function of the Survey Party Chief is responsible charge of a survey crew, conducting land surveys and as-builts using surveying instruments as required by local jurisdictions and clients.",
    qualifications: [
      "High School Diploma/GED and two-year related degree; three years of crew experience",
      "Working knowledge of Delaware Survey related Statutes and Minimum Technical Standards",
      "Knowledge of Global Position Systems and data collection methods",
      "Valid Driver's License required",
    ],
  },
  {
    title: "Civil CAD Technician",
    location: "Lewes Office",
    type: "Full Time",
    summary:
      "The ideal candidate will support civil engineering and land surveying projects through drafting and design tasks, requiring proficiency in various design software and a strong understanding of civil engineering principles.",
    qualifications: [
      "Proficiency in CAD software (AutoCAD, Civil 3D, Carlson) — minimum 1 year experience required",
      "Strong understanding of construction methods and materials",
      "Ability to create detailed schematics and technical drawings",
      "Strong attention to detail with ability to manage multiple projects",
    ],
  },
  {
    title: "Survey CAD Technician",
    location: "Wilmington Office",
    type: "Full Time",
    summary:
      "Responsible for creating detailed technical drawings and plans using various CAD software. This role requires a strong understanding of design principles and the ability to translate concepts into precise schematics.",
    qualifications: [
      "Proficiency in CAD software (AutoCAD, Civil 3D, Carlson) — minimum 1 year experience required",
      "Strong understanding of construction methods and materials",
      "Familiarity with drafting techniques and plan preparations",
      "Problem-solving abilities to address design challenges efficiently",
    ],
  },
];

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-bg/50 transition-colors duration-200"
      >
        <div>
          <h4 className="font-[family-name:var(--font-heading)] font-bold text-text-main text-lg">
            {job.title}
          </h4>
          <div className="flex items-center gap-4 mt-1.5">
            <span className="flex items-center gap-1.5 text-sm text-text-muted">
              <MapPin size={14} />
              {job.location}
            </span>
            <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
              {job.type}
            </span>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-text-muted shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 border-t border-border pt-4">
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            {job.summary}
          </p>
          <h5 className="text-sm font-semibold text-text-main mb-2">
            Key Qualifications:
          </h5>
          <ul className="space-y-1.5">
            {job.qualifications.map((q) => (
              <li
                key={q}
                className="text-sm text-text-muted flex items-start gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {q}
              </li>
            ))}
          </ul>
          <a
            href="mailto:info@merestoneconsultants.com"
            className="inline-flex items-center gap-2 mt-5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors duration-200"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Careers() {
  return (
    <section id="careers" className="py-20 md:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: Intro + Benefits */}
          <div className="lg:col-span-2">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Join Our Team
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-primary mb-6">
              Careers at Merestone
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Merestone offers a great working environment, growth potential, and
              competitive salary and benefits. We value and reward exceptional
              employees.
            </p>

            <h3 className="font-semibold text-text-main mb-4">
              Benefits Package
            </h3>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-sm text-text-muted">{b.label}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-text-muted mt-8 leading-relaxed">
              Interested applicants should forward their resume to{" "}
              <a
                href="mailto:info@merestoneconsultants.com"
                className="text-primary font-medium hover:underline"
              >
                info@merestoneconsultants.com
              </a>
            </p>
          </div>

          {/* Right: Job Listings */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-semibold text-text-main mb-2">
              Current Openings
            </h3>
            {openPositions.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
