gsap.registerPlugin(ScrollTrigger);

function setupPinSections() {
  // 既存のScrollTriggerを全て削除
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // 画面幅768px以下はpin演出なし
  if (window.innerWidth <= 768) return;

  // MetaStep01〜03のみpin演出
  const pinSections = [
    document.getElementById("MetaStep01"),
    document.getElementById("MetaStep02"),
    document.getElementById("MetaStep03"),
  ].filter(Boolean);

  pinSections.forEach((section) => {
    const pin = section.querySelector(".MetaStep__box");
    if (!pin) return;
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      pin: pin,
      pinSpacing: false, // 次のセクションが上に被さる
      // markers: true,
    });
  });

  // MetaStepentryを上に重ねる
  const entry = document.getElementById("MetaStepentry");
  if (entry) {
    entry.style.zIndex = 100;
    entry.style.position = "relative";
  }

  // フッターも上に重ねる
  const footer = document.querySelector(".MetaStep__bg-color-footer");
  if (footer) {
    footer.style.zIndex = 100;
    footer.style.position = "relative";
  }
}

// 初期化
setupPinSections();

// 画面サイズ変更時も再設定
window.addEventListener("resize", setupPinSections);
