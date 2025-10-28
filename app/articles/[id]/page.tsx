import { React } from "react";

type Article = { id: number; title: string; summary: string; content: string; };
const dummyArticles: Article[] = [
  { id: 1, title: "인공지능과 사회 변화", summary: "AI가 법과 사회 구조에 미치는 영향", content: "AI가 법과 사회 구조에 미치는 영향을 자세히 분석한 글입니다." },
  { id: 2, title: "환경법의 새로운 패러다임", summary: "지속가능한 발전을 위한 법적 접근", content: "환경 문제 해결을 위한 최신 법제도와 정책을 소개합니다." },
  { id: 3, title: "디지털 윤리의 현재와 미래", summary: "기술 발전 속에서의 윤리적 기준", content: "데이터와 AI 시대에서 지켜야 할 윤리적 기준을 정리합니다." },
];

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const articleId = Number(id);
  const article = dummyArticles.find((a) => a.id === articleId);

  if (!article) return <p>존재하지 않는 기사입니다.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
      <p>{article.content}</p>
    </div>
  );
}
