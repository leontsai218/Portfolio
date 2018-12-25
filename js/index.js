const RESOURCES = {
	EN: {
		Label: {
			ProgrammingLanguages: "Programming Languages",
			RevisionControl: "Revision Control",
      President: "Director", 
			WalkingaroundTaiwan: "Walking Around Taiwan",
			MandatoryMilitaryService: "Mandatory Military Service",
			OutsourcedProgrammer: "Outsourced Programmer",
			PresenterInInternationalConference: "Presenter in International Conference",
			PartTimeSoftwareEngineer: "Part-time Software Engineer",
			ExchangeStudent: "Exchange Student",
			ProgramAnalyst: "Program Analyst",
			Mentor: "Mentor of 5 Freshmen",
			Projects: "Projects",
			FullStackDeveloper: "Full stack developer",
			TwoTierSoftwareFrameWork: "2-tier software framework",
			ThreeTierSoftwareFrameWork: "3-tier software framework",
		},
		Message: {
			Name: "Leon Tsai",
			Title: "Software Engineer",
			Summary: "I possess experience with full stack web developement. <br>As a programmer, I enjoy solving problems and building new things by coding. At the same time, I devote myself to coding cleanly. <br>My faiths are following: <ul><li>\"Do things interesting or useful.\" - In leisure time, I love learning new things out of interest or their usefulness.</li><li>\"Partners get more sensible, communication gets easier.\" - In company, I am delighted to shared knowledge and mentored freshmen. </li><li>\"Do right things. Make things right. Ensure the 'right' is right.\" -  So, I become a novice of Test-Driven-Development recently.</li></ul>",
			NCKUPDC: "Pop Dance Club, National Cheng Kung University",
			Bachelor: "Bachelor of Science",
			NCKUCSIE: "Computer Science & Information Engineering, <br>National Cheng Kung University",
			WalkingaroundTaiwan: "Walking 1,200KM around Taiwan island in 43 days.",
			ROCA: "Taiwan (R.O.C.) Armed Forces",
			CYTCo: "Chen-Yo Technology Co.",
			CYTCoDetail: "Developed a window application (WinForm) to visualize data from the instruments in real-time by C#.",
			PresenterInInternationalConferenceDetail: "Attended at IEEM 2014 and had an oral presentation for my research, \"Construction of an Interactive Behavioral and Feature Structure Model for Facebook.\"",
			BuilderTCo: "BUILDER Technology Co.",
			BuilderTCoDetail: "Maintained a website order management system and developing new features by using SAP B1, IIS, ASP.NET WebForm and MS SQL Server. Sometimes dealt with problems about internet and development environment.",
			Master: "Master of Science",
			MasterDetail: "Publish: \"Development of an Approach for Automatically Classifying User's Personality Type by Mining Interactions in Facebook,\" NCKU, 2015. <br>The Facebook data of subjects in research experiment were fetched and analyzed. Text Mining techniques and classification algorithms were used for classifying subjects' personality type. Techniques and tools such as C#, WinForm, ASP.NET WebForm, HTML, CSS, Weka (Data Mining tool), CKIP (online Chinese word segmentation API), MS SQL Server and IIS were used for implementing this research. <br>Letter Grade: A+ / Grade Points: 4.3",
			NCKUIEEM: "Institue of Manufacturing Information & Systems, <br>National Cheng Kung University",
			SJTU: "Shanghai Jiao Tong University",
			SJTUDetail: "",
			GSS: "Galaxy Software Services Co.",
			ProgrammerDetail: "Full stack developer in many projects. Dealt with DB/Back-End/Front-End issues. Used QA tools and CI tools to improve productivity and code qulity",
			ProgramAnalystDetail: "Promoted after being programmer for 1 year. Assigned to support more complicated product & projects. Had more responsibility for sharing knowledge and solving problems.",
			MentorDetail: "Mentored 5 freshmen altogether.",
			MOSTKits: "Using kits such as NPOI, NLog etc.",
			TraineeOfTddAndRefactoringTraining: "Trainee of \"TDD and Continuous Refactoring\"",
			TddAndRefactoringTraining: "Attended a training of \"Evolutionary Development - TDD and Continuous Refactoring\" established by Joey Chen @ Odd-e to improve development knowledge and skill.",
			MOSTProject: "Taiwan Ministry of Science and Technology (MOST) External & Internal System [Customized Project]",
			MOSTProjectDetail: "A website system for public users such as professors & researchers submiting academic plans while MOST internal users managing data, reviewing projects and assinging tasks.",
			I18nIntroducer: "The person responsible for introducing i18n",
			ODSystem: "Official Document System [Product & Customized Project]",
			ODSystemDetail: "A website system for organizations such as the Government departments, banks, large companies etc. processing official document online. Customized projects are derived from the product.",
			ODSystemKits: "Using kits such as Spring.Net Framework (IoC), Quartz.NET (Schedule), DevExpress (Report), Elmah (Log) etc.",
			DeveloperInProductTeam: "Back-End/Front-End developer in Product Team",
			DeveloperInProjectTeam: "Full stack developer in Project team",
			CIPromoterInProjectTeam: "CI promoter in project team",
			AJRepo: "Repository Management System [SOHO Project]",
			AJRepoDetail: "A website system for managing inventory information. This project involves issues such as Requirement Analysis / System Analysis / System Design / Database Schema Design / Website Development / Envirenment Building / Data Backup etc.",
			PersonInCharge: "The person responsible for all project",
			UsingOpenSourceResources: "Using Open Source Resources (MIT license).",
			AutoDBBackup: "Using Windows Task Scheduler & bat scripts to implement data auto-encryption & auto-backup on Google Drive.",
		}
	},
	TW: {
		Label: {
			ProgrammingLanguages: "程式語言",
			Advanced: "熟練",
			Intermediate: "普通",
			Novice: "用過",
			Techniques: "技術",
			Tools: "工具",
			DB: "資料庫",
			QA: "品質確保",
			CI: "持續整合",
			RevisionControl: "版本控制",
			Editor: "編輯器",
			Experiences: "重點經歷",
			President: "社長",
			Taiwan: "台灣",
			WalkingaroundTaiwan: "徒步環台",
			MandatoryMilitaryService: "義務役兵役",
			OutsourcedProgrammer: "外包工程師",
			PresenterInInternationalConference: "國際研討會研究發表者",
			Malaysia: "馬來西亞",
			PartTimeSoftwareEngineer: "兼職軟體工程師",
			ExchangeStudent: "交換學生",
			China: "中國",
			Programmer: "程式設計師",
			ProgramAnalyst: "程式分析師",
			Mentor: "新人輔導員",
			Projects: "重點專案",
			FullStackDeveloper: "全端開發工程師",
			TwoTierSoftwareFrameWork: "兩層式軟體架構",
			ThreeTierSoftwareFrameWork: "三層式軟體架構",
		},
		Message: {
			Name: "蔡孟哲",
			Title: "軟體工程師",
			Summary: "擁有網頁全端開發兩年的經驗，具備處理資料庫/後端/前端相關需求的能力，具有從無到有獨立開發小型網站系統並部署的經驗，多數時間是在 Windows 環境下工作。秉持持續最佳化的精神，常運用閒暇時間汲取新知並分享給團隊夥伴；寫程式時稍有潔癖，致力於寫出高效且優雅的程式碼。期許能參與重視有效溝通、產品品質及使用者體驗的軟體開發團隊，在其中貢獻所有自身的經驗與技能。",
			NCKUPDC: "國立成功大學流行舞蹈社",
			Bachelor: "取得學士學位",
			NCKUCSIE: "國立成功大學資訊工程學系",
			WalkingaroundTaiwan: "在入伍前召集兩位友人完成背著帳篷徒步 43 天的環台之旅。",
			ROCA: "中華民國國軍(陸軍)",
			CYTCo: "辰銪股份有限公司",
			CYTCoDetail: "使用 C# 開發量測儀器之視窗應用程式，以圖表顯示多組量測硬體之即時量測結果，具備將結果轉成 Excel 檔案或圖檔的功能。",
			PresenterInInternationalConferenceDetail: "出席舉辦於馬來西亞的國際研討會，至現場英文口頭簡報投稿之研究文章：《Construction of an Interactive Behavioral and Feature Structure Model for Facebook》。",
			BuilderTCo: "彼而德科技股份有限公司",
			BuilderTCoDetail: "維護既有產品以及依據客戶需求開發新功能，使用 SAP, ASP.NET WebForm, MS SQL Server 與 IIS，並協助處理公司網路環境、開發環境之疑難雜症。",
			Master: "取得碩士學位",
			MasterDetail: "碩士論文：《探勘 Facebook 互動行為之自動化預測使用者人格類型方法發展》。<br>論文實驗透過 Facebook API 取得受試者資料進行分析，運用資訊檢索(Information Retrieval)、文字探勘(Text Mining)技術與分類演算法對使用者人格進行分類，使用 C#, WinForm, ASP.NET WebForm, HTML, CSS, Weka (資料探勘工具), CKIP (線上斷詞斷句 API), MS SQL Server 與 IIS 等相關技術與工具完成實作。",
			NCKUIEEM: "國立成功大學製造資訊與系統研究所",
			SJTU: "上海交通大學",
			SJTUDetail: "代表成大擔任至上海交大就讀一學期的交換生，於交換期間憑藉自身所學背景對中國資訊產業之應用發展進行觀察，同時也走訪各地認識中國風土人情並熟悉當地生活。",
			ProgrammerDetail: "參與多項專案開發與維護，作業範圍涵蓋資料庫至前後端，在期間逐漸熟悉軟體開發工程，同時開始使用多項工具確保專案品質與提升生產力。",
			GSS: "叡揚資訊股份有限公司",
			ProgramAnalystDetail: "任職程式設計師一年後升職，受派支援架構較複雜的產品與專案，並承擔更多知識分享與問題解決的責任。",
			MentorDetail: "在職期間擔任共計 5 名新人之指導員。",
			TraineeOfTddAndRefactoringTraining: "「測試驅動開發與持續重構」課程學員",
			TddAndRefactoringTraining: "自費參加 Joey Chen (91) 開設之「測試驅動開發與持續重構」課程，精進軟體開發實力。",
			MOSTProject: "台灣科技部內部與外部系統 [客製化專案]",
			MOSTProjectDetail: "供外部使用者進行學術申請、內部使用者進行資料管理、審查及分派、報表產製等完整功能，功能大多是依照客戶需求開發對資料庫進行視覺化的 CRUD，系統本身並無太多 Domain Knowledge 或演算法。<br>此案是首次將所學的 ASP.NET MVC 知識投入業界專案開發，從模仿前人寫基本的查詢功能開始，經歷介接 API、系統移植、維護等功能開發外的任務，後期負責新的子系統打底及開發，最後在離開專案前，因通熟專案架構而擔任導入 i18n 機制的負責人。支援此系列一共六個專案。",
			MOSTKits: "使用第三方套件如：NPOI 進行 MS Office 檔案產製、NLog 進行網站錯誤紀錄等。",
			I18nIntroducer: "導入多國語系機制負責人",
			ODSystem: "叡揚資訊公文系統 [自有產品與衍生客製化專案]",
			ODSystemDetail: "供機關進行製作、遞送、管理、簽核等全方位公文處理功能之公文流程電子化系統，以產品版本為基底，衍生對應不同客戶的客製化專案。<br>挾前案的經驗，受主管調度支援此案，從一開始短期支援人員變成後來的客製專案主力開發人員。此案規模較前案大許多，軟體架構分層更細膩，功能需求也更多元，與 PM/SA 及開發夥伴的協作更顯重要。因對資料庫/後端/前端掌握程度較全面，在客製專案小組中經常扮演問題追溯者、問題解決者以及知識分享者的角色，數次與專案架構師溝通需求並獲授權於底層除錯或增加設計。在此案中強化了前案所累積的知識，並切身經歷大型軟體的協作過程。支援原始產品以及共三個客製專案開發。",
			ODSystemKits: "使用多項第三方套件實現多元的系統功能，如：透過 Spring.Net Framework 實現 IoC，使用 Quartz.NET 執行排程作業，使用 DevExpress 產製報表，使用 Elmah 進行網站錯誤紀錄等。",
			DeveloperInProductTeam: "產品前/後端功能開發人員",
			DeveloperInProjectTeam: "客製專案全端開發人員",
			CIPromoterInProjectTeam: "客製專案 CI 導入者",
			AJRepo: "安稼股份有限公司倉儲管理系統 [SOHO 專案]",
			AJRepoDetail: "從叡揚資訊離職後自行接的專案，因是一人專案，除了熟悉的程式碼撰寫，還親自處理需求訪談、資料庫設計、系統設計、環境建置、系統部署、資料備份、客服等各種系統開發環節。客戶期待以最低成本完成，因此使用 Bootstrap 搭配多項 Open Source MIT 授權資源取代 Kendo UI 付費元件。除此之外，相較過往在職的專案，略顯特別之處在於資料庫使用無自動備份功能的 Express 版本，遂以批次腳本搭配 Windows 工作排程以及 Google 雲端硬碟，自製免費的雲端自動化資料庫持續備份機制。",
			PersonInCharge: "唯一負責人",
			UsingOpenSourceResources: "使用多項 Open Source MIT 授權資源。",
			AutoDBBackup: "實現免費雲端自動化資料庫持續備份機制。",
		}
	}
};
var ResumeData = {
	Name: "Message\\Name",
	Title: "Message\\Title",
	Summary: "Message\\Summary",
	Email: "leontsai218@outlook.com",
	LinkedInUrl: "https://www.linkedin.com/in/leon-tsai-4563bb117/",
	Skills: {
		Languages: {
			Title: "Label\\ProgrammingLanguages",
			Topic: "lang",
			List: [
				{ Name: "C#.NET", Level: 4, LevelDesc: "Label\\Advanced" },
				{ Name: "JavaScript", Level: 4, LevelDesc: "Label\\Advanced" },
				{ Name: "jQuery", Level: 4, LevelDesc: "Label\\Advanced" },
				{ Name: "HTML / Pug", Level: 4, LevelDesc: "Label\\Advanced" },
				{ Name: "CSS / Sass", Level: 4, LevelDesc: "Label\\Advanced" },
				{ Name: "SQL / T-SQL", Level: 3.5, LevelDesc: "Label\\Intermediate" },
				{ Name: "Java", Level: 3, LevelDesc: "Label\\Intermediate" },
				{ Name: "C", Level: 1.5, LevelDesc: "Label\\Novice" },
			]
		},
		Techniques: {
			Title: "Label\\Techniques",
			Topic: "tech",
			List: [
				{ Name: "ASP.NET MVC" },
				{ Name: "Bootstrap & RWD" },
				{ Name: "Vue.js" },
				{ Name: "Kendo UI" },
				{ Name: "WinForm" },
				{ Name: "WebForm" },
				{ Name: "Test-Driven-Development" }
			]
		},
		Tools: {
			Title: "Label\\Tools",
			Topic: "tool",
			List: [
				{ Name: "MS SQL Server", Type: "Label\\DB" },
				{ Name: "MySQL", Type: "Label\\DB" },
				{ Name: "SonarQube", Type: "Label\\QA" },
				{ Name: "SonarLint", Type: "Label\\QA" },
				{ Name: "Checkmarx", Type: "Label\\QA" },
				// { Name: "Resharper", Type: "QA" }, 
				{ Name: "Jenkins", Type: "Label\\CI" },
				{ Name: "SVN", Type: "Label\\RevisionControl" },
				{ Name: "Git", Type: "Label\\RevisionControl" },
				{ Name: "Visual Studio", Type: "Label\\Editor" },
				{ Name: "Visual Studio Code", Type: "Label\\Editor" },
				{ Name: "Codepen.io", Type: "Label\\Editor" },
			]
		}
	},
	Experiences: [
		{
			Year: 2008,
			Events: [
				{
					Description: "Label\\President",
					Organization: "Message\\NCKUPDC",
					Location: "Label\\Taiwan",
					Display: false
				}
			]
		},
		{
			Year: 2009,
			Events: [
			]
		},
		{
			Year: 2011,
			Events: [
				{
					IconClass: "fa fa-graduation-cap",
					Description: "Message\\Bachelor",
					Organization: "Message\\NCKUCSIE",
					Link: "http://www.csie.ncku.edu.tw/ncku_csie/",
					Location: "Label\\Taiwan",
					Display: true
				},
				{
					Description: "Label\\WalkingaroundTaiwan",
					Detail: "Message\\WalkingaroundTaiwan",
					Location: "Label\\Taiwan",
					Display: false
				}
			]
		},
		{
			Year: 2012,
			Events: [
				{
					Description: "Label\\MandatoryMilitaryService",
					Organization: "Message\\ROCA",
					Location: "Label\\Taiwan",
					Display: false
				}
			]
		},
		{
			Year: 2013,
			Events: [
			]
		},
		{
			Year: 2014,
			Events: [
				{
					IconClass: "fa fa-briefcase",
					Description: "Label\\OutsourcedProgrammer",
					Detail: "Message\\CYTCoDetail",
					Organization: "Message\\CYTCo",
					Link: "http://www.chenyo-tech.com.tw/",
					Location: "Label\\Taiwan",
					Display: false
				},
				{
					Description: "Label\\PresenterInInternationalConference",
					Detail: "Message\\PresenterInInternationalConferenceDetail",
					Organization: "Industrial Engineering and Engineering Management",
					Link: "http://www.ieem.org/public.asp?page=home.htm",
					Location: "Label\\Malaysia",
					Display: false
				}
			]
		},
		{
			Year: 2015,
			Events: [
				{
					IconClass: "fa fa-briefcase",
					Description: "Label\\PartTimeSoftwareEngineer",
					Detail: "Message\\BuilderTCoDetail",
					Organization: "Message\\BuilderTCo",
					Link: "http://www.buildeab.com.tw/index.html",
					Location: "Label\\Taiwan",
					Display: false
				},
				{
					IconClass: "fa fa-graduation-cap",
					Description: "Message\\Master",
					Detail: "Message\\MasterDetail",
					Organization: "Message\\NCKUIEEM",
					Link: "http://www.imis.ncku.edu.tw/index.php?Lang=zh-tw",
					Location: "Label\\Taiwan",
					Display: true
				},
				{
					Description: "Label\\ExchangeStudent",
					Detail: "Message\\SJTUDetail",
					Organization: "Message\\SJTU",
					Link: "https://www.sjtu.edu.cn/",
					Location: "Label\\China",
					Display: false
				}
			]
		},
		{
			Year: 2016,
			Events: [
				{
					IconClass: "fa fa-briefcase",
					Description: "Label\\Programmer",
					Detail: "Message\\ProgrammerDetail",
					Organization: "Message\\GSS",
					Link: "https://www.gss.com.tw/",
					Location: "Label\\Taiwan",
					Display: true
				},
				{
					IconClass: "fa fa-briefcase",
					Description: "Label\\ProgramAnalyst",
					Detail: "Message\\ProgramAnalystDetail",
					Organization: "Message\\GSS",
					Link: "https://www.gss.com.tw/",
					Location: "Label\\Taiwan",
					Display: true
				},
				{
					IconClass: "fa fa-briefcase",
					Description: "Label\\Mentor",
					Detail: "Message\\MentorDetail",
					Organization: "Message\\GSS",
					Link: "https://www.gss.com.tw/",
					Location: "Label\\Taiwan",
					Display: false
				}
			]
		},
		{
			Year: 2018,
			Events: [
				{
					Description: "Message\\TraineeOfTddAndRefactoringTraining",
					Detail: "Message\\TddAndRefactoringTraining",
					Organization: "Joey Chen @ Odd-e",
					Link: "https://dotblogs.com.tw/hatelove/1",
					Location: "Label\\Taiwan",
					Display: true
				},
			]
		},
		{
			Year: 2019,
			// Events: [
			//   {
			//     Description: "Trainee",
			//     Detail: "A training of \"Unit Testing Effectively with Legacy Code\" established by Joey Chen @ Odd-e.", 
			//     Organization: "Joey Chen @ Odd-e", 
			//     Link: "https://dotblogs.com.tw/hatelove/1", 
			//     Location: "Label.Taiwan", 
			//     Display: true
			//   }, 
			// ]
		},
	],
	Projects: [
		{
			Year: 2016,
			Events: [
				{
					Description: "Message\\MOSTProject",
					Detail: "Message\\MOSTProjectDetail",
					Roles: [
						"Label\\FullStackDeveloper",
						"Message\\I18nIntroducer",
					],
					Features: [
						"ASP.NET MVC (C#)",
						"JavaScript + jQuery + Kendo UI",
						"Label\\TwoTierSoftwareFrameWork",
						"Message\\MOSTKits"
					],
				}
			]
		},
		{
			Year: 2017,
			Events: [
				{
					Description: "Message\\ODSystem",
					Detail: "Message\\ODSystemDetail",
					Link: "https://www.gsscloud.com/tw/vital/od",
					Roles: [
						"Message\\DeveloperInProductTeam",
						"Message\\DeveloperInProjectTeam",
						"Message\\CIPromoterInProjectTeam"
					],
					Features: [
						"ASP.NET MVC (C#)",
						"JavaScript + jQuery + Kendo UI",
						"Label\\ThreeTierSoftwareFrameWork",
						"Message\\ODSystemKits",
					],
				},
			]
		},
		{
			Year: 2018,
			Events: [
				{
					Description: "Message\\AJRepo",
					Detail: "Message\\AJRepoDetail",
					Roles: [
						"Message\\PersonInCharge"
					],
					Features: [
						"ASP.NET MVC (C#)",
						"JavaScript + jQuery + Bootstrap",
						"Label\\ThreeTierSoftwareFrameWork",
						"Message\\UsingOpenSourceResources",
						"Message\\AutoDBBackup"
					]
				}
			]
		},
		{
			Year: 2019,
			Events: []
		}
	]
};
var Languages = [
	{
		Name: "English (US)",
		Code: "EN",
		Display: "EN"
	},
	{
		Name: "中文(台灣)",
		Code: "TW",
		Display: "中"
	},
];
var DefaultLocale = "EN";

var vm = new Vue({
	el: "#app",
	data: {
		Langusges: Languages,
		Locale: DefaultLocale,
		Resume: ResumeData
	},
	computed: {
		ToolTypes: function () {
			let types = $(this.Resume.Skills.Tools.List).map(function () {
				return this.Type;
			});

			return Array.from(new Set(types));
		}
	},
	methods: {
		SwitchLanguage: function (ref) {
			$(this.$refs[ref]).parents(".i18n").find(".active").removeClass("active");
			$(this.$refs[ref]).addClass("active");
			this.Locale = ref;
			this.$forceUpdate();
		},
		HideContent: function (ref) {
			$(this.$refs[ref]).toggleClass("hidden");
			$(this.$refs[ref]).next("ul").slideToggle(300);
		},
		ShowEvent: function (e) {
			e.Display = true;
		},
		HideEvent: function (e) {
			e.Display = false;
		}
	}
});



// i18n
function __(entry) {
	if (!entry) {
		return "";
	}

	let locale = vm && vm.Locale ? vm.Locale : DefaultLocale;
	let localeResource = RESOURCES[locale];

	let entries = entry.split("\\");
	let type = entries[0];
	let key = entries[1];
	if (localeResource && localeResource[type]) {
		let value = localeResource[type][key];
		if (value) { return value; }
		else { return key; }
	}

	return entry;
};