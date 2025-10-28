import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          backgroundColor: "#e9f3ff",
          borderRadius: "12px",
          marginBottom: "60px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          학회 공식 홈페이지
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          지식과 연구를 나누는 학회, 우리 함께 발전해요.
        </p>
      </section>

      {/* 학회 소개 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>학회 소개</h2>
        <p style={{ lineHeight: "1.6", color: "#444" }}>
          본 학회는 사회, 법, 기술 분야의 전문가들이 모여 다양한 연구 결과를
          공유하고 토론하는 공간입니다.  
          정기 세미나, 논문 발표회, 네트워킹 프로그램 등을 통해 지식을 넓히고
          사회에 기여하는 것을 목표로 합니다.
        </p>
      </section>

      {/* 최근 아티클 미리보기 */}
      <section>
        <h2>최근 아티클</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[1, 2, 3].map((i) => (
            <li
              key={i}
              style={{
                backgroundColor: "#fafafa",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "8px",
              }}
            >
              <h3>아티클 제목 {i}</h3>
              <p style={{ color: "#666" }}>
                학회 활동에 대한 최신 뉴스나 연구 내용을 여기에 요약해서
                보여줍니다.
              </p>
              <Link href={`/articles/${i}`}>자세히 보기 →</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
