import { FaCode, FaServer, FaCloud, FaDatabase } from 'react-icons/fa';
import { FaBook, FaComments, FaLightbulb } from 'react-icons/fa';
import { FaJava, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiKubernetes, SiJenkins, SiGit, SiOracle, SiSwagger, SiAxios, SiSpringsecurity, SiNestjs, SiMysql, SiApache, SiTypescript, SiTailwindcss, SiPostman, SiNginx } from 'react-icons/si';

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
  headline: '인프라를 이해하고 서비스의 안정성을 책임지는 백엔드 개발자 김민준입니다.',
  subtext: '데이터의 무결성과 시스템의 안정성을 최우선으로 고려합니다. 단순한 기능 구현을 넘어, 확장 가능한 아키텍처를 설계하고 사용자 경험까지 고려한 최적의 솔루션을 고민합니다.',
  techStack: ['Java', 'Spring Boot','Spring Security', 'MyBatis', 'Oracle SQL', 'React', 'AWS', 'Docker', 'Nginx'],
};

export const whatIDoData: WhatIDo[] = [
  {
    title: 'Frontend',
    icon: FaCode,
    description: 'React를 활용하여 웹 환경을 아우르는 서비스를 구축합니다. 재사용 가능한 컴포넌트 설계와 상태 관리를 통해 사용자 경험(UX)을 최적화합니다.',
  },
  {
    title: 'Backend Engineering',
    icon: FaServer,
    description: 'Spring Boot와 Oracle을 기반으로 견고한 비즈니스 로직을 구현합니다. 트랜잭션 관리를 통한 데이터 무결성 보장과 확장 가능한 RESTful API 설계에 집중합니다.',
  },
  {
    title: 'DevOps',
    icon: FaCloud,
    description: 'AWS EC2와 Docker Compose를 활용해 컨테이너 기반의 배포 환경을 직접 구축합니다. Nginx 리버스 프록시 및 SSL 적용을 통해 보안과 안정성을 고려한 인프라를 설계합니다.',
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
    title: '데이터 무결성 추구', 
    icon: FaDatabase,
    description: '결제 시스템을 구축하며 1원의 오차도 허용하지 않는 정합성을 경험했습니다. 예외 상황에서도 시스템의 신뢰를 지키는 견고한 로직을 최우선으로 합니다.',
  },
  {
    title: '근거 있는 소통',
    icon: FaComments,
    description: '막연한 주장보다는 명확한 API 명세서와 DB 설계도를 통해 팀을 설득합니다. 문서화를 통해 불필요한 커뮤니케이션 비용을 줄이고 개발 방향을 일치시킵니다.',
  },
  {
    title: '서비스 관점의 시야',
    icon: FaServer,
    description: '코드 작성을 넘어, Docker와 AWS를 활용한 배포 환경까지 고려합니다. 개발과 운영의 간극을 줄이고, 실제 사용자가 만나는 서비스의 안정성을 고민합니다.',
  },
];

export const aboutData = {
  quote: '데이터의 흐름을 꿰뚫고, 견고한 서비스 아키텍처를 설계합니다',
  information: {
    name: '김민준',
    education: '경동대학교 컴퓨터공학과',
    contact: 'alswns6258@gmail.com',
    github: 'https://github.com/wantraiseapomeranian',
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
        name: 'Swagger UI',
        icon: SiSwagger,
        percentage: 70,
        description: 'RESTful API 문서화 및 테스트 도구',
        color: '#85EA2D',
      },
      {
        name: 'Spring Security',
        icon: SiSpringsecurity,
        percentage: 70,
        description: '인증 및 권한 부여를 위한 강력한 보안 프레임워크 적용',
        color: '#6DB33F',
      },
      {
        name: 'MyBatis',
        icon: SiApache,
        percentage: 80,
        description: 'SQL 매핑 프레임워크를 활용한 데이터 영속성 처리',
        color: '#C40202',
      },
      {
        name: 'Oracle SQL',
        icon: SiOracle,
        percentage: 80,
        description: '데이터베이스 설계 및 쿼리 최적화',
        color: '#F80000',
      },
      {
        name: 'NestJS',
        icon: SiNestjs,
        percentage: 75,
        description: '효율적이고 확장 가능한 서버 사이드 애플리케이션 구축',
        color: '#E0234E',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        percentage: 70,
        description: '정적 타입을 통한 안정적인 코드 작성 및 유지보수',
        color: '#3178C6',
      },
      {
        name: 'MySQL',
        icon: SiMysql,
        percentage: 70,
        description: '관계형 데이터베이스 관리 및 최적화',
        color: '#4479A1',
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
        name: 'JavaScript (ES6+)',
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
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        percentage: 60,
        description: '유틸리티 퍼스트 CSS 프레임워크를 활용한 신속한 UI 개발',
        color: '#06B6D4',
      },
    ],
  },
  {
    title: 'Infra & DevOps',
    skills: [
      {
        name: 'Docker',
        icon: FaDocker,
        percentage: 60,
        description: 'Docker Compose를 활용한 다중 컨테이너 환경 구축 및 네트워크 관리',
        color: '#2496ED',
      },
      {
        name: 'AWS',
        icon: FaAws,
        percentage: 70,
        description: '클라우드 인프라 구축 및 관리',
        color: '#FF9900',
      },
      {
        name: 'Nginx',
        icon: SiNginx,
        percentage: 60,
        description: '리버스 프록시 설정 및 SSL 인증서 적용을 통한 보안 강화',
        color: '#009639',
      },
      {
        name: 'Git & GitHub',
        icon: SiGit,
        percentage: 85,
        description: '버전 관리 및 협업 워크플로우',
        color: '#F05032',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        percentage: 85,
        description: 'API 개발 생산성 향상 및 테스트 자동화',
        color: '#FF6C37',
      },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: '컨텐츠 리뷰 사이트 프로젝트(Review Tag)',
    thumbnail: '/assets/review_tag_main.png',
    description: 'TMDB API 기반의 영화/TV 정보 제공 및 퀴즈 게이미피케이션 플랫폼입니다. 프로젝트 종료 후 Docker와 AWS EC2를 활용해 직접 배포 환경을 구축하여, 현재 실제 사용자가 접속 가능한 라이브 서비스로 고도화했습니다.',
    tags: [
          'Java', 'Spring Boot', 'MyBatis', 'Spring Security', 'Oracle SQL',
          'React', 'JavaScript', 'Jotai', 'Axios',
          'Docker', 'Nginx', 'AWS'
        ],
    githubUrl: [
      'https://github.com/ReviewTag-Project/ReviewTag-Backend.git',
      'https://github.com/ReviewTag-Project/ReviewTag-Frontend.git',
    ],
    deployUrl: 'https://review.minjun-portfolio.site',
    troubleshooting: [
      {
        title: '퀴즈 하트 차감 시점 변경 및 우회 방지',
        problem: '하트 차감 시점을 "제출 시"로 변경했으나, 하트 부족 시에도 게임 진입이 가능해 문제를 풀고도 제출하지 못하는 부정적인 경험(UX)과, 퀴즈 도중 이탈하거나 새로고침하여 하트 소모를 회피할 수 있는 로직 상의 허점이 존재했습니다.',
        solution: '백엔드는 제출 시 차감 로직을 유지하여 트랜잭션을 보장하되, 프론트엔드 진입 단계(퀴즈 시작, 재도전)에서 하트 보유 여부를 사전 검증하는 "이중 방어 로직"을 구현했습니다. 추가로 게임 종료 시 서버 데이터와 클라이언트 상태를 동기화하여 서버와 클라이언트 간의 데이터 불일치를 방지하였습니다.',
        result: '사용자 친화적인 UX(퀴즈 제출 시 하트 차감)를 유지하면서도 무분별한 재시도 및 재화 소모 회피를 원천 차단하여 시스템의 공정성을 확보했습니다.',
      },
      {
        title: 'Docker 컨테이너 네트워크 및 Nginx 리버스 프록시 설정',
        problem: '로컬에서는 잘 작동하던 서비스가 Docker 배포 시 컨테이너 간 통신 실패로 인해 502 Bad Gateway 에러가 발생했습니다. 또한, HTTPS 적용을 위한 SSL 인증서 설정이 필요했습니다.',
        solution: 'Docker Compose의 내부 DNS를 활용하여 컨테이너 간 통신 경로를 재설정하고, Nginx를 리버스 프록시로 배치하여 외부 요청(80/443)을 내부 Spring Boot(8080)로 라우팅하도록 아키텍처를 개선했습니다.',
        result: 'Certbot을 통해 SSL 인증서를 자동 발급받아 보안(HTTPS)을 강화했으며, 안정적인 무중단 배포 환경을 구축하는 데 성공했습니다.',
      },
    ],
  },
  {
    title: '쇼핑몰 프로젝트(King Heart)',
    thumbnail: '/assets/king_heart_main.png',
    description: '주문/결제/재고 관리가 유기적으로 연결된 B2C 커머스 플랫폼입니다. 프로젝트 종료 후 독자적으로 카카오페이 실결제 프로세스(승인/취소)를 고도화하였으며, Docker 컨테이너 기반의 배포 환경을 직접 구축하여 운영 중입니다.',
    tags: [
      'Java', 'Spring Boot', 'JSP', 'Oracle SQL', 
      'Spring WebFlux',
      'Docker', 'Nginx', 'AWS'
    ],
    githubUrl: 'https://github.com/wantraiseapomeranian/kingHeart.git',
    deployUrl: 'https://shop.minjun-portfolio.site',
    troubleshooting: [
      {
        title: '상품 옵션 방식 개선',
        problem: '상품별 옵션(색상, 사이즈 등)을 각각 별도 컬럼으로 관리할 경우, 새로운 옵션 속성이 추가될 때마다 DB 스키마를 변경해야 하는 확장성 문제가 있었으며, 조합된 옵션별로 독립적인 재고를 추적하기 어려웠습니다',
        solution: "'상품-SKU' 간의 1:N 관계를 정의하는 SKU(Stock Keeping Unit) 방식을 도입했습니다. 관리자가 색상과 사이즈를 입력하면 백엔드에서 이를 하나의 옵션명으로 조합하여 독립적인 레코드로 생성하도록 구현했습니다.",
        result: '옵션 조합별로 실시간 재고 차감 및 품절 처리가 가능해졌으며, 복잡한 다중 조인 없이도 데이터의 원자성과 무결성을 확보했습니다.',
      },
      {
        title: '결제 데이터 정합성 보장 (Transaction & Rollback)',
        problem: '외부 PG사(카카오페이)의 결제 승인은 성공했으나, 네트워크 불안정 등으로 내부 DB에 주문 내역이 저장되지 않는 "Ghost Order" 발생 위험이 있었습니다.',
        solution: '결제 승인과 주문 생성을 하나의 트랜잭션(@Transactional)으로 묶고, 내부 로직 실패 시 즉시 결제 취소 API를 호출하는 "망취소(자동 롤백) 로직"을 구현하여 원자성을 보장했습니다.',
        result: '테스트 환경의 강제 오류 상황에서도 결제 금액과 주문 데이터가 100% 일치하는 무결성을 확보했습니다.',
      },
    ],
  },
];

export const featuredProjectsDescription = '단순한 기능 구현을 넘어, 서비스의 안정성과 확장 가능한 아키텍처를 고민합니다. 비즈니스 로직의 깊이와 인프라 구축의 넓이를 모두 경험했습니다.';

export const otherExperienceDescription = '캡스톤 프로젝트와 해커톤 참여를 통해 기본 기술들을 학습하고 성장하고 있습니다.';

export const otherExperienceData: OtherExperience[] = [
  {
    title: '경기 기후 바이브코딩 해커톤 (개발 트랙)',
    summary: '🏆 국토지리정보원장상(특별상) 수상 | 기후 데이터 시각화 웹 플랫폼',
    highlights: [
      '기획부터 배포까지 5시간 제한의 극한 환경에서 Agile하게 MVP(최소 기능 제품) 완성',
      'React와 Leaflet 라이브러리를 결합하여 대용량 기후 데이터를 지도 위에 효과적으로 시각화',
      'Vercel을 활용한 CI/CD 및 즉각적인 배포 파이프라인 구축',
      '팀원과의 긴밀한 협업으로 바이브 코딩(AI 협업) 방식의 효율성 극대화'
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Leaflet', 'Vercel'],
    githubUrl: 'https://github.com/wantraiseapomeranian/green-life-scouter.git',
  },
  {
    title: 'TDB_Server(캡스톤)',
    summary: 'IoT 하드웨어와 모바일 앱을 연결하는 하이브리드 아키텍처 기반의 NestJS 백엔드 서버',
    highlights: [
      'Raspberry Pi(하드웨어)와 React Native(앱) 간의 실시간 데이터 동기화 프로토콜 설계',
      'TypeScript의 정적 타이핑을 통해 하드웨어 통신 간 발생할 수 있는 데이터 오류 사전 방지',
      'AI 개발 도구(Cursor, Gemini)를 워크플로우에 적극 도입하여 개발 생산성 200% 향상',
      'MySQL Relation 설계를 통한 다대다(N:M) 약물-사용자 관계 데이터 모델링'
    ],
    techStack: ['NestJS', 'TypeScript', 'MySQL', 'Raspberry Pi', 'Cursor IDE'],
    githubUrl: 'https://github.com/wantraiseapomeranian/TDB_Server.git',
  },
  {
    title: 'CRP_Server(캡스톤)',
    summary: 'Node.js 생태계와 비동기 처리를 이해하기 위한 Express.js 기반의 서버',
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

