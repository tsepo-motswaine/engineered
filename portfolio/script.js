(() => {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  $$("[data-name]").forEach((el) => (el.textContent = S.name));
  $$("[data-initials]").forEach((el) => (el.textContent = S.initials));
  $("[data-eyebrow]").textContent = S.eyebrow.join("  •  ");
  $("[data-headline]").textContent = S.headline;
  $("[data-summary]").textContent = S.summary;
  $("[data-year]").textContent = new Date().getFullYear();

  $("[data-portrait]").innerHTML = S.portrait
    ? `<img src="${esc(S.portrait)}" alt="Portrait of ${esc(S.name)}" />`
    : `<div class="portrait-fallback"><span>${esc(S.initials)}</span><code>&lt;/&gt;</code></div>`;

  $("[data-stats]").innerHTML = S.stats.map((s) =>
    `<div class="stat reveal"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join("");

  $("[data-projects]").innerHTML = S.projects.map((p, i) => {
    const tag = p.link ? "a" : "article";
    const href = p.link ? ` href="${esc(p.link)}" target="_blank" rel="noopener"` : "";
    return `<${tag} class="project reveal"${href}>
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <div class="project-body">
        <p class="org">${esc(p.org)}</p>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${p.metrics.length ? `<div class="chips metric">${p.metrics.map((m) => `<span>${esc(m)}</span>`).join("")}</div>` : ""}
        <div class="chips">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        ${p.link ? `<span class="more">View project →</span>` : ""}
      </div>
    </${tag}>`;
  }).join("");

  $("[data-experience]").innerHTML = S.experience.map((e) => `
    <li class="reveal">
      <div class="when mono-font">${esc(e.period)}</div>
      <div><h3>${esc(e.role)} <span class="muted">@ ${esc(e.org)}</span></h3>
      <ul>${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul></div>
    </li>`).join("");

  $("[data-about-heading]").textContent = S.about.heading;
  $("[data-about-body]").innerHTML = S.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("[data-availability]").textContent = S.availability;
  $("[data-skills]").innerHTML = S.skills.map((s) => `<li>${esc(s)}</li>`).join("");

  const links = [
    [`mailto:${S.email}`, "Email", "primary"],
    [S.linkedin, "LinkedIn", "ghost"],
    [S.github, "GitHub", "ghost"],
    [S.cv, "Download CV", "ghost"],
  ].filter(([href]) => href);
  $("[data-contact]").innerHTML = links.map(([href, label, cls]) =>
    `<a class="btn ${cls}" href="${esc(href)}"${href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'}>${label}</a>`).join("");

  // Theme toggle (remembers choice)
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
  $(".theme-btn").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  // Mobile menu
  const menuBtn = $(".menu-btn"), nav = $(".links");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("open"); });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));
})();
