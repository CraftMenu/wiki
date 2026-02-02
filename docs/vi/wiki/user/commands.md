# Tham Khao Lenh

CraftMenu cung cap mot bo lenh day du de quan ly menu.

## Lenh Co Ban

Tat ca cac lenh su dung `/craftmenu` (bi danh: `/cm`).

## Cac Lenh Chung

### Tro Giup
```
/cm trogiup [lenh]
```
Hien thi thong tin tro giup cho tat ca cac lenh hoac mot lenh cu the.

### Danh Sach Menu
```
/cm danhsach
```
Liet ke tat ca cac template menu da tai.

### Thong Tin Plugin
```
/cm thongtin
```
Hien thi phien ban plugin va thong ke.

## Cac Lenh Menu

### Mo Menu
```
/cm mo <ten_menu> [nguoi_choi]
```
Mo menu cho chinh ban hoac nguoi choi khac.

**Vi du:**
- `/cm mo template` - Mo menu template cho chinh ban
- `/cm mo lobby Steve` - Mo menu lobby cho nguoi choi Steve

### Dong Menu
```
/cm dong [nguoi_choi]
```
Dong menu dang hoat dong cho chinh ban hoac nguoi choi khac.

### Tao Menu
```
/cm tao <ten_menu>
```
Tao template menu moi tai vi tri hien tai cua ban.

### Xoa Menu
```
/cm xoa <ten_menu>
```
Xoa template menu.

## Cac Lenh Resource Pack

### Tao Resource Pack
```
/cm goi
```
Tao resource pack tu hinh anh va am thanh trong thu muc CraftMenu.

### Cac Lenh Hinh Anh
```
/cm hinhanh quet
/cm hinhanh suachua [--backup]
/cm hinhanh resize <duong_dan_hinh_anh> <kich_thuoc_muc_tieu>
/cm hinhanh saoluu
/cm hinhanh khoiphuc <ten_ban_sao_luu>
/cm hinhanh danhsach
/cm hinhanh cosaoluu
```
- `quet` - Quet tim hinh anh qua kich thuoc
- `suachua` - Tu dong toi uu hinh anh qua kich thuoc
- `resize` - Thay doi kich thuoc mot hinh anh cu the (16-4096 pixel)
- `saoluu` - Tao ban sao luu cua hinh anh
- `khoiphuc` - Khoi phuc hinh anh tu ban sao luu
- `danhsach` - Liet ke tat ca hinh anh trong thu muc images
- `cosaoluu` - Liet ke tat ca cac ban sao luu kha dung

## Cac Lenh Cau Hinh

### Tai Lai
```
/cm tailai
```
Tai lai tat ca cau hinh va template menu.

### Ngon Ngu
```
/cm ngonngu <ngon_ngu>
/cm ngonngu danhsach
```
Thay doi ngon ngu plugin. Khong can "dat" nua - chi can dung `/cm ngonngu <ngon_ngu>`.

- `/cm ngonngu <ngon_ngu>` - Dat ngon ngu duoc chi dinh
- `/cm ngonngu danhsach` - Liet ke tat ca cac ngon ngu kha dung

Cac ngon ngu kha dung:
- `en_US` - Tieng Anh
- `pt_BR` - Tieng Bo Dao Nha (Brazil)
- `es_ES` - Tieng Tay Ban Nha
- `fr_FR` - Tieng Phap
- `de_DE` - Tieng Duc
- `it_IT` - Tieng Y
- `nl_NL` - Tieng Ha Lan
- `ru_RU` - Tieng Nga
- `pl_PL` - Tieng Ba Lan
- `tr_TR` - Tieng Tho Nhi Ky
- `uk_UA` - Tieng Ukraine
- `ar_SA` - Tieng A Rap
- `ja_JP` - Tieng Nhat
- `ko_KR` - Tieng Han
- `zh_CN` - Tieng Trung (Gian the)
- `hi_IN` - Tieng Hindi
- `id_ID` - Tieng Indonesia
- `th_TH` - Tieng Thai
- `vi_VN` - Tieng Viet

## Cac Lenh Debug

### Debug Hat Bi
```
/cm golo hatbi
/cm golo hatbi kich_thuoc <gia_tri>
```
- `/cm golo hatbi` - Bat/tat tat ca cac hat debug (va cham, con tro, tam)
- `/cm golo hatbi kich_thuoc <gia_tri>` - Dat kich thuoc hat (0.001 den 2.0)

### Debug Luoi
```
/cm golo luoi
/cm golo luoi so
```
- `/cm golo luoi` - Bat/tat hien thi luoi
- `/cm golo luoi so` - Bat/tat hien thi so luoi

### Kiem Tra Suc Khoe
```
/cm suckhoe
```
Hien thi trang thai suc khoe cac thanh phan.

### Khoi Phuc
```
/cm phoihoi
```
Co gang khoi phuc tu cac loi.

## Lenh Editor

Mo trinh chinh sua hinh anh trong game cho menu va widget.

### Mo Editor
```
/cm editor
/cm editor <ten_menu>
```
- `/cm editor` - Mo trang chinh cua editor
- `/cm editor <ten_menu>` - Mo editor cho mot menu cu the

**Quyen Can Thiet:** `craftmenu.admin`

## Quyen

| Quyen | Mo Ta |
|-------|-------|
| `craftmenu.use` | Su dung co ban (mo menu) |
| `craftmenu.admin` | Cac lenh quan tri |
| `craftmenu.open` | Mo menu |
| `craftmenu.create` | Tao menu |
| `craftmenu.reload` | Tai lai plugin |
| `craftmenu.debug` | Cac lenh debug |
