# TEAM4 - 사이클링홈런⚾️

## ⭐️ About Team
> 유데미 X 스나이퍼팩토리 React 2기 4팀
- 팀명: 사이클링홈런
- 팀소개: 완봉과 퍼펙트게임을 모두 이루며, 최고의 성과를 만들어가자💥
- 팀목표: 최고의 UI/UX/DX를 위하여 런앤히트 ⚾
- 프로젝트 기업: KT

## 🚀 Project

- (24.09.02~24.09.27) React로 KTwiz 정보제공 페이지 만들기
  - 기존 KT wiz 홈페이지의 UI를 전면 개편하였습니다.
  - 딱딱하고 불편했던 기존 UX를 대폭 개선하였습니다.
  - 사용자 경험을 향상시키기 위해 흥미를 유발하는 애니메이션을 추가하였습니다.
  - 데이터가 요청되는 부분에 스켈레톤 ui를 적용하여 로딩 중에 빈화면이 뜨지 않습니다.
 
&nbsp;

## 💻 Preview
![image](https://github.com/user-attachments/assets/6213d4d1-c2ec-4cbe-b3cc-0f01a5e47616)

&nbsp;

## 🔦 기능

### ⚾️ 메인페이지

1. 풀페이지 스크롤링
> 각 섹션 단위로 스크롤되어 사용자의 스크롤 경험을 개선하고 편의성을 높였습니다.

2. HERO 섹션
> - `framer motion`을 활용한 애니메이션 효과로 사용자의 흥미를 유발하였습니다.
> - KT Wiz의 아이덴티티를 강조하였습니다.

![HERO섹션](https://github.com/user-attachments/assets/cc108921-518b-4984-a0fc-1825621c49c0)

3. GAME 섹션
> - 일주일 치 경기(종료된 경기 포함)를 캐러셀로 구현하여 한 눈에 볼 수 있게 제작하였습니다.
> - 승패, 승률 뿐 아니라 AI 분석을 통한 가을 야구 진출 확률을 제공합니다.
> - `생중계 보기` 버튼을 통해 TVING으로 직접 연결되어 즉시 경기 시청이 가능합니다.

![GAME섹션](https://github.com/user-attachments/assets/f77c5d01-1666-4251-bc0a-bafe6ac78900)

4. NEWS 섹션
> 최신 날짜 기준으로 4개의 뉴스의 썸네일과 제목을 제공하여 최근 소식을 간편하게 확인할 수 있습니다.

![NEWS섹션](https://github.com/user-attachments/assets/6e76c1c4-9b96-414e-9733-bd69e9a198c0)


5. SHOP 섹션
> KT Wiz Store의 실제 상품 중 5개를 무작위로 뽑아 제공하며, 이로써 스토어에 대한 접근성을 향상시켰습니다.

![SHOP섹션](https://github.com/user-attachments/assets/c3f05475-743f-49c7-8c79-2ea57933ea8a)

6. EVENT 섹션
> 다양한 이벤트와 보도 자료를 자동 캐러셀로 표시하였고 클릭 시 해당 내용으로 연결됩니다.

![EVENT섹션](https://github.com/user-attachments/assets/fbfe1ad5-5e7c-4428-8e11-c2313213f25c)

7. FOOTER 섹션
> KT Wiz 공식 홈페이지의 `footer ui`를 재현하였으며, 기존의 문제점을 드롭다운 애니메이션과 모달 형태로 개선하였습니다.

![FOOTER섹션](https://github.com/user-attachments/assets/65df6ab8-5ed9-4962-b401-a882125f0a27)

8. 사이드바
> 우측 고정 사이드바를 추가하고 자주 이용하는 서비스들로 구성하여 접근성을 높였습니다.

![사이드바](https://github.com/user-attachments/assets/4a5fb036-f325-4ea9-a815-741d932c5bc1)

&nbsp;

### ⚾️ KT WIZ

1. 구단 소개
> 애니메이션으로 구단 소개를 차례로 보여주며 사용자의 몰입감을 향상 시켰습니다.
  
![구단소개](https://github.com/user-attachments/assets/ede3bd18-9533-444e-ae1a-34f0733472f1)

2. 구단 연혁
> 스크롤과 카드 플립 애니메이션을 활용하였고, 연도의 상징이 되는 사진을 보여줌으로써 KT Wiz의 연혁을 직관적으로 각인시킬 수 있도록 했습니다.

![구단연혁](https://github.com/user-attachments/assets/62a554e5-4f4a-4bfd-98fe-bf575fd9ff2c)

&nbsp;

### ⚾️ WIZ PARK

1. 구장 소개
> 애니메이션으로 구장 소개를 차례로 보여주며 사용자의 몰입감을 향상 시켰습니다.

![구장소개](https://github.com/user-attachments/assets/d2fa358c-000d-46ef-9445-cf6f03b054b9)

2. 구장 안내도
> - 기존과 달리 한 화면에 모든 내용이 들어갈 수 있도록 정보를 넣어 사용자 경험을 높였습니다.
> - 이미지 확장자를 `svg`로 하여 작은 글씨도 깨지지 않게 하고 이미지 최적화를 했습니다.

![구장 안내도](https://github.com/user-attachments/assets/9be4bc61-b217-4360-83d1-27eeec761ff5)

&nbsp;

### ⚾️ DIRECTION

1. 찾아오기
> 네이버 지도API를 통해 수원 KT위즈파크의 위치를 쉽게 파악할 수 있도록 개선했습니다.

![찾아오기](https://github.com/user-attachments/assets/61d0c30f-a876-4383-b2ab-4af6beca907e)

&nbsp;

### ⚾️ GAME

1. 경기 일정
> - 일주일치의 경기 데이터를 캐러셀로 구현하였습니다.(메인페이지와 동일)
> - 달력 내부에 상대 팀과의 경기 정보를 셀에 넣었고 홈, 원정을 구분하기 쉽기 위해 색깔을 통해 구분하였습니다.
> - 기존에 없던 리스트형으로 경기 정보 보기를 추가하여 또 다른 방법으로 볼 수 있도록 하여 사용자가 선택할 수 있도록 하였습니다.
> - 로딩 중일 때는 스켈레톤UI를 적용하여 어떤 화면이 나올 지 사용자에게 보여져 UX를 높였습니다.

![game](https://github.com/user-attachments/assets/0515eaea-7eee-47ba-b941-a7570d540a3f)

2. 박스 스코어
> - 기존의 박스 스코어에 종료여부를 추가하였고 더욱 눈에 띄도록 직관적으로 표현하였습니다.
> - 주요 기록, 타자 기록, 투수 기록을 `tanstack-table`을 활용하여 대용량의 데이터를 간편하게 받아와 DX를 높였습니다. 또한, 대량의 데이터를 효율적으로 처리하여 사용자에게 빠른 응답 시간을 제공합니다.
> - 테이블이 길어져 테이블의 칼럼값을 보기 어려울 수 있어 칼럼 부분을 고정하여 한 눈에 데이터가 보여지도록 하여 UX를 높였습니다.

![boxscore](https://github.com/user-attachments/assets/0d867b9e-7f0a-41ba-8ae4-36d32c9a54bf)

3. 순위 기록

> 팀순위
> - 기존에 팀 간 승패표로 되어 있어 가독성이 떨어져 있었습니다. 이 부분을 개선하기 위해 원형 그래프를 사용해서 사용자가 승패의 비율을 직관적으로 볼 수 있게 개선했습니다.

![2024-10-13 18 34 37](https://github.com/user-attachments/assets/6c236dcf-5423-4ab3-8fa1-10aeb034b9d4)

> 투수/타자 순위
> - 기존과 달리 1위를 직관적으로 보여주며, 테이블 검색 기능과 정렬 기능을 통해 정보를 쉽게 찾을 수 있도록 합니다.

![2024-10-13 18 49 45](https://github.com/user-attachments/assets/98c944f5-54b4-4235-8bb0-8443eb70852c)

> 관중 현황
> - 기존과 달리 차트에서도 KT Wiz의 순위를 직관적으로 볼 수 있게 하며, 연도 변경 시 2번 클릭을 해야되는 불필요한 인터랙션을 줄이기 위해 1번의 클릭으로도 변경할 수 있도록 개선했습니다

![2024-10-13 18 41 27](https://github.com/user-attachments/assets/7ce7743c-20b4-44e2-8a9f-86382ccc4ebf)


4. 관전 포인트

> 상대 전적 비교
> - 기존에 눈에 잘 띄지 않았던 테이블을 위와 같이 표를 사용하여 가독성을 높였고 렌더링 시 1초 뒤에 양쪽에서 `bar`가 움직이는 애니메이션도 추가하였습니다. 이를 통해 사용자의 흥미를 돋구어 사용자 경험을 증대하였습니다.
>
> 선발 투수 비교
> - 기존의 선발 투수 정보가 단순한 테이블 형식으로 제공되어 직관성이 떨어지고 흥미를 끌지 못했던 부분을 개선하였습니다. 핵심적인 정보를 강조하여 시각적으로 돋보이게 구성하였습니다.
> - 양팀 투수의 구종은 각각 막대그래프로 표현하였으며, 구종별 비중에 따라 가장 많은 구종을 상단에 배치하고 그 아래로 차례대로 나열하여 한눈에 이해하기 쉽게 시각화하였습니다.
>
> 키 플레이어 비교
> - 기존 공식 홈페이지에는 없던 새로운 기능으로, 양 팀의 키 플레이어를 받아와 선발 투수 정보처럼 시각화하였습니다. 상단에 키 플레이어의 개념을 설명하여 사용자가 이해할 수 있도록 하였으며, 경기의 핵심 선수들을 쉽게 파악할 수 있도록 했습니다.
> - 각 타자의 `HOT & COLD ZONE`을 함께 표시하여 타자들의 타격 패턴을 직관적으로 분석할 수 있으며, 주요 관전 포인트와 함께 키 플레이어의 중요성을 더욱 부각했습니다.
>
> 선발 라인업
> - 기존 페이지에서는 이미지를 중심으로 정보를 표현했지만, 리스트 형식으로 변경하여 더 체계적이고 깔끔하게 표현하였습니다. 
> - 특히, KT Wiz 전용 페이지라는 점을 반영하여, KT Wiz 선수들에게만 고유한 애니메이션 효과를 추가했습니다. 이를 통해 KT Wiz 팬들이 선수들에게 더욱 몰입할 수 있는 차별화된 경험을 제공하였으며, 경기와 팀에 대한 감정적 연결을 강화했습니다.
> - 그 경기에서 선정된 키 플레이어들은 더욱 눈에 띄도록 밝고 화려한 애니메이션을 추가하여, 경기의 핵심 선수들을 빠르고 쉽게 인식할 수 있도록 했습니다.

![point](https://github.com/user-attachments/assets/c1fb3010-1a72-4f6c-a842-859a7da11ed5)

&nbsp;

### ⚾️ PLAYER
1. 선수 페이지
> - 선수 페이지에서는 API 형식 및 키와 일치하지 않는 다양한 데이터 형태를 통합적으로 처리할 수 있도록 설계하였습니다.
> - 일관된 사용자 경험을 제공하며, 카드 컴포넌트를 활용하여 UI의 통일성을 개선하였습니다.
> - 단순히 이미지만 표현되어 있던 방식에서 애니메이션과 UI를 통해 다양한 정보를 표현할 수 있도록 개선하였습니다.
> - 이미지가 없는 경우에는 빈 화면이 아니라 그림자 이미지를 표현하도록 개선하였습니다.
> - 카드 컴포넌트 앞쪽에는 포지션과 같은 주요 정보를 뱃지형태로 표현하고, 뒤쪽에는 백넘버를 표시하여 유니폼과 같은 효과를 주었습니다.

![Player](https://github.com/user-attachments/assets/56e96753-7068-4df1-b0b8-876636dce467)


2. 선수 상세페이지
> - 선수 상세페이지에서는 API 형식 및 키와 일치하지 않는 다양한 데이터 형태를 통합적으로 처리할 수 있도록 설계하였습니다.
> - 일관된 사용자 경험을 제공하며, 프로필 컴포넌트를 활용하여 UI의 통일성을 개선하였습니다.
> - 기존에 없던 응원단 상세페이지를 제공하고 테이블 UI를 통해 한눈에 정보를 확인할 수 있도록 개선하였습니다.
> - 프로필에서는 개인정보와 대표 이미지를 동시에에 확인할 수 있으며, MLB에서 사용하고 있는 테이블 목록과 동일한 UI로 구성하여 정보의 질을 높였습니다.

![Player_Detail](https://github.com/user-attachments/assets/a9e5672f-c68e-40d9-9260-9151858ad799)

&nbsp;

### ⚾️ NEWS
> - 단순하고 기본적인 스타일에서 마우스 상호작용 효과를 곁들인 세련된 느낌의 테마로 변경했습니다.
> - 기존엔 없던 네이버 뉴스기사 탭을 추가하여 구단에 관심있는 사용자들의 더 많은 정보 확인에 도움이 될 것이라 예상합니다.

![WizNews](https://github.com/user-attachments/assets/6f10d4ab-ec1f-430c-a394-08e8de099376)

&nbsp;

## 🔧 Tech

<div align="center">

|      Type       |                                                                                                                  Tool                                                                                                                   |
| :-------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     Library     |                   ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black) ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white)                    |
|    Language     |                                                          ![TyoeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black)                                                          |
|     Styling     |                                                          ![TailwindCSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)                                                           |
|  Data Fetching  |          ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white) ![TanstackTable](https://img.shields.io/badge/tanstack%20table-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)           |
|   Formatting    |           ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)            |
| Package Manager |                                                                      ![Npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)                                                                       |
| Version Control |            ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)             |
|   Deployment    | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=GitHub%20Actions&logoColor=white) |
|  Collaboration  |             ![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)              |

</div>

&nbsp;

## 🔩 프로젝트 설정 및 실행 방법

### 1. 프로젝트 클론하기

먼저, Git 저장소에서 프로젝트를 로컬로 클론해야 합니다. 터미널(또는 명령 프롬프트)을 열고 아래 명령어를 입력합니다.

```bash
git clone https://github.com/Team-4yclingHomerun/4yclinghomerun-client.git
```

해당 명령어는 지정된 Git 저장소에서 프로젝트를 로컬 컴퓨터로 복사해옵니다.

### 2. 의존성 설치

프로젝트가 로컬에 클론된 후, 프로젝트 폴더로 이동한 다음, 필요한 패키지들을 설치해야 합니다. 
Node.js 기반 프로젝트인 경우, `npm` 명령어를 사용하여 의존성을 설치할 수 있습니다.

```bash
npm install
```

이 명령어는 `package.json` 파일에 정의된 모든 의존성(dependencies)을 자동으로 설치해 줍니다.

### 3. 개발 서버 실행

모든 의존성이 설치되면, 개발 서버를 실행하여 프로젝트를 로컬에서 테스트할 수 있습니다.

```bash
npm run dev
```

이 명령어를 통해 개발 모드에서 서버를 시작하며, 변경 사항이 있을 때 자동으로 갱신됩니다.
이후, 브라우저에서 `http://localhost:5173` 주소로 접속하여 애플리케이션을 확인할 수 있습니다.

&nbsp;

## 🔗 배포 주소

[4yclingHomerun 배포 주소](https://4yclinghomerun-deploy.vercel.app/)

&nbsp;

## 📂 프로젝트 구조

```bash
├─public
│  └─favicon
└─src
    ├─api
    ├─assets
    │  ├─direction
    │  ├─game
    │  ├─home
    │  │  ├─event
    │  │  ├─footer
    │  │  ├─hero
    │  │  ├─schedule
    │  │  └─shop
    │  ├─introduction
    │  ├─logo
    │  ├─player
    │  ├─team
    │  ├─wiz-news
    │  └─wiz-park
    ├─components
    │  ├─common
    │  │  ├─layout
    │  │  ├─typography
    │  │  └─ui
    │  │      ├─button
    │  │      ├─tab
    │  │      └─table
    │  ├─direction
    │  ├─error
    │  ├─footer
    │  │  └─modal
    │  ├─game
    │  │  ├─boxscore
    │  │  ├─ranking
    │  │  │  ├─crowd
    │  │  │  ├─player
    │  │  │  └─team
    │  │  ├─schedule
    │  │  └─watchpoint
    │  │      ├─common
    │  │      ├─lineup
    │  │      ├─pitcher
    │  │      ├─skeleton
    │  │      ├─top-player
    │  │      └─watchpoint-main
    │  ├─header
    │  ├─home
    │  │  ├─contents
    │  │  │  ├─events
    │  │  │  ├─live
    │  │  │  ├─news
    │  │  │  ├─rank
    │  │  │  ├─schedule
    │  │  │  └─shop
    │  │  ├─hero
    │  │  └─sidebar
    │  ├─introduction
    │  ├─player
    │  │  ├─cheer
    │  │  ├─common
    │  │  ├─hitter
    │  │  └─pitcher
    │  ├─wiz-news
    │  └─wiz-park
    ├─constants
    ├─data
    ├─hooks
    ├─mocks
    │  ├─game
    │  ├─home
    │  ├─introduction
    │  ├─player
    │  ├─wiz-news
    │  └─wiz-park
    ├─pages
    │  ├─game
    │  │  └─ranking
    │  ├─Introduction
    │  ├─news
    │  ├─player
    │  │  ├─cheer
    │  │  ├─coach
    │  │  ├─hitter
    │  │  └─pitcher
    │  └─wiz-park
    ├─router
    ├─stores
    ├─styles
    │  ├─carousel
    │  ├─news
    │  └─player
    ├─types
    └─utils
```

&nbsp;

## ✉️ Conventions

### 커밋 컨벤션

- `feat`: 새로운 기능 추가
- `style`: css 수정 및 코드의 의미에 영향을 미치지 않는 변경사항
- `fix`: 버그 수정
- `refactor`: 리팩토링, 기능 변화 없이 코드 구조 개선
- `chore`: 코드 수정 외 잡다한 작업 (빌드 과정이나 설정 변경 등)
- `docs`: 문서 변경 
- `perf`: 성능을 향상시키는 코드 변경
- `test`: 테스트 코드 추가 또는 수정 
- `build`: 빌드 시스템 또는 외부 종속성 관련 변경
- `ci`: CI 구성 파일 및 스크립트 변경 
- `revert`: 이전 커밋을 되돌림

### 파일 컨벤션

- 폴더명: LowerCase || kebab-case
- 파일명: PascalCase

### 코드 컨벤션

- 함수: const Component = () => {} / export default Component
- `export` 구문: 하단
- 타입명: `type PlayerProps` (PascalCase)
- 타입 내부 키 값: `playerName: string` (camelCase)
- 상수: `UPPER_SNAKE_CASE`

&nbsp;

## 🐹 Members

|[![hdayeon](https://avatars.githubusercontent.com/u/147478174?v=4)](https://github.com/hdayeon)|[![jungkyuYang](https://avatars.githubusercontent.com/u/67031524?v=4)](https://github.com/jungkyuYang)|[![HyoKyoungLee](https://avatars.githubusercontent.com/u/43572462?v=4)](https://github.com/HyoKyoungLee)|[![bbjbc](https://avatars.githubusercontent.com/u/102457140?v=4)](http://github.com/bbjbc)|
|:---:|:---:|:---:|:---:|
|**🐔 [하다연](https://github.com/hdayeon)**|**🐤 [양정규](https://github.com/jungkyuYang)**|**🐤 [이효경](https://github.com/HyoKyoungLee)**|**🐤 [조병찬](http://github.com/bbjbc)**|

