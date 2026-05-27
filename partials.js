/* Shared layout partials for all REVION Rx pages.
   Each page includes:
     <div data-partial="announce"></div>
     <div data-partial="header" data-current="shop"></div>
     <div data-partial="marquee"></div>
     <div data-partial="footer"></div>
*/

const PARTIALS = {
  announce: `
    <div class="announce" role="region" aria-label="공지">
      <div class="announce__track">
        <span>전국 1,200여 약국 입점</span><span aria-hidden="true">·</span>
        <span>50,000원 이상 무료배송</span><span aria-hidden="true">·</span>
        <span>첫 구매 10% 할인</span>
      </div>
    </div>
  `,

  header: (current = '') => `
    <header class="header" data-state="top">
      <div class="header__inner">
        <button class="nav-toggle" aria-label="메뉴 열기" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav nav--left" aria-label="주 메뉴">
          <ul>
            <li><a href="about.html"     ${current==='about'?'class="is-current"':''}>ABOUT</a></li>
            <li><a href="shop.html"      ${current==='shop'?'class="is-current"':''}>SHOP</a></li>
            <li><a href="pharmacy.html"  ${current==='pharmacy'?'class="is-current"':''}>PHARMACY</a></li>
            <li><a href="event.html"     ${current==='event'?'class="is-current"':''}>EVENT</a></li>
            <li><a href="community.html" ${current==='community'?'class="is-current"':''}>COMMUNITY</a></li>
          </ul>
        </nav>
        <a href="index.html" class="brand" aria-label="REVION Rx 홈">
          <img src="images/logo.svg" alt="REVION Rx" />
        </a>
        <nav class="nav nav--right" aria-label="유틸리티">
          <ul>
            <li><a href="login.html">LOGIN</a></li>
            <li><a href="join.html">JOIN</a></li>
            <li><a href="cart.html" class="cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span>Cart <em>2</em></span>
            </a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,

  marquee: `
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <span>PDRN 1,200ppm</span><i>✦</i>
        <span>EGF 2ppm</span><i>✦</i>
        <span>Pharmacy Exclusive</span><i>✦</i>
        <span>Sensitive Skin Tested</span><i>✦</i>
        <span>Vegan Formula</span><i>✦</i>
        <span>Made in Korea</span><i>✦</i>
        <span>Dermatologist Tested</span><i>✦</i>
        <span>PDRN 1,200ppm</span><i>✦</i>
        <span>EGF 2ppm</span><i>✦</i>
        <span>Pharmacy Exclusive</span><i>✦</i>
        <span>Sensitive Skin Tested</span><i>✦</i>
        <span>Vegan Formula</span><i>✦</i>
        <span>Made in Korea</span><i>✦</i>
        <span>Dermatologist Tested</span><i>✦</i>
      </div>
    </div>
  `,

  footer: `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <p class="brand brand--footer"><img src="images/logo.svg" alt="REVION Rx" /></p>
          <p class="footer__lede">약국에서 시작된 처방형 더마 코스메틱.<br/>임상 데이터에 기반한 진짜 스킨케어를 제안합니다.</p>
          <div class="socials" aria-label="소셜 채널">
            <a href="#" aria-label="Instagram"><span>IG</span></a>
            <a href="#" aria-label="YouTube"><span>YT</span></a>
            <a href="#" aria-label="KakaoTalk"><span>KK</span></a>
          </div>
        </div>
        <div class="footer__cols">
          <div class="footer__col">
            <h4>SHOP</h4>
            <ul>
              <li><a href="shop.html">전체 상품</a></li>
              <li><a href="shop.html?cat=cream">크림</a></li>
              <li><a href="shop.html?cat=mask">마스크팩</a></li>
              <li><a href="shop.html?cat=sun">선크림</a></li>
              <li><a href="shop.html?cat=set">기프트 세트</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>ABOUT</h4>
            <ul>
              <li><a href="about.html">브랜드 스토리</a></li>
              <li><a href="about.html#science">성분 사이언스</a></li>
              <li><a href="pharmacy.html">약국 입점</a></li>
              <li><a href="community.html">저널</a></li>
              <li><a href="community.html">언론보도</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>HELP</h4>
            <ul>
              <li><a href="#">배송 안내</a></li>
              <li><a href="#">교환 / 반품</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">1:1 문의</a></li>
              <li><a href="#">이용약관</a></li>
            </ul>
          </div>
          <div class="footer__col footer__col--contact">
            <h4>CONTACT</h4>
            <p class="phone">02-1577-0000</p>
            <p class="hours">평일 10:00 — 17:00<br/>점심 13:00 — 14:00</p>
            <p class="mail">cs@revionrx.com</p>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        <div class="container footer__bar-inner">
          <small>© 2026 REVION℞ · 주식회사 레비온 · 사업자번호 000-00-00000</small>
          <ul class="footer__legal">
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">사업자정보</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `,
};

/* Mount all partials marked in the page */
document.querySelectorAll('[data-partial]').forEach(node => {
  const key = node.getAttribute('data-partial');
  const current = node.getAttribute('data-current') || '';
  const html = typeof PARTIALS[key] === 'function' ? PARTIALS[key](current) : PARTIALS[key];
  node.outerHTML = html || '';
});

/* Hover-reveal video on product cards (plays/pauses with hover) */
document.querySelectorAll('.card__hover-video').forEach(video => {
  const card = video.closest('.card');
  if (!card) return;
  card.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

/* ----- Reusable modal helpers ----- */
function openModal(html){
  closeModal();
  const back = document.createElement('div');
  back.className = 'modal-backdrop';
  back.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button type="button" class="modal__close" aria-label="닫기">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <div class="modal__body">${html}</div>
    </div>
  `;
  document.body.appendChild(back);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => back.classList.add('is-open'));
  back.addEventListener('click', e => { if (e.target === back) closeModal(); });
  back.querySelector('.modal__close').addEventListener('click', closeModal);
  document.addEventListener('keydown', escClose);
  return back;
}
function closeModal(){
  const back = document.querySelector('.modal-backdrop');
  if (!back) return;
  back.classList.remove('is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', escClose);
  setTimeout(() => back.remove(), 250);
}
function escClose(e){ if (e.key === 'Escape') closeModal(); }
window.openModal  = openModal;
window.closeModal = closeModal;

/* ----- Review detail modal (with prev/next navigation) ----- */
window.openReviewModal = (data, list, index) => {
  const items = Array.isArray(list) ? list : [data];
  let i = (typeof index === 'number') ? index : items.indexOf(data);
  if (i < 0) i = 0;

  const renderBody = () => {
    const it = items[i];
    return `
      <p class="review-modal__counter"><strong>${i + 1}</strong> / ${items.length}</p>
      <div class="review-modal__top">
        <span class="review-modal__rating">${'★'.repeat(it.rating)}${'☆'.repeat(5 - it.rating)}</span>
      </div>
      <h3 class="review-modal__title">${it.title}</h3>
      <p class="review-modal__text">${it.text}</p>
      <div class="review-modal__meta">
        <div class="review-modal__author">
          <span class="review-modal__user">${it.user}</span>
          <time class="review-modal__date">${it.date}</time>
        </div>
        <span class="review-modal__product">${it.product}</span>
      </div>
    `;
  };

  const back = openModal(renderBody());
  /* Add nav arrows next to modal */
  const prev = document.createElement('button');
  prev.className = 'modal-nav modal-nav--prev';
  prev.setAttribute('aria-label', '이전 리뷰');
  prev.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
  const next = document.createElement('button');
  next.className = 'modal-nav modal-nav--next';
  next.setAttribute('aria-label', '다음 리뷰');
  next.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
  back.appendChild(prev);
  back.appendChild(next);

  const modalBody = back.querySelector('.modal__body');
  const refresh = () => {
    modalBody.innerHTML = renderBody();
    prev.hidden = (i === 0);
    next.hidden = (i === items.length - 1);
    modalBody.parentElement.scrollTop = 0;
  };
  refresh();

  prev.addEventListener('click', e => { e.stopPropagation(); if (i > 0){ i--; refresh(); } });
  next.addEventListener('click', e => { e.stopPropagation(); if (i < items.length - 1){ i++; refresh(); } });
  /* Arrow key support */
  const keyHandler = (e) => {
    if (e.key === 'ArrowLeft' && i > 0){ i--; refresh(); }
    if (e.key === 'ArrowRight' && i < items.length - 1){ i++; refresh(); }
  };
  document.addEventListener('keydown', keyHandler);
  /* Cleanup on close */
  const origClose = window.closeModal;
  window.closeModal = () => {
    document.removeEventListener('keydown', keyHandler);
    window.closeModal = origClose;
    origClose();
  };
};

/* ----- Write review modal (shared) ----- */
window.openWriteReviewModal = () => {
  openModal(`
    <h2 class="write-modal__title">리뷰 작성하기</h2>
    <p class="write-modal__sub">실제 사용 경험을 자유롭게 들려주세요.</p>

    <div class="write-field">
      <label>별점</label>
      <div class="write-stars" id="w-stars">
        <button type="button" data-star="1">★</button>
        <button type="button" data-star="2">★</button>
        <button type="button" data-star="3">★</button>
        <button type="button" data-star="4">★</button>
        <button type="button" data-star="5">★</button>
      </div>
    </div>
    <div class="write-field">
      <label>구매 상품</label>
      <select>
        <option>PDRN EGF Origin Rejuvenating Cream</option>
        <option>PDRN EGF Origin Rejuvenating Mask</option>
        <option>PDRN EGF Origin Sun Cream</option>
        <option>Signature Gift Set</option>
      </select>
    </div>
    <div class="write-field">
      <label>제목</label>
      <input type="text" placeholder="한 줄 요약을 작성해주세요" />
    </div>
    <div class="write-field">
      <label>본문</label>
      <textarea rows="5" placeholder="피부 타입, 사용 기간, 변화 등을 자유롭게 작성해주세요."></textarea>
    </div>
    <div class="write-modal__actions">
      <button type="button" class="btn btn--cart" id="w-cancel" style="background:#fff;">취소</button>
      <button type="button" class="btn btn--primary" id="w-submit">등록하기</button>
    </div>
  `);
  /* star rating */
  const stars = document.querySelectorAll('#w-stars button');
  stars.forEach(s => s.addEventListener('click', () => {
    const n = +s.dataset.star;
    stars.forEach(x => x.classList.toggle('is-active', +x.dataset.star <= n));
  }));
  document.getElementById('w-cancel')?.addEventListener('click', closeModal);
  document.getElementById('w-submit')?.addEventListener('click', () => {
    closeModal();
    window.toast?.('리뷰가 등록되었어요. 검수 후 노출됩니다.');
  });
};

/* Auto-load cart module (badge + add-to-cart helpers) */
if (!document.querySelector('script[src="cart.js"]')){
  const s = document.createElement('script');
  s.src = 'cart.js';
  document.body.appendChild(s);
}

/* Inject scroll-to-top button on every page */
const topBtn = document.createElement('button');
topBtn.className = 'top-btn';
topBtn.setAttribute('aria-label', '맨 위로');
topBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.body.appendChild(topBtn);

/* Mobile nav toggle + scroll state — works on every page */
(function(){
  const toggle = document.querySelector('.nav-toggle');
  toggle?.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav--left a').forEach(a =>
    a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle?.setAttribute('aria-expanded', 'false');
    })
  );

  const header = document.querySelector('.header');
  const announce = document.querySelector('.announce');
  const top = document.querySelector('.top-btn');
  const setScrollState = () => {
    const scrolled = window.scrollY > 32;
    header?.setAttribute('data-state', scrolled ? 'scrolled' : 'top');
    announce?.classList.toggle('is-hidden', scrolled);
    top?.classList.toggle('is-visible', window.scrollY > 480);
  };
  setScrollState();
  window.addEventListener('scroll', setScrollState, { passive: true });
})();
