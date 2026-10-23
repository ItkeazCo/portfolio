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
        { src: "media/homie/v07-approve.webm", poster: "media/homie/v07-approve.jpg", w: 1200, h: 1350, video: true, cap: "The confirmation, with the amount." },
        { src: "media/homie/f04-flow.jpg", w: 3840, h: 2160 },
        { src: "media/homie/v08-empty.webm", poster: "media/homie/v08-empty.jpg", w: 1200, h: 1350, video: true, cap: "An empty month in the app." },
        { src: "media/homie/v09-piggy.webm", poster: "media/homie/v09-piggy.jpg", w: 1200, h: 1350, video: true, cap: "The piggy bank, up close." },
        { src: "media/homie/sg-illustrations.jpg", w: 3840, h: 2160, cap: "Illustrations I drew in Figma, then animated with Claude." },
        { src: "media/homie/v10-motion-lab.webm", poster: "media/homie/v10-motion-lab.jpg", w: 1920, h: 1080, video: true, cap: "The whole lab: every animation in the app, its timeline and its curves." },
        { src: "media/homie/sg-color.jpg", w: 3840, h: 2160, cap: "Deep green and lime, plus one color per category." },
        { src: "media/homie/sg-icons.jpg", w: 1920, h: 2160 },
        { src: "media/homie/sg-type.jpg", w: 1920, h: 2160 },
        { src: "media/homie/cs-components.jpg", w: 3840, h: 2160, cap: "Components, documented once and shipped as they are." },
        { src: "media/homie/cs-states.jpg", w: 3840, h: 2160 },
        { src: "media/homie/cs-tokens.jpg", w: 3840, h: 2160 },
        // who owes whom: the settle-up flow and its close-up
        { src: "media/homie/v11-owe.webm", poster: "media/homie/v11-owe.jpg", w: 1200, h: 1350, video: true, cap: "Who owes who, right under the total." },
        { src: "media/homie/v12-settle.webm", poster: "media/homie/v12-settle.jpg", w: 1200, h: 1350, video: true, cap: "One button settles the month, and the piggy bank says it's closed." },
        // icon set drawn from scratch
        { src: "media/homie/sg-iconset-cat.jpg", w: 3840, h: 2160, cap: "The category icons, drawn in Figma, two-tone." },
        { src: "media/homie/sg-iconset-ui.jpg", w: 1920, h: 2160, cap: "The result: Tabler for the interface, Lucide for the menu." },
        { src: "media/homie/sg-iconset-grid.jpg", w: 1920, h: 2160, cap: "Every category icon sits on the same 32px grid." },
        // the user flow, animated in the style guide's language
        { src: "media/homie/v13-userflow.webm", poster: "media/homie/v13-userflow.jpg", w: 1920, h: 1080, video: true, once: true, cap: "The whole app on one map." },
        // Motion Lab close-up: dragging the bezier handles, then the animation playing with the new curve
        { src: "media/homie/v14-lab-curves.webm", poster: "media/homie/v14-lab-curves.jpg", w: 1920, h: 1080, video: true, cap: "Motion Lab: drag a curve, the animation changes live." },
        // the category breakdown: list, then the ring chart
        { src: "media/homie/v15-breakdown.webm", poster: "media/homie/v15-breakdown.jpg", w: 1200, h: 1350, video: true, cap: "Where it went: a ring by category, then each category against its usual month, then one up close over the year." },
        // the menu's "download the month", then the spreadsheet it makes
        { src: "media/homie/v16-report.webm", poster: "media/homie/v16-report.jpg", w: 1920, h: 1080, video: true, cap: "Download the month and send it on." },
        // the winged coin on its own: the money flying away after a save
        { src: "media/homie/v17-coin.webm", poster: "media/homie/v17-coin.jpg", w: 1200, h: 1350, video: true, cap: "Save, and the money flies away." },
        // where it started: the first prototype next to today's app
        { src: "media/homie/f06-before-after.jpg", w: 1920, h: 1080 },
        // process boards: patterns kept from browsing money apps on Mobbin, and the tone of voice
        { src: "media/homie/f07-patterns.jpg", w: 1920, h: 1080 },
        { src: "media/homie/f08-voice.jpg", w: 1920, h: 1080 },
        // how the tools connect: Grok → Figma → Claude, built in once
        { src: "media/homie/v18-tools.webm", poster: "media/homie/v18-tools.jpg", w: 1920, h: 1080, video: true, once: true, cap: "Grok shaped the voice and picked icons, Figma held the icons and system, Claude built the app from them." },
        // the icon libraries we showed the Grok brand manager: our real menu in Phosphor, Lucide and Tabler
        { src: "media/homie/f09-icon-options.jpg", w: 1920, h: 1080, cap: "Our real menu, drawn with three libraries side by side, for the Grok bot to compare." },
        // reel only: the category icons arriving one at a time in a close frame
        { src: "media/homie/v19-icons.webm", poster: "media/homie/v19-icons.jpg", w: 1440, h: 1080, video: true },
      ],
      hero: 0,
      // a { title, text } entry opens a section with a short write-up; arrays are rows of frames
      lines: [
        { title: "Plan and prototype", text: "I started by looking at money apps on Mobbin, to see which patterns keep coming back: one big number up top, a row per bill, one button to add. Then I asked Claude for a rough prototype, just to feel how it would work for the two of us." },
        [25], [24],
        { title: "Build the screens", text: "From there I built the screens we actually use. Adding a bill takes a few taps, and when you save, the money flies away. Then you can see where the month went and how it compares to a usual month, download it as a spreadsheet, and settle who owes who." },
        [19], [23, 2], [21, 15], [22],
        { title: "Build the visual language", text: "I wanted it to feel friendly, not like a bank. So I set up a branding bot in Grok and used it to build a moodboard from Pinterest and from apps that feel light and friendly, like Bit. From that I worked out what I needed: a voice, colors and illustrations. Then we refined it all on the real screens and built a design system in Figma." },
        [27], [26], [8], [6], [11],
        { title: "Icons, with a Grok brand manager", text: "I drew every category icon myself in Figma with an icon maker. For the interface I wanted a ready-made library, so I drew our real menu in three libraries side by side and asked my Grok brand manager which one is closest to our brand." },
        [16], [28], [17, 18],
        { title: "Motion Lab", text: "I drew the illustrations in Figma and animated them with Claude. Getting the timing right in code was slow, so I built a small tool for it: I pick an animation, drag its curves, watch it change live, and save it straight into the app." },
        [7], [20],
      ],
      // shot page (layout after Dribbble's shot pages)
      shotTitle: "Homie",
      subtitle: "Where our money goes, at a glance.",   // one short line under the title
      // the card's short reel on the home page: media indexes in order; { i, cut: true } switches instantly instead of sliding
      reel: [2, 0, 21, 20, 29],
      // small project details under the title: label / value
      meta: [
        { label: "What I did", value: "UI, design system, motion" },
        { label: "Tools", value: "Claude, Figma, Grok" },
        { label: "Year", value: "2026" },
      ],
      intro: "An app I made for me and my girlfriend: a simple, clear way to track what we spend on, from groceries to bills to going out, and pull reports when we need them.",
      facts: [],   // the goal now lives in the intro
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
        { src: "media/shop/v05-userflow.webm", poster: "media/shop/v05-userflow.jpg", w: 1920, h: 1080, video: true, once: true },
      ],
      hero: 0,
      lines: [
        { title: "The whole trip on one page", text: "The whole trip in one picture: pick a day, fill the list, shop together. Each step is there so we never have to text each other what to buy." },
        [9],
        { title: "Start from the shopping day", text: "Pick the day you're shopping, and the list is ready. The date tells us how long we have to add things, and each shop gets its own fresh list." },
        [1, 2],
        { title: "Pick by picture, not memory", text: "No typing. Tap a picture to add it, so we pick by seeing the product, not from memory." },
        [3, 4],
        { title: "Shop aisle by aisle, one-handed", text: "The list sorts by aisle, with big rows you can tick with your thumb. One hand stays on the cart, and we don't walk back and forth." },
        [5, 6], [7],
        { title: "Spot every product at a glance", text: "3D emoji, so you spot milk or bread at a glance. A free, ready set covers almost everything, so we didn't need to photograph hundreds of products." },
        [8],
      ],
      shotTitle: "Groceries",
      subtitle: "A shopping list for two.",   // one short line under the title
      reel: [0, 3, 8],   // the card's short reel on the home page: media indexes, in order
      meta: [
        { label: "What I did", value: "UI, motion" },
        { label: "Tools", value: "HTML, CSS, JS" },
        { label: "Year", value: "2026" },
      ],
      intro: "Instead of sending each other messages to build a list, we share one list that's always up to date. And we pick products by seeing them, not from memory.",
      facts: [
        { label: "What I wanted", text: "Make a list that's faster to fill than typing, and easy to use with one hand." },
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
        { title: "Keep it all on one docs site", text: "Everything lives on one docs site, with live examples. I built Graphite as the base for my own tools, so it had to be easy to look things up and copy." },
        [1],
        { title: "Hold to record, tune it live", text: "Hold it to record. Tune it right from the inspector. It's the first tool built on Graphite, so it set how every control should feel." },
        [2],
        { title: "Start every tool from 24 blocks", text: "24 building blocks, from buttons to settings rows. Each new tool starts from these, so I build the idea, not the buttons." },
        [3],
        { title: "Reuse whole screens", text: "How the pieces come together into full screens. Settings, forms and lists look the same in every tool, so nothing needs relearning." },
        [4, 5], [6, 7], [8],
        { title: "Grey for depth, color for meaning", text: "Soft greys for depth, color only when it means something. With little color around, the one thing that matters stands out." },
        [9], [10, 11], [12],
        { title: "Change one value, update everything", text: "Three simple layers, so one change updates everything. I can retheme a whole tool without touching a single component." },
        [13], [14],
        { title: "Design dark mode on its own", text: "Dark mode is designed on its own, not just inverted. Inverted greys lose their depth, so dark gets its own ladder." },
        [15, 16], [17],
      ],
      shotTitle: "Graphite",
      subtitle: "A design system you can feel.",   // one short line under the title
      reel: [0, 2, 13, 17],   // the card's short reel on the home page: media indexes, in order
      meta: [
        { label: "What I did", value: "Design system, docs" },
        { label: "Tools", value: "CSS tokens, JS" },
        { label: "Year", value: "2026" },
      ],
      intro: "A calm design system for tools you tune by hand.",
      facts: [
        { label: "What I wanted", text: "Make controls feel physical without extra decoration." },
      ],
    },
    {
      slug: "glypy",
      name: "Glypy",
      kind: "Pixel icon tool",
      title: "From pixels to shapes.",
      text: "A small tool for drawing pixel icons on a 24 × 24 grid and melting them into smooth shapes.",
      tint: "#f5f5f5",
      media: [
        // drawing a pixel heart, then Merge 0 → 100% rounds it into one shape
        { src: "media/glypy/v01-merge.webm", poster: "media/glypy/v01-merge.jpg", w: 1920, h: 1080, video: true },
        { src: "media/glypy/f02-merge.jpg", w: 1920, h: 1080, cap: "The same heart at Merge 0%, 100% and 200%." },
        { src: "media/glypy/f03-tool.jpg", w: 1920, h: 1080, cap: "One menu: export PNG or SVG, cell size, Merge, and left-handed mode." },
        { src: "media/glypy/f04-grid.jpg", w: 1920, h: 1080, cap: "Drawing row by row on Material's icon keylines." },
      ],
      hero: 0,
      lines: [
        { title: "Draw on the icon grid", text: "A 24 × 24 canvas with Material's icon keylines, so every icon I draw sits on the same grid and carries the same weight. Brush, fill, eraser and eyedropper, like in Procreate, and Play replays the drawing as it builds up." },
        [3],
        { title: "Merge pixels into shapes", text: "One slider does it all. Up to 100% it rounds the pixel corners; past that, touching cells melt into one smooth shape. The SVG export uses the same paths, so what I see is what I get." },
        [1],
        { title: "Built in Claude Code, on Graphite", text: "I built it in Claude Code, and every control comes from Graphite, my design system." },
        [2],
      ],
      shotTitle: "Glypy",
      subtitle: "Pixel icons that merge into shapes.",
      reel: [0, 1, 2],
      meta: [
        { label: "What I did", value: "Design, code" },
        { label: "Tools", value: "Claude Code, Graphite" },
        { label: "Year", value: "2026" },
      ],
      intro: "A small tool I made for drawing icons pixel by pixel, then merging the pixels into smooth shapes I can export as SVG.",
      facts: [],
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
