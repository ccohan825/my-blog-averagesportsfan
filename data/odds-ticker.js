const oddsTickerItems = [
  {
    label: "CFB TITLE",
    odds: ["Georgia +450", "Ohio State +550", "Texas +700", "Oregon +900"]
  },
  {
    label: "SUPER BOWL",
    odds: ["Chiefs +650", "49ers +750", "Ravens +850", "Bills +900"]
  },
  {
    label: "NFL DIVISION",
    odds: ["Bills AFC East +145", "Eagles NFC East +130", "Lions NFC North +120", "Chiefs AFC West -110"]
  },
  {
    label: "STANLEY CUP",
    odds: ["Avalanche +800", "Oilers +900", "Panthers +950", "Stars +1100"]
  },
  {
    label: "NBA FINALS",
    odds: ["Celtics +650", "Thunder +700", "Nuggets +900", "Knicks +1200"]
  },
  {
    label: "MLB TODAY",
    odds: ["Dodgers -145 vs Giants +125", "Yankees -130 vs Red Sox +110", "Braves -120 vs Mets +105"]
  }
];

function buildTickerItem(item) {
  const oddsText = item.odds
    .map(odd => `${odd}`)
    .join(' <span class="ticker-divider">●</span> ');

  return `
    <span class="ticker-item">
      <strong>${item.label}</strong> ${oddsText}
    </span>
  `;
}

function renderOddsTicker() {
  const tickerTrack = document.getElementById("odds-ticker-track");

  if (!tickerTrack) return;

  const tickerContent = oddsTickerItems.map(buildTickerItem).join("");

  tickerTrack.innerHTML = `
    <div class="ticker-group">
      ${tickerContent}
    </div>

    <div class="ticker-group" aria-hidden="true">
      ${tickerContent}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderOddsTicker);