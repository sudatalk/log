import {
  SERVER_API_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/constants/site";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "ko-KR",
  };
}

export function bookJsonLd(book: {
  id: number;
  title: string;
  author: string;
  description?: string | null;
  coverImageUrl?: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.author,
    },
    description: book.description || undefined,
    image: book.coverImageUrl || undefined,
    url: `${SITE_URL}/logs/${book.id}`,
    inLanguage: "ko-KR",
  };
}

export async function fetchContentForSeo(contentId: number) {
  try {
    const res = await fetch(`${SERVER_API_URL}/contents/${contentId}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as {
      id: number;
      title: string;
      author: string;
      description: string;
      coverImageUrl: string;
    };
  } catch {
    return null;
  }
}

export async function fetchScheduleContentIdsForSeo() {
  try {
    const res = await fetch(`${SERVER_API_URL}/schedules?size=100&page=0`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [] as number[];
    const data = (await res.json()) as {
      content?: Array<{ contentId: number }>;
    };
    return (data.content ?? []).map((item) => item.contentId);
  } catch {
    return [] as number[];
  }
}
