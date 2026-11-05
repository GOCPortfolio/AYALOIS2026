/* =====================================================
   EDIT ONLY THIS CONFIG OBJECT. Everything below it is app code.
   ===================================================== */
const CONFIG = {
  siteUrl: "https://gocportfolio.github.io/AYALOIS2026/",            // your live address (also in index.html, 4 places)
  seal: "A&L",
  hashtag: "#AYALOIS2026",
  tagline: "Worth The Wait",                          // ASSUMED from your story wording; change freely
  city: "Abuja, Nigeria",
  bride: { title: "Miss", given: "LOISWEALTH", surname: "Irondi", known: "Loiswealth",
           parents: "Daughter of Irondi Godwill Nkuku of Nriukwu-Amaimo Autonomous Community, Amuzu, Aboh Mbaise LGA, Imo State" },
  groom: { title: "Mr", given: "EMMANUEL", surname: "Ayara", known: "Emmy",
           parents: "Son of Elder Ufot Sunday Ayara of Ikot Oboroenyi Community, Edemeya, Ikot Abasi LGA, Akwa Ibom State" },

  date: { iso: "2026-11-28T10:00:00+01:00", tzName: "Africa/Lagos (WAT)", hours: 4 },   // length of 4 hours is an assumption
  dateLong: "Saturday, 28th November 2026",
  timeText: "10:00 AM prompt",
  eventTitle: "Loiswealth & Emmy's Wedding",

  colours: [
    { name: "Navy Blue", hex: "#14216B" },
    { name: "White",     hex: "#FFFFFF" },
    { name: "Baby Pink", hex: "#F6B9C6" }
  ],

  venues: [
    { kind: "Ceremony", name: "Great House of Wonders International Gospel Centre",
      sub: "AKA City of Wonders, behind Catholic Church", address: "Anagada, FCT-Abuja",
      mapQuery: "Great House of Wonders International Gospel Centre, Anagada, Abuja", mapsUrl: "" },
    { kind: "Reception", name: "The Wisdom Garden",
      sub: "Follows immediately after the ceremony", address: "No 8/10 White Street, off Garden Road, Anagada, Giri Zuba Express Way, FCT-Abuja",
      mapQuery: "The Wisdom Garden, 8/10 White Street, off Garden Road, Anagada, Abuja", mapsUrl: "" }
  ],

  fod: { name: "MR & MRS CHUKWUEMEKA UGBOAJA", role: "Fully in charge of the programme" },

  story: {
    intro: "When God writes your story, it is always worth the wait. Through every season, God has guided our steps to this moment. We invite you to witness and celebrate the beginning of our forever. Thank you.",
    moments: [
      { label: "Where it began", title: "Samgee Continental Service",
        text: "I will never forget Samgee Continental Service at INEC Headquarters, FCT, where our story began and is forever.", img: "assets/story-1.webp", alt: "Emmy and Loiswealth in white and black, posing together" },
      { label: "Six years in friendship", title: "A birthday, a proposal",
        text: "Six years of friendship, and my birthday last year turned into a proposal. 28th February was our introduction.", img: "assets/story-2.webp", alt: "Emmy and Loiswealth in matching gold and black prints" },
      { label: "Our wedding season", title: "Three celebrations",
        text: "26th August, our traditional marriage. 26th November, our civil wedding. 28th November, our church wedding.", img: "assets/story-3.webp", alt: "Emmy and Loiswealth in traditional red attire" }
    ],
    closing: "We are helped by God, and He deserves all the glory."
  },

  gallery: [
    ["g01","Loiswealth and Emmy in traditional red and pink attire"],
    ["g02","Emmy and Loiswealth smiling in white and black"],
    ["g03","The couple seated in gold and black ankara prints"],
    ["g04","Loiswealth and Emmy in red traditional attire, portrait"],
    ["g05","The couple sharing a playful moment in white shirts"],
    ["g06","Loiswealth and Emmy in gold prints against a warm backdrop"],
    ["g07","Emmy and Loiswealth in matching red and black prints"],
    ["g08","The couple in gold prints, seated close"],
    ["g09","Emmy in red print, Loiswealth in black lace"],
    ["g10","Emmy in white shirt and navy trousers"],
    ["g11","Loiswealth and Emmy in red and pink, standing"],
    ["g12","The couple in red prints, Loiswealth in front"],
    ["g13","Emmy standing in a white shirt"],
    ["g14","The couple with Emmy in a red agbada"],
    ["g15","Emmy close to Loiswealth in red print"],
    ["g16","Loiswealth and Emmy in black by the wooden doors"]
  ],

  toast: [
    "Heavenly Father, we thank You for this beautiful day.",
    "Bless Loiswealth and Emmy with a love that grows deeper with every year.",
    "May Your peace rule in their home and Your joy fill their hearts.",
    "May they always find strength in prayer and laughter in each other.",
    "Let every season of their marriage be covered by Your grace.",
    "To Loiswealth and Emmy: may God keep you, forever and always. Cheers!"
  ],

  rsvp: { endpoint: "https://script.google.com/macros/s/AKfycbyroB_u4maE8jtGARhaRza389iGh8cUmFSCQbIJVQmKoLnVLQUJN8w-M582ITcrOxRC/exec", callNumber: "08021100027", whatsapp: "2348021100027" },

  gifts: { message: "Your love and presence are the greatest gift. If you would like to bless us further, you may do so below.",
           bank: "UBA", accountName: "IRONDI LOIS U", accountNumber: "2081257681" },

  faq: [
    { q: "What is the dress code?", a: "Please dress in our colours of the day: Navy Blue, White and Baby Pink.", swatches: true },
    { q: "Is there parking?", a: "Parking space is limited, so please arrive early." },
    { q: "Where can I stay?", a: "There are hotels near the venue." },
    { q: "Who can I contact?", contact: { name: "Michael Irondi (Son Of Fire)", phone: "08021100027" } }
  ],

  vendors: [
    ["Event Planner", "Abosede Arowosola"],
    ["Decorator", "Rainbow Event"],
    ["Make-up Artist", "Ivy's Signature"],
    ["Photography & Videography", "CleanLens"],
    ["Bride's Outfit", "Greg Signature"],
    ["Brand Strategist", "G.O.C", "https://wa.me/2348027134537"]
  ],

  footer: { thanks: "Thank you for celebrating with us. Your love and prayers mean the world to us." },
  shareText: "You are invited to celebrate the wedding of Loiswealth & Emmy on Saturday, 28th November 2026.",
  music: { volume: 0.5 }
};

/* ================= APP CODE (no edits needed) ================= */
(function () {
  "use strict";
  var C = CONFIG, $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var params = new URLSearchParams(location.search);
  var guest = (params.get("guest") || "").trim().slice(0, 60);
  function get(path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, C); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* CSS colours from CONFIG */
  document.documentElement.style.setProperty("--navy", C.colours[0].hex);

  /* fill data-cfg */
  $$("[data-cfg]").forEach(function (n) { var v = get(n.getAttribute("data-cfg")); if (v != null) n.textContent = v; });
  var names = C.bride.known + " & " + C.groom.known;
  document.title = names + " | " + C.hashtag;

  /* guest */
  if (guest) {
    var g1 = $("#envGuest"); g1.textContent = "Dear " + guest; g1.hidden = false;
    var g2 = $("#cardGuest"); g2.textContent = "Dear " + guest + ","; g2.hidden = false;
    $("#fName").value = guest;
  }

  /* swatches */
  function swatchHtml(c) { return '<li><i style="background:' + c.hex + '"></i><span>' + esc(c.name) + "</span></li>"; }
  $("#swatches").innerHTML = C.colours.map(swatchHtml).join("");

  /* venues */
  function mapsLink(v) { return v.mapsUrl || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(v.mapQuery); }
  function dirLink(v) { return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(v.mapQuery); }
  $("#venues").innerHTML = C.venues.map(function (v) {
    return '<article class="venue reveal"><p class="kind gold-text">' + esc(v.kind) + "</p><h3>" + esc(v.name) + '</h3><p class="sub">' + esc(v.sub) + "</p><p class=\"addr\">" + esc(v.address) +
      '</p><div class="btn-row"><a class="btn solid" target="_blank" rel="noopener" href="' + mapsLink(v) + '">Open in Google Maps</a><a class="btn ghost-d" target="_blank" rel="noopener" href="' + dirLink(v) + '">Get directions</a></div></article>';
  }).join("");

  /* story */
  $("#timeline").innerHTML = C.story.moments.map(function (m, i) {
    return '<article class="moment reveal"><figure><img src="' + m.img + '" width="720" height="' + (i === 0 ? 900 : 960) + '" alt="' + esc(m.alt) + '" loading="lazy"></figure><div><p class="lab">' + esc(m.label) + "</p><h3>" + esc(m.title) + "</h3><p>" + esc(m.text) + "</p></div></article>";
  }).join("");

  /* toast */
  $("#toastLines").innerHTML = C.toast.map(function (l, i) { return '<p class="reveal' + (i === C.toast.length - 1 ? " last" : "") + '">' + esc(l) + "</p>"; }).join("");

  /* vendors */
  $("#vendors").innerHTML = C.vendors.map(function (v) { return "<li><span>" + esc(v[0]) + "</span><b>" + (v[2] ? '<a class="vlink" target="_blank" rel="noopener" href="' + esc(v[2]) + '">' + esc(v[1]) + "</a>" : esc(v[1])) + "</b></li>"; }).join("");

  /* FAQ */
  $("#faq").innerHTML = C.faq.map(function (f, i) {
    var body = "";
    if (f.a) body += "<p>" + esc(f.a) + "</p>";
    if (f.swatches) body += '<ul class="swatches sm">' + C.colours.map(swatchHtml).join("") + "</ul>";
    if (f.contact) {
      body += "<p>" + esc(f.contact.name) + ': <a href="tel:' + f.contact.phone.replace(/\s/g, "") + '">' + esc(f.contact.phone) + "</a></p>";
      if (C.rsvp.whatsapp && C.rsvp.whatsapp.slice(-10) !== f.contact.phone.replace(/\D/g, "").slice(-10)) body += '<p>WhatsApp: <a href="https://wa.me/' + C.rsvp.whatsapp + '">+' + C.rsvp.whatsapp + "</a></p>";
    }
    return '<div class="acc"><h3><button type="button" aria-expanded="false" aria-controls="fa' + i + '" id="fb' + i + '">' + esc(f.q) + '<span aria-hidden="true"></span></button></h3><div class="acc-p" id="fa' + i + '" role="region" aria-labelledby="fb' + i + '"><div class="acc-in">' + body + "</div></div></div>";
  }).join("");
  $$("#faq button").forEach(function (b) {
    b.addEventListener("click", function () {
      var open = b.getAttribute("aria-expanded") === "true";
      $$("#faq button").forEach(function (o) { o.setAttribute("aria-expanded", "false"); o.parentNode.nextElementSibling.style.maxHeight = "0px"; });
      if (!open) { b.setAttribute("aria-expanded", "true"); var p = b.parentNode.nextElementSibling; p.style.maxHeight = p.firstChild.offsetHeight + "px"; }
    });
  });
  $$(".acc-p").forEach(function (p) { p.style.maxHeight = "0px"; });

  /* gallery */
  var gal = $("#gallery");
  gal.innerHTML = C.gallery.map(function (g, i) {
    return '<button type="button" class="gi reveal" data-i="' + i + '" aria-label="Open photo ' + (i + 1) + ": " + esc(g[1]) + '"><img src="assets/' + g[0] + '-sm.webp" width="520" height="' + (g[2] || 690) + '" alt="' + esc(g[1]) + '" loading="lazy"></button>';
  }).join("");

  /* gifts */
  var acctBtn = $("#copyAcct");
  if (!C.gifts.accountNumber) { acctBtn.disabled = true; $("#acct").textContent = "To be announced"; acctBtn.textContent = "Account details coming soon"; }
  function toast(msg) { var t = $("#toastMsg"); t.textContent = msg; t.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("on"); }, 2200); }
  acctBtn.addEventListener("click", function () {
    var txt = C.gifts.accountNumber;
    function fb() { var ta = el("textarea"); ta.value = txt; ta.style.cssText = "position:fixed;opacity:0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); toast("Account number copied"); } catch (e) { toast("Press and hold to copy"); } ta.remove(); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { toast("Account number copied"); }, fb); else fb();
  });

  /* countdown */
  var target = new Date(C.date.iso).getTime();
  var last = {};
  function setN(id, v) { var n = $(id), s = String(v).padStart(2, "0"); if (last[id] !== s) { n.textContent = s; if (last[id] !== undefined && !reduce) { n.classList.remove("flip"); void n.offsetWidth; n.classList.add("flip"); } last[id] = s; } }
  function tick() {
    var d = target - Date.now();
    if (d <= 0) { $("#countdown").hidden = true; $("#married").hidden = false; return; }
    $("#countdown").hidden = false; $("#married").hidden = true;
    setN("#cdD", Math.floor(d / 864e5)); setN("#cdH", Math.floor(d % 864e5 / 36e5)); setN("#cdM", Math.floor(d % 36e5 / 6e4)); setN("#cdS", Math.floor(d % 6e4 / 1e3));
  }
  tick(); setInterval(tick, 1000);
  if (params.get("after")) { target = Date.now() - 1000; tick(); }  // test helper

  /* calendar */
  var start = new Date(C.date.iso), end = new Date(start.getTime() + C.date.hours * 36e5);
  function fmt(d) { return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""); }
  var loc = C.venues[0].name + ", " + C.venues[0].address;
  var desc = "Wedding ceremony at " + C.venues[0].name + ". Reception follows at " + C.venues[1].name + ", " + C.venues[1].address + ".";
  $("#gcal").href = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(C.eventTitle) + "&dates=" + fmt(start) + "/" + fmt(end) + "&details=" + encodeURIComponent(desc) + "&location=" + encodeURIComponent(loc) + "&ctz=Africa/Lagos";
  $("#ics").addEventListener("click", function () {
    var esc2 = function (s) { return s.replace(/[,;\\]/g, "\\$&").replace(/\n/g, "\\n"); };
    var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Invitation//EN", "BEGIN:VEVENT", "UID:" + fmt(start) + "@wedding-invite", "DTSTAMP:" + fmt(new Date()), "DTSTART:" + fmt(start), "DTEND:" + fmt(end), "SUMMARY:" + esc2(C.eventTitle), "LOCATION:" + esc2(loc), "DESCRIPTION:" + esc2(desc), "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    var blob = new Blob([ics], { type: "text/calendar;charset=utf-8" }), a = el("a"); a.href = URL.createObjectURL(blob); a.download = "loiswealth-and-emmy-wedding.ics"; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
  });

  /* RSVP */
  var form = $("#rsvpForm");
  $("#callRsvp").href = "tel:" + C.rsvp.callNumber; $("#callRsvp").textContent = "Call to RSVP: " + C.rsvp.callNumber;
  function waMsg(extra) {
    var n = form.name.value.trim() || guest || "(my name)", a = (form.attending.value || "(will confirm)"), gs = form.guests.value;
    return "Hello, this is " + n + ". RSVP for " + names + "'s wedding on 28th November 2026: " + a + (/accept/.test(a) ? ", " + gs + " guest(s)" : "") + ".";
  }
  $("#waRsvp").addEventListener("click", function (e) { this.href = "https://wa.me/" + C.rsvp.whatsapp + "?text=" + encodeURIComponent(waMsg()); });
  $("#waRsvp").href = "https://wa.me/" + C.rsvp.whatsapp;
  $$('input[name="attending"]').forEach(function (r) { r.addEventListener("change", function () { $("#guestsField").style.display = form.attending.value === "Regretfully decline" ? "none" : ""; }); });
  function err(id, inputs, msg) { $(id).textContent = msg; inputs.forEach(function (i) { i.setAttribute("aria-invalid", msg ? "true" : "false"); }); return !msg; }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.website.value) return;
    var okN = err("#eName", [form.name], form.name.value.trim().length < 2 ? "Please enter your name." : "");
    var digits = form.phone.value.replace(/\D/g, "");
    var okP = err("#ePhone", [form.phone], digits.length < 7 ? "Please enter a valid phone number." : "");
    var okA = err("#eAtt", [], form.attending.value ? "" : "Please choose one option.");
    if (!(okN && okP && okA)) { var f = $('[aria-invalid="true"]', form) || $("#eAtt"); if (f && f.focus) f.focus(); return; }
    var data = { name: form.name.value.trim(), phone: form.phone.value.trim(), attending: form.attending.value, guests: form.attending.value === "Regretfully decline" ? 0 : Number(form.guests.value), message: form.message.value.trim(), submittedAt: new Date().toISOString() };
    var note = $("#rsvpNote");
    if (!C.rsvp.endpoint) { note.hidden = false; note.textContent = "Online RSVP is not switched on yet. Please use the WhatsApp or Call buttons below. Thank you!"; return; }
    var btn = $("#rsvpSubmit"); btn.disabled = true; btn.textContent = "Sending...";
    fetch(C.rsvp.endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(data) }).then(function () {
      form.hidden = true; note.hidden = true; var ok = $("#rsvpOk"); ok.hidden = false;
      $("#rsvpOkText").textContent = data.attending === "Joyfully accept" ? "Thank you, " + data.name + "! We cannot wait to celebrate with you." : "Thank you, " + data.name + ". You will be missed, and we appreciate you letting us know.";
      ok.classList.add("pop");
    }, function () { btn.disabled = false; btn.textContent = "Send RSVP"; note.hidden = false; note.textContent = "Sorry, that did not go through. Please try again or use the WhatsApp button."; });
  });

  /* share */
  $("#shareWa").addEventListener("click", function () { window.open("https://wa.me/?text=" + encodeURIComponent(C.shareText + " " + C.siteUrl), "_blank", "noopener"); });

  /* reveal */
  var io = null;
  if (!reduce && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach(function (n) { io.observe(n); });
  }

  /* lightbox */
  var lb = $("#lb"), idx = 0, opener = null;
  function show(i) { idx = (i + C.gallery.length) % C.gallery.length; var g = C.gallery[idx]; $("#lbImg").src = "assets/" + g[0] + ".webp"; $("#lbImg").alt = g[1]; $("#lbCap").textContent = g[1]; $("#lbC").textContent = (idx + 1) + " / " + C.gallery.length; }
  function openLb(i, from) { opener = from; show(i); lb.hidden = false; document.body.classList.add("lb-open"); $("#lbX").focus(); }
  function closeLb() { lb.hidden = true; document.body.classList.remove("lb-open"); if (opener) opener.focus(); }
  gal.addEventListener("click", function (e) { var b = e.target.closest(".gi"); if (b) openLb(Number(b.dataset.i), b); });
  $("#lbX").onclick = closeLb; $("#lbP").onclick = function () { show(idx - 1); }; $("#lbN").onclick = function () { show(idx + 1); };
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb(); else if (e.key === "ArrowLeft") show(idx - 1); else if (e.key === "ArrowRight") show(idx + 1);
    else if (e.key === "Tab") { var f = $$("button", lb), a = document.activeElement; if (e.shiftKey && a === f[0]) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && a === f[f.length - 1]) { e.preventDefault(); f[0].focus(); } }
  });
  var sx = null;
  lb.addEventListener("pointerdown", function (e) { sx = e.clientX; });
  lb.addEventListener("pointerup", function (e) { if (sx == null) return; var dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); });

  /* music */
  var audio = $("#music"), sbtn = $("#soundBtn"), muted = store("wedMuted") === "1", fadeT = null;
  function paintSound() { sbtn.classList.toggle("off", muted); sbtn.setAttribute("aria-pressed", String(muted)); sbtn.setAttribute("aria-label", muted ? "Unmute music" : "Mute music"); }
  function fadeTo(v) { clearInterval(fadeT); fadeT = setInterval(function () { var d = v - audio.volume; if (Math.abs(d) < 0.03) { audio.volume = v; clearInterval(fadeT); if (v === 0) audio.pause(); } else audio.volume = Math.max(0, Math.min(1, audio.volume + Math.sign(d) * 0.03)); }, 60); }
  function startMusic() { sbtn.hidden = false; paintSound(); if (muted) return; audio.volume = 0; var p = audio.play(); if (p && p.catch) p.catch(function () {}); fadeTo(C.music.volume); }
  sbtn.addEventListener("click", function () { muted = !muted; store("wedMuted", muted ? "1" : "0"); paintSound(); if (muted) fadeTo(0); else { audio.volume = 0; var p = audio.play(); if (p && p.catch) p.catch(function () {}); fadeTo(C.music.volume); } });

  /* ENVELOPE INTRO */
  var intro = $("#intro"), page = $("#main"), env = $("#env"), seal = $("#seal"), card = $("#envCard"), flap = $("#envFlap"), opened = false;
  page.setAttribute("inert", ""); document.documentElement.classList.add("lock");
  function finish() {
    intro.classList.add("gone"); document.body.classList.remove("is-intro"); document.documentElement.classList.remove("lock"); page.removeAttribute("inert");
    setTimeout(function () { intro.hidden = true; }, 700); sbtn.hidden = false; paintSound(); try { page.focus({ preventScroll: true }); } catch (e) {}
    window.scrollTo(0, 0);
  }
  function endNow() { if (params.has("nointro")) { intro.hidden = true; finish(); } }
  function openEnv(skip) {
    if (opened) return; opened = true; $("#envHint").style.opacity = 0; $("#skipBtn").hidden = true;
    if (!skip) startMusic(); else { sbtn.hidden = false; paintSound(); }
    if (skip || reduce) { intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 350, fill: "forwards" }).onfinish = finish; if (skip && !reduce) {} return; }
    var T = function (fn, ms) { return setTimeout(fn, ms); };
    seal.classList.add("press");
    T(function () { seal.classList.add("crack"); }, 180);
    T(function () { flap.classList.add("open"); }, 520);
    T(function () { flap.style.zIndex = 1; }, 1000);
    T(function () { card.classList.add("rise"); }, 900);
    T(function () {
      card.style.zIndex = 20;
      var r = card.getBoundingClientRect(), w = card.offsetWidth, h = card.offsetHeight;
      var s = Math.min(innerWidth * 0.94 / w, innerHeight * 0.8 / h);
      var dx = innerWidth / 2 - (r.left + r.width / 2), dy = innerHeight / 2 - (r.top + r.height / 2);
      card.style.transition = "none";
      card.animate([{ transform: getComputedStyle(card).transform }, { transform: "translate(" + dx + "px," + dy + "px) scale(" + s + ")" }], { duration: 900, easing: "cubic-bezier(.3,.7,.2,1)", fill: "forwards" });
      $$(".env-back,.env-front,.env-flap,.seal,.env-invited,.env-guest", intro).forEach(function (n) { n.animate([{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(60vh)", opacity: 0 }], { duration: 800, easing: "ease-in", fill: "forwards", delay: 100 }); });
    }, 1900);
    T(function () { finish(); }, 3500);
  }
  seal.addEventListener("click", function () { seal.blur(); openEnv(false); });
  $("#skipBtn").addEventListener("click", function () { openEnv(true); });
  if (params.has("nointro")) { intro.hidden = true; opened = true; finish(); } else { seal.focus({ preventScroll: true }); }
  paintSound();
})();
