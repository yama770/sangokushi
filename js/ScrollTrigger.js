// gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll("#MetaStep01, #MetaStep02, #MetaStep03");

// sections.forEach((section, i) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: "bottom top",
//         pin: true,
//         pinSpacing: false, // ← ここをfalseにすることで次のセクションが上に被さる
//         scrub: false,
//         onEnter: () => section.style.zIndex = 10 + i,
//         onLeave: () => section.style.zIndex = "",
//         onEnterBack: () => section.style.zIndex = 10 + i,
//         onLeaveBack: () => section.style.zIndex = ""
//     });
// });