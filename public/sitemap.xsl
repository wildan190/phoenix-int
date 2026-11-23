<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="sm xhtml image">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:strip-space elements="*" />

  <xsl:template match="/">
    <html lang="id">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peta Situs — Phoenix Technologies</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&amp;family=DM+Sans:wght@400;500;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" />
        <style>
          :root {
            --bg: #FFF8F1;
            --surface: #FFFFFF;
            --surface-2: #FFEFE0;
            --line: rgba(120, 60, 10, 0.16);
            --fg: #2A1A0F;
            --muted: #7A6454;
            --accent: #E8710F;
            --accent-2: #F4A261;
            --glow: rgba(232, 113, 15, 0.22);
            --font-display: "Unbounded", "Arial Black", system-ui, sans-serif;
            --font-body: "DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
            --font-mono: "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #130E0B;
              --surface: #1B1410;
              --surface-2: #211812;
              --line: rgba(255, 190, 140, 0.14);
              --fg: #F6EDE4;
              --muted: #B5A598;
              --accent: #F07F1B;
              --accent-2: #F7B27F;
              --glow: rgba(240, 127, 27, 0.28);
            }
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            min-height: 100vh;
            background: var(--bg);
            color: var(--fg);
            font-family: var(--font-body);
            font-size: 16px;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
          }
          .glow {
            position: fixed;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(60% 45% at 85% -5%, var(--glow), transparent 70%);
          }
          .wrap {
            position: relative;
            width: 100%;
            max-width: 820px;
            margin-inline: auto;
            padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem) 3rem;
          }
          .bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: clamp(2rem, 6vw, 3.5rem);
          }
          .brand {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            text-decoration: none;
            color: inherit;
          }
          .brand img { width: 28px; height: auto; }
          .brand b {
            font-family: var(--font-display);
            font-size: 0.82rem;
            letter-spacing: 0.02em;
            color: var(--accent);
          }
          .chip {
            font-family: var(--font-mono);
            font-size: 0.7rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--muted);
            border: 1px solid var(--line);
            border-radius: 999px;
            padding: 0.3rem 0.75rem;
          }
          .eyebrow {
            margin: 0 0 0.6rem;
            font-family: var(--font-mono);
            font-size: 0.72rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--accent);
          }
          h1 {
            margin: 0;
            font-family: var(--font-display);
            font-weight: 700;
            font-size: clamp(2rem, 8vw, 3.4rem);
            letter-spacing: -0.04em;
            line-height: 1;
            background: linear-gradient(100deg, var(--accent) 10%, var(--accent-2) 90%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .lead {
            max-width: 48ch;
            margin: 1rem 0 0;
            color: var(--muted);
          }
          .lead .mono { font-family: var(--font-mono); font-size: 0.9em; color: var(--fg); }
          .panel {
            margin-top: clamp(1.75rem, 5vw, 2.75rem);
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 30px 70px -40px var(--glow);
          }
          .panel-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem 1.4rem;
            border-bottom: 1px solid var(--line);
            background: var(--surface-2);
            font-family: var(--font-mono);
            font-size: 0.72rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--muted);
          }
          .panel-head .count { color: var(--accent); }
          .list { list-style: none; margin: 0; padding: 0; }
          .item + .item { border-top: 1px solid var(--line); }
          .link {
            display: flex;
            align-items: center;
            gap: 0.85rem;
            padding: 1.1rem 1.4rem 0.35rem;
            text-decoration: none;
            color: inherit;
            transition: padding-left 0.3s ease;
          }
          .link:hover { padding-left: 1.7rem; }
          .dot {
            flex: none;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: var(--accent);
            box-shadow: 0 0 12px var(--glow);
          }
          .loc {
            font-weight: 500;
            overflow-wrap: anywhere;
            transition: color 0.25s ease;
          }
          .link:hover .loc { color: var(--accent); }
          .go {
            flex: none;
            margin-left: auto;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 1px solid var(--line);
            display: grid;
            place-items: center;
            transition: background 0.3s, border-color 0.3s;
          }
          .go::before {
            content: "";
            width: 7px;
            height: 7px;
            border: solid var(--muted);
            border-width: 0 1.6px 1.6px 0;
            transform: rotate(-45deg) translate(-1px, -1px);
            transition: border-color 0.3s;
          }
          .link:hover .go { background: var(--accent); border-color: var(--accent); }
          .link:hover .go::before { border-color: #1A0F07; }
          .meta {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            padding: 0 1.4rem 1.1rem 2.85rem;
          }
          .tag {
            font-family: var(--font-mono);
            font-size: 0.68rem;
            letter-spacing: 0.04em;
            padding: 0.2rem 0.6rem;
            border: 1px solid var(--line);
            border-radius: 999px;
            color: var(--muted);
          }
          .tag b { color: var(--accent); font-weight: 500; }
          footer {
            margin-top: 1.75rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 0.6rem 1.5rem;
            font-family: var(--font-mono);
            font-size: 0.7rem;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--muted);
          }
          footer a { color: var(--accent); text-decoration: none; }
          footer a:hover { text-decoration: underline; text-underline-offset: 3px; }
          @media (prefers-reduced-motion: reduce) {
            * { transition: none !important; }
          }
        </style>
      </head>
      <body>
        <div class="glow" aria-hidden="true"></div>
        <main class="wrap">
          <header class="bar">
            <a class="brand" href="/">
              <img src="/logo.png" alt="Phoenix Technologies" />
              <b>Phoenix Technologies</b>
            </a>
            <span class="chip">sitemap.xml</span>
          </header>

          <section>
            <p class="eyebrow">Peta Situs</p>
            <h1>Sitemap</h1>
            <p class="lead">
              Daftar seluruh halaman publik yang tersedia untuk mesin pencari di
              <span class="mono">phoenixtech.web.id</span>.
            </p>
          </section>

          <section class="panel">
            <div class="panel-head">
              <span class="count"><xsl:value-of select="count(sm:urlset/sm:url)" /> halaman</span>
              <span class="count"><xsl:value-of select="count(sm:urlset/sm:url/image:image)" /> gambar</span>
              <span>Standar sitemaps.org 0.9</span>
            </div>
            <ul class="list">
              <xsl:for-each select="sm:urlset/sm:url">
                <li class="item">
                  <a class="link" href="{sm:loc}">
                    <span class="dot"></span>
                    <span class="loc"><xsl:value-of select="sm:loc" /></span>
                    <span class="go"></span>
                  </a>
                  <div class="meta">
                    <xsl:if test="sm:lastmod">
                      <span class="tag">lastmod <b><xsl:value-of select="sm:lastmod" /></b></span>
                    </xsl:if>
                    <xsl:if test="sm:changefreq">
                      <span class="tag">changefreq <b><xsl:value-of select="sm:changefreq" /></b></span>
                    </xsl:if>
                    <xsl:if test="sm:priority">
                      <span class="tag">priority <b><xsl:value-of select="sm:priority" /></b></span>
                    </xsl:if>
                    <xsl:for-each select="xhtml:link[@rel='alternate']">
                      <span class="tag">hreflang <b><xsl:value-of select="@hreflang" /></b></span>
                    </xsl:for-each>
                    <xsl:for-each select="image:image">
                      <span class="tag">gambar <b><xsl:value-of select="image:title" /></b></span>
                    </xsl:for-each>
                  </div>
                </li>
              </xsl:for-each>
            </ul>
          </section>

          <footer>
            <span>© <xsl:value-of select="substring(sm:urlset/sm:url[1]/sm:lastmod, 1, 4)" /> Phoenix Technologies</span>
            <a href="/">Kembali ke beranda</a>
          </footer>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
