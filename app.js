(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // the motion system from styles.css (--dur-fast / --dur-move / --dur-enter), in ms for scripted animation
  const MOTION = { fast: 200, move: 500, enter: 900, arrive: "cubic-bezier(.16, 1, .3, 1)", swap: "ease" };
  const projectUrl = (p) => `project.html?p=${encodeURIComponent(p.slug)}`;

  document.documentElement.classList.add("js");
  $(".bar__name").textContent = S.name;

  function media(m, tint) {
    if (!m.src) return `<div class="ph" style="--tint:${tint}"></div>`;
    if (m.video) return `<video src="${esc(m.src)}"${m.poster ? ` poster="${esc(m.poster)}"` : ""} autoplay muted loop playsinline preload="metadata"></video>`;
    return `<img src="${esc(m.src)}" alt="" loading="lazy" draggable="false">`;
  }

  function renderHome() {
    document.title = S.name;
    // the opening line rises in word by word
    $("#headline").innerHTML = (S.headline || "").split(" ").map((w, i) => `<span class="word" style="--i:${i}">${[...w].map((c) => `<span class="ch">${esc(c)}</span>`).join("")}</span>`).join(" ");
    $("#headline").setAttribute("aria-label", S.headline);
    crazyLetters($("#headline"));
    // Projects in an endless centred carousel: the set is laid out three times and the view lives in the
    // middle copy, jumping back by one set whenever it drifts into a side copy (see carousel()).
    // Swipe, drag, click a side card or use the keyboard; only the middle card plays its video.
    const ordered = [...S.projects].sort((a, b) => (b.slug === S.featured) - (a.slug === S.featured));
    const loop = [0, 1, 2].flatMap((copy) => ordered.map((p) => [p, copy]));
    $("#work").innerHTML = `
      <div class="carousel__track" tabindex="0" aria-label="Projects, scroll sideways">
        ${loop.map(([p, copy]) => {
          const m = p.media[p.cover ?? p.hero ?? 0];
          const clone = copy !== 1 ? ' aria-hidden="true" tabindex="-1"' : "";
          return `
          <a class="card" href="${projectUrl(p)}" data-slug="${esc(p.slug)}"${clone}>
            <figure class="card__media">${media(m, p.tint)}<span class="card__label"><span class="card__name">${esc(p.name)}</span></span></figure>
          </a>`;
        }).join("")}
      </div>`;
    carousel($("#work"));
    grow($("#work"));
    sheet();
  }

  // Case studies open over the home page in a big sheet, like a Dribbble shot: it slides up over a dimmed page,
  // scrolls on its own, and closes with the button, Escape, a click on the dimmed area or the browser's back button.
  // The case study's #slug goes in the address, so a link to it opens the sheet straight away.
  function sheet() {
    const el = document.createElement("div");
    el.className = "sheet";
    el.hidden = true;
    el.innerHTML = `
      <div class="sheet__scrim"></div>
      <button type="button" class="sheet__close" aria-label="Close case study">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <div class="sheet__panel" role="dialog" aria-modal="true" tabindex="-1"><main class="project sheet__body"></main></div>`;
    document.body.appendChild(el);
    const panel = el.querySelector(".sheet__panel"), body = el.querySelector(".sheet__body");
    let panelScroll = null;
    // the first scroll inside a case study grows the sheet to the full page; it stays full until it closes
    panel.addEventListener("scroll", () => { if (panel.scrollTop > 8) el.classList.add("is-full"); }, { passive: true });
    // every case study starts at its top with a fresh smooth scroller, so no glide left over from the
    // previous one can pull the new page back down
    const toTop = () => {
      if (panelScroll) panelScroll.off();
      panel.scrollTop = 0;
      panelScroll = smooth(panel, body);
    };
    const homeTitle = document.title;
    let opener = null, closing = 0;
    const fill = (slug) => {
      const v = projectView(slug);
      body.innerHTML = v.html;
      document.title = v.title;
      toTop();
      watchLoads();
      // soft cascade: once the sheet has landed, the opening parts follow one after another
      [...body.querySelectorAll(".shot > .rise, .shot-frames > .rise")].slice(0, 6)
        .forEach((el, k) => el.style.setProperty("--delay", (0.32 + k * 0.09).toFixed(2) + "s"));
      watchRise(panel);
    };
    // the sheet grows out of the card you clicked: a clip that starts at the card's outline and opens to the
    // full panel, and on close shrinks back into that card if it's still on screen
    let from = null;
    const cardClip = (card) => {
      const c = card.querySelector(".card__media").getBoundingClientRect(), pn = panel.getBoundingClientRect();
      if (c.bottom < 0 || c.top > innerHeight) return null;
      return `inset(${c.top - pn.top}px ${pn.right - c.right}px ${pn.bottom - c.bottom}px ${c.left - pn.left}px round 8px)`;
    };
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const open = (slug, push, card) => {
      clearTimeout(closing);
      if (!el.hidden && el.classList.contains("is-open")) { fill(slug); if (push) history.replaceState(null, "", "#" + slug); return; }
      opener = document.activeElement;
      fill(slug);
      if (window.__lenis) window.__lenis.stop();
      el.hidden = false;
      toTop();   // again now the panel has a size
      document.documentElement.classList.add("sheet-lock");
      from = card && !still ? card : null;
      if (from) el.classList.add("is-morph");   // no slide-up: the clip does the opening (set first, so the panel is measured in place)
      const clip = from && cardClip(from);
      if (!clip) el.classList.remove("is-morph");
      if (clip) {
        panel.animate([{ clipPath: clip }, { clipPath: "inset(0 0 0 0 round 16px 16px 0 0)" }], { duration: MOTION.move, easing: MOTION.arrive });
      }
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("is-open")));
      panel.focus({ preventScroll: true });
      if (push) history.pushState({ sheet: slug }, "", "#" + slug);
    };
    const close = (fromHistory) => {
      if (el.hidden) return;
      const clip = from && !el.classList.contains("is-full") && cardClip(from);
      if (clip) {
        el.classList.add("is-morph");
        panel.animate([{ clipPath: "inset(0 0 0 0 round 16px 16px 0 0)" }, { clipPath: clip }], { duration: MOTION.move, easing: MOTION.arrive, fill: "forwards" });
      } else el.classList.remove("is-morph");
      el.classList.remove("is-open", "is-full");
      document.documentElement.classList.remove("sheet-lock");
      if (window.__lenis) window.__lenis.start();
      document.title = homeTitle;
      body.querySelectorAll("video").forEach((v) => v.pause());
      closing = setTimeout(() => {
        el.hidden = true; body.innerHTML = ""; el.classList.remove("is-morph"); from = null;
        panel.getAnimations().forEach((a) => a.cancel());   // clear the held clip only once the sheet is hidden
      }, MOTION.move + 40);
      if (opener) opener.focus({ preventScroll: true });
      if (!fromHistory) history.state && history.state.sheet ? history.back() : history.replaceState(null, "", location.pathname + location.search);
    };
    $("#work").addEventListener("click", (e) => {
      const a = e.target.closest("a[data-slug]");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      open(a.dataset.slug, true, a);
    });
    body.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-slug]");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      open(a.dataset.slug, true);
    });
    el.querySelector(".sheet__close").addEventListener("click", () => close());
    el.querySelector(".sheet__scrim").addEventListener("click", () => close());
    addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    addEventListener("popstate", () => {
      const slug = location.hash.slice(1);
      S.projects.some((p) => p.slug === slug) ? open(slug, false) : close(true);
    });
    const first = location.hash.slice(1);
    if (S.projects.some((p) => p.slug === first)) open(first, false);
  }

  // Hovering a headline letter swaps it to a random wild display font; it holds for a moment after the
  // cursor leaves, then settles back. Each letter keeps its own width so the line never reflows.
  // The fonts load only the glyphs the headline uses.
  function crazyLetters(h) {
    const FONTS = ["Bagel Fat One", "Shrikhand", "Silkscreen", "Rubik Glitch"];
    const glyphs = [...new Set((S.headline || "").replace(/\s/g, ""))].join("");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?${FONTS.map((f) => "family=" + f.replace(/ /g, "+")).join("&")}&text=${encodeURIComponent(glyphs)}&display=swap`;
    // fetch every face up front, so a swap never flashes a fallback letter
    link.onload = () => document.fonts && FONTS.forEach((f) => document.fonts.load(`40px "${f}"`, glyphs).catch(() => {}));
    document.head.appendChild(link);
    const timers = new WeakMap(), runs = new WeakMap();
    // a letter's width follows its face: measure the glyph, then ease the width there, so the letters beside it
    // slide over and the spacing stays even instead of overlapping or leaving a hole
    const ctx = document.createElement("canvas").getContext("2d");
    // the letter's own width in the headline face, measured fresh from an invisible copy each time, so it's
    // always right (even if the page font arrived after the first swap)
    const natural = (ch) => {
      const m = document.createElement("span");
      m.className = "ch";
      m.textContent = ch.textContent;
      m.style.cssText = "position:absolute;visibility:hidden;transition:none";
      ch.parentElement.appendChild(m);
      const w = m.getBoundingClientRect().width;
      m.remove();
      return w;
    };
    const base = (ch) => {
      const w = natural(ch);
      if (!ch.style.width) ch.style.width = w + "px";
      return w;
    };
    const face = (ch, family) => {
      const w0 = base(ch);
      ch.style.fontFamily = family;
      ch.classList.toggle("is-crazy", !!family);
      if (!family) { ch.style.width = w0 + "px"; return; }
      ctx.font = `400 ${getComputedStyle(ch).fontSize} ${family}`;
      const w1 = Math.max(w0 * 0.6, ctx.measureText(ch.textContent).width);
      ch.style.width = w0 + (w1 - w0) * 0.6 + "px";   // most of the way, so neighbours shift gently and gaps stay close to even
    };
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // a font can't tween, so the letter eases down, takes the new face at the midpoint, and eases back up
    const swap = (ch, family) => {
      if (runs.has(ch)) runs.get(ch).forEach((a) => a.cancel());
      const apply = () => face(ch, family);
      if (still) return apply();
      const out = ch.animate([{ transform: "none" }, { transform: "scale(.9) translateY(.02em)" }], { duration: MOTION.fast, easing: MOTION.swap, fill: "forwards" });
      runs.set(ch, [out]);
      out.onfinish = () => {
        apply();
        const back = ch.animate([{ transform: "scale(.9) translateY(.02em)" }, { transform: "none" }], { duration: MOTION.move - MOTION.fast, easing: MOTION.swap });
        out.cancel();
        runs.set(ch, [back]);
        back.onfinish = () => runs.delete(ch);
      };
    };
    const crazy = (ch) => {
      clearTimeout(timers.get(ch));
      base(ch);
      let f;
      do f = FONTS[Math.floor(Math.random() * FONTS.length)]; while (FONTS.length > 1 && `"${f}"` === ch.style.fontFamily);
      swap(ch, `"${f}"`);
    };
    const settle = (ch, after) => timers.set(ch, setTimeout(() => swap(ch, ""), after));
    const letters = [...h.querySelectorAll(".ch")];
    const hovered = new Set();
    letters.forEach((ch) => {
      ch.addEventListener("pointerenter", () => { hovered.add(ch); crazy(ch); });
      ch.addEventListener("pointerleave", () => { hovered.delete(ch); settle(ch, 1000); });
    });
    // on load, once the title has landed, a calm wave: about five letters, left to right and one at a time,
    // each takes one wild face for a moment and eases back to Inter
    const scramble = () => {
      const pool = letters.filter((ch) => ch.textContent.trim());
      const n = Math.min(5, pool.length);
      const picks = [];
      for (let k = 0; k < n; k++) picks.push(pool[Math.floor(((k + 0.2 + Math.random() * 0.6) / n) * pool.length)]);   // one from each stretch of the line
      picks.forEach((ch, k) => setTimeout(() => {
        if (hovered.has(ch)) return;
        base(ch);
        crazy(ch);
        settle(ch, 650);
      }, 900 + k * 320));   // after the words have risen in
    };
    if (!still) {
      const faces = document.fonts ? Promise.race([Promise.all(FONTS.map((f) => document.fonts.load(`40px "${f}"`, glyphs).catch(() => {}))), new Promise((r) => setTimeout(r, 1200))]) : Promise.resolve();
      // checked a tick later, once the loader (which starts right after the page renders) is up
      const lifted = new Promise((r) => setTimeout(r, 0)).then(() => new Promise((r) => {
        if (!document.documentElement.classList.contains("is-loading")) return r();
        const mo = new MutationObserver(() => { if (!document.documentElement.classList.contains("is-loading")) { mo.disconnect(); r(); } });
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      }));
      Promise.all([faces, lifted]).then(scramble);
    }
    // the automatic swaps step aside while the cursor is on the headline, and come back two seconds after it leaves
    let over = false, quietUntil = 0;
    h.addEventListener("pointerenter", () => (over = true));
    h.addEventListener("pointerleave", () => { over = false; quietUntil = performance.now() + 2000; });
    // on its own, every two to three seconds one letter takes a wild face for a moment, then settles back;
    // it waits while the loader or a case study sheet is up, while the tab is hidden, and never runs with reduced motion
    if (!still) {
      const tick = () => {
        const root = document.documentElement;
        const busy = document.hidden || over || performance.now() < quietUntil || root.classList.contains("is-loading") || root.classList.contains("sheet-lock");
        const free = letters.filter((ch) => !hovered.has(ch) && !ch.classList.contains("is-crazy") && ch.textContent.trim());
        if (!busy && free.length) {
          const ch = free[Math.floor(Math.random() * free.length)];
          crazy(ch);
          settle(ch, 1200);
        }
        setTimeout(tick, 2000 + Math.random() * 1000);
      };
      setTimeout(tick, 2500);
    }
    addEventListener("resize", () => h.querySelectorAll(".ch:not(.is-crazy)").forEach((ch) => (ch.style.width = "")));
  }

  // As the page scrolls down to the projects, the carousel grows (up to about 28% larger) and shrinks back on
  // the way up. Desktop only; it's a transform, so nothing reflows and the centred card stays centred.
  function grow(el) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wide = matchMedia("(min-width: 721px)");
    const update = () => {
      if (!wide.matches) { el.style.removeProperty("--grow"); return; }
      const top = el.getBoundingClientRect().top + scrollY;
      const most = document.documentElement.scrollHeight - innerHeight;   // the page may be too short to go further
      const reach = Math.max(1, Math.min(top - 120, most - 20));   // fully grown near the top, or by the end of the page
      el.style.setProperty("--grow", Math.min(1, Math.max(0, scrollY / reach)).toFixed(3));
    };
    let queued = false;
    addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; update(); }); } }, { passive: true });
    addEventListener("resize", update);
    update();
  }

  function carousel(root) {
    const track = root.querySelector(".carousel__track");
    const cards = [...track.children];
    const step = () => cards[0].offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
    const go = (dir) => track.scrollBy({ left: dir * step(), behavior: "smooth" });
    // no pagination: clicking a side card slides it to the middle; only the middle card opens
    track.addEventListener("click", (e) => {
      const c = e.target.closest(".card");
      if (!c || e.defaultPrevented || c.classList.contains("is-active")) return;
      e.preventDefault();
      track.scrollTo({ left: c.offsetLeft - track.offsetLeft - (track.clientWidth - c.offsetWidth) / 2, behavior: "smooth" });   // to the middle
    });
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); go(e.key === "ArrowRight" ? 1 : -1); }
    });
    const sync = () => {
      // depth: each card's distance from the front slot (0 = in place, 1 = one card along) drives a small
      // turn and shrink, so waiting cards angle away and straighten as they scroll in
      // each card's distance from the middle (0 = centred, ±1 = one card over) drives its turn and size;
      // the card nearest the middle is active: bright, and the only one playing its video
      const s = step();
      let best = null, bestD = Infinity;
      cards.forEach((c) => {
        const raw = (c.offsetLeft - track.offsetLeft - track.scrollLeft + c.offsetWidth / 2 - track.clientWidth / 2) / s;
        const d = Math.max(-2, Math.min(2, raw));
        c.style.setProperty("--d", d.toFixed(3));
        c.style.setProperty("--ad", Math.min(1, Math.abs(d)).toFixed(3));
        if (Math.abs(raw) < bestD) { bestD = Math.abs(raw); best = c; }
      });
      cards.forEach((c) => {
        const on = c === best;
        c.classList.toggle("is-active", on);
        const v = c.querySelector("video");
        if (v && on && v.paused) v.play().catch(() => {});
        else if (v && !on && !v.paused) v.pause();
      });
    };
    // videos autoplay as soon as they load; a side card that starts on its own is paused straight away
    cards.forEach((c) => {
      const v = c.querySelector("video");
      if (v) v.addEventListener("play", () => { if (!c.classList.contains("is-active")) v.pause(); });
    });
    track.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
    addEventListener("resize", sync);
    sync();
    // endless: start in the middle copy; once scrolling settles in a side copy, jump one set back toward the
    // middle. The jump is a whole number of cards, so the view looks identical and nothing animates.
    const n = cards.length / 3;
    const setW = () => n * step();
    const jump = (by) => {
      const from = track.querySelector(".card.is-active video");
      const t = from ? from.currentTime : 0;
      track.classList.add("is-jumping");
      track.style.scrollSnapType = "none";
      track.scrollLeft += by;
      sync();
      const to = track.querySelector(".card.is-active video");
      if (to && from && to !== from) to.currentTime = t;   // carry on from the same frame
      requestAnimationFrame(() => { track.style.scrollSnapType = ""; track.classList.remove("is-jumping"); });
    };
    track.scrollLeft = setW();
    sync();
    let idle = 0;
    track.addEventListener("scroll", () => {
      clearTimeout(idle);
      idle = setTimeout(() => {
        if (track.classList.contains("is-dragging")) return;
        const x = track.scrollLeft, w = setW();
        if (x < w * 0.5) jump(w);
        else if (x > w * 1.5) jump(-w);
      }, 160);
    }, { passive: true });
    addEventListener("resize", () => { const w = setW(); track.scrollLeft = w + (track.scrollLeft % w); sync(); });
    // mouse drag: snapping is off while dragging, then the nearest card settles into place
    let down = false, moved = false, x0 = 0, left0 = 0;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true; moved = false; x0 = e.clientX; left0 = track.scrollLeft;
    });
    addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - x0;
      if (!moved && Math.abs(dx) > 5) { moved = true; track.classList.add("is-dragging"); }
      if (moved) track.scrollLeft = left0 - dx;
    });
    addEventListener("pointerup", () => {
      if (!down) return;
      down = false;
      if (!moved) return;
      const s = step();
      const dir = Math.sign(track.scrollLeft - left0);
      const target = Math.round(track.scrollLeft / s + dir * 0.4) * s;   // a tenth of a card is enough to move on
      track.classList.remove("is-dragging");
      track.scrollTo({ left: target, behavior: "smooth" });
    });
    track.addEventListener("click", (e) => { if (moved) { e.preventDefault(); moved = false; } }, true);
    track.addEventListener("dragstart", (e) => e.preventDefault());
  }

  // Strips drift slowly on their own, alternating direction, and bounce at the ends.
  // They hold still while hovered, dragged or off screen, and never move when reduced motion is on.
  function drift(el, dir) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let hold = false, seen = false, last = 0, pos = null;
    el.addEventListener("pointerenter", () => (hold = true));
    el.addEventListener("pointerleave", () => (hold = false));
    el.addEventListener("pointerdown", () => (hold = true));
    el.addEventListener("focusin", () => (hold = true));
    el.addEventListener("focusout", () => (hold = false));
    new IntersectionObserver(([e]) => (seen = e.isIntersecting)).observe(el);
    const step = (t) => {
      const dt = last ? Math.min(64, t - last) : 16; last = t;
      const max = el.scrollWidth - el.clientWidth;
      if (!hold && seen && !document.hidden && max > 0) {
        if (pos === null || Math.abs(pos - el.scrollLeft) > 2) pos = el.scrollLeft;   // pick up where a drag left it
        if (dir < 0 && pos <= 0 && el.dataset.started !== "1") pos = max;            // leftward strips start from the far end
        el.dataset.started = "1";
        pos += dir * dt * 0.028;                                                     // about 28px a second
        if (pos >= max) { pos = max; dir = -1; } else if (pos <= 0) { pos = 0; dir = 1; }
        el.scrollLeft = pos;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderProject() {
    const v = projectView(location.hash.slice(1) || new URLSearchParams(location.search).get("p"));
    document.title = v.title;
    $("#project").innerHTML = v.html;
  }

  // the markup for one case study, used by the project page and by the sheet on the home page
  function projectView(slug) {
    const i = Math.max(0, S.projects.findIndex((p) => p.slug === slug));
    const p = S.projects[i];
    const next = S.projects[(i + 1) % S.projects.length];
    const title = `${p.name} · ${p.kind} — ${S.name}`;
    const frame = (idx) => {
      const m = p.media[idx];
      return `<figure class="frame" style="--ar:${m.w} / ${m.h}">${media(m, p.tint)}</figure>`;
    };
    // an array in lines is a row of one or two frames; anything else opens a section with a short write-up
    const lines = p.lines.map((line) => {
      if (Array.isArray(line)) return `<div class="line rise${line.length > 1 ? " line--pair" : ""}">${line.map(frame).join("")}</div>`;
      const sec = typeof line === "string" ? { title: line } : line;
      return `<div class="shot-group rise"><h2 class="shot-sec">${esc(sec.title)}</h2>${sec.text ? `<p class="shot-p">${esc(sec.text)}</p>` : ""}</div>`;
    }).join("");
    if (p.facts) {
      // shot page, after Dribbble: one centred column, title, hero, the write-up, then every frame stacked
      const section = (f) => `<h2 class="shot-h">${esc(f.label)}</h2>${f.items ? `<ul class="shot-list">${f.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : `<p class="shot-p">${esc(f.text)}</p>`}`;
      return { title, slug: p.slug, html: `
        <article class="shot">
          <h1 class="shot-title rise">${esc(p.shotTitle || `${p.name} · ${p.kind}`)}</h1>
          ${p.meta ? `<dl class="shot-meta rise">${p.meta.map((m) => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join("")}</dl>` : ""}
          ${p.hero != null ? `<div class="shot-media rise" style="--delay:.05s">${frame(p.hero)}</div>` : ""}
          <div class="shot-copy rise">
            <p class="shot-p">${esc(p.intro || p.text)}</p>
            ${p.facts.map(section).join("")}
            ${p.link ? `<p class="shot-p"><a href="${esc(p.link)}" target="_blank" rel="noopener">Visit website ↗</a></p>` : ""}
          </div>
          <section class="shot-frames">${lines}</section>
          <a class="shot-next rise" href="${projectUrl(next)}" data-slug="${esc(next.slug)}"><span>Next case</span><b>${esc(next.name)}</b></a>
        </article>` };
    }
    return { title, slug: p.slug, html: `
      <section class="about">
        <p class="about__name rise">${esc(p.name)} · ${esc(p.kind)}</p>
        <h1 class="about__title rise" style="--delay:.05s">${esc(p.title)}</h1>
        <p class="about__text rise" style="--delay:.1s">${esc(p.text)}</p>
      </section>
      <section class="frames">${lines}</section>
      <a class="next rise" href="${projectUrl(next)}" data-slug="${esc(next.slug)}">Next <span>${esc(next.name)}</span></a>` };
  }

  function renderAbout() {
    const A = S.about;
    document.title = `About — ${S.name}`;
    // label on the left, content on the right; on phones the label sits above
    const row = (label, body, d) => `<section class="about-row rise" style="--delay:${d}s"><h2 class="about-row__label">${esc(label)}</h2><div class="about-row__body">${body}</div></section>`;
    const list = (items) => `<ul class="about-list">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    // selected work: only finished case studies, each a row with its poster
    const work = S.projects.filter((p) => p.facts).map((p) => {
      const m = p.media[p.cover ?? p.hero ?? 0];
      const still = m.poster || m.src;
      return `<a class="about-work" href="${projectUrl(p)}"><span class="about-work__thumb"><img src="${esc(still)}" alt="" loading="lazy"></span><span class="about-work__name">${esc(p.name)}</span><span class="about-work__kind">${esc(p.kind)}</span><span class="about-work__go" aria-hidden="true">→</span></a>`;
    }).join("");
    $("#about").innerHTML = `
      <h1 class="lede__headline about-page__headline">${A.headline.split(" ").map((w, i) => `<span class="word" style="--i:${i}">${esc(w)}</span>`).join(" ")}</h1>
      <div class="about-page__story rise" style="--delay:.45s">${A.story.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
      <div class="about-page__rows">
        ${A.rows.map((r, i) => row(r.label, list(r.items), 0.05 * i)).join("")}
        ${row("Selected work", `<div class="about-works">${work}</div>`, 0.1)}
        ${row("Say hello", `<p class="about-hello"><a href="mailto:${esc(S.email)}">${esc(S.email)}</a><button type="button" class="about-copy">Copy</button></p><p class="about-elsewhere">${S.elsewhere.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</p>`, 0.15)}
      </div>`;
    const btn = $(".about-copy");
    btn.addEventListener("click", () => {
      const done = () => { btn.textContent = "Copied"; setTimeout(() => (btn.textContent = "Copy"), 1600); };
      const pick = () => { const r = document.createRange(); r.selectNodeContents($(".about-hello a")); getSelection().removeAllRanges(); getSelection().addRange(r); };
      try { navigator.clipboard.writeText(S.email).then(done, pick); } catch (e) { pick(); }
    });
  }

  function renderContact() {
    document.title = `Contact — ${S.name}`;
    $("#email").textContent = S.email;
    $("#email").href = `mailto:${S.email}`;
    $("#elsewhere").innerHTML = S.elsewhere.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
  }

  // Click-and-drag horizontal scrolling with a little momentum.
  function dragScroll(el) {
    let down = false, moved = false, startX = 0, startLeft = 0, lastX = 0, v = 0, raf = 0;
    el.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false;
      startX = lastX = e.clientX; startLeft = el.scrollLeft; v = 0;
      cancelAnimationFrame(raf);
    });
    window.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 4) { moved = true; el.classList.add("is-dragging"); }
      if (moved) { v = e.clientX - lastX; lastX = e.clientX; el.scrollLeft = startLeft - dx; }
    });
    window.addEventListener("pointerup", () => {
      if (!down) return;
      down = false;
      el.classList.remove("is-dragging");
      const glide = () => {
        if (Math.abs(v) < 0.5) return;
        el.scrollLeft -= v; v *= 0.92;
        raf = requestAnimationFrame(glide);
      };
      if (moved) glide();
    });
    el.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true);
  }

  // Images fade in once loaded.
  function watchLoads() {
    document.querySelectorAll(".tile img, .frame img").forEach((img) => {
      const done = () => img.parentElement.classList.add("is-loaded");
      img.complete ? done() : img.addEventListener("load", done, { once: true });
    });
  }

  // Elements rise in as they enter the viewport; stagger siblings that enter together.
  function watchRise(root = document) {
    const io = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting).forEach((e, n) => {
        if (!e.target.style.getPropertyValue("--delay")) e.target.style.setProperty("--delay", `${n * 0.06}s`);
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -5% 0px" });
    root.querySelectorAll(".rise:not(.is-in)").forEach((el) => io.observe(el));
  }

  // Fade the page out before following internal links.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.protocol === "mailto:") return;
    e.preventDefault();
    document.body.classList.add("is-leaving");
    setTimeout(() => (location.href = url.href), 280);
  });
  window.addEventListener("pageshow", () => document.body.classList.remove("is-leaving"));

  // Count loader, before every page load: the number follows what has actually loaded (fonts and the
  // page's first media), never runs faster than about a second and a half, and gives up waiting after four.
  // When it reaches 100 the screen slides up and the page starts rising in.
  function loader() {
    const el = $("#loader");
    if (!el) return;
    const done = () => { el.remove(); document.documentElement.classList.remove("is-loading"); if (window.__lenis) window.__lenis.start(); };
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return done();
    document.documentElement.classList.add("is-loading");
    if (window.__lenis) window.__lenis.stop();
    const num = el.querySelector(".loader__num");
    const first = document.querySelector(".carousel__track .card, .shot-media, .frames .frame");
    const waits = [document.fonts ? document.fonts.ready : Promise.resolve()];
    if (first) first.querySelectorAll("img, video").forEach((m) => waits.push(new Promise((ok) => {
      if (m.tagName === "VIDEO" ? m.readyState >= 2 : m.complete) return ok();
      m.addEventListener(m.tagName === "VIDEO" ? "loadeddata" : "load", ok, { once: true });
      m.addEventListener("error", ok, { once: true });
    })));
    let ready = 0;
    waits.forEach((w) => w.then(() => ready++));
    const t0 = performance.now(), MIN = 1300, MAX = 4000;
    let shown = 0;
    const tick = (t) => {
      const time = Math.min(1, (t - t0) / MIN);
      const real = t - t0 > MAX ? 1 : ready / waits.length;
      shown += (Math.min(time, real) * 100 - shown) * 0.14;                 // ease toward the target
      if (Math.min(time, real) === 1 && shown > 99.4) shown = 100;
      num.textContent = Math.round(shown);
      if (shown < 100) return requestAnimationFrame(tick);
      setTimeout(() => {
        el.classList.add("is-done");
        document.documentElement.classList.remove("is-loading");
        if (window.__lenis && !document.documentElement.classList.contains("sheet-lock")) window.__lenis.start();
        el.addEventListener("transitionend", () => el.remove(), { once: true });
        setTimeout(() => el.remove(), 1800);
      }, 180);
    };
    requestAnimationFrame(tick);
  }

  // Smooth scrolling: wheel and trackpad scrolls glide to a stop (Lenis). Touch keeps the phone's own scrolling,
  // and reduced motion keeps plain scrolling. Anything marked data-lenis-prevent scrolls on its own.
  function smooth(wrapper, content) {
    if (!window.Lenis || matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
    const l = new Lenis(wrapper ? { wrapper, content, lerp: 0.09 } : { lerp: 0.09 });
    let live = true;
    const raf = (t) => { if (!live) return; l.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    l.off = () => { live = false; l.destroy(); };
    return l;
  }
  const lenis = smooth();
  window.__lenis = lenis;

  ({ home: renderHome, project: renderProject, about: renderAbout, contact: renderContact })[page]();
  loader();
  watchLoads();
  watchRise();
})();
