// All site content lives here. Edit this file to change the portfolio.
//
// Media items:
//   { src: "media/figr/01.jpg", w: 3840, h: 2160 }            image
//   { src: "media/figr/02.mp4", w: 1900, h: 2160, video: true } video (autoplays muted)
//   Leave `src` out to show a tinted placeholder of that size.
//
// Project page layout (`lines`): each line is either one full-width frame
// or a pair of half-width frames. Indexes point into `media`.

window.SITE = {
  name: "Itamar",
  email: "hello@example.com",
  elsewhere: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
  // home page: a large opening line, a supporting sentence, then the featured project's hero video
  headline: "Crafting thoughtful product experiences",
  intro: "I work alongside the teams I make things for, from the first question to the live release.",
  featured: "homie",
  more: 'Currently open to new projects. <a href="contact.html">Get in touch</a>.',

  // about page: an opening line, a short story, then label / content rows
  about: {
    headline: "I design the product, the motion and the system underneath.",
    story: [
      "I'm Itamar, a product designer. I take products from the first question to the live release: the research, the interface, the way it moves and the design system that keeps it all consistent.",
      "A lot of my recent work started at home. Homie shows my girlfriend and me what we spend on at home, Groceries plans the weekly shop, and both run on a design system I built for them. Graphite came from the other direction: a quiet, tactile system for tools you tune by hand, with its own documentation site.",
      "I prototype in code, so what I design is what ships. Tokens, components and motion live in the same files as the product.",
    ],
    rows: [
      { label: "What I do", items: ["Product design, from research to release", "Design systems and tokens", "Motion and illustration", "Front-end prototyping"] },
      { label: "How I work", items: ["Start from a real moment, not a feature list", "Make the boring parts feel good", "One source of truth for design and code", "Tune it by hand until it feels right"] },
    ],
  },

  projects: [
    {
      slug: "homie",
      name: "Homie",
      kind: "Household expenses for two",
      title: "Where did the money go?",
      text: "A small web app for splitting the house bills between two people. Type an amount, pick what it was for, mark it as monthly if it repeats, and see who paid what and how to settle up. Illustrated avatars, a voice with some attitude and its own design system.",
      tint: "#ededeb",
      media: [
        { src: "media/homie/v00-funnel.webm", poster: "media/homie/v00-funnel.jpg", w: 1920, h: 1080, video: true },
        { src: "media/homie/f05-amount.jpg", w: 1920, h: 2160 },
        { src: "media/homie/v07-approve.webm", poster: "media/homie/v07-approve.jpg", w: 1200, h: 1350, video: true },
        { src: "media/homie/f04-flow.jpg", w: 3840, h: 2160 },
        { src: "media/homie/v08-empty.webm", poster: "media/homie/v08-empty.jpg", w: 1200, h: 1350, video: true },
        { src: "media/homie/v09-piggy.webm", poster: "media/homie/v09-piggy.jpg", w: 1200, h: 1350, video: true },
        { src: "media/homie/sg-illustrations.jpg", w: 3840, h: 2160 },
        { src: "media/homie/v10-motion-lab.webm", poster: "media/homie/v10-motion-lab.jpg", w: 1920, h: 1080, video: true },
        { src: "media/homie/sg-color.jpg", w: 3840, h: 2160 },
        { src: "media/homie/sg-icons.jpg", w: 1920, h: 2160 },
        { src: "media/homie/sg-type.jpg", w: 1920, h: 2160 },
        { src: "media/homie/cs-components.jpg", w: 3840, h: 2160 },
        { src: "media/homie/cs-states.jpg", w: 3840, h: 2160 },
        { src: "media/homie/cs-tokens.jpg", w: 3840, h: 2160 },
        // who owes whom: the settle-up flow and its close-up
        { src: "media/homie/v11-owe.webm", poster: "media/homie/v11-owe.jpg", w: 1200, h: 1350, video: true },
        { src: "media/homie/v12-settle.webm", poster: "media/homie/v12-settle.jpg", w: 1200, h: 1350, video: true },
        // icon set drawn from scratch
        { src: "media/homie/sg-iconset-cat.jpg", w: 3840, h: 2160 },
        { src: "media/homie/sg-iconset-ui.jpg", w: 1920, h: 2160 },
        { src: "media/homie/sg-iconset-grid.jpg", w: 1920, h: 2160 },
        // the user flow, animated in the style guide's language
        { src: "media/homie/v13-userflow.webm", poster: "media/homie/v13-userflow.jpg", w: 1920, h: 1080, video: true },
      ],
      hero: 0,
      // a { title, text } entry opens a section with a short write-up; arrays are rows of frames
      lines: [
        { title: "User flow", text: "The whole app in one picture: add a bill with its category, and the month shows what we spent on." },
        [19],
        { title: "Add expense", text: "Type the amount, pick what it was for, done. Every bill gets a category, and a little coin burst makes it feel like a win." },
        [1, 2], [3],
        { title: "Who owes whom", text: "Mostly for us: we always joke about who owes who, so now the app keeps score. One tap shows it, one button settles the month." },
        [14, 15],
        { title: "Empty states", text: "An empty month gets a piggy bank with some attitude, not a blank screen." },
        [4, 5], [6],
        { title: "Motion Lab", text: "A small tool I built to tune animations by dragging curves." },
        [7],
        { title: "Style guide", text: "Rubik, deep green, a lime accent, and one color per category." },
        [8], [9, 10],
        { title: "Icon set", text: "Custom icons, two-tone for categories and simple lines for the interface." },
        [16], [17, 18],
        { title: "Design system", text: "One shared stylesheet, so what's documented is what ships." },
        [11], [12], [13],
      ],
      // shot page (layout after Dribbble's shot pages)
      shotTitle: "Homie",
      subtitle: "Where our money goes, at a glance.",   // one short line under the title
      // the card's short reel on the home page: media indexes in order; { i, cut: true } switches instantly instead of sliding
      reel: [0, 19, 2, 14, 4, 7, 8, 10, 17, { i: 16, cut: true }, 11, 12, 13],
      // small project details under the title: label / value
      meta: [
        { label: "Scope", value: "UI, design system, motion" },
        { label: "Tools", value: "Claude, Figma" },
        { label: "Year", value: "2026" },
      ],
      intro: "An app I made for me and my girlfriend, so we always see what we spend on: groceries, bills, going out.",
      facts: [
        { label: "The challenge", text: "Make it easy to see where our money goes, and quick enough to log a bill that we actually do it." },
      ],
    },
    {
      slug: "groceries",
      name: "Groceries",
      kind: "Shared shopping list for two",
      title: "Plan the trip, fill the list, tick it off in the aisle.",
      text: "A shared shopping list for the two of us, built on the Homie design system.",
      tint: "#f5f5f5",
      media: [
        { src: "media/shop/v00-hero.webm", poster: "media/shop/v00-hero.jpg", w: 1920, h: 1080, video: true },
        { src: "media/shop/v01-plan.webm", poster: "media/shop/v01-plan.jpg", w: 1200, h: 1350, video: true },
        { src: "media/shop/f01-home.jpg", w: 1920, h: 2160 },
        { src: "media/shop/v02-catalog.webm", poster: "media/shop/v02-catalog.jpg", w: 1200, h: 1350, video: true },
        { src: "media/shop/f02-catalog.jpg", w: 1920, h: 2160 },
        { src: "media/shop/v03-store.webm", poster: "media/shop/v03-store.jpg", w: 1200, h: 1350, video: true },
        { src: "media/shop/f03-cart.jpg", w: 1920, h: 2160 },
        { src: "media/shop/f04-flow.jpg", w: 3840, h: 2160 },
        { src: "media/shop/sg-icons3d.jpg", w: 3840, h: 2160 },
        // the user flow, animated in the Homie style guide's language
        { src: "media/shop/v05-userflow.webm", poster: "media/shop/v05-userflow.jpg", w: 1920, h: 1080, video: true },
      ],
      hero: 0,
      lines: [
        { title: "User flow", text: "The whole trip in one picture: pick a day, fill the list, shop together." },
        [9],
        { title: "Plan the trip", text: "Pick the day you're shopping, and the list is ready." },
        [1, 2],
        { title: "Fill from the catalog", text: "No typing. Tap a picture to add it." },
        [3, 4],
        { title: "In the store", text: "The list sorts by aisle, with big rows you can tick with your thumb." },
        [5, 6], [7],
        { title: "Product pictures", text: "3D emoji, so you spot milk or bread at a glance." },
        [8],
      ],
      shotTitle: "Groceries",
      subtitle: "A shopping list for two.",   // one short line under the title
      reel: [0, 9, 1, 3, 5, 8],   // the card's short reel on the home page: media indexes, in order
      meta: [
        { label: "Scope", value: "UI, motion" },
        { label: "Tools", value: "HTML, CSS, JS" },
        { label: "Year", value: "2026" },
      ],
      intro: "A shared shopping list, built around a real trip to the store.",
      facts: [
        { label: "The challenge", text: "Make a list that's faster to fill than typing, and easy to use with one hand." },
      ],
    },
    {
      slug: "graphite",
      name: "Graphite",
      kind: "Design system for tactile tools",
      title: "Controls you can feel.",
      text: "A quiet, tactile design system for tools people tune by hand, with its own documentation site.",
      tint: "#f5f5f5",
      media: [
        { src: "media/graphite/v00-hero.webm", poster: "media/graphite/v00-hero.jpg", w: 1920, h: 1080, video: true },
        { src: "media/graphite/site-home.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/press-variants.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/site-components.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/pat-settings.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/pat-create.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/pat-confirm.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/pat-undo.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/pat-filter.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/color-ladder.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/type-cover.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/tok-chain.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/type-scale.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/tok-tiers.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/tok-states.jpg", w: 3840, h: 2160 },
        { src: "media/graphite/dk-create.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/dk-filter.jpg", w: 1920, h: 2160 },
        { src: "media/graphite/site-home-dark.jpg", w: 3840, h: 2160 },
      ],
      hero: 0,
      lines: [
        { title: "One home for the system", text: "Everything lives on one docs site, with live examples." },
        [1],
        { title: "PressButton", text: "Hold it to record. Tune it right from the inspector." },
        [2],
        { title: "Components", text: "24 building blocks, from buttons to settings rows." },
        [3],
        { title: "Patterns", text: "How the pieces come together into full screens." },
        [4, 5], [6, 7], [8],
        { title: "Foundations", text: "Soft greys for depth, color only when it means something." },
        [9], [10, 11], [12],
        { title: "Tokens and states", text: "Three simple layers, so one change updates everything." },
        [13], [14],
        { title: "Light and dark", text: "Dark mode is designed on its own, not just inverted." },
        [15, 16], [17],
      ],
      shotTitle: "Graphite",
      subtitle: "A design system you can feel.",   // one short line under the title
      reel: [0, 1, 2, 8, 13, 17],   // the card's short reel on the home page: media indexes, in order
      meta: [
        { label: "Scope", value: "Design system, docs" },
        { label: "Tools", value: "CSS tokens, JS" },
        { label: "Year", value: "2026" },
      ],
      intro: "A calm design system for tools you tune by hand.",
      facts: [
        { label: "The challenge", text: "Make controls feel physical without extra decoration." },
      ],
    },
    {
      slug: "project-two",
      name: "Project Two",
      kind: "Contemporary art auction platform",
      title: "A one-line headline for the project.",
      text: "Two or three sentences on what the project was, what you did and why it mattered.",
      tint: "#8f9a92",
      media: [
        { w: 16, h: 9 }, { w: 8, h: 9 }, { w: 16, h: 9 }, { w: 16, h: 9 },
        { w: 8, h: 9 }, { w: 8, h: 9 },
      ],
      lines: [[0], [1, 4], [2], [5, 1], [3]],
    },
    {
      slug: "project-three",
      name: "Project Three",
      kind: "Media for modern creators",
      title: "A one-line headline for the project.",
      text: "Two or three sentences on what the project was, what you did and why it mattered.",
      tint: "#a39383",
      media: [
        { w: 16, h: 9 }, { w: 16, h: 9 }, { w: 8, h: 9 }, { w: 8, h: 9 },
        { w: 16, h: 9 },
      ],
      lines: [[0], [2, 3], [1], [4]],
    },
    {
      slug: "project-four",
      name: "Project Four",
      kind: "Threat intelligence before the breach",
      title: "A one-line headline for the project.",
      text: "Two or three sentences on what the project was, what you did and why it mattered.",
      tint: "#7f8590",
      media: [
        { w: 16, h: 9 }, { w: 8, h: 9 }, { w: 8, h: 9 }, { w: 16, h: 9 },
        { w: 16, h: 9 },
      ],
      lines: [[0], [1, 2], [3], [4]],
    },
  ],
};
