console.log("ScrollTrigger.js が読み込まれました");

gsap.registerPlugin(ScrollTrigger);
console.log("GSAP ScrollTrigger プラグインが登録されました");

function setupPinSections() {
  console.log("setupPinSections 関数が実行されました");
  
  // 既存のScrollTriggerを全て削除
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  console.log("既存のScrollTriggerを削除しました");

  // 画面幅768px以下はpin演出なし
  if (window.innerWidth <= 768) {
    console.log(`画面幅が768px以下のため、pin演出をスキップします (現在の幅: ${window.innerWidth}px)`);
    return;
  }

  console.log(`画面幅: ${window.innerWidth}px - pin演出を実行します`);

  // MetaStep01〜03のみpin演出
  const pinSections = [
    document.getElementById("MetaStep01"),
    document.getElementById("MetaStep02"),
    document.getElementById("MetaStep03"),
  ].filter(Boolean);

  console.log(`対象セクション数: ${pinSections.length}個`, pinSections);

  pinSections.forEach((section, index) => {
    console.log(`セクション ${index + 1}: ${section.id} を処理中`);
    
    const pin = section.querySelector(".MetaStep__box");
    if (!pin) {
      console.log(`セクション ${section.id} に .MetaStep__box が見つかりません`);
      return;
    }
    
    console.log(`セクション ${section.id} の .MetaStep__box を発見、ScrollTriggerを作成します`);
    
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      pin: pin,
      pinSpacing: false, // 次のセクションが上に被さる
      // markers: true,
      onEnter: () => console.log(`${section.id} に入りました`),
      onLeave: () => console.log(`${section.id} から出ました`),
    });
    
    console.log(`セクション ${section.id} のScrollTriggerを作成しました`);
  });

  // MetaStepentryを上に重ねる
  const entry = document.getElementById("MetaStepentry");
  if (entry) {
    entry.style.zIndex = 100;
    entry.style.position = "relative";
    console.log("MetaStepentry のz-indexを設定しました");
  } else {
    console.log("MetaStepentry 要素が見つかりません");
  }

  // フッターも上に重ねる
  const footer = document.querySelector(".MetaStep__bg-color-footer");
  if (footer) {
    footer.style.zIndex = 100;
    footer.style.position = "relative";
    console.log("フッターのz-indexを設定しました");
  } else {
    console.log("フッター要素 (.MetaStep__bg-color-footer) が見つかりません");
  }
  
  console.log("setupPinSections 関数の実行が完了しました");
}

// 初期化
console.log("ScrollTrigger 初期化を開始します");
setupPinSections();

// 画面サイズ変更時も再設定
window.addEventListener("resize", () => {
  console.log("画面サイズが変更されました。ScrollTriggerを再設定します");
  setupPinSections();
});

console.log("ScrollTrigger.js の初期化が完了しました");
