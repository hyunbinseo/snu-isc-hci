type AtoZ =
	| 'a'
	| 'b'
	| 'c'
	| 'd'
	| 'e'
	| 'f'
	| 'g'
	| 'h'
	| 'i'
	| 'j'
	| 'k'
	| 'l'
	| 'm'
	| 'n'
	| 'o'
	| 'p'
	| 'q'
	| 'r'
	| 's'
	| 't'
	| 'u'
	| 'v'
	| 'w'
	| 'x'
	| 'y'
	| 'z';

export type Article = {
	id: `${AtoZ}${AtoZ}`;
	sender?: string;
	keyword?: string;
	title: string;
	detail?: string;
	at: string;
	url?: `http://${string}` | `https://${string}`;
	image?: false;
};

export const categories = [
	'공모/모집',
	'교외 프로그램',
	'교육/강연',
	'문화/예술',
	'장학',
	'학사',
	'기타',
] as const;

export type Category = (typeof categories)[number];

export const categoryDescriptions: Readonly<Record<Category, string>> = {
	'공모/모집': '서포터즈, 프로그램, 채용공고 등',
	'교외 프로그램': '해외행사, 교환학생, 학점교류, 인턴십 등',
	'교육/강연': '세미나, 콜로키움, 학술대회, 진로특강 등',
	'기타': '설문조사, 뉴스레터 등',
	'문화/예술': '전시, 공연, 연주회, 예술특강 등',
	'장학': '교내 장학, 교외 장학, 근로장학 등',
	'학사': '수강신청, 튜터 모집 등',
};

export const articles: Readonly<Record<Category, Article[]>> = {
	'공모/모집': [
		{
			id: 'bn',
			sender: '에너지신산업 혁신융합대학사업단',
			keyword: '계절학기 연계',
			title: 'CO-Week Academy 참가자 모집',
			detail: '혁신융합대학 팝업 캠퍼스. 18개 컨소시엄이 준비한 132개의 강의를 만나보세요.',
			at: '신청: 6월 10일(화)까지',
			url: 'https://forms.gle/hwdDHWgqrQjqXcYP8',
		},
		{
			id: 'bf',
			sender: '포스코스포츠센터',
			title: 'PT 프로그램 할인',
			keyword: '모집',
			detail: '패키지 A 1개월 50% 할인 (10세션 55만 원)',
			at: '포스코스포츠센터 2층 체련장 강사실',
			url: 'https://spolex.snu.ac.kr/index.php',
		},
		{
			id: 'bp',
			sender: '보건진료소',
			keyword: '모집',
			title: '무료 학생 건강 검진',
			detail: '학부/석사/박사 과정생 연 1회. 예약 필수',
			at: '매일 오전 9시 또는 13시 반',
			url: 'http://health4u.snu.ac.kr',
		},
		{
			id: 'bq',
			sender: '학생지원과',
			keyword: '교육봉사',
			title: '여름 나눔교실 봉사자 모집',
			detail: '교육소외지역 고등학교에서 5박 6일 멘토링 진행',
			at: '선착순: 5월 29일(목) 23시부터',
			url: 'https://forms.gle/zKMVzJEz1vsaSRbk6',
		},
		{
			id: 'br',
			sender: '경력개발센터',
			keyword: '기자단',
			title: 'SNU 커리어 기자단 모집',
			detail: '동문 선배 인터뷰를 통해 관심 직무를 탐색하세요.',
			at: '신청: 6월 9일(월)까지',
		},
		{
			id: 'bs',
			sender: '인문학연구원 고전 매트릭스 연구팀',
			keyword: '공모전',
			title: '제4회 고전 매트릭스 UCC 공모전',
			detail: '동서양 고전을 읽다, 고전을 보다.',
			at: '제출: 6월 1일(일)까지',
			url: 'http://classicsmatrix.snu.ac.kr/',
		},
		{
			id: 'bt',
			sender: '학부대학',
			keyword: '서포터즈',
			title: '예비대학 재학생 서포터즈 선발',
			detail: '전공별 수강 가이드를 제작해 신입생의 예비대학 수강을 도와보세요.',
			at: '신청: 6월 13일(금)까지',
			url: 'https://extra.snu.ac.kr/ptfol/pgm/view.do?dataSeq=PGM012000783',
			image: false,
		},
	],
	'교외 프로그램': [
		{
			id: 'at',
			keyword: '해외연수',
			title: 'AUA 중국(칭화대학교) 단기연수 참가자 모집',
			detail: 'Exploring China: Sustainability, Innovation and History',
			at: '신청: 6월 8일(일)까지',
			url: 'https://my.snu.ac.kr/p/ST050103?b=2&ls=20&ln=1&px=7&sc=title&dm=r&p=11932',
			image: false,
		},
		{
			id: 'au',
			keyword: '교환학생',
			title: '기초과학자를 위한 해양탐사 참가자 모집',
			detail: '국립부경대학교, 기초과학자를위한해양탐사(2학점)',
			at: '신청: 6월 13일(금)까지',
			url: 'https://my.snu.ac.kr/p/ST050103?b=2&ls=20&ln=1&px=7&sc=title&dm=r&p=11918',
			image: false,
		},
		{
			id: 'bo',
			sender: '경력개발센터',
			keyword: '인턴십',
			title: '두산에너빌리티 채용연계형 인턴 모집',
			detail: '두산중공업의 새로운 사명 두산에너빌리티와 함께할 분을 찾습니다.',
			at: '설명회: 6월 10일(화) 10시, 301동',
		},
		{
			id: 'av',
			keyword: '인턴십',
			title: 'UN Operations and Crisis Centre',
			detail: 'Political Affairs Intern: Information analysis and data visualisation',
			at: '신청: 2026년 4월 8일까지',
			url: 'https://careers.un.org/jobSearchDescription/256641?language=en',
			image: false,
		},
		{
			id: 'aw',
			sender: ' 에너지신산업 혁신융합대학사업단',
			keyword: '해외연수',
			title: '에너지신산업 탐구생활 6기 참가자 모집',
			detail: '미국 텍사스 휴스턴 지역 에너지 관련 기관 견학',
			at: '신청: 6월 13일(금)까지',
			url: 'https://forms.gle/C25f5DVG3WjS5WLM7',
		},
		{
			id: 'ax',
			sender: '출판문화원',
			keyword: '인턴십',
			title: '인공지능과 함께 출판분야를 선도할 인턴 모집',
			detail: '출판 분야에 열정이 있는 분을 모십니다.',
			at: '신청: 6월 13일(금)까지',
			url: 'https://www.snupress.com/service/notice?md=v&bbsidx=60',
		},
		{
			id: 'ay',
			sender: '글로벌사회공헌단',
			keyword: '공헌단',
			title: '하계 글로벌 SNU공헌단 모집',
			detail: '교육, 의료, 보건, 문화나눔, 취창업 역량 강화',
			at: '신청: 6월 10일(화)까지',
			url: 'https://snusr.snu.ac.kr/community/notice?md=v&bbsidx=2862',
			image: false,
		},
		{
			id: 'az',
			sender: '경력개발센터',
			keyword: '설명회',
			title: 'HongKong Talent Engage 채용 설명회',
			detail: 'HongKong: A World of Opportunities',
			at: '6월 9일(월) 17:30, 롯데국제교육관',
			url: 'https://extra.snu.ac.kr/ptfol/pgm/view.do?dataSeq=PGM012000778',
		},
	],
	'교육/강연': [
		{
			id: 'by',
			sender: '경제연구소',
			keyword: '설명회',
			title: '빅데이터 AI 핀테크 고급 전문가 과정 모집 설명회',
			detail: '고용노동부 지원 K-디지털 트레이닝 과정, 총 1040시간의 교육과 실습 포함',
			at: '6월 10일(화) 15시, 아시아연구소',
			url: 'https://www.snukdt.com/notice/notice.php?ptype=view&idx=168&page=&code=notice',
		},
		{
			id: 'bz',
			sender: '연계전공 러시아학',
			keyword: '강연 및 간담회',
			title: '러시아-우크라이나 전쟁 이후의 세계: 역사가의 예상',
			detail: '노경덕 교수 (인문대학 역사학부 서양사학전공)',
			at: '6월 11일(수) 16시, 인문대 신양관',
			url: 'https://www.snu.ac.kr/snunow/events?md=v&bbsidx=155280',
			image: false,
		},
		{
			id: 'ca',
			sender: '사회과학연구원',
			keyword: '세미나',
			title: '싱글 라이프의 오해와 진실',
			detail: '김수영 교수 (사회복지학과)',
			at: '6월 13일(금) 12시, 사회과학연구원',
			url: 'https://www.snu.ac.kr/snunow/events?md=v&bbsidx=155304',
		},
		{
			id: 'cb',
			sender: '중세르네상스연구소',
			keyword: '심포지엄',
			title: '목판 인쇄와 목판화의 역사',
			detail: '미국 클라크미술사연구소(The Clark Art Institute)와 함께 개최',
			at: '6월 13일(금) 9시',
		},
		{
			id: 'cc',
			sender: '건강재난 통합대응을 위한 교육연구단',
			keyword: '학술 집담회',
			title: '사회의 건강 재난 대비, 정신건강으로의 확장',
			detail: '정신건강 증진, 정신건강 위기 대비를 위한 보건학의 노력 필요성',
			at: '6월 12일(목) 13시',
			url: 'https://forms.gle/7pgj5ku9M1QUNofEA',
		},
		{
			id: 'cd',
			sender: '한국경제와 K학술확산 연구센터',
			keyword: '저자 초청 특강',
			title: '경제 관료의 시대 저자 홍제환 박사',
			detail: '고도성장기 한국 경제를 설계한 경제 관료들을 선정해 생애와 활약상을 살핀 책',
			at: '6월 11일(수) 14:00, 우석경제관',
			url: 'https://www.history.go.kr/board/boardDetail.do?groupId=000000000302&menuId=000000000424&pageId=000000000006&itemId=000000026490',
		},
		{
			id: 'ce',
			sender: '통일평화연구원',
			keyword: '포럼',
			title: '러우전쟁 종전협상과 한국전쟁 휴전협상 사이에서',
			detail: '연사: 제성훈 한국외대 노어과 교수, 김규범 세종연구소 객원연구원',
			at: '6월 10일(화) 14시',
			url: 'https://forms.gle/9CmCerHWrbzZysPv6',
		},
		{
			id: 'cf',
			sender: '학습과학연구소',
			keyword: '정책 포럼',
			title: '공공과 민간이 함께 그리는 학습데이터 생태계의 미래',
			detail: '연사: KERIS의 장시준 박사, 버블콘의 신영규 대표이사',
			at: '6월 13일(금) 14시, 12동/온라인',
			url: 'https://docs.google.com/forms/d/e/1FAIpQLSeqgtHIAChaZ8MFhQybKooh8o84iij3wbnuIiSRgF7UKsUicw/viewform',
		},
		{
			id: 'cg',
			sender: '국제학연구소',
			keyword: '세미나',
			title: 'Robust Monetary Policy in an Emerging Economy',
			detail: '연사: Seunghoon Na (Professor, Purdue University)',
			at: '6월 13일(금) 12시, 140동',
			url: 'https://forms.gle/xru2cPAbPgpMCaJA7',
		},
		{
			id: 'ch',
			sender: '암연구소',
			keyword: '심포지엄',
			title: 'Deeper and Novel Collaboration for Cancer Research ',
			detail: '국내외 연구자들의 최신 연구를 듣고 논의할 수 있는 자리',
			at: '6월 27일(금) 8:50, 암연구소 이건희홀/온라인',
			url: 'https://cri.snu.ac.kr/research/conference/cri-symposium?md=view&confidx=21',
			image: false,
		},
		{
			id: 'ci',
			sender: '치과병원',
			keyword: '교육',
			title: '구강암 예방하기, 백반증과 전암병소',
			detail: '온라인 구강 건강 강좌 (교직원 교육이수 1시간 인정)',
			at: '6월 10일(화) 12시',
			url: 'https://docs.google.com/forms/d/e/1FAIpQLSdJM1FgaUOFEaEKqUY2JTX0ofUkO7cJrMQLW9iyIY0yknOtRQ/viewform',
			image: false,
		},
	],
	'기타': [
		{
			id: 'cs',
			sender: '대학신문사',
			keyword: '설문조사',
			title: '서울대 학부생 정치 의식 조사',
			detail: '학생들의 정치 성향과 정치 참여도, 대선 후보와 한국 사회에 대한 인식을 알아봅니다.',
			at: '6월 10일(화)까지',
			url: 'https://forms.gle/AQgDhECBHeMSe1Bj8',
		},
	],
	'문화/예술': [
		{
			id: 'bc',
			sender: '컴퓨터연구소',
			keyword: '콘서트',
			title: '주희성 교수와 함께하는 "민상렬홀 런치콘서트"',
			detail: '미래의 음악 스타를 발굴하고 지원하고자 선발한 "민상렬홀 영아티스트"가 꾸미는 콘서트',
			at: '6월 10일(화) 12시',
			url: 'https://event-us.kr/snuict/event/104552',
		},
		{
			id: 'bd',
			sender: '다양성위원회',
			keyword: '공연',
			title: '잔디광장 Dive In 공연 안내',
			detail: '문화다양성 주간에 잔디광장에서 펼쳐 지는 아름다운 음악의 향연',
			at: '6월 9-12일 12-13시',
		},
		{
			id: 'be',
			sender: '중앙도서관',
			keyword: '상영회',
			title: '예술의 전당 우수 작품 상영회 신청',
			detail: '윤보선 고택 살롱 콘서트 (클래식)',
			at: '6월 11일(수) 15:30',
			url: 'https://libart.modoo.at/',
		},
		{
			id: 'bg',
			sender: '음악대학 관현악과',
			keyword: '연주회',
			title: 'SNU String Ensemble 정기연주회',
			detail: '전석 무료, 선착순 입장',
			at: '6월 9일(월) 19:30, 예술관 콘서트홀',
		},
		{
			id: 'bh',
			sender: '학생사회공헌단',
			keyword: '행사',
			title: '우리의 "마주봄"의 공간에 여러분을 초대합니다.',
			detail: '학생사회공헌단 4개 프로젝트가 연합 부스를 운영합니다.',
			at: '6월 9일(월)부터, 학생회관 앞',
			image: false,
		},
		{
			id: 'bi',
			sender: '인문학연구원 한국어문학연구소',
			keyword: '개관식',
			title: '박완서 디지털 문학관 개관',
			detail: '소설가 박완서의 생애와 작품, 발자취를 정리한 온라인 전시와 아카이브',
			at: '6월 10일(화) 18시',
			url: 'https://docs.google.com/forms/d/e/1FAIpQLSc_5ZrRM-RjM6jrwrA-ACX98KqeXFGHEiS4-Oyp0OAmxlg0vg/closedform',
		},
		{
			id: 'bj',
			sender: '물리천문학부 천문학전공',
			keyword: '상영회',
			title: '천체투영관 "관허 코스모스 홀" 정기상영회',
			detail: '밤하늘 별자리와 다양한 천체들에 대한 설명',
			at: '6월 11일(수) 14:15, 28동',
		},
	],
	'장학': [
		{
			id: 'aj',
			keyword: '교외',
			title: '화성시인재육성재단 해외유학 장학생 선발',
			detail: '해외 진학, 교환학생 대상',
			at: '신청: 6월 11일(수) 17시까지',
			url: 'https://www.hstree.org/news/noticeView.do?seq=2357',
		},
		{
			id: 'ak',
			keyword: '교외',
			title: '1학기 성남시 다자녀가구 장학생 모집',
			detail: '셋째 이상, 미혼 대학생 등록금 지원',
			at: '신청: 6월 13일(금)까지',
			url: 'https://www.seongnam.go.kr/oa/IWkDXNb.do',
		},
		{
			id: 'al',
			keyword: '교내',
			title: '2학기 국가근로장학사업 1차 신청',
			detail: '한국장학재단 국가근로장학생 기본요건 충족자',
			at: '신청: 6월 23일(월) 18시까지',
			url: 'https://www.kosaf.go.kr',
			image: false,
		},
		{
			id: 'an',
			keyword: '교내',
			title: '1학기 국가근로장학생 하계방학 집중근로 신청',
			detail: '1학기 국가근로장학금 일반유형 신청 학부 재학생',
			at: '신청: 6월 12일(목) 18시까지',
			url: 'https://www.kosaf.go.kr',
			image: false,
		},
		{
			id: 'ao',
			keyword: '교외',
			title: '나주교육진흥재단 해외 유학 장학생 선발',
			detail: '전남 나주 출신 대학생 대상',
			at: '신청: 6월 13일(금) 18시까지',
			url: 'http://najuedfd.co.kr/',
			image: false,
		},
		{
			id: 'ap',
			keyword: '교외',
			title: '하이트진로 장학생 선발',
			detail: '요식업주의 대학생 자녀 대상',
			at: '신청: 6월 13일(금)까지',
		},
		{
			id: 'ar',
			keyword: '교외',
			title: '2학기 1차 주거안정장학금 학생 신청',
			detail: '본교 기준 부모님 주소지가 수도권 외 권역에 있는 경우',
			at: '신청: 6월 2일(월) 18시까지',
			url: 'https://www.kosaf.go.kr',
		},
		{
			id: 'ab',
			sender: '학사일정',
			keyword: '교내',
			title: '2학기 교내 장학금 신청',
			detail: '미신청시 교내 및 발전재단 장학금 수혜 불가',
			at: '신청: 6월 16일(월) 18시까지',
			image: false,
		},
	],
	'학사': [
		{
			id: 'aa',
			title: '하계 계절수업 수강료 납부 및 환불 안내',
			at: '2차 납부: 6월 9일(월)까지',
			url: 'https://my.snu.ac.kr/p/ST050103?b=2&ls=20&ln=1&px=4&sc=title&dm=r&p=11935',
		},
		{
			id: 'ac',
			title: '학부대학 컴퓨팅 교과목 튜터 모집',
			at: '신청: 6월 13일(금)까지',
			url: 'https://forms.gle/SvgBvxc6qxjJgtcv7',
			image: false,
		},
		{
			id: 'ag',
			title: '하계 계절학기 사회봉사교과목 수강신청 안내',
			detail: '마이스누 / 봉사활동 신청 메뉴에서 진행',
			at: '신청: 6월 10일(화) 17시까지',
			url: 'https://snusr.snu.ac.kr/activities/student-volunteer-course/notice?md=v&bbsidx=2859',
		},
	],
};

export const articleMap = new Map<string, Article>();

for (const category of categories) {
	for (const article of articles[category]) {
		articleMap.set(article.id, article);
	}
}
