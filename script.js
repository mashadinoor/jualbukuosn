/* =========================
   WHATSAPP CONFIGURATION
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
const WHATSAPP_NUMBER = "6281511259423";

/* =========================
   PRODUCT ORDER
========================= */

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product;

    const message =
      `Halo LOPI, saya ingin memesan buku "${productName}".\n\n` +
      `Apakah stoknya masih tersedia? ` +
      `Mohon dibantu untuk proses pemesanannya.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
});

/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");

      const answer = faq.querySelector(".faq-answer");

      answer.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");

      const answer = item.querySelector(".faq-answer");

      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

/* =========================
   HEADER SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
  } else {
    header.style.boxShadow = "none";
  }
});

/* =========================
   FILTER BUTTONS
========================= */
function filterProducts(filter) {
  productCards.forEach((card) => {
    const level = card.dataset.level;
    const featured = card.dataset.featured;

    if (filter === "featured") {
      card.style.display = featured === "true" ? "" : "none";
    } else if (filter === "all") {
      card.style.display = "";
    } else {
      card.style.display = level === filter ? "" : "none";
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Ubah active button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Jalankan filter
    filterProducts(filter);
  });
});

// Jalankan filter default saat halaman dibuka
filterProducts("featured");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Active button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Filter products
    productCards.forEach((card) => {
      const level = card.dataset.level;
      const featured = card.dataset.featured;

      if (filter === "featured") {
        card.style.display = featured === "true" ? "" : "none";
      } else if (filter === "all") {
        card.style.display = "";
      } else {
        card.style.display = level === filter ? "" : "none";
      }
    });
  });
});
