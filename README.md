# Portfolio Website

개인 포트폴리오 웹사이트입니다. React와 TypeScript를 기반으로 제작된 모던하고 반응형인 Single Page Application(SPA)입니다.

## 🧷 링크
https://minjun-portfolio.site/


## 📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [빌드 및 배포](#빌드-및-배포)
- [커스터마이징](#커스터마이징)
- [섹션 설명](#섹션-설명)

## 🎯 프로젝트 소개

이 포트폴리오 웹사이트는 개발자의 기술 스택, 프로젝트 경험, 교육 이력 등을 체계적으로 보여주는 개인 포트폴리오입니다. 

**핵심 철학**: "데이터의 흐름을 꿰뚫고, 견고한 서비스 아키텍처를 설계합니다"

- 모던하고 깔끔한 UI/UX 디자인
- 완전 반응형 웹 디자인 (모바일, 태블릿, 데스크톱)
- 부드러운 스크롤 애니메이션 및 인터랙션
- Single Page Application 구조

## 🛠 기술 스택

### Core
- **React 19.2.3** - UI 라이브러리
- **TypeScript 5.9.3** - 타입 안정성
- **Vite 7.2.4** - 빠른 빌드 도구 및 개발 서버

### Styling
- **styled-components 6.1.19** - CSS-in-JS 스타일링
- **Pretendard Font** - 한글 최적화 폰트

### Animation & Icons
- **framer-motion 12.23.26** - 부드러운 애니메이션
- **react-icons 5.5.0** - 아이콘 라이브러리

### Development
- **@vitejs/plugin-react** - Vite React 플러그인
- **TypeScript** - 정적 타입 검사

## ✨ 주요 기능

### 1. 헤더 (Header)
- 스크롤 시 상단 고정 (Sticky Header)
- 부드러운 스크롤 네비게이션
- 반응형 메뉴

### 2. 히어로 섹션 (Hero Section)
- 프로필 이미지 및 자기소개
- Tech Stack 태그 표시
- "What I Do" 카드 그리드 (Frontend, Backend, DevOps)
- Education & Experience 타임라인

### 3. About 섹션
- 개발 철학 명언
- Core Values 카드 (3개)
- 코드 에디터 스타일 정보 섹션

### 4. Skills 섹션
- 기술 스택 카테고리별 분류
  - Backend & Database
  - Frontend & Mobile
  - Collaboration & DevOps
- 각 스킬별 진행률 표시 (Progress Bar)
- 프레임워크 공식 색상 적용

### 5. Projects 섹션
- Featured Projects (주요 프로젝트)
  - 썸네일 이미지
  - 프로젝트 설명
  - 기술 스택 태그
  - GitHub 링크 (복수 지원)
- Other Experience (기타 경험)
  - 프로젝트 요약 및 하이라이트
  - 기술 스택 표시
  - GitHub 링크

## 📁 프로젝트 구조

```
PortFolio-MINJUN/
├── public/
│   └── assets/
│       ├── favicon.png
│       └── minjun_profile.jpg
├── src/
│   ├── components/
│   │   ├── common/          # 재사용 가능한 공통 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── SectionTitle.tsx
│   │   ├── Header.tsx       # 전역 헤더
│   │   └── sections/        # 섹션별 컴포넌트
│   │       ├── AboutSection.tsx
│   │       ├── HeroSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       └── SkillsSection.tsx
│   ├── constants/
│   │   └── data.ts          # 모든 텍스트 데이터 및 설정
│   ├── styles/
│   │   └── GlobalStyle.ts   # 전역 스타일
│   ├── types/
│   │   └── styled.d.ts      # styled-components 타입 정의
│   ├── App.tsx              # 메인 앱 컴포넌트
│   ├── main.tsx             # 엔트리 포인트
│   └── theme.ts             # 테마 설정 (색상, 폰트, 레이아웃)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm

### 설치

1. 저장소 클론
```bash
git clone https://github.com/your-username/portfolio.git
cd PortFolio-MINJUN
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

### 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `dist/` 디렉토리에 생성됩니다.

### 프리뷰

빌드된 결과물을 미리보려면:

```bash
npm run preview
```

## 📦 빌드 및 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 프로젝트 import
4. 빌드 설정:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy 클릭

### Netlify 배포

1. [Netlify](https://www.netlify.com)에 가입
2. GitHub 저장소 연결
3. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy site 클릭

### GitHub Pages 배포

1. `vite.config.ts`에 base 경로 추가:
```typescript
export default defineConfig({
  base: '/portfolio/', // 저장소 이름
  plugins: [react()],
})
```

2. 빌드 및 배포:
```bash
npm run build
# dist 폴더의 내용을 gh-pages 브랜치에 푸시
```

## 🎨 커스터마이징

### 데이터 수정

모든 텍스트 데이터는 `src/constants/data.ts` 파일에서 관리됩니다.

#### 자기소개 수정
```typescript
export const introData = {
  headline: '여기에 헤드라인 입력',
  subtext: '여기에 서브텍스트 입력',
  techStack: ['기술1', '기술2', ...],
};
```

#### 프로젝트 추가/수정
```typescript
export const projectsData: Project[] = [
  {
    title: '프로젝트 제목',
    description: '프로젝트 설명',
    tags: ['태그1', '태그2'],
    githubUrl: 'GitHub URL',
    thumbnail: '/assets/thumbnail.jpg', // 선택사항
  },
];
```

#### 기술 스택 수정
```typescript
export const skillsData: SkillCategory[] = [
  {
    title: '카테고리명',
    skills: [
      {
        name: '기술명',
        icon: IconComponent,
        percentage: 85,
        description: '설명',
        color: '#색상코드', // 선택사항
      },
    ],
  },
];
```

### 테마 색상 변경

`src/theme.ts` 파일에서 색상 팔레트를 수정할 수 있습니다:

```typescript
export const theme = {
  colors: {
    primary: '#3182F6',      // 메인 파란색
    background: '#FFFFFF',    // 배경색
    text: {
      heading: '#191F28',     // 제목 색상
      body: '#4E5968',        // 본문 색상
    },
    gray: {
      light: '#F2F4F6',       // 카드 배경
      border: '#E5E8EB',      // 테두리
    },
  },
  // ...
};
```

### 프로필 이미지 변경

1. `public/assets/` 폴더에 새 이미지 추가
2. `src/components/sections/HeroSection.tsx`에서 경로 수정:
```typescript
<ProfileImage 
  src="/assets/your-image.jpg" 
  alt="프로필 사진"
/>
```

## 📖 섹션 설명

### Hero Section
- **Intro Area**: 프로필 이미지, 헤드라인, 서브텍스트, Tech Stack 태그
- **What I Do**: Frontend, Backend, DevOps 카드 그리드
- **Education & Experience**: 타임라인 형식의 교육 및 경력 이력

### About Section
- **Quote**: 개발 철학을 담은 명언
- **Core Values**: 3개의 핵심 가치 카드
- **Information**: 코드 에디터 스타일의 개인 정보

### Skills Section
- 카테고리별로 기술 스택을 분류하여 표시
- 각 스킬의 숙련도를 Progress Bar로 시각화
- 프레임워크별 공식 색상 적용

### Projects Section
- **Featured Projects**: 주요 프로젝트를 큰 카드로 강조
- **Other Experience**: 기타 프로젝트를 간결한 카드로 표시
- 각 프로젝트의 GitHub 링크 제공

## 🎯 디자인 시스템

### 색상
- **Primary**: `#3182F6` - 메인 브랜드 컬러
- **Text Heading**: `#191F28` - 제목 텍스트
- **Text Body**: `#4E5968` - 본문 텍스트
- **Gray Light**: `#F2F4F6` - 카드 배경
- **Gray Border**: `#E5E8EB` - 테두리

### 타이포그래피
- **Font Family**: Pretendard, system-ui, sans-serif
- **Heading**: Bold (700)
- **Body**: Regular (400)

### 레이아웃
- **Max Width**: 1200px
- **Container**: 중앙 정렬
- **Breakpoints**:
  - Mobile: 768px
  - Tablet: 1024px

## 🔧 개발 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 👤 작성자

**김민준**
- Email: alswns6258@gmail.com
- GitHub: [@wantraiseapomeranian](https://github.com/wantraiseapomeranian)

## 🙏 감사의 말

이 포트폴리오는 다음 오픈소스 프로젝트들을 사용합니다:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- [framer-motion](https://www.framer.com/motion/)
- [react-icons](https://react-icons.github.io/react-icons/)

---

**마지막 업데이트**: 2026년 1월

