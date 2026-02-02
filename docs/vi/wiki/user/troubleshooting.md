# Xu Ly Su Co

Cac van de thuong gap va giai phap cho CraftMenu.

## Hinh Anh Khong Hien Thi

**Trieu Chung:** Hinh anh hien thi la "?" hoac ky tu bi thieu.

**Giai Phap:**

1. **Tao lai resource pack:**
   ```
   /cm goi
   ```

2. **Kiem tra vi tri hinh anh:**
   - Hinh anh phai o trong thu muc con: `plugins/CraftMenu/images/folder/image.png`
   - KHONG duoc o thu muc goc: `plugins/CraftMenu/images/image.png`

3. **Xac nhan dinh dang hinh anh:**
   - Chi ho tro file PNG
   - Dam bao phan mo rong dung (`.png`, khong phai `.PNG`)

4. **Kiem tra resource pack da tai:**
   - Resource pack server phai duoc cau hinh
   - Nguoi choi phai chap nhan resource pack

5. **Tai lai plugin:**
   ```
   /cm tailai
   ```

## Menu Khong Mo

**Trieu Chung:** Lenh `/cm mo` khong co tac dung.

**Giai Phap:**

1. **Kiem tra menu ton tai:**
   ```
   /cm danhsach
   ```

2. **Kiem tra console de xem loi** sau khi chay lenh

3. **Xac minh cu phap YAML:**
   - Su dung trinh xac thuc YAML
   - Kiem tra thua le khong dung

4. **Dam bao vi tri spawn hop le:**
   - The gioi phai duoc tai
   - Vi tri phai co the truy cap

## Va Cham Khong Hoat Dong

**Trieu Chung:** Con tro khong phat hien widget.

**Giai Phap:**

1. **Bat hat debug:**
   ```
   /debugcollision batat
   ```

2. **Kiem tra cau hinh collision:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Tang kich thuoc hop collision** neu qua nho

4. **Kiem tra vi tri widget** - collision co the bi lech

## Am Thanh Khong Phat

**Trieu Chung:** Hanh dong sound khong co hieu ung.

**Giai Phap:**

1. **Cho am thanh tuy chinh:**
   - Dat file `.ogg` trong `plugins/CraftMenu/sounds/folder/`
   - Tao lai resource pack: `/cm goi`

2. **Cho am thanh Minecraft:**
   - Su dung dinh dang dung: `minecraft:ui.button.click`

3. **Kiem tra cai dat volume** trong cau hinh action

## Van De Hieu Suat

**Trieu Chung:** Lag khi su dung menu.

**Giai Phap:**

1. **Toi uu hinh anh:**
   ```
   /cm hinhanh quet
   /cm hinhanh suachua --backup
   ```

2. **Giam tan suat animation** trong menu phuc tap

3. **Tat che do debug:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Tang khoang thoi gian cap nhat:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Plugin Khong Tai

**Trieu Chung:** Plugin hien thi loi khi khoi dong.

**Giai Phap:**

1. **Kiem tra phien ban Java:**
   - Yeu cau Java 17 hoac cao hon

2. **Xac minh cac dependency:**
   - PacketEvents phai duoc cai dat

3. **Kiem tra phien ban server:**
   - Yeu cau Minecraft 1.20.4+

4. **Xem xet log khoi dong** de tim loi cu the

5. **Thu khoi phuc:**
   ```
   /cm phoihoi
   ```

## Loi YAML

**Trieu Chung:** Loi de cap den phan tich cu phap YAML.

**Van De Thuong Gap:**

1. **Thua le khong dung:**
   ```yaml
   # Sai
   widgets:
   widget_cua_toi:
     type: IMAGE

   # Dung
   widgets:
     widget_cua_toi:
       type: IMAGE
   ```

2. **Thieu dau ngoac kep quanh gia tri dac biet:**
   ```yaml
   # Sai - & co y nghia dac biet
   title: &bXin chao

   # Dung
   title: "&bXin chao"
   ```

3. **Dinh dang danh sach khong dung:**
   ```yaml
   # Sai
   events:
     on_cursor_click:
       action: sound

   # Dung
   events:
     on_cursor_click:
       - action: sound
   ```

## Nhan Tro Giup

Neu ban van gap van de:

1. Bat che do debug va kiem tra output console
2. Kiem tra cac issue tren GitHub de tim van de da biet
3. Tao issue moi voi:
   - Phien ban server
   - Phien ban plugin
   - Log console
   - File cau hinh (xoa du lieu nhay cam)
