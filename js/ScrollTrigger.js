gsap.registerPlugin(ScrollTrigger);

// main
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
  const pin = section.querySelector(".section__pin");
  const height = section.getBoundingClientRect().height;

  gsap.set(pin, {
    height: height,
  });

  ScrollTrigger.create({
    trigger: section,
    start: "bottom bottom",
    // わかりやすいようにマーカーを表示。本番環境では削除してください！
    markers: true,
    onEnter: () => {
      gsap.set(pin, {
        position: "fixed",
        top: "auto",
        bottom: 0,
        left: 0,
      });
    },
    onLeaveBack: () => {
      gsap.set(pin, {
        position: "absolute",
        top: 0,
        bottom: "auto",
        left: 0,
      });
    },
  });
});

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