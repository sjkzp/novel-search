const API_BASE_URL = "https://rakuten-books-proxy.cgm4s70.workers.dev";

const STATIC_PAGE_AUTHORS = [
  "東野圭吾",
  "村上春樹",
  "宮部みゆき",
  "辻村深月",
  "湊かなえ",
  "伊坂幸太郎",
  "恩田陸",
  "森見登美彦",
  "有川ひろ",
  "住野よる",
  "青山美智子",
  "原田マハ",
  "凪良ゆう",
  "町田そのこ",
  "瀬尾まいこ",
  "小川糸",
  "朝井リョウ",
  "米澤穂信",
  "知念実希人",
  "西尾維新"
];

const STATIC_PAGE_KEYWORDS = [
  "ミステリー",
  "青春",
  "恋愛",
  "猫",
  "探偵",
  "家族",
  "友情",
  "学校",
  "仕事",
  "結婚",
  "卒業",
  "一人暮らし",
  "医療",
  "料理",
  "カレー",
  "パン",
  "ゲーム",
  "おしゃれ",
  "優しい",
  "旅"
];

const STATIC_AUTHOR_PAGES = STATIC_PAGE_AUTHORS.map(author => ({
  href: `./author/${author}.html`,
  label: `${author}のあらすじ一覧`
}));

const STATIC_KEYWORD_PAGES = STATIC_PAGE_KEYWORDS.map(keyword => ({
  href: `./keyword/${keyword}.html`,
  label: `${keyword}小説のあらすじ`
}));

const DEMO_DATA = {
  "東野圭吾": [
    {
      title: "容疑者Xの献身",
      author: "東野圭吾",
      publisher: "文藝春秋",
      publishedDate: "2008-08",
      price: 858,
      synopsis: "天才数学者で高校教師の石神は、隣人の花岡靖子が起こした事件を知り、完全なアリバイ工作を仕掛ける。湯川学が挑む、愛と論理のミステリー。",
      url: "https://books.rakuten.co.jp/",
      image: ""
    },
    {
      title: "白夜行",
      author: "東野圭吾",
      publisher: "集英社",
      publishedDate: "2002-08",
      price: 1045,
      synopsis: "大阪の質屋殺しを発端に、被害者の息子と容疑者の娘の人生が交差していく。長い歳月をかけて闇の中を歩む二人を描く長編小説。",
      url: "https://books.rakuten.co.jp/",
      image: ""
    },
    {
      title: "手紙",
      author: "東野圭吾",
      publisher: "文藝春秋",
      publishedDate: "2006-10",
      price: 748,
      synopsis: "強盗殺人を犯した兄を持つ弟に、毎月刑務所から手紙が届く。加害者家族として生きる苦しみと社会のまなざしを描く作品。",
      url: "https://books.rakuten.co.jp/",
      image: ""
    }
  ],
  "村上春樹": [
    {
      title: "ノルウェイの森",
      author: "村上春樹",
      publisher: "講談社",
      publishedDate: "2004-09",
      price: 836,
      synopsis: "1960年代末、大学生のワタナベは親友の死をきっかけに直子と向き合う。喪失と再生、青春の痛みを静かに描いた長編小説。",
      url: "https://books.rakuten.co.jp/",
      image: ""
    },
    {
      title: "1Q84",
      author: "村上春樹",
      publisher: "新潮社",
      publishedDate: "2012-10",
      price: 1034,
      synopsis: "1984年の東京から、二つの月が浮かぶもうひとつの世界へ。青豆と天吾の物語が交錯する壮大な長編。",
      url: "https://books.rakuten.co.jp/",
      image: ""
    }
  ]
};

const FEATURED_AUTHORS = [
  "東野圭吾",
  "村上春樹",
  "宮部みゆき",
  "辻村深月",
  "湊かなえ",
  "伊坂幸太郎",
  "恩田陸",
  "森見登美彦",
  "有川ひろ",
  "住野よる",
  "ひのひまり",
  "西尾維新",
  "青山美智子",
  "原田マハ",
  "凪良ゆう",
  "町田そのこ",
  "寺地はるな",
  "瀬尾まいこ",
  "小川糸",
  "柚木麻子",
  "朝井リョウ",
  "米澤穂信",
  "今村翔吾",
  "知念実希人",
  "一穂ミチ",
  "小野寺史宜",
  "額賀澪",
  "桜木紫乃",
  "村田沙耶香",
  "川上未映子",
  "窪美澄",
  "彩瀬まる",
  "中山七里",
  "薬丸岳",
  "柚月裕子",
  "道尾秀介",
  "貫井徳郎",
  "綾辻行人",
  "京極夏彦",
  "小野不由美",
  "三浦しをん",
  "重松清",
  "奥田英朗",
  "万城目学",
  "荻原浩",
  "垣谷美雨",
  "群ようこ",
  "梨木香歩",
  "吉本ばなな",
  "角田光代",
  "江國香織",
  "川上弘美",
  "長野まゆみ",
  "小川洋子",
  "乙一",
  "乾くるみ",
  "辻堂ゆめ",
  "似鳥鶏",
  "相沢沙呼",
  "阿津川辰海",
  "結城真一郎",
  "夏目漱石",
  "森鴎外",
  "芥川龍之介",
  "太宰治",
  "川端康成",
  "三島由紀夫",
  "谷崎潤一郎",
  "志賀直哉",
  "泉鏡花",
  "江戸川乱歩",
  "横溝正史",
  "松本清張",
  "司馬遼太郎",
  "池波正太郎",
  "山崎豊子",
  "向田邦子",
  "赤川次郎",
  "星新一",
  "筒井康隆",
  "新井素子",
  "上橋菜穂子",
  "荻原規子",
  "あさのあつこ",
  "宗田理",
  "那須正幹",
  "角野栄子",
  "柏葉幸子",
  "岡田淳",
  "富安陽子",
  "廣嶋玲子",
  "令丈ヒロ子",
  "松本祐子",
  "はやみねかおる",
  "緑川聖司",
  "佐藤多佳子",
  "森絵都",
  "椰月美智子",
  "梨屋アリエ",
  "石崎洋司",
  "斉藤洋",
  "村山早紀",
  "加納朋子",
  "近藤史恵",
  "坂木司",
  "北村薫",
  "若竹七海",
  "畠中恵",
  "澤村伊智",
  "恒川光太郎",
  "上田早夕里",
  "又吉直樹",
  "田中慎弥",
  "金原ひとみ",
  "綿矢りさ",
  "平野啓一郎",
  "本谷有希子",
  "滝口悠生",
  "村上龍",
  "高橋源一郎",
  "島本理生",
  "桐野夏生",
  "桜庭一樹",
  "佐藤正午",
  "葉室麟",
  "門井慶喜",
  "西加奈子",
  "小池真理子",
  "逢坂剛",
  "池井戸潤",
  "海堂尊",
  "冲方丁",
  "桜坂洋",
  "奈須きのこ",
  "虚淵玄",
  "竜騎士07",
  "時雨沢恵一",
  "川原礫",
  "鎌池和馬",
  "伏見つかさ",
  "谷川流",
  "賀東招二",
  "丸戸史明",
  "長月達平",
  "暁なつめ",
  "佐島勤",
  "橙乃ままれ",
  "白鳥士郎",
  "衣笠彰梧",
  "竹宮ゆゆこ",
  "入間人間",
  "成田良悟",
  "支倉凍砂",
  "川上稔",
  "虎走かける",
  "伏瀬",
  "理不尽な孫の手",
  "カルロ・ゼン",
  "丸山くがね",
  "愛七ひろ",
  "香月美夜",
  "逢空万太",
  "平坂読",
  "葵せきな",
  "渡航",
  "鴨志田一",
  "細音啓",
  "榎宮祐",
  "犬村小六",
  "野村美月",
  "岩井恭平",
  "あざの耕平",
  "三雲岳斗",
  "丈月城",
  "鏡貴也",
  "雨木シュウスケ",
  "神坂一",
  "秋田禎信",
  "榊一郎",
  "水野良",
  "ヤマグチノボル",
  "小林湖底",
  "紙城境介",
  "望公太",
  "鳳乃一真",
  "海冬レイジ",
  "三河ごーすと",
  "二丸修一",
  "羊太郎",
  "田尾典丈",
  "橋本紡",
  "アガサ・クリスティ",
  "アーサー・コナン・ドイル",
  "スティーヴン・キング",
  "J・K・ローリング",
  "ジョージ・オーウェル",
  "アーネスト・ヘミングウェイ",
  "F・スコット・フィッツジェラルド",
  "マーク・トウェイン",
  "チャールズ・ディケンズ",
  "ジェーン・オースティン",
  "シャーロット・ブロンテ",
  "エミリー・ブロンテ",
  "ルイス・キャロル",
  "J・R・R・トールキン",
  "C・S・ルイス",
  "レイ・ブラッドベリ",
  "アイザック・アシモフ",
  "フィリップ・K・ディック",
  "アーシュラ・K・ル＝グウィン",
  "ダン・ブラウン",
  "ジョン・グリシャム",
  "パウロ・コエーリョ",
  "カズオ・イシグロ",
  "ガブリエル・ガルシア＝マルケス",
  "ハルキ・ムラカミ",
  "フランツ・カフカ",
  "ヘルマン・ヘッセ",
  "トーマス・マン",
  "ドストエフスキー",
  "トルストイ",
  "チェーホフ",
  "ヴィクトル・ユーゴー",
  "ジュール・ヴェルヌ",
  "アレクサンドル・デュマ",
  "アルベール・カミュ",
  "サン＝テグジュペリ",
  "ミヒャエル・エンデ",
  "ロアルド・ダール",
  "モーリス・ルブラン",
  "エラリー・クイーン",
  "レイモンド・チャンドラー",
  "ダシール・ハメット",
  "パトリシア・ハイスミス",
  "ジョン・ル・カレ",
  "アンディ・ウィアー",
  "リチャード・バック",
  "オルダス・ハクスリー",
  "ウィリアム・ギブスン",
  "テッド・チャン",
  "ケン・リュウ"
];

const FEATURED_KEYWORDS = [
  "青春",
  "ミステリー",
  "猫",
  "家族",
  "恋愛",
  "学校",
  "友情",
  "旅",
  "謎",
  "魔法",
  "探偵",
  "図書館",
  "喫茶店",
  "手紙",
  "秘密",
  "記憶",
  "初恋",
  "結婚",
  "母娘",
  "父子",
  "姉妹",
  "兄弟",
  "仕事",
  "料理",
  "音楽",
  "美術",
  "映画",
  "時代",
  "江戸",
  "幕末",
  "警察",
  "裁判",
  "医療",
  "病院",
  "再生",
  "成長",
  "冒険",
  "異世界",
  "宇宙",
  "ロボット",
  "AI",
  "タイムスリップ",
  "日常",
  "田舎",
  "都会",
  "海",
  "山",
  "雨",
  "雪",
  "食堂",
  "本屋",
  "駅",
  "犬",
  "ゲーム",
  "おしゃれ",
  "優しい",
  "先生",
  "医師",
  "看護師",
  "警察官",
  "刑事",
  "探偵事務所",
  "弁護士",
  "裁判官",
  "作家",
  "編集者",
  "書店員",
  "司書",
  "料理人",
  "パティシエ",
  "画家",
  "音楽家",
  "俳優",
  "アイドル",
  "記者",
  "カメラマン",
  "会社員",
  "公務員",
  "美容師",
  "花屋",
  "カレー",
  "パン",
  "ケーキ",
  "コーヒー",
  "紅茶",
  "チョコレート",
  "ラーメン",
  "寿司",
  "お弁当",
  "スープ",
  "和菓子",
  "洋菓子",
  "りんご",
  "いちご",
  "ワイン",
  "卒業",
  "入学",
  "受験",
  "進学",
  "就職",
  "転職",
  "退職",
  "一人暮らし",
  "同棲",
  "妊娠",
  "出産",
  "育児",
  "子育て",
  "介護",
  "老後",
  "定年",
  "第二の人生",
  "引っ越し",
  "上京",
  "帰省",
  "独立"
];

const searchMode = document.getElementById("searchMode");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const content = document.getElementById("content");
const statusBar = document.getElementById("statusBar");
const statusAuthor = document.getElementById("statusAuthor");
const statusCount = document.getElementById("statusCount");
const sortSelect = document.getElementById("sortSelect");
const genreFilter = document.getElementById("genreFilter");
const pagination = document.getElementById("pagination");
const apiNote = document.getElementById("apiNote");

const ITEMS_PER_PAGE = 30;
let currentBooks = [];
let currentQuery = "";
let currentMode = "author";
let currentPage = 1;
let currentPageCount = 1;
let currentTotalCount = 0;
let currentGenreSelection = null;

searchMode.addEventListener("change", updateSearchPlaceholder);
searchBtn.addEventListener("click", doSearch);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") doSearch();
});
sortSelect.addEventListener("change", () => {
  if (currentBooks.length === 0) return;
  render(currentQuery, currentBooks, currentMode, {
    page: currentPage,
    pageCount: currentPageCount,
    totalCount: currentTotalCount
  });
});
genreFilter.addEventListener("change", event => {
  if (!event.target.matches(".genre-checkbox")) return;

  currentGenreSelection = new Set(
    [...genreFilter.querySelectorAll(".genre-checkbox:checked")].map(input => input.value)
  );

  render(currentQuery, currentBooks, currentMode, {
    page: currentPage,
    pageCount: currentPageCount,
    totalCount: currentTotalCount
  });
});

pagination.addEventListener("click", event => {
  const button = event.target.closest(".page-btn");
  if (!button || button.disabled) return;

  const page = Number(button.dataset.page);
  if (!page || page === currentPage) return;

  goToPage(page);
});

updateSearchPlaceholder();
setupQuickSearches();
setupPickupPages();

content.addEventListener("click", event => {
  const refresh = event.target.closest(".quick-refresh");
  if (refresh) {
    refreshQuickSearchGroup(refresh.dataset.refreshGroup);
    return;
  }

  const quickSearch = event.target.closest(".quick-search");
  if (quickSearch) {
    searchMode.value = quickSearch.dataset.mode || "author";
    searchInput.value = quickSearch.dataset.query || "";
    updateSearchPlaceholder();
    doSearch();
    return;
  }

  const authorLink = event.target.closest(".author-link");
  if (authorLink) {
    searchMode.value = "author";
    searchInput.value = authorLink.dataset.author || authorLink.textContent.trim();
    updateSearchPlaceholder();
    doSearch();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const toggle = event.target.closest(".synopsis-toggle");
  if (!toggle) return;

  const synopsis = toggle.previousElementSibling;
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  synopsis.classList.toggle("expanded", !expanded);
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.textContent = expanded ? "すべてを表示" : "閉じる";
});

runAutoSearchFromPage();

function updateSearchPlaceholder() {
  searchInput.placeholder = searchMode.value === "synopsis"
    ? "あらすじのキーワードを入力"
    : "作家名を入力";
}

function runAutoSearchFromPage() {
  const params = new URLSearchParams(window.location.search);
  const mode = document.body.dataset.autoSearchMode || params.get("mode");
  const query = document.body.dataset.autoSearchQuery || params.get("q");

  if (!mode || !query) return;
  if (!["author", "synopsis"].includes(mode)) return;

  searchMode.value = mode;
  searchInput.value = query;
  updateSearchPlaceholder();
  doSearch();
}

function setupQuickSearches() {
  setQuickSearchGroup("author", pickRandomItems(FEATURED_AUTHORS, 2));
  setQuickSearchGroup("synopsis", pickRandomItems(FEATURED_KEYWORDS, 3));
}

function refreshQuickSearchGroup(mode) {
  if (mode === "author") {
    setQuickSearchGroup("author", pickRandomItems(FEATURED_AUTHORS, 2));
    return;
  }

  if (mode === "synopsis") {
    setQuickSearchGroup("synopsis", pickRandomItems(FEATURED_KEYWORDS, 3));
  }
}

function setupPickupPages() {
  const pickupPages = document.getElementById("pickupPages");
  if (!pickupPages) return;

  pickupPages.innerHTML = [
    ...pickRandomItems(STATIC_AUTHOR_PAGES, 3),
    ...pickRandomItems(STATIC_KEYWORD_PAGES, 3)
  ]
    .map(page => `<a href="${escAttr(page.href)}">${escHtml(page.label)}</a>`)
    .join("");
}

function setQuickSearchGroup(mode, queries) {
  const group = document.querySelector(`[data-quick-group="${mode}"]`);
  if (!group) return;

  [...group.querySelectorAll(".quick-search")].forEach((button, index) => {
    const query = queries[index];
    if (!query) {
      button.remove();
      return;
    }

    button.dataset.mode = mode;
    button.dataset.query = query;
    button.textContent = query;
  });
}

function pickRandomItems(items, count) {
  return [...items]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

function doSearch() {
  if (searchMode.value === "synopsis") {
    doSynopsisSearch();
    return;
  }

  doAuthorSearch();
}

async function doAuthorSearch() {
  const author = searchInput.value.trim();
  if (!author) return;
  currentPage = 1;
  currentGenreSelection = null;

  showLoading();
  searchBtn.disabled = true;

  try {
    const result = await fetchRakuten(author, currentPage);
    render(author, result.books, "author", result);
  } catch (error) {
    showError(error.message || "検索に失敗しました。");
  } finally {
    searchBtn.disabled = false;
  }
}

async function doSynopsisSearch() {
  const keyword = searchInput.value.trim();
  if (!keyword) return;
  currentPage = 1;
  currentGenreSelection = null;

  showLoading();
  searchBtn.disabled = true;

  try {
    const result = await fetchRakutenByKeyword(keyword, currentPage);
    render(keyword, result.books, "synopsis", result);
  } catch (error) {
    showError(error.message || "検索に失敗しました。");
  } finally {
    searchBtn.disabled = false;
  }
}

async function goToPage(page) {
  const query = currentQuery;
  if (!query) return;

  currentPage = page;
  showLoading();
  searchBtn.disabled = true;

  try {
    const result = currentMode === "synopsis"
      ? await fetchRakutenByKeyword(query, currentPage)
      : await fetchRakuten(query, currentPage);

    render(query, result.books, currentMode, result);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    showError(error.message || "検索に失敗しました。");
  } finally {
    searchBtn.disabled = false;
  }
}

async function fetchRakuten(author, page = 1) {
  const params = new URLSearchParams({
    mode: "author",
    q: author,
    page: String(page)
  });

  let response;
  try {
    response = await fetch(`${API_BASE_URL}/search?${params.toString()}`);
  } catch (error) {
    throw new Error("検索APIに接続できませんでした。Worker URLやCloudflareの設定を確認してください。");
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const apiError = data?.errors?.errorMessage || data?.error_description || response.statusText;
    throw new Error(formatRakutenError(apiError));
  }

  if (data?.error || data?.errors) {
    const apiError = data.error_description || data.errors?.errorMessage || data.error;
    throw new Error(formatRakutenError(apiError));
  }

  return {
    books: normalizeRakutenItems(data),
    page: Number(data.page || page),
    pageCount: Number(data.pageCount || 1),
    totalCount: Number(data.count || 0)
  };
}

async function fetchRakutenByKeyword(keyword, page = 1) {
  const params = new URLSearchParams({
    mode: "synopsis",
    q: keyword,
    page: String(page)
  });

  let response;
  try {
    response = await fetch(`${API_BASE_URL}/search?${params.toString()}`);
  } catch (error) {
    throw new Error("検索APIに接続できませんでした。Worker URLやCloudflareの設定を確認してください。");
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const apiError = data?.errors?.errorMessage || data?.error_description || response.statusText;
    throw new Error(formatRakutenError(apiError));
  }

  if (data?.error || data?.errors) {
    const apiError = data.error_description || data.errors?.errorMessage || data.error;
    throw new Error(formatRakutenError(apiError));
  }

  const books = filterBooksBySynopsis(normalizeRakutenItems(data), keyword);

  return {
    books,
    page: Number(data.page || page),
    pageCount: Number(data.pageCount || 1),
    totalCount: Number(data.count || books.length)
  };
}

function normalizeRakutenItems(data) {
  return (data.Items || []).map(({ Item }) => ({
    title: Item.title,
    author: Item.author,
    publisher: Item.publisherName,
    publishedDate: Item.salesDate,
    price: Item.itemPrice,
    synopsis: Item.itemCaption || "あらすじは登録されていません。",
    url: Item.affiliateUrl || Item.itemUrl,
    image: getBetterImageUrl(Item.largeImageUrl || Item.mediumImageUrl || ""),
    genreId: Item.booksGenreId || "",
    genreName: Item.booksGenreName || ""
  }));
}

function getBetterImageUrl(url) {
  const text = String(url || "");
  if (!text) return "";

  if (/[?&]_ex=\d+x\d+/.test(text)) {
    return text.replace(/([?&]_ex=)\d+x\d+/, (_match, prefix) => `${prefix}500x500`);
  }

  return text;
}

function formatRakutenError(message) {
  const text = String(message || "");
  if (text.includes("REQUEST_CONTEXT_BODY_HTTP_REFERRER_MISSING")) {
    return "楽天APIが呼び出し元URLを確認できませんでした。file://ではなくアップロード先URLで開いてください。";
  }

  if (text.includes("HTTP_REFERRER_NOT_ALLOWED")) {
    return "楽天APIでこのサイトURLが許可されていません。楽天Webサービスのアプリ設定で、アップロード先のドメインを許可済みWebサイトに追加してください。";
  }

  if (text.includes("applicationId")) {
    return "楽天APIのapplicationIdが無効です。Cloudflare WorkerのRAKUTEN_APP_IDを確認してください。";
  }

  if (text.includes("accessKey")) {
    return "楽天APIのaccessKeyが無効です。Cloudflare WorkerのRAKUTEN_ACCESS_KEYを確認してください。";
  }

  return text || "楽天APIの呼び出しに失敗しました。";
}

function getDemoData(author) {
  const key = Object.keys(DEMO_DATA).find(name => name.includes(author) || author.includes(name));
  return key ? DEMO_DATA[key] : [];
}

function getAllDemoData() {
  return Object.values(DEMO_DATA).flat();
}

function filterBooksBySynopsis(books, keyword) {
  const words = getSearchWords(keyword);
  if (words.length === 0) return books;

  return books.filter(book => {
    const synopsis = normalizeText(book.synopsis);
    return words.every(word => synopsis.includes(word));
  });
}

function getSearchWords(keyword) {
  return normalizeText(keyword)
    .split(/\s+/)
    .map(word => word.trim())
    .filter(Boolean);
}

function paginateBooks(books, page = 1) {
  const pageCount = Math.max(1, Math.ceil(books.length / ITEMS_PER_PAGE));
  const safePage = Math.min(Math.max(1, page), pageCount);
  const start = (safePage - 1) * ITEMS_PER_PAGE;

  return {
    books: books.slice(start, start + ITEMS_PER_PAGE),
    page: safePage,
    pageCount,
    totalCount: books.length
  };
}

function normalizeText(value) {
  return String(value ?? "").toLocaleLowerCase("ja-JP");
}

function render(query, books, mode = "author", meta = {}) {
  document.body.classList.add("has-results");
  currentBooks = books;
  currentQuery = query;
  currentMode = mode;
  currentPage = Number(meta.page || currentPage || 1);
  currentPageCount = Number(meta.pageCount || 1);
  currentTotalCount = Number(meta.totalCount || books.length);

  statusBar.classList.remove("hidden");
  statusAuthor.textContent = mode === "synopsis" ? `あらすじ: ${query}` : query;

  if (books.length === 0) {
    statusCount.textContent = "";
    const emptyText = mode === "synopsis"
      ? `あらすじに「${escHtml(query)}」を含む作品が見つかりませんでした。`
      : `「${escHtml(query)}」の作品が見つかりませんでした。`;
    content.innerHTML = `
      <div class="state-box">
        <span class="icon">?</span>
        <p><strong>${emptyText}</strong><br>キーワードを変えて、もう一度検索してください。</p>
      </div>`;
    renderPagination();
    return;
  }

  renderGenreFilter(books);

  const filteredBooks = filterBooksByGenre(books);
  updateStatusCount(books.length, filteredBooks.length);
  const sortedBooks = sortBooksByDate(filteredBooks, sortSelect.value);
  const cards = sortedBooks.map((book, index) => `
    <div class="card" style="animation-delay:${index * 0.04}s">
      ${book.image
        ? `<a class="card-cover-link" href="${escAttr(book.url)}" target="_blank" rel="noopener"><img class="card-cover" src="${escAttr(book.image)}" alt="${escAttr(book.title)}" loading="lazy"></a>`
        : `<div class="card-cover placeholder">本</div>`}
      <div class="card-main">
        <div class="card-body">
          <div class="card-title"><a href="${escAttr(book.url)}" target="_blank" rel="noopener">${escHtml(book.title)}</a></div>
          <div class="card-meta">
            <span>${renderAuthorLinks(book.author)}</span>
            ${book.publisher ? `<span>${escHtml(book.publisher)}</span>` : ""}
            ${book.publishedDate ? `<span>${escHtml(book.publishedDate)}</span>` : ""}
          </div>
          <div class="card-synopsis">${escHtml(book.synopsis)}</div>
          <button class="synopsis-toggle hidden" type="button" aria-expanded="false">すべてを表示</button>
        </div>
        <div class="card-footer">
          <span class="price">${book.price ? `¥${Number(book.price).toLocaleString()}` : ""}</span>
          <a class="buy-btn" href="${escAttr(book.url)}" target="_blank" rel="noopener">楽天で見る</a>
        </div>
      </div>
    </div>
  `).join("");

  content.innerHTML = cards
    ? `<div class="grid">${cards}</div>`
    : `<div class="state-box"><span class="icon">?</span><p>選択中のジャンルに該当する作品がありません。</p></div>`;
  revealOverflowingSynopsisToggles();
  renderPagination();
}

function getPageStart(page, itemCount) {
  if (itemCount === 0) return 0;
  return (page - 1) * ITEMS_PER_PAGE + 1;
}

function getPageEnd(page, itemCount) {
  return (page - 1) * ITEMS_PER_PAGE + itemCount;
}

function updateStatusCount(pageItemCount, visibleItemCount) {
  if (pageItemCount === 0) {
    statusCount.textContent = "";
    return;
  }

  const rangeText = currentTotalCount > 0
    ? `${currentTotalCount}件中 ${getPageStart(currentPage, pageItemCount)}-${getPageEnd(currentPage, pageItemCount)}件`
    : `${pageItemCount}件`;

  statusCount.textContent = visibleItemCount === pageItemCount
    ? rangeText
    : `${rangeText} / 表示 ${visibleItemCount}件`;
}

function renderPagination() {
  if (currentPageCount <= 1) {
    pagination.classList.add("hidden");
    pagination.innerHTML = "";
    return;
  }

  const pages = getVisiblePages(currentPage, currentPageCount);
  const pageButtons = pages.map(page => {
    if (page === "...") return `<span class="page-ellipsis">...</span>`;
    return `<button class="page-btn${page === currentPage ? " active" : ""}" type="button" data-page="${page}" ${page === currentPage ? "disabled" : ""}>${page}</button>`;
  }).join("");

  pagination.innerHTML = `
    <button class="page-btn" type="button" data-page="${currentPage - 1}" ${currentPage <= 1 ? "disabled" : ""}>前へ</button>
    ${pageButtons}
    <button class="page-btn" type="button" data-page="${currentPage + 1}" ${currentPage >= currentPageCount ? "disabled" : ""}>次へ</button>
  `;
  pagination.classList.remove("hidden");
}

function getVisiblePages(page, pageCount) {
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    if (i === 1 || i === pageCount || Math.abs(i - page) <= 2) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }
  return pages;
}

function renderGenreFilter(books) {
  const genres = [...new Map(
    books.map(book => {
      const genre = getBookGenre(book);
      return [genre.key, genre];
    })
  ).values()].sort(compareGenres);

  if (genres.length <= 1) {
    genreFilter.classList.add("hidden");
    genreFilter.innerHTML = "";
    currentGenreSelection = genres.length === 1 ? new Set([genres[0].key]) : null;
    return;
  }

  if (!currentGenreSelection) {
    currentGenreSelection = new Set(
      genres
        .filter(genre => shouldCheckGenreByDefault(genre))
        .map(genre => genre.key)
    );
  } else {
    currentGenreSelection = new Set([...currentGenreSelection].filter(key => genres.some(genre => genre.key === key)));
  }

  genreFilter.innerHTML = `
    <span class="genre-filter-title">ジャンル</span>
    ${genres.map(genre => `
      <label class="genre-option">
        <input class="genre-checkbox" type="checkbox" value="${escAttr(genre.key)}" ${currentGenreSelection.has(genre.key) ? "checked" : ""}>
        ${escHtml(genre.label)}
      </label>
    `).join("")}
  `;
  genreFilter.classList.remove("hidden");
}

function filterBooksByGenre(books) {
  return books.filter(book => {
    const genre = getBookGenre(book);
    return !currentGenreSelection || currentGenreSelection.has(genre.key);
  });
}

function shouldCheckGenreByDefault(genre) {
  return genre.key !== "other";
}

function compareGenres(a, b) {
  const order = ["novel", "paperback", "children", "light-novel", "other"];
  const indexA = order.includes(a.key) ? order.indexOf(a.key) : order.length;
  const indexB = order.includes(b.key) ? order.indexOf(b.key) : order.length;
  return indexA - indexB || a.label.localeCompare(b.label, "ja");
}

function getBookGenre(book) {
  const id = String(book.genreId || "");
  const name = String(book.genreName || "");
  const text = `${id} ${name}`;

  if (id.startsWith("001004") || /小説|エッセイ|文学/.test(text)) {
    return { key: "novel", label: "小説・エッセイ" };
  }

  if (id.startsWith("001003") || /児童|絵本|こども|子ども/.test(text)) {
    return { key: "children", label: "児童書・絵本" };
  }

  if (id.startsWith("001017") || /ライトノベル|ラノベ/.test(text)) {
    return { key: "light-novel", label: "ライトノベル" };
  }

  if (id.startsWith("001019") || /文庫/.test(text)) {
    return { key: "paperback", label: "文庫" };
  }

  return { key: "other", label: "その他" };
}

function renderAuthorLinks(author) {
  const parts = String(author ?? "")
    .split(/[／/]+/)
    .map(part => part.trim())
    .filter(Boolean);

  if (parts.length === 0) return "";

  return parts
    .map(part => `<button class="author-link" type="button" data-author="${escAttr(part)}">${escHtml(part)}</button>`)
    .join(" / ");
}

function sortBooksByDate(books, order) {
  const direction = order === "date-asc" ? 1 : -1;
  return [...books].sort((a, b) => {
    const dateA = getDateValue(a.publishedDate);
    const dateB = getDateValue(b.publishedDate);
    if (dateA === dateB) return 0;
    if (dateA === Number.NEGATIVE_INFINITY) return 1;
    if (dateB === Number.NEGATIVE_INFINITY) return -1;
    return (dateA - dateB) * direction;
  });
}

function getDateValue(value) {
  const text = String(value ?? "");
  const match = text.match(/(\d{4})(?:[-/.年](\d{1,2}))?(?:[-/.月](\d{1,2}))?/);
  if (!match) return Number.NEGATIVE_INFINITY;

  const year = Number(match[1]);
  const month = Number(match[2] || 1);
  const day = Number(match[3] || 1);
  return new Date(year, month - 1, day).getTime();
}

function showLoading() {
  document.body.classList.add("has-results");
  statusBar.classList.add("hidden");
  pagination.classList.add("hidden");
  pagination.innerHTML = "";
  content.innerHTML = `
    <div class="state-box">
      <div class="loading-dots" style="margin-bottom:16px">
        <span></span><span></span><span></span>
      </div>
      <p>検索中...</p>
    </div>`;
}

function showError(message) {
  document.body.classList.add("has-results");
  statusBar.classList.add("hidden");
  pagination.classList.add("hidden");
  pagination.innerHTML = "";
  content.innerHTML = `
    <div class="state-box">
      <span class="icon">!</span>
      <p>${escHtml(message)}</p>
    </div>`;
}

function revealOverflowingSynopsisToggles() {
  document.querySelectorAll(".card-synopsis").forEach(synopsis => {
    const toggle = synopsis.nextElementSibling;
    if (!toggle?.classList.contains("synopsis-toggle")) return;

    const isOverflowing = synopsis.scrollHeight > synopsis.clientHeight + 1;
    toggle.classList.toggle("hidden", !isOverflowing);
  });
}

function escHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escAttr(value) {
  return escHtml(value).replace(/`/g, "&#96;");
}
