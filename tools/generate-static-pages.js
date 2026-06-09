const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const siteUrl = "https://sjkzp.github.io/novel-search";
const today = "2026-06-10";

const authors = [
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

const keywords = [
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

const pageLinks = [];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pagePath(type, query) {
  return `${type}/${query}.html`;
}

function canonicalPath(type, query) {
  return encodeURI(`${siteUrl}/${pagePath(type, query)}`);
}

function renderPage({ type, mode, query }) {
  const escapedQuery = escapeHtml(query);
  const isAuthor = type === "author";
  const title = isAuthor
    ? `${query}の小説あらすじ一覧 - あらすじ検索`
    : `${query}が出てくる小説のあらすじ一覧 - あらすじ検索`;
  const description = isAuthor
    ? `${query}の小説をあらすじで一覧検索。発売日順やジャンル絞り込みで、次に読みたい一冊を探せます。`
    : `「${query}」を含む小説のあらすじを検索。気になる言葉から、次に読みたい小説を探せます。`;
  const heading = isAuthor
    ? `${query}の小説あらすじ一覧`
    : `${query}が出てくる小説のあらすじ一覧`;
  const lead = isAuthor
    ? `${query}の作品を、あらすじから一覧で探せます。タイトルだけでは選びにくいときも、物語の雰囲気から次の一冊を見つけられます。`
    : `「${query}」という言葉から、小説のあらすじを横断して探せます。気分やテーマに近い物語を見つけたいときに便利です。`;

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonicalPath(type, query)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonicalPath(type, query)}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:image" content="${siteUrl}/ogp-1200x630.png">
<meta name="twitter:card" content="summary_large_image">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZH0NW9QBPX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "G-ZH0NW9QBPX");
</script>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700;900&family=Shippori+Mincho:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">
</head>
<body data-auto-search-mode="${mode}" data-auto-search-query="${escapedQuery}">
<header>
  <div class="header-inner">
    <a class="logo" href="../index.html">あらすじ<span>検索</span></a>
    <div class="search-row">
      <select class="search-select" id="searchMode" aria-label="検索種別">
        <option value="author">作家で検索</option>
        <option value="synopsis">あらすじで検索</option>
      </select>
      <input class="search-input" id="searchInput" type="text" placeholder="作家名を入力" autocomplete="off">
      <button class="search-btn" id="searchBtn" type="button">検索</button>
    </div>
  </div>
</header>
<main>
  <div class="api-note hidden" id="apiNote"></div>
  <div class="status-bar hidden" id="statusBar">
    <span class="status-author" id="statusAuthor"></span>
    <span class="status-count" id="statusCount"></span>
    <span class="status-spacer"></span>
    <div class="result-controls">
      <label class="sort-control">
        並び順
        <select class="sort-select" id="sortSelect">
          <option value="date-desc">発売日 降順</option>
          <option value="date-asc">発売日 昇順</option>
        </select>
      </label>
      <div class="genre-filter hidden" id="genreFilter"></div>
    </div>
  </div>
  <div id="content">
    <section class="fixed-landing">
      <p class="hero-kicker">Novel Synopsis Finder</p>
      <h1>${escapeHtml(heading)}</h1>
      <p>${escapeHtml(lead)}</p>
      <p class="fixed-landing-note">このページを開くと、検索結果を自動で読み込みます。</p>
    </section>
  </div>
  <div class="pagination hidden" id="pagination"></div>
</main>
<footer class="site-version"><a href="../privacy.html">プライバシーポリシー</a></footer>
<script src="../app.js"></script>
</body>
</html>
`;
}

function writePage(type, mode, query) {
  const relative = pagePath(type, query);
  const fullPath = path.join(rootDir, relative);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, renderPage({ type, mode, query }), "utf8");
  pageLinks.push(relative);
}

for (const dir of ["author", "keyword"]) {
  const fullDir = path.join(rootDir, dir);
  fs.mkdirSync(fullDir, { recursive: true });
  for (const file of fs.readdirSync(fullDir)) {
    if (file.endsWith(".html")) fs.unlinkSync(path.join(fullDir, file));
  }
}

for (const author of authors) writePage("author", "author", author);
for (const keyword of keywords) writePage("keyword", "synopsis", keyword);

const sitemapUrls = [
  { loc: `${siteUrl}/index.html`, changefreq: "weekly", priority: "1.0" },
  { loc: `${siteUrl}/privacy.html`, changefreq: "yearly", priority: "0.3" },
  ...pageLinks.map(relative => ({
    loc: encodeURI(`${siteUrl}/${relative}`),
    changefreq: "weekly",
    priority: relative.startsWith("author/") ? "0.8" : "0.7"
  }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(item => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(rootDir, "sitemap.xml"), sitemap, "utf8");
console.log(`Generated ${pageLinks.length} pages and sitemap.xml`);
