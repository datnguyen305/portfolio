# Nguyen Tien Dat — Portfolio

Bản xuất ngày 26/10/2026. Website HTML/CSS/JavaScript tĩnh, không cần backend, database hay build.
Chỉ còn project MandarinFlow; đã bao gồm PDF, hình ảnh, animation, Exploration, checklist và bản sửa cuộn bản đồ.

## Cấu trúc

- `dist/index.html`: trang portfolio chính, giao diện và nội dung.
- `dist/projects/mandarinflow.html`: trang chi tiết MandarinFlow.
- `dist/projects/detail.js`: animation trang chi tiết.
- `dist/exploration*.js`: bản đồ, khung ảnh địa điểm và checklist.
- `dist/Overall.pdf`, `dist/overall-pages/`: tài liệu và ảnh trang cho reader.
- `dist/projects/`, `dist/exploration/`: ảnh minh họa.
- `vercel.json`: cấu hình Vercel, output `dist`, không chạy build, hỗ trợ URL không có `.html`.

## Cách 1 — Deploy bằng Vercel CLI

Cần Node.js và npm. Giải nén ZIP, mở Terminal tại thư mục có `vercel.json`:

```bash
cd nguyen-tien-dat-portfolio-vercel
npx vercel login
npx vercel --prod
```

Khi được hỏi, tạo project mới hoặc chọn project Vercel của bạn. Dùng thư mục hiện tại (`./`), framework Other, không có Build Command và Output Directory `dist` (đã khai báo trong `vercel.json`).
Sau khi hoàn tất, CLI trả về URL production.
Lần sau sửa file và chạy lại `npx vercel --prod` trong cùng thư mục.

## Cách 2 — GitHub và Vercel dashboard

1. Tạo repository GitHub và đẩy toàn bộ nội dung thư mục này lên, gồm `dist/` và `vercel.json` ở gốc repo. Không chỉ upload file ZIP.
2. Trên Vercel, chọn Add New → Project và import repo.
3. Framework Preset: Other. Root Directory: thư mục chứa `vercel.json` (gốc repo).
4. Output Directory: `dist`. Không cần Build Command, Install Command hoặc biến môi trường.
5. Deploy. Các lần push sau sẽ tự tạo bản deploy theo cấu hình project.

## Xem trước trên máy

```bash
python3 -m http.server 8000 --directory dist
```

Mở http://localhost:8000. Với server Python, dùng `/projects/mandarinflow.html`; URL không đuôi được xử lý bởi Vercel khi deploy.

## Lưu ý về checklist

Dữ liệu checklist dùng localStorage, chỉ lưu trên trình duyệt và theo từng địa chỉ web.
Dấu tích trên tên miền Sites sẽ không tự xuất hiện ở tên miền Vercel. Ảnh và mô tả Hà Nội hiện là nội dung mẫu; dấu tích cá nhân không nằm trong gói code này.

## Nguồn tài nguyên

- Hình ảnh project và PDF: tài nguyên đã có trong portfolio.
- Hình học bản đồ: Natural Earth, https://www.naturalearthdata.com/.
- Ảnh Hà Nội mẫu: Wikimedia Commons. Liên kết ảnh gốc/bản quyền nằm trong khung ảnh địa điểm và `dist/exploration-places.js`.

## Tài liệu Vercel

- https://vercel.com/docs/project-configuration/vercel-json
- https://vercel.com/docs/cli/deploy

Không kèm Git history, thông tin đăng nhập hoặc cấu hình riêng của Sites.
