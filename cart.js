/* Cart store + UI — localStorage based */

const CART_KEY = 'revion_cart';
const SHIPPING_THRESHOLD = 50000;
const SHIPPING_FEE = 3000;

/* Seed cart with 2 items if it has never been initialized */
const SEED_KEY = 'revion_cart_seeded';
const DEFAULT_ITEMS = [
  {
    id: 'cream-50',
    name: 'REVION rx PDRN EGF Origin Rejuvenating Cream',
    option: '50ml',
    image: 'images/product-cream-1.webp',
    price: 45000,
    qty: 1,
  },
  {
    id: 'mask-pack',
    name: 'REVION rx PDRN EGF Origin Rejuvenating Mask',
    option: '25ml × 4매',
    image: 'images/product-cream-2.webp',
    price: 45000,
    qty: 1,
  },
];
if (!localStorage.getItem(SEED_KEY)){
  localStorage.setItem(CART_KEY, JSON.stringify(DEFAULT_ITEMS));
  localStorage.setItem(SEED_KEY, '1');
}

const cart = {
  read(){
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
    catch { return []; }
  },
  write(items){
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    cart.updateBadge();
  },
  add(item){
    const items = cart.read();
    const i = items.findIndex(x => x.id === item.id);
    if (i >= 0) items[i].qty += item.qty;
    else items.push(item);
    cart.write(items);
  },
  updateQty(id, qty){
    const items = cart.read();
    const i = items.findIndex(x => x.id === id);
    if (i < 0) return;
    items[i].qty = Math.max(1, Math.min(99, qty));
    cart.write(items);
  },
  remove(id){
    cart.write(cart.read().filter(x => x.id !== id));
  },
  count(){
    return cart.read().reduce((s, x) => s + x.qty, 0);
  },
  subtotal(){
    return cart.read().reduce((s, x) => s + x.price * x.qty, 0);
  },
  updateBadge(){
    const n = cart.count();
    document.querySelectorAll('.cart em').forEach(el => el.textContent = n);
  },
};

/* Toast */
function toast(message, link){
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = link
    ? `<span>${message}</span><a href="${link}">장바구니 보기 →</a>`
    : `<span>${message}</span>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('is-visible'));
  setTimeout(() => {
    el.classList.remove('is-visible');
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

/* Render cart page if present */
function renderCartPage(){
  const list  = document.getElementById('cart-list');
  const empty = document.getElementById('cart-empty');
  if (!list) return;

  const items = cart.read();
  if (items.length === 0){
    list.hidden = true;
    empty.hidden = false;
    updateSummary(0, 0);
    return;
  }
  list.hidden = false;
  empty.hidden = true;

  list.innerHTML = items.map(it => `
    <div class="cart-item" data-id="${it.id}">
      <input type="checkbox" checked />
      <div class="cart-item__img"><img src="${it.image}" alt="" /></div>
      <div class="cart-item__info">
        <h3>${it.name}</h3>
        <p>${it.option || ''}</p>
      </div>
      <div class="cart-item__qty">
        <button type="button" data-act="dec" aria-label="수량 감소">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>
        </button>
        <input type="number" value="${it.qty}" min="1" max="99" />
        <button type="button" data-act="inc" aria-label="수량 증가">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
      <div class="cart-item__price">${(it.price * it.qty).toLocaleString('ko-KR')}원</div>
      <button type="button" class="cart-item__remove" data-act="remove" aria-label="삭제">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>
  `).join('');

  // Bind interactions
  list.querySelectorAll('.cart-item').forEach(row => {
    const id = row.dataset.id;
    row.querySelector('[data-act="dec"]')?.addEventListener('click', () => {
      const item = cart.read().find(x => x.id === id);
      cart.updateQty(id, (item?.qty || 1) - 1);
      renderCartPage();
    });
    row.querySelector('[data-act="inc"]')?.addEventListener('click', () => {
      const item = cart.read().find(x => x.id === id);
      cart.updateQty(id, (item?.qty || 1) + 1);
      renderCartPage();
    });
    row.querySelector('input[type="number"]')?.addEventListener('input', e => {
      cart.updateQty(id, parseInt(e.target.value || 1, 10));
      renderCartPage();
    });
    row.querySelector('[data-act="remove"]')?.addEventListener('click', () => {
      cart.remove(id);
      renderCartPage();
    });
  });

  const subtotal = cart.subtotal();
  const shipping = subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  updateSummary(subtotal, shipping);
}

function updateSummary(subtotal, shipping){
  const fmt = n => `${n.toLocaleString('ko-KR')}원`;
  const el = (id) => document.getElementById(id);
  if (!el('sum-subtotal')) return;
  el('sum-subtotal').textContent = fmt(subtotal);
  el('sum-shipping').textContent = subtotal === 0 ? '0원'
    : (shipping === 0 ? '무료' : fmt(shipping));
  el('sum-discount').textContent = '-0원';
  el('sum-total').textContent    = fmt(subtotal + shipping);
}

function initCart(){
  cart.updateBadge();
  renderCartPage();
}
if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initCart);
} else {
  initCart();
}

window.cart = cart;
window.toast = toast;
