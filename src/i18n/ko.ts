import type { Translations } from "./en";

export const ko: Translations = {
  meta: {
    title: "소프트웨어 엔지니어",
    name: "정현규",
    description: "정현규 | 소프트웨어 엔지니어",
    ogLocale: "ko_KR",
  },
  nav: {
    home: "홈",
    "about-me": "소개",
    skills: "기술",
    projects: "프로젝트",
    blog: "블로그",
  },
  main: {
    role: "소프트웨어 엔지니어",
    tagline: "풀스택 개발 전문",
    location: "경기도 고양시",
    openTo: "프리랜서 및 정규직 제안 환영",
    resume: "이력서",
  },
  about: {
    title: "소개",
    summary: "요약",
    paragraphs: [
      "TypeScript, Next.js, PostgreSQL을 전문으로 하는 소프트웨어 엔지니어입니다.",
      "역할 기반 접근 제어 시스템과 다중 엔터티 관계형 데이터 모델 설계, 분석 대시보드 구축 경험이 있으며, Drizzle ORM과 최적화된 API 설계를 활용해 분석 및 워크플로우 애플리케이션의 백엔드 시스템을 개발해 왔습니다.",
      "또한 Unreal Engine과 Unity(C#)를 활용한 게임 개발 실무 경험을 보유하고 있습니다.",
    ],
    workExperience: "경력",
    experiences: [
      {
        title: "소프트웨어 개발자 (자원봉사)",
        period: "2026년 2월 - 2026년 6월",
        company: "Evernorth Foundation",
        projects: [
          {
            name: "비영리 단체 웹사이트 리디자인",
            responsibilities: [
              "4명의 프론트엔드 개발 팀을 리드하며 전체 프론트엔드 아키텍처와 코드 품질 총괄",
              "반응형 디자인 및 다양한 기기 간 호환성 보장",
              "UX 리드 및 백엔드 팀과 협업하여 원활한 통합 지원",
            ],
          },
        ],
      },
    ],
    certifications: "자격증",
    certDates: [
      { issueDate: "2026년 5월 취득", expiryDate: "2029년 5월 만료" },
      { issueDate: "2026년 4월 취득", expiryDate: "2029년 4월 만료" },
      { issueDate: "2025년 7월 취득", expiryDate: "2028년 7월 만료" },
      { issueDate: "2025년 6월 취득", expiryDate: "2028년 6월 만료" },
    ],
  },
  skills: {
    title: "기술",
    categories: {
      languages: "프로그래밍 언어",
      frontend: "프론트엔드",
      backend: "백엔드 & 데이터베이스",
      devops: "클라우드 & DevOps",
      other: "기타 도구",
    },
  },
  projects: {
    title: "프로젝트",
    tabs: { web: "웹", game: "게임" },
    team: "팀",
    solo: "개인",
    resource: "자료",
    access: {
      download: "다운로드",
      playNow: "플레이하기",
      website: "사이트 보기",
      "": "",
    },
    web: {
      crm: {
        title: "CRM 웹 애플리케이션",
        subTitle: "회원 관리 기능을 갖춘 사내 CRM 웹 애플리케이션",
        desc: [
          "드래그 앤 드롭 칸반 파이프라인, FullCalendar 기반 일정 관리, 인라인 편집이 가능한 데이터 테이블 개발",
          "KPI, 파이프라인 가치, 거래 지표, 매출 추이를 포함한 CRM 분석 대시보드 구축",
          "Tanstack Query의 낙관적 업데이트를 적용해 즉각적인 피드백 제공",
        ],
      },
      coverLetterFiller: {
        title: "커버레터 필러",
        subTitle: "동적 플레이스홀더 치환 기능을 갖춘 Word 템플릿 편집기",
        desc: [
          "대괄호 기반 키워드 추출 및 자동 문단 감지 기능 개발",
          "문단 내용 편집 기능 구현",
          "Gotenberg(Docker 기반 변환)를 활용한 PDF 내보내기 구현",
        ],
      },
      auction: {
        title: "경매 웹사이트 (역할: 백엔드)",
        subTitle: "풀스택 개발 수업 팀 프로젝트로 제작한 경쟁 입찰 플랫폼",
        desc: [
          "NoSQL 기반 백엔드로 전체 CRUD 기능 개발",
          "최신 입찰자에게 소유권을 갱신하는 입찰 로직 처리",
          "관리용 관리자 전용 계정 구현",
        ],
      },
    },
    game: {
      poker: {
        title: "텍사스 홀덤 포커 프로토타입 (역할: 리드 엔지니어)",
        subTitle: "소프트웨어 공학 수업 팀 프로젝트로 제작한 AI 상대 포커 게임 프로토타입",
        desc: [
          "애자일 방식으로 4인 팀을 운영하고, 코딩 표준과 Git 워크플로우를 수립해 머지 충돌 감소",
          "턴 검증, 베팅, 덱 관리 등 핵심 게임 시스템 구축",
          "몰입감을 높이는 애니메이션과 오디오가 적용된 인터랙티브 UI 설계",
        ],
      },
      speechBubble: {
        title: "말풍선 게임 (역할: 프로그래머)",
        subTitle:
          "밴쿠버 Global Game Jam의 'Bubble' 테마 출품작으로, 말풍선과 상호작용해 능력을 획득하는 게임",
        desc: ["캐릭터 이동 및 충돌 처리 구현", "획득한 능력에 따라 달라지는 액션 구현"],
      },
      vrShooter: {
        title: "VR 슈팅 게임",
        subTitle: "Meta Quest Link로 플레이 가능한 VR 슈팅 게임",
        desc: [
          "Niagara를 활용해 반응성 높은 조작감의 슈팅 액션 구현",
          "동적인 손 애니메이션 구현",
          "잡을 수 있는 오브젝트의 회수 기능 구현",
        ],
      },
      infiniteScroll: {
        title: "무한 스크롤 게임",
        subTitle: "화면 회전과 장애물 피하기가 특징이며, 갈수록 난이도가 높아지는 게임",
        desc: [
          "장애물과 점수 오브젝트를 별도 클래스로 구성해 정확한 충돌 처리 구현",
          "상황 기반 애니메이션 시스템 구현",
          "동적인 화면 회전 메커니즘 추가",
        ],
      },
      mouseAccuracy: {
        title: "마우스 정확도 트레이닝",
        subTitle: "정밀 사격과 반응 속도에 초점을 맞춘, SDL2로 제작한 실시간 인터랙티브 게임",
        desc: [
          "다양한 모드, 점수 시스템, 동적 비주얼을 갖춘 상태 기반 게임플레이 구축",
          "오디오 및 텍스트 렌더링 통합",
        ],
      },
      liarGame: {
        title: "라이어 게임",
        subTitle: "JavaScript로 개발한 라이어 게임 애플리케이션",
        desc: [
          "설정, 역할 공개, 제한 시간 토론으로 이어지는 상태 기반 게임 흐름 설계",
          "공정한 플레이를 보장하는 모바일 친화적 역할 공개 흐름 구축",
        ],
      },
    },
  },
  blog: {
    title: "블로그",
    recentPosts: "최근 글",
    dateLocale: "ko-KR",
  },
};
