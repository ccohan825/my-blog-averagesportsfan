(function () {
  if (document.getElementById("asf-email-signup")) return;

  const footer = document.querySelector(".site-footer");

  const section = document.createElement("section");
  section.id = "asf-email-signup";
  section.className = "asf-email-strip";

  section.innerHTML = `
    <div>
      <h2>Join the ASF Crew</h2>
      <p>Get hot takes, blog drops, and chaos straight to your inbox.</p>
    </div>

    <div class="asf-kit-form-box" id="asf-kit-form-box"></div>
  `;

  const styles = document.createElement("style");
  styles.textContent = `
    .asf-email-strip {
      width: min(1220px, calc(100% - 40px));
      margin: 28px auto 0;
      background: linear-gradient(90deg, #004491, #061b3d);
      color: #ffffff;
      border-radius: 12px;
      padding: 24px 30px;
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      gap: 24px;
      align-items: center;
      box-shadow: 0 10px 28px rgba(6, 27, 61, 0.12);
    }

    .asf-email-strip h2 {
      margin: 0;
      font-family: Impact, "Arial Black", sans-serif;
      text-transform: uppercase;
      font-size: 32px;
      letter-spacing: 0.02em;
      font-style: italic;
    }

    .asf-email-strip p {
      margin: 5px 0 0;
      font-weight: 700;
      font-family: Arial, Helvetica, sans-serif;
    }

    .asf-kit-form-box {
      background: rgba(255,255,255,0.08);
      border-radius: 8px;
      padding: 8px;
    }

    .asf-kit-form-box form {
      margin: 0 !important;
    }

    .asf-kit-form-box button,
    .asf-kit-form-box input[type="submit"],
    .asf-kit-form-box .formkit-submit,
    .asf-kit-form-box .formkit-submit span {
      font-family: Impact, "Arial Black", sans-serif !important;
      text-transform: uppercase !important;
      font-style: italic !important;
      letter-spacing: 0.04em !important;
      font-size: 24px !important;
    }

    @media (max-width: 980px) {
      .asf-email-strip {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }

    @media (max-width: 600px) {
      .asf-email-strip {
        width: min(100% - 24px, 1220px);
        padding: 22px 18px;
      }

      .asf-email-strip h2 {
        font-size: 28px;
      }
    }
  `;

  document.head.appendChild(styles);

  if (footer) {
    footer.parentNode.insertBefore(section, footer);
  } else {
    document.body.appendChild(section);
  }

  const kitBox = document.getElementById("asf-kit-form-box");
  const kitScript = document.createElement("script");
  kitScript.async = true;
  kitScript.dataset.uid = "f203890c32";
  kitScript.src = "https://average-sports-fan.kit.com/f203890c32/index.js";
  kitBox.appendChild(kitScript);
})();