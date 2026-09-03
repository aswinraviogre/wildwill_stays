import React from "react";
import { notFound } from "next/navigation";
import { RESORTS_DATA, Resort } from "@/data/resortsData";
import ResortClientView from "./ResortClientView";

export function generateStaticParams() {
  return RESORTS_DATA.map((resort) => ({
    slug: resort.slug,
  }));
}

export default async function ResortPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resort = RESORTS_DATA.find((r) => r.slug === slug);

  if (!resort) {
    notFound();
  }

  return <ResortClientView resort={resort} />;
}
