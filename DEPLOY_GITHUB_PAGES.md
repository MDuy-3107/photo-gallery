# Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Cập nhật package.json

Thay đổi `YOUR_GITHUB_USERNAME` trong file `package.json` thành username GitHub của bạn:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/photo-gallery"
```

Ví dụ: Nếu username của bạn là `john-doe`:
```json
"homepage": "https://john-doe.github.io/photo-gallery"
```

## Bước 2: Cài đặt gh-pages

```powershell
npm install
```

## Bước 3: Tạo repository trên GitHub

1. Truy cập https://github.com/new
2. Tạo repository mới tên **`photo-gallery`** (public)
3. **KHÔNG** tích "Initialize with README"

## Bước 4: Push code lên GitHub

```powershell
# Khởi tạo git (nếu chưa có)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Picsum Photo Gallery"

# Thêm remote (thay YOUR_GITHUB_USERNAME bằng username của bạn)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/photo-gallery.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

## Bước 5: Deploy lên GitHub Pages

```powershell
npm run deploy
```

Lệnh này sẽ:
- Build project (tạo folder `dist`)
- Tự động push folder `dist` lên branch `gh-pages`

## Bước 6: Bật GitHub Pages

1. Vào repository trên GitHub
2. Click **Settings** tab
3. Scroll xuống phần **Pages** (bên trái)
4. Trong **Source**, chọn branch `gh-pages`
5. Click **Save**

## Bước 7: Truy cập website

Sau 1-2 phút, website của bạn sẽ live tại:

```
https://YOUR_GITHUB_USERNAME.github.io/photo-gallery
```

## Cập nhật sau này

Mỗi khi thay đổi code và muốn deploy:

```powershell
# Commit changes
git add .
git commit -m "Update features"
git push

# Deploy lên GitHub Pages
npm run deploy
```

## Kiểm tra deployment

- Xem trạng thái: Repository → Actions tab
- Xem website: Settings → Pages → "Your site is live at..."

## Lưu ý

- Đảm bảo repository là **public** (không phải private)
- Nếu gặp lỗi 404, kiểm tra lại `base` trong `vite.config.ts` và `homepage` trong `package.json` phải khớp với tên repository
- GitHub Pages có thể mất vài phút để update sau mỗi lần deploy

## Troubleshooting

### Lỗi: "fatal: not a git repository"
```powershell
git init
```

### Lỗi: Blank page sau khi deploy
Kiểm tra `base` trong `vite.config.ts` phải là `/photo-gallery/`

### Lỗi: 404 Not Found
Đảm bảo branch `gh-pages` đã được chọn trong Settings → Pages
