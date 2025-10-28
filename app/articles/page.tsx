import Link from "next/link";

const dummyArticles = [
  { id: 1, title: "인공지능과 사회 변화", summary: "AI가 법과 사회 구조에 미치는 영향" },
  { id: 2, title: "환경법의 새로운 패러다임", summary: "지속가능한 발전을 위한 법적 접근" },
  { id: 3, title: "디지털 윤리의 현재와 미래", summary: "기술 발전 속에서의 윤리적 기준" },
];

export default function ArticlesPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "30px" }}>학회 뉴스 & 아티클</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {dummyArticles.map((article) => (
          <li
            key={article.id}
            style={{
              backgroundColor: "#fafafa",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h2>{article.title}</h2>
            <p style={{ color: "#555" }}>{article.summary}</p>
            <Link href={`/articles/${article.id}`}>자세히 보기 →</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
