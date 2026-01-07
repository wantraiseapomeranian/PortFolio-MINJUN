import { FaCode, FaServer, FaCloud } from 'react-icons/fa';
import { FaBook, FaComments, FaLightbulb } from 'react-icons/fa';
import { FaJava, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiKubernetes, SiJenkins, SiGit, SiOracle, SiSwagger, SiAxios } from 'react-icons/si';

export interface TechStack {
  name: string;
  icon: React.ComponentType;
}

export interface WhatIDo {
  title: string;
  icon: React.ComponentType;
  description: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  icon: React.ComponentType;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType;
  percentage: number;
  description: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string | string[];
  thumbnail?: string;
  deployUrl?: string;
  troubleshooting?: {
    title: string;
    problem: string;
    solution: string;
    result?: string;
  }[];
}

export interface OtherExperience {
  title: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
}

export const introData = {
  headline: '서비스 관점에서 끊임없이 문제를 해결하며 성장하는 개발자 김민준입니다.',
  subtext: '데이터의 무결성과 시스템의 안정성을 최우선으로 고려합니다. 단순한 기능 구현을 넘어, 확장 가능한 아키텍처를 설계하고 사용자 경험까지 고려한 최적의 솔루션을 고민합니다.',
  techStack: ['Java', 'Spring Boot','Spring Security', 'MyBatis', 'Oracle SQL', 'React', 'Jotai'],
};

export const whatIDoData: WhatIDo[] = [
  {
    title: 'Frontend',
    icon: FaCode,
    description: 'React를 활용하여 웹 환경을 아우르는 서비스를 구축합니다. 재사용 가능한 컴포넌트 설계로 개발 생산성을 높입니다.',
  },
  {
    title: 'Backend Engineering',
    icon: FaServer,
    description: 'Spring Boot의 안정성과 NestJS의 유연함을 모두 활용합니다. 복잡한 비즈니스 로직을 명확한 아키텍처로 풀어내며, 확장성과 데이터 무결성을 최우선으로 고려한 API를 설계합니다.',
  },
  {
    title: 'DevOps',
    icon: FaCloud,
    description: 'AWS EC2/RDS 환경을 다루며, 서비스 배포와 운영을 위한 기초 인프라를 구축합니다.',
  },
];

export const timelineData: TimelineItem[] = [
  {
    date: '2025.12',
    title: '경기 기후 바이브코딩 해커톤 개발 트랙 (특별상 수상)',
    description: "국토지리정보원 특별상 수상. '기후 위기 해결'을 주제로 claude code를 활용하여 5시간 내에 기후 데이터 시각화 웹 프로토타입을 완성했습니다. 짧은 시간 내에 아이디어를 구체화하고 배포까지 완료하는 집중력을 발휘했습니다.",
  },
  {
    date: '2025.11 - 2025.12',
    title: '컨텐츠 리뷰 사이트 프로젝트 (Review Tag)',
    description: 'Spring Boot와 React를 활용한 풀스택 프로젝트입니다. RESTful API 설계를 주도하였으며, 인터랙티브한 컨텐츠 퀴즈 기능과 관리자 대시보드, 유저 활동에 따른 실시간 랭킹 시스템을 전담하여 구현했습니다.',
  },
  {
    date: '2025.10 - 2025.11',
    title: '개인 쇼핑몰 사이트 프로젝트 (King Heart)',
    description: 'Spring Boot와 JSP를 기반으로 정통 MVC 패턴과 DAO 패턴을 적용하여 데이터 흐름을 깊이 있게 이해했습니다. 상품 옵션(SKU) 관리 로직과 장바구니 세션 처리, 카카오페이 API를 연동한 결제 프로세스 전반을 구현했습니다.',
  },
  {
    date: '2025.07 - 2025.12',
    title: 'React & Spring 활용 자바(Java) 개발자 양성과정 수료',
    description: 'Java/Spring 프레임워크 생태계와 React 프론트엔드 기술을 체계적으로 학습했습니다. 총 2회의 팀 프로젝트를 수행하며 Git Flow 기반의 협업 워크플로우를 익히고, 요구사항 분석부터 배포까지의 개발 전체 사이클을 경험했습니다.',
  },
  {
    date: '2025.04 - 2025.12',
    title: 'TDB_Server (스마트 알약 디스펜서, 캡스톤)',
    description: "NestJS와 TypeScript를 도입하여 타입 안정성을 확보한 IoT 백엔드 서버입니다. React Native 앱과 라즈베리파이 하드웨어 간의 실시간 데이터 동기화를 처리했으며, Gemini CLI와 Cursor 등 AI 도구를 적극 활용하여 개발 생산성을 극대화했습니다.",
  },
  {
    date: '2024.10 - 2024.12',
    title: 'CRP_Server (중고거래 플랫폼, 캡스톤)',
    description: "Express.js와 JavaScript를 사용하여 구축한 경량화된 백엔드 서버입니다. REST API의 기본 원칙을 준수하여 엔드포인트를 설계했고, WebSocket을 활용한 실시간 채팅 기능의 기초를 다졌습니다.",
  },
];

export const coreValuesData: CoreValue[] = [
  {
    title: '전체적인 계획 수립',
    icon: FaBook,
    description: '프로젝트의 전체적인 계획을 수립하고 일정을 관리하여 프로젝트를 원활하게 진행합니다.',
  },
  {
    title: '원활한 소통',
    icon: FaComments,
    description: '명확한 커뮤니케이션을 통해 팀과의 협업을 원활하게 이끌어갑니다.',
  },
  {
    title: '문제 해결력',
    icon: FaLightbulb,
    description: '원인을 파악하고 문제를 해결하는 과정에서 성장하고 있습니다.',
  },
];

export const aboutData = {
  quote: '데이터의 흐름을 꿰뚫고, 견고한 서비스 아키텍처를 설계합니다',
  information: {
    name: '김민준',
    education: '경동대학교 컴퓨터공학과',
    contact: 'alswns6258@gmail.com',
    notion: 'https://github.com/wantraiseapomeranian',
  },
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend & Database',
    skills: [
      {
        name: 'Java',
        icon: FaJava,
        percentage: 85,
        description: '객체지향 프로그래밍과 디자인 패턴을 활용한 백엔드 개발',
        color: '#ED8B00',
      },
      {
        name: 'Spring Boot',
        icon: SiSpringboot,
        percentage: 85,
        description: 'RESTful API 개발 및 마이크로서비스 아키텍처 구현',
        color: '#6DB33F',
      },
      {
        name: 'Oracle SQL',
        icon: SiOracle,
        percentage: 80,
        description: '데이터베이스 설계 및 쿼리 최적화',
        color: '#F80000',
      },
      {
        name: 'Swagger UI',
        icon: SiSwagger,
        percentage: 70,
        description: 'RESTful API 문서화 및 테스트 도구',
        color: '#85EA2D',
      },
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      {
        name: 'React',
        icon: FaReact,
        percentage: 75,
        description: '컴포넌트 기반 UI 개발 및 상태 관리',
        color: '#61DAFB',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        percentage: 80,
        description: 'ES6+ 문법을 활용한 모던 자바스크립트 개발',
        color: '#F7DF1E',
      },
      {
        name: 'Axios',
        icon: SiAxios,
        percentage: 90,
        description: 'HTTP 클라이언트 라이브러리를 활용한 API 통신',
        color: '#5A29E4',
      },
    ],
  },
  {
    title: 'Collaboration & DevOps',
    skills: [
      {
        name: 'Docker',
        icon: FaDocker,
        percentage: 50,
        description: '컨테이너 기반 애플리케이션 배포 및 관리',
        color: '#2496ED',
      },
      {
        name: 'Kubernetes',
        icon: SiKubernetes,
        percentage: 50,
        description: '컨테이너 오케스트레이션 및 클러스터 관리',
        color: '#326CE5',
      },
      {
        name: 'AWS',
        icon: FaAws,
        percentage: 80,
        description: '클라우드 인프라 구축 및 관리',
        color: '#FF9900',
      },
      {
        name: 'Jenkins',
        icon: SiJenkins,
        percentage: 70,
        description: 'CI/CD 파이프라인 구축 및 자동화',
        color: '#D24939',
      },
      {
        name: 'Git',
        icon: SiGit,
        percentage: 85,
        description: '버전 관리 및 협업 워크플로우',
        color: '#F05032',
      },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: '컨텐츠 리뷰 사이트 프로젝트(Review Tag)',
    thumbnail: '/assets/review_tag_main.png',
    description: '기존의 정적인 리뷰 사이트에 더 나아가 컨텐츠 관련 퀴즈 및 커뮤니티 기능들을 추가하여 사용자 친화적인 서비스를 제공하였고, 리뷰어 신뢰도 시스템을 도입하여 리뷰 품질을 향상시켰습니다.',
    tags: ['Java', 'Spring Boot', 'MyBatis', 'Spring Security', 'Oracle SQL',
          'React', 'JavaScript', 'Jotai', 'Axios', 'Bootstrap'],
    githubUrl: [
      'https://github.com/wantraiseapomeranian/reviewTag-be.git',
      'https://github.com/wantraiseapomeranian/reviewTag-fe.git',
    ],
    deployUrl: 'https://example.com/review-tag',
    troubleshooting: [
      {
        title: '퀴즈 하트 차감 시점 변경 및 우회 방지',
        problem: '하트 차감 시점을 "제출 시"로 변경했으나, 하트 부족 시에도 게임 진입이 가능해 문제를 풀고도 제출하지 못하는 부정적인 경험(UX)과, 퀴즈 도중 이탈하거나 새로고침하여 하트 소모를 회피할 수 있는 로직 상의 허점이 존재했습니다.',
        solution: '백엔드는 제출 시 차감 로직을 유지하여 트랜잭션을 보장하되, 프론트엔드 진입 단계(퀴즈 시작, 재도전)에서 하트 보유 여부를 사전 검증하는 "이중 방어 로직"을 구현했습니다. 추가로 게임 종료 시 서버 데이터와 클라이언트 상태를 동기화하여 서버와 클라이언트 간의 데이터 불일치를 방지하였습니다.',
        result: '사용자 친화적인 UX(퀴즈 제출 시 하트 차감)를 유지하면서도 무분별한 재시도 및 재화 소모 회피를 원천 차단하여 시스템의 공정성을 확보했습니다.',
      },
    ],
  },
  {
    title: '개인 쇼핑몰 프로젝트(King Heart)',
    thumbnail: '/assets/king_heart_main.png',
    description: '개인이 운영하는 쇼핑몰 사이트를 구현하면서 상품 카테고리 구현, 상품 옵션 방식(SKU)을 구현하여 재고 추가 및 관리가 용이하게 하였고, 장바구니 담기부터 카카오페이 결제까지의 로직 구현을 완료하였습니다.',
    tags: ['Java', 'Spring Boot', 'JSP', 'Ajax', 'jQuery', 'Oracle SQL'],
    githubUrl: 'https://github.com/wantraiseapomeranian/kingHeart.git',
    deployUrl: 'https://example.com/king-heart',
    troubleshooting: [
      {
        title: '상품 옵션 방식 개선',
        problem: '상품별 옵션(색상, 사이즈 등)을 각각 별도 컬럼으로 관리할 경우, 새로운 옵션 속성이 추가될 때마다 DB 스키마를 변경해야 하는 확장성 문제가 있었으며, 조합된 옵션별로 독립적인 재고를 추적하기 어려웠습니다',
        solution: "'상품-SKU' 간의 1:N 관계를 정의하는 SKU(Stock Keeping Unit) 방식을 도입했습니다. 관리자가 색상과 사이즈를 입력하면 백엔드에서 이를 하나의 옵션명으로 조합하여 독립적인 레코드로 생성하도록 구현했습니다.",
        result: '옵션 조합별로 실시간 재고 차감 및 품절 처리가 가능해졌으며, 복잡한 다중 조인 없이도 데이터의 원자성과 무결성을 확보했습니다.',
      },
    ],
  },
];

export const featuredProjectsDescription = '주요 프로젝트들을 통해 다양한 기술 스택과 문제 해결 경험을 쌓았습니다.';

export const otherExperienceDescription = '캡스톤 프로젝트와 해커톤 참여를 통해 기본 기술들을 학습하고 성장하고 있습니다.';

export const otherExperienceData: OtherExperience[] = [
  {
    title: '경기 기후 바이브코딩 해커톤 개발 트랙',
    summary: '국토지리정보원 특별상을 수상한 기후 데이터 시각화 웹 애플리케이션 개발',
    highlights: [
      'React와 Tailwind CSS를 활용한 반응형 UI/UX 설계 및 구현',
      'Leaflet 지도 라이브러리를 통한 실시간 기후 데이터 시각화',
      '바이브 코딩 방식을 통한 아이디어 구상부터 프로토타입까지 5시간 내 완성',
      'Vercel을 활용한 빠른 배포 및 성능 최적화'
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Leaflet', 'Vercel'],
    githubUrl: 'https://github.com/wantraiseapomeranian/green-life-scouter.git',
  },
  {
    title: 'TDB_Server(캡스톤)',
    summary: 'IoT 하드웨어와 모바일 앱을 연결하는 하이브리드 아키텍처 기반의 NestJS 백엔드 서버',
    highlights: [
      'React Native 앱과 Raspberry Pi 하드웨어 클라이언트 간의 실시간 데이터 동기화 처리',
      'Gemini CLI 및 AI 도구(Cursor)를 활용한 워크플로우 최적화 및 빠른 기능 구현',
      '타입 안정성을 위한 TypeScript 도입 및 RESTful API 설계',
      'MySQL 데이터베이스를 활용한 약물 관리 및 사용자 데이터 처리 시스템 구축'
    ],
    techStack: ['NestJS', 'TypeScript', 'RESTful API', 'MySQL', 'Raspberry Pi', 'Gemini CLI', 'cursor'],
    githubUrl: 'https://github.com/wantraiseapomeranian/TDB_Server.git',
  },
  {
    title: 'CRP_Server(캡스톤)',
    summary: 'Express.jS 기반의 확장 가능한 RESTful API 서버 및 WebSocket 실시간 통신 구현',
    highlights: [
      'Express.js 프레임워크를 활용한 모듈화된 백엔드 아키텍처 설계',
      'RESTful API 설계 원칙을 준수한 엔드포인트 구현 및 문서화',
      'WebSocket을 통한 실시간 양방향 통신 기능 구현',
      'MySQL 데이터베이스 설계 및 쿼리 최적화를 통한 성능 개선'
    ],
    techStack: ['ExpressJS', 'JavaScript', 'REST API', 'WebSocket', 'MySQL'],
    githubUrl: 'https://github.com/wantraiseapomeranian/CRP_Server.git',
  },
];

