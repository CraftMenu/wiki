# Trình chỉnh sửa trong game

CraftMenu bao gồm một trình chỉnh sửa trực quan mạnh mẽ cho phép bạn cấu hình menu trực tiếp thông qua giao diện kho đồ, mà không cần chỉnh sửa file YAML thủ công.

## Bắt đầu

### Mở trình chỉnh sửa

```
/cm trinh              # Mở hub trình chỉnh sửa chính
/cm trinh <menu>       # Chỉnh sửa menu cụ thể trực tiếp
```

**Quyền yêu cầu:** `craftmenu.admin` hoặc `craftmenu.edit`

### Điều hướng trình chỉnh sửa

Trình chỉnh sửa sử dụng hệ thống **điều hướng dựa trên ngăn xếp**:
- **Nhấp chuột trái** vào các mục để vào menu phụ hoặc chỉnh sửa giá trị
- **Nhấp chuột phải** cho các hành động phụ (xem trước, kiểm tra)
- **Shift + Nhấp chuột trái** để xóa mục (có xác nhận)
- **Mục mũi tên** (nút quay lại) để trở về menu trước
- **Đóng kho đồ** hoặc nhấp ra ngoài để thoát

---

## Menu chính trình chỉnh sửa

Khi bạn chạy `/cm trinh`, bạn sẽ thấy hub trình chỉnh sửa chính với các tùy chọn sau:

| Mục | Mô tả |
|------|-------------|
| **Danh sách Menu** | Duyệt và chỉnh sửa tất cả các menu đã tải |
| **Trình duyệt hình ảnh** | Xem tất cả hình ảnh có sẵn |
| **Trình duyệt âm thanh** | Xem tất cả âm thanh có sẵn |
| **Cấu hình** | Cấu hình plugin toàn cục |

---

## Chỉnh sửa Menu

### Danh sách Menu

Hiển thị tất cả các menu trong thư mục `menus/` của bạn. Nhấp vào menu để mở trình chỉnh sửa.

- **Nhấp chuột trái**: Chỉnh sửa menu
- **Shift + Nhấp chuột trái**: Xóa menu (có xác nhận)
- **Tạo mới**: Thêm menu mới tại vị trí hiện tại của bạn

### Hub hành động Menu

Sau khi chọn menu, bạn sẽ thấy trình chỉnh sửa menu chính với các phần sau:

| Phần | Mô tả |
|---------|-------------|
| **Thuộc tính** | Cài đặt cơ bản (tên, tiêu đề, menu chính, tự động mở) |
| **Vị trí** | Vị trí và góc quay trong thế giới |
| **Bố cục** | Cấu hình bố cục lưới |
| **Phím tắt** | Phím tắt bàn phím |
| **Hiển thị** | Cài đặt ẩn người chơi/mob/vật phẩm |
| **Nâng cao** | Độ nhạy con trỏ, khóa camera, ranh giới |
| **Widget** | Chỉnh sửa các widget trong menu này |

---

## Thuộc tính Menu

Chỉnh sửa thông tin cơ bản của menu:

| Thuộc tính | Mô tả |
|----------|-------------|
| **Tên** | Định danh menu (dùng trong lệnh) |
| **Tiêu đề** | Tiêu đề hiển thị (hỗ trợ mã màu &) |
| **Mô tả** | Mô tả tùy chọn |
| **Menu chính** | Đánh dấu là menu chính |
| **Mở khi tham gia** | Tự động mở khi người chơi vào server |
| **Mở khi dịch chuyển** | Tự động mở khi người chơi dịch chuyển đến thế giới này |
| **Thế giới** | Thế giới nơi menu tồn tại |

### Chỉnh sửa giá trị văn bản

Khi bạn nhấp vào thuộc tính văn bản:
1. Kho đồ đóng lại
2. Lời nhắc xuất hiện trong chat
3. Nhập giá trị mới của bạn trong chat
4. Nhấn Enter để xác nhận (hoặc gõ `cancel` để hủy)

---

## Vị trí Menu

Cấu hình nơi menu xuất hiện trong thế giới:

| Thuộc tính | Mô tả |
|----------|-------------|
| **Thế giới** | Chọn từ các thế giới có sẵn |
| **X / Y / Z** | Tọa độ (nhấp để chỉnh sửa qua chat) |
| **Yaw** | Góc quay ngang (-180 đến 180) |
| **Pitch** | Góc quay dọc (-90 đến 90) |
| **Đặt theo hiện tại** | Sử dụng vị trí/góc quay hiện tại của bạn |

---

## Bố cục Menu (Lưới)

Cấu hình vị trí widget dựa trên lưới:

| Thuộc tính | Mô tả |
|----------|-------------|
| **Bật** | Bật/tắt bố cục lưới |
| **Cột** | Số cột lưới |
| **Hàng** | Số hàng lưới |
| **Khoảng cách X / Y / Z** | Khoảng cách giữa các ô |
| **Căn chỉnh** | Căn chỉnh lưới (CENTER, TOP_LEFT, v.v.) |

Khi bật bố cục lưới, widget sử dụng `grid-position: {row: X, col: Y}` thay vì tọa độ thủ công.

---

## Phím tắt Menu

Cấu hình phím tắt bàn phím:

| Hành động | Mô tả |
|--------|-------------|
| **Thêm phím tắt** | Tạo phím tắt mới |
| **Chỉnh sửa phím tắt** | Sửa đổi phím tắt hiện có |
| **Xóa phím tắt** | Xóa phím tắt |

### Thuộc tính phím tắt

- **Phím**: Phím hoặc tổ hợp (ví dụ: `SHIFT`, `CTRL+E`, `F`)
- **Hành động**: `activate`, `toggle`, hoặc `close`
- **Widget**: Tên widget đích (cho activate/toggle)

---

## Hiển thị Menu

Kiểm soát những gì hiển thị khi menu mở:

| Thuộc tính | Mô tả |
|----------|-------------|
| **Ẩn người chơi** | Ẩn người chơi khác khỏi tầm nhìn |
| **Ẩn mob** | Ẩn tất cả mob |
| **Ẩn vật phẩm** | Ẩn vật phẩm trên mặt đất |
| **Danh sách trắng** | Người chơi vẫn hiển thị (chỉnh sửa danh sách) |

---

## Cài đặt nâng cao

Tinh chỉnh hành vi menu:

| Thuộc tính | Mô tả |
|----------|-------------|
| **Độ nhạy con trỏ** | Tốc độ di chuyển chuột (0.1 - 5.0) |
| **Offset Yaw tối đa** | Ranh giới con trỏ ngang (độ) |
| **Offset Pitch tối đa** | Ranh giới con trỏ dọc (độ) |
| **Bật khóa camera** | Khóa camera người chơi khi menu mở |
| **Độ mạnh khóa camera** | Mức độ khóa camera (0.0 - 1.0) |
| **Âm thanh ranh giới** | Âm thanh khi con trỏ chạm ranh giới |
| **Âm lượng/Cao độ ranh giới** | Thuộc tính âm thanh |
| **Thông báo ranh giới** | Thông báo hiển thị tại ranh giới |

---

## Chỉnh sửa Widget

### Danh sách Widget

Hiển thị tất cả widget trong menu hiện tại:

- **Nhấp chuột trái**: Chỉnh sửa widget
- **Shift + Nhấp chuột trái**: Xóa widget
- **Tạo mới**: Thêm widget mới

### Hub trình chỉnh sửa Widget

Mỗi widget có các phần có thể chỉnh sửa sau:

| Phần | Mô tả |
|---------|-------------|
| **Loại** | IMAGE, TEXT, hoặc CURSOR |
| **Transform** | Vị trí, kích thước, góc quay |
| **Trạng thái hình ảnh** | Giao diện bình thường, hover, nhấn, vô hiệu |
| **Va chạm** | Cấu hình hộp va chạm |
| **Sự kiện** | Sự kiện tương tác và hành động |
| **[Theo loại]** | Tùy chọn bổ sung dựa trên loại widget |

---

## Trình chỉnh sửa Transform

Cấu hình vị trí và kích thước widget:

### Vị trí
- **X**: Vị trí ngang
- **Y**: Vị trí dọc
- **Z**: Vị trí độ sâu

### Kích thước
- **X**: Tỷ lệ chiều rộng
- **Y**: Tỷ lệ chiều cao
- **Z**: Tỷ lệ độ sâu

### Góc quay
- **Pitch**: Quay lên/xuống
- **Yaw**: Quay trái/phải
- **Roll**: Quay nghiêng

**Mẹo**: Nhấp vào bất kỳ giá trị nào để chỉnh sửa qua nhập liệu chat.

---

## Trạng thái hình ảnh

Widget có thể có giao diện khác nhau cho các trạng thái khác nhau:

| Trạng thái | Khi áp dụng |
|-------|--------------|
| **normal** | Trạng thái mặc định |
| **hover** | Con trỏ ở trên widget |
| **pressed** | Widget đang được nhấp |
| **disabled** | Widget không hoạt động |
| **Tùy chỉnh** | Bất kỳ tên trạng thái tùy chỉnh |

### Trình chỉnh sửa trạng thái hình ảnh

Mỗi trạng thái có:

| Thuộc tính | Mô tả |
|----------|-------------|
| **Loại** | `image`, `text`, hoặc `unicode` |
| **Giá trị** | Đường dẫn hình ảnh, nội dung văn bản, hoặc ký tự unicode |
| **Ghi đè** | Ghi đè transform/va chạm/kích thước văn bản tùy chọn |

---

## Trình chỉnh sửa va chạm

Cấu hình vùng có thể nhấp của widget:

| Thuộc tính | Mô tả |
|----------|-------------|
| **Bật** | Bật/tắt phát hiện va chạm |
| **Vị trí X/Y/Z** | Offset tâm hộp va chạm |
| **Kích thước X/Y/Z** | Kích thước hộp va chạm |
| **Offset X/Y/Z** | Offset bổ sung |

**Mẹo**: Sử dụng `/cm golo particles` để hiển thị hộp va chạm trong game.

---

## Trình chỉnh sửa sự kiện

### Loại sự kiện

| Sự kiện | Kích hoạt |
|-------|---------|
| **on_menu_open** | Khi menu mở |
| **on_cursor_hover** | Khi con trỏ vào widget |
| **on_cursor_hover_exit** | Khi con trỏ rời widget |
| **on_cursor_click** | Khi widget được nhấp |

### Danh sách hành động

Mỗi sự kiện chứa danh sách các hành động thực hiện theo thứ tự:

- **Nhấp chuột trái**: Chỉnh sửa hành động
- **Shift + Nhấp chuột trái**: Xóa hành động
- **Thêm hành động**: Tạo hành động mới
- **Sắp xếp lại**: Kéo để thay đổi thứ tự thực hiện

---

## Trình chỉnh sửa hành động

Mỗi loại hành động có trình chỉnh sửa chuyên biệt:

### Hành động Animation

| Thuộc tính | Mô tả |
|----------|-------------|
| **Hiệu ứng** | Loại animation (rotate, scale, bounce, v.v.) |
| **Thời lượng** | Độ dài animation tính bằng mili giây |
| **Tỷ lệ X/Y/Z** | Hệ số tỷ lệ (cho animation scale) |
| **Cường độ** | Độ mạnh hiệu ứng (0.1 - 5.0) |
| **Easing** | Hàm thời gian (linear, ease_in, ease_out, v.v.) |
| **Ưu tiên** | Chặn tương tác trong animation |

### Hành động âm thanh

| Thuộc tính | Mô tả |
|----------|-------------|
| **File** | Đường dẫn âm thanh (minecraft:... hoặc đường dẫn tùy chỉnh) |
| **Âm lượng** | Âm lượng (0.0 - 1.0) |
| **Cao độ** | Cao độ âm thanh (0.5 - 2.0) |

**Duyệt**: Nhấp để mở trình duyệt âm thanh và chọn âm thanh.

### Hành động lệnh

| Thuộc tính | Mô tả |
|----------|-------------|
| **Lệnh** | Lệnh thực hiện (với lệnh đặc biệt) |
| **Độ trễ** | Độ trễ tính bằng mili giây trước khi thực hiện |

**Lệnh đặc biệt:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aThông báo của bạn ở đây`
- `[CLOSE]`
- `[PLAY_MUSIC] path/file.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /command`
- `[CONSOLE] /command`

### Hành động trạng thái

| Thuộc tính | Mô tả |
|----------|-------------|
| **Loại hành động** | `toggle_state` hoặc `set_state` |
| **Các trạng thái** | Danh sách trạng thái để chuyển đổi (toggle_state) |
| **Trạng thái** | Tên trạng thái đích (set_state) |

### Hành động thay đổi hình ảnh

| Thuộc tính | Mô tả |
|----------|-------------|
| **Đến** | Tên trạng thái hình ảnh đích |

### Hành động Widget

| Thuộc tính | Mô tả |
|----------|-------------|
| **Hành động** | `hide_widget`, `show_widget`, v.v. |
| **Widget** | Tên widget đích |

### Hành động hiệu ứng

| Thuộc tính | Mô tả |
|----------|-------------|
| **Hiệu ứng** | Loại hiệu ứng áp dụng |
| **Tham số** | Tham số cụ thể cho hiệu ứng |

### Hành động dừng Animation

| Thuộc tính | Mô tả |
|----------|-------------|
| **Loại Animation** | Animation cần dừng |

### Hành động dừng hiệu ứng

| Thuộc tính | Mô tả |
|----------|-------------|
| **Loại hiệu ứng** | Hiệu ứng cần dừng |

### Hành động đặt trạng thái cơ sở

| Thuộc tính | Mô tả |
|----------|-------------|
| **Trạng thái** | Trạng thái cơ sở mới cho widget |

---

## Trình duyệt tài nguyên

### Trình duyệt hình ảnh

Duyệt tất cả hình ảnh trong thư mục `images/` của bạn:

- **Phân trang**: Điều hướng qua các trang hình ảnh
- **Xem trước**: Xem đường dẫn hình ảnh và chi tiết
- **Chọn**: Nhấp để sử dụng trong ngữ cảnh hiện tại

Hình ảnh được tổ chức theo thư mục (ví dụ: `template/button.png`).

### Trình duyệt âm thanh

Duyệt tất cả âm thanh trong thư mục `sounds/` của bạn cộng với âm thanh tích hợp của Minecraft:

- **Âm thanh tùy chỉnh**: File .ogg của bạn từ `sounds/`
- **Âm thanh Minecraft**: Âm thanh tích hợp (minecraft:ui.button.click, v.v.)
- **Chọn**: Nhấp để sử dụng trong ngữ cảnh hiện tại

---

## Mẹo và thực hành tốt nhất

### Mẹo quy trình làm việc

1. **Bắt đầu với thuộc tính**: Thiết lập tên, tiêu đề và vị trí trước
2. **Thêm Widget**: Tạo widget với transform cơ bản
3. **Cấu hình hình ảnh**: Thiết lập trạng thái bình thường và hover
4. **Thêm va chạm**: Bật và định kích thước hộp va chạm
5. **Thêm sự kiện**: Cấu hình âm thanh hover và hành động nhấp
6. **Kiểm tra thường xuyên**: Sử dụng `/cm mo <menu>` để kiểm tra thay đổi

### Phím tắt bàn phím

| Phím tắt | Hành động |
|----------|--------|
| **Escape** | Đóng trình chỉnh sửa |
| **Phím số (1-9)** | Chọn slot nhanh |

### Vấn đề thường gặp

**Thay đổi không xuất hiện:**
- Chạy `/cm taiLai` sau khi thực hiện thay đổi
- Đảm bảo bạn đã nhấp "Lưu" trong trình chỉnh sửa

**Va chạm không phát hiện:**
- Kiểm tra va chạm đã được bật
- Xác minh kích thước va chạm đủ lớn
- Sử dụng `/cm golo particles` để hiển thị

**Hình ảnh không hiển thị:**
- Chạy `/cm nen` để tạo lại resource pack
- Đảm bảo hình ảnh nằm trong thư mục con (ví dụ: `images/mymenu/`)
- Áp dụng resource pack cho client

---

## Xem thêm

- [Tham chiếu lệnh](commands.md)
- [Tạo Menu](menu-creation.md)
- [Loại Widget](widgets.md)
- [Hệ thống sự kiện](events.md)
- [Animation](animations.md)
