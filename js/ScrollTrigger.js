gsap.registerPlugin(ScrollTrigger);

function setupPinSections() {
  // 既存のScrollTriggerを全て削除
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // 画面幅768px以下はpin演出なし
  if (window.innerWidth <= 768) return;

  // pin演出を適用するセクションのみ指定
  const pinSections = [
    document.getElementById("MetaStep01"),
    document.getElementById("MetaStep02"),
    document.getElementById("MetaStep03"),
  ].filter(Boolean);

  pinSections.forEach((section) => {
    const pin = section.querySelector(".section__pin");
    if (!pin) return;
    const height = section.getBoundingClientRect().height;

    gsap.set(pin, {
      height: height,
    });

    ScrollTrigger.create({
      trigger: section,
      start: "bottom bottom",
      // markers: true, // 本番環境では削除
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
}

// 初期化
setupPinSections();

// 画面サイズ変更時も再設定
window.addEventListener("resize", setupPinSections);