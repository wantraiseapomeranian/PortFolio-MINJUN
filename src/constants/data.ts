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
  techStack: ['Java', 'Spring Boot', 'React', 'JavaScript', 'Oracle SQL'],
};

export const whatIDoData: WhatIDo[] = [
  {
    title: 'Frontend',
    icon: FaCode,
    description: 'React를 활용하여 웹과 모바일 환경 모두에서 끊김 없는 사용자 경험(UX)을 설계합니다.',
  },
  {
    title: 'Backend',
    icon: FaServer,
    description: 'Spring Boot와 NestJS를 상황에 맞게 활용하며, 비즈니스 로직에 최적화된 RESTful API 서버를 구축합니다.',
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
    title: '경기 기후 바이브 해커톤 참여',
    description: "'기후 위기 해결'을 주제로 한 무박 2일 해커톤에 참여하여 팀원들과 아이디어를 도출하고 프로토타입을 개발했습니다. 짧은 시간 내에 결과물을 만들어내는 집중력과 팀워크를 경험했습니다.",
  },
  {
    date: '2025.11 - 2025.12',
    title: '컨텐츠 리뷰 사이트 프로젝트(Review Tag)',
    description: '풀스택 개발자로 참여하여 Spring Boot 와 React를 사용하여 REST API를 구현하고, 컨텐츠 퀴즈 기능과 관리자 기능, 랭킹 페이지를 구현하였습니다.',
  },
  {
    date: '2025.10 - 2025.11',
    title: '개인 쇼핑몰 프로젝트(King Heart)',
    description: '풀스택 개발자로 참여하여 Spring boot로 백엔드를 구축하고 JSP를 통해 화면을 전송하는 MVC 패턴을 익혔고, 장바구니 기능 및 상품 카테고리 구현과 결제 기능을 구현하였습니다.',
  },
  {
    date: '2025.07 - 2025.12',
    title: 'React & Spring 활용 자바(Java) 개발자 양성과정 수료',
    description: 'Java/Spring 생태계 전반, React 기반의 웹 개발 기술을 학습하고 여러 번의 팀 프로젝트를 통해 협업 능력 및 소통 능력을 길렀습니다.',
  },
  {
    date: '2025.04 - 2025.12',
    title: 'TDB_Server(캡스톤)',
    description: "'TDB_Server'는 NestJS 프레임워크를 사용하고 TypeScript로 작성된 백엔드 프로젝트입니다. React Native 모바일 앱과 라즈베리파이 하드웨어 클라이언트를 모두 지원합니다. 해당 프로젝트는 Gemini_CLI와 cursor를 활용하여 제작되었습니다.",
  },
  {
    date: '2024.10 - 2024.12',
    title: 'CRP_Server(캡스톤)',
    description: "'CRP_Server'는 ExpressJS 프레임워크를 사용하고 JavaScript로 작성된 백엔드 프로젝트입니다. RESTful API를 구현해 백엔드의 기초를 구현했습니다.",
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
    description: 'Spring Boot와 React를 활용하여 RESTful 아키텍처를 구현하고, 컨텐츠 퀴즈와 관리자 페이지, 랭킹 페이지를 구현하였습니다.',
    tags: ['Java', 'Spring Boot', 'React', 'JavaScript', 'Axios', 'Bootstrap', 'Oracle SQL'],
    githubUrl: [
      'https://github.com/wantraiseapomeranian/reviewTag-be.git',
      'https://github.com/wantraiseapomeranian/reviewTag-fe.git',
    ],
  },
  {
    title: '개인 쇼핑몰 프로젝트(King Heart)',
    description: 'Spring Boot와 JSP를 활용한 정통 MVC 패턴을 적용하여 데이터 흐름을 명확히 제어하고 장바구니 기능과 상품 카테고리 구현과 결제 기능을 구현하였습니다.',
    tags: ['Java', 'Spring Boot', 'JSP', 'Ajax', 'jQuery', 'Oracle SQL'],
    githubUrl: 'https://github.com/wantraiseapomeranian/kingHeart.git',
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
    summary: 'ExpressJS 기반의 확장 가능한 RESTful API 서버 및 WebSocket 실시간 통신 구현',
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

