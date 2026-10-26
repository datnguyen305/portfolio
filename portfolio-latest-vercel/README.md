# Nguyen Tien Dat — Portfolio

Bản xuất mới nhất, 26/10/2026.

- Chỉ giữ project MandarinFlow.
- Có hai bảng màu Original và Soft Pink, lựa chọn được lưu trong trình duyệt.
- Projects: Original dùng bảng màu gốc; Soft Pink dùng đen–hồng.
- Gồm toàn bộ ảnh, PDF, reader, bản đồ và checklist Exploration.

## Deploy Vercel

Giải nén và mở Terminal tại thư mục có `vercel.json`:

```bash
npx vercel login
npx vercel --prod
```

Hoặc đẩy nội dung thư mục này lên GitHub rồi import repository vào Vercel.

Cấu hình:
- Framework Preset: Other.
- Root Directory: thư mục chứa `vercel.json`.
- Output Directory: dist.
- Build Command: để trống.
- Không cần biến môi trường hay database.

Cấu trúc đúng:

```text
vercel.json
dist/
  index.html
  theme.css
  theme-init.js
  theme-switch.js
  projects/
```

Nếu upload thêm thư mục bao ngoài lên GitHub, hãy chọn thư mục đó làm Root Directory. Không upload chỉ file ZIP lên repo.

## Xem trước trên máy

```bash
python3 -m http.server 8000 --directory dist
```

Mở http://localhost:8000. Với server Python, truy cập trang project bằng `/projects/mandarinflow.html`.

## Lưu ý

Checklist và lựa chọn bảng màu dùng localStorage trên từng trình duyệt, theo địa chỉ website. Dữ liệu cá nhân ở tên miền Sites không tự chuyển sang tên miền Vercel.

Hình học bản đồ: Natural Earth (https://www.naturalearthdata.com/). Ảnh Hà Nội mẫu: Wikimedia Commons; liên kết nguồn/bản quyền trong khung ảnh và exploration-places.js.
