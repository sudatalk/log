import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { bookJsonLd, fetchContentForSeo } from "@/lib/seo";
import LogsPageClient from "./LogsPageClient";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const contentId = Number(id);
  const content = Number.isFinite(contentId)
    ? await fetchContentForSeo(contentId)
    : null;

  if (!content) {
    return {
      title: "책 리뷰",
      description: `${SITE_NAME}에서 책 리뷰를 읽고 함께 참여하세요.`,
      alternates: {
        canonical: `/logs/${id}`,
      },
    };
  }

  const description =
    content.description?.slice(0, 120) ||
    `${content.title} — ${content.author}. ${SITE_NAME}에서 리뷰를 읽고 남겨보세요.`;

  return {
    title: content.title,
    description,
    alternates: {
      canonical: `/logs/${content.id}`,
    },
      openGraph: {
      type: "article",
      title: `${content.title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/logs/${content.id}`,
      images: content.coverImageUrl
        ? [
            {
              url: content.coverImageUrl,
              alt: `${content.title} 표지`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.title} | ${SITE_NAME}`,
      description,
      images: content.coverImageUrl ? [content.coverImageUrl] : undefined,
    },
  };
}

export default async function LogsPage({ params }: Props) {
  const { id } = await params;
  const contentId = Number(id);
  const content = Number.isFinite(contentId)
    ? await fetchContentForSeo(contentId)
    : null;

  return (
    <>
      {content && <JsonLd data={bookJsonLd(content)} />}
      {content && (
        <section className="sr-only">
          <h1>{content.title}</h1>
          <p>{content.author}</p>
          {content.description && <p>{content.description}</p>}
        </section>
      )}
      <LogsPageClient />
    </>
  );
}
