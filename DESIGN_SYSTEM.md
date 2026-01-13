# 포트폴리오 프로젝트 디자인 시스템 구조

## 프로젝트 개요
- **프레임워크**: React 19 + TypeScript
- **스타일링**: styled-components v6
- **애니메이션**: framer-motion v12
- **아이콘**: react-icons v5
- **빌드 도구**: Vite

---

## 디자인 시스템 구조

### 1. 테마 설정 (src/theme.ts)
```typescript
export const theme = {
  colors: {
    primary: '#3182F6',           // 메인 파란색 (버튼, 링크, 강조)
    background: '#FFFFFF',         // 배경색
    text: {
      heading: '#191F28',          // 제목 텍스트
      body: '#4E5968',             // 본문 텍스트
    },
    gray: {
      light: '#F2F4F6',            // 연한 회색 배경
      card: '#F9FAFB',             // 카드 배경
      border: '#E5E8EB',           // 테두리 색상
    },
  },
  fonts: {
    primary: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  layout: {
    maxWidth: '1200px',            // 섹션 최대 너비
  },
  breakpoints: {
    mobile: '768px',               // 모바일 브레이크포인트
    tablet: '1024px',              // 태블릿 브레이크포인트
  },
};
```

### 2. 전역 스타일 (src/styles/GlobalStyle.ts)
- CSS Reset (margin, padding, box-sizing)
- 폰트 설정 (Pretendard)
- 스크롤 부드러운 동작
- 기본 링크/버튼 스타일 리셋

### 3. 공통 컴포넌트 (src/components/common/)

#### Button.tsx
- **Variants**: `primary` (파란 배경), `outline` (테두리만)
- **Sizes**: `small`, `medium`, `large`
- **Props**: `$variant`, `$size`
- **호버 효과**: primary는 배경색 진하게 + 위로 이동, outline은 배경 채우기

#### Card.tsx
- **Props**: `$padding`, `$background`, `$shadow`
- **기본 스타일**: 둥근 모서리(12px), 그림자 옵션
- **호버 효과**: 그림자 있을 때 위로 이동

#### SectionTitle.tsx
- **Props**: `$align` ('left' | 'center' | 'right')
- **기본**: 2.5rem, 굵게, 제목 색상

#### ProgressBar.tsx
- **Props**: `$percentage`, `$color` (기술별 색상)
- 진행률 바 애니메이션

---

## 섹션별 컴포넌트 구조

### Header.tsx
- **위치**: 고정 상단 (fixed, z-index: 1000)
- **스크롤 효과**: 스크롤 시 배경 반투명 + 블러
- **구성**: 로고 + 네비게이션 (About, Skills, Projects)
- **스타일**: 호버 시 밑줄 애니메이션

### HeroSection.tsx

#### 구성 요소:

1. **IntroArea** (프로필 + 소개)
   - 프로필 이미지: 원형, 그림자, 회전 애니메이션
   - 헤드라인: 2.5rem 굵게
   - 서브텍스트: 1.1rem
   - 기술 스택 태그: 회색 배경, 둥근 모서리

2. **WhatIDoSection** (3개 카드 그리드)
   - Frontend, Backend Engineering, DevOps
   - 아이콘 + 제목 + 설명
   - 반응형: 태블릿 이하 1열

3. **TimelineSection** (교육/경험)
   - 수직 타임라인 (원형 포인트 + 수직선)
   - 날짜(파란색) + 제목 + 설명

### AboutSection.tsx

#### 구성 요소:

1. **QuoteSection**: 개발 철학 명언

2. **CoreValuesSection**: 3개 카드
   - 전체적인 계획 수립
   - 원활한 소통
   - 문제 해결력

3. **InformationSection**: 코드 에디터 스타일 정보 표시
   - VS Code 스타일 헤더 (빨/노/초 버튼)
   - 모노스페이스 폰트
   - 구문 강조 색상

### SkillsSection.tsx

#### 구성 요소:

- 카테고리별 분류
  - Backend & Database
  - Frontend & Mobile
  - Collaboration & DevOps
- 각 스킬 카드:
  - 아이콘 (기술별 색상)
  - 이름 + 진행률 (%)
  - 설명 텍스트
  - ProgressBar 컴포넌트

### ProjectsSection.tsx

#### 구성 요소:

1. **FeaturedProjectsSection**
   - 프로젝트 카드 (좌우 배치):
     - **ProjectThumbnail**: 썸네일 이미지
       - 그라디언트 배경 (primary → #1E6FE8)
       - 호버 시 확대 + 그림자
       - 배포 링크 아이콘 (좌하단, 작은 원형 버튼)
     - **ProjectContent**: 텍스트 영역
       - 제목, 설명, 태그, GitHub 링크 버튼
       - Trouble Shooting 버튼 (진한 회색 배경)
       - 아코디언 컨텐츠:
         - Problem (빨간색 계열)
         - Solution (파란색 계열)
         - Result (초록색 계열)

2. **OtherExperienceSection**
   - 리스트 형태 (테두리 있는 카드)
   - 요약 + 하이라이트 + 기술 스택 + GitHub 링크

---

## 데이터 구조 (src/constants/data.ts)

### Project 인터페이스
```typescript
interface Project {
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
```

---

## 주요 디자인 패턴

### 색상 사용
- **Primary (#3182F6)**: 버튼, 링크, 강조, 타임라인 포인트
- **빨간색 계열**: Problem (트러블슈팅)
- **파란색 계열**: Solution (트러블슈팅)
- **초록색 계열**: Result (트러블슈팅)
- **회색 계열**: 배경, 카드, 테두리

### 그라디언트
- 썸네일 배경: `linear-gradient(135deg, primary 0%, #1E6FE8 100%)`
- 카드 배경: 반투명 + 블러 효과

### 애니메이션
- **framer-motion**: 스크롤 시 등장 애니메이션
- **호버 효과**: transform, box-shadow 변화
- **트랜지션**: 0.2s ~ 0.5s ease

### 반응형 디자인
- **모바일 (< 768px)**: 1열 레이아웃, 작은 폰트, 패딩 축소
- **태블릿 (< 1024px)**: 2열 → 1열 전환
- **데스크톱**: 최대 1200px 중앙 정렬

---

## 파일 구조

```
src/
├── App.tsx                    # 메인 앱 (섹션 조합)
├── theme.ts                   # 디자인 시스템 중앙 설정
├── styles/
│   └── GlobalStyle.ts         # 전역 스타일
├── constants/
│   └── data.ts                # 모든 텍스트 데이터
├── components/
│   ├── Header.tsx              # 상단 네비게이션
│   ├── common/                 # 재사용 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ProgressBar.tsx
│   │   └── SectionTitle.tsx
│   └── sections/               # 섹션별 컴포넌트
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       └── ProjectsSection.tsx
```

---

## 주요 스타일 특징

- **Glassmorphism**: 반투명 배경 + backdrop-filter blur
- **그림자**: 다층 그림자 (box-shadow)
- **둥근 모서리**: 8px ~ 24px (컴포넌트별 상이)
- **간격**: 1rem ~ 4rem (섹션별 상이)
- **타이포그래피**: Pretendard 폰트, 명확한 계층 구조

---

## 수정 시 주의사항

1. **색상 변경**: `theme.ts`의 `colors` 객체 수정 → 전체 반영
2. **폰트 변경**: `theme.ts`의 `fonts.primary` 수정
3. **레이아웃 너비**: `theme.ts`의 `layout.maxWidth` 수정
4. **개별 컴포넌트 스타일**: 각 섹션 파일의 `styled-components` 수정
5. **일관성 유지**: Primary 색상은 버튼/링크/강조에 공통 사용

---

## 디자인 수정 가이드

### 색상 테마 변경
```typescript
// src/theme.ts 수정
colors: {
  primary: '#원하는색상코드',
  // ...
}
```

### 레이아웃 조정
```typescript
// src/theme.ts 수정
layout: {
  maxWidth: '원하는너비',
}
breakpoints: {
  mobile: '원하는브레이크포인트',
  tablet: '원하는브레이크포인트',
}
```

### 개별 컴포넌트 스타일 수정
각 섹션 파일(`src/components/sections/*.tsx`) 내부의 `styled-components`에서 수정

---

## 버전 정보

- React: 19.2.3
- TypeScript: 5.9.3
- styled-components: 6.1.19
- framer-motion: 12.23.26
- react-icons: 5.5.0
