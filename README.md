# REVION ℞ — 약사가 처방하는 더마 코스메틱

baropharm 디자인팀 프로토타입을 베이스로, Figma에서 작업한 3종 상세페이지를
얹어본 정적 사이트.

## 페이지

| URL | 설명 |
|---|---|
| `index.html` | 메인 (히어로 슬라이드 / SIGNATURE 컬렉션 / 베스트셀러 / 인스타) |
| `about.html` | 브랜드 스토리 |
| `shop.html` | 상품 리스트 |
| `product.html` | **상세 · Cream** (Origin Rejuvenating Cream) |
| `mask.html` | **상세 · Mask** (Origin Rejuvenating Mask, 신규) |
| `sunscreen.html` | **상세 · Sun Cream** (Origin Rejuvenating Moisture Sun Cream, 신규) |
| `pharmacy.html` | 약국 찾기 |
| `event.html` | 이벤트 |
| `community.html` | 커뮤니티 |
| `cart.html` | 장바구니 |
| `login.html` / `join.html` | 로그인 / 회원가입 |

`index.html` 상단 SIGNATURE COLLECTION 카드 3개는 각 제품 상세로 연결됩니다.

## 기술 스택

- 정적 HTML / CSS / Vanilla JS
- 폰트: Pretendard Variable
- 아이콘: 인라인 SVG
- `partials.js` — 헤더/푸터/마퀴/모달 공통 컴포넌트
- `cart.js` — localStorage 기반 장바구니

## 로컬 실행

```bash
python3 -m http.server 4567
# http://localhost:4567
```

## 출처

- 디자인 베이스: 디자인팀 프로토타입 (chacha-baropharm/revion-rx)
- 상세페이지 카피: Figma EN_Copy_* 작업을 한국어로 재구성 (Mask / Sunscreen)
