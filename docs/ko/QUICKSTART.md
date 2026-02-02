# CraftMenu - 빠른 시작 가이드

## 5분 가이드

이 가이드는 0부터 시작하여 5분 안에 작동하는 메뉴를 만드는 방법을 안내합니다.

---

## 1. 설치 (1분)

1. **다운로드**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (의존성)

2. **설치**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **서버 시작**

4. **확인**:
   ```
   /cm info
   ```

---

## 2. 첫 번째 메뉴 만들기 (2분)

1. **게임 내에서** 원하는 위치로 이동
2. 실행:
   ```
   /cm create mymenu
   ```

3. **메뉴 생성 완료!** 파일 생성 위치:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. 이미지 추가 (1분)

1. **폴더 생성**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **PNG 이미지 추가** (64x64 또는 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **리소스팩 생성**:
   ```
   /cm zip
   ```

---

## 4. 메뉴 설정 (1분)

`/plugins/CraftMenu/menus/mymenu.yml` 편집:

```yaml
menu:
  name: mymenu
  title: '&b&l내 첫 번째 메뉴'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # 생성한 위치
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # 간단한 버튼 (호버/클릭 이벤트가 있는 IMAGE 사용)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← 이미지
        hover:
          type: image
          value: mymenu/button-hover.png # ← 호버 이미지
        fallback:
          type: text
          value: "클릭하세요"               # 이미지 실패 시
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.04, z: 0.02}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        on_cursor_click:
        - action: command
          command: '[MESSAGE] &a버튼을 클릭했습니다!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # 커서
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← 이미지
        fallback:
          type: text
          value: "§f→"
      transform:
        position: {x: 0, y: 0, z: 1.0}
        size: {x: 0.005, y: 0.005, z: 0.005}
      collision-area:
        enabled: true
        size: {x: 0.01, y: 0.01, z: 0.01}
      events:
        on_click_any:
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
```

---

## 5. 테스트

1. **다시 로드**:
   ```
   /cm reload
   ```

2. **메뉴 열기**:
   ```
   /cm open mymenu
   ```

3. **마우스 움직이기**로 커서 제어
4. **클릭**하여 버튼 누르기

---

## 체크리스트

- [ ] 플러그인 설치 및 작동 확인
- [ ] `/cm create`로 메뉴 생성
- [ ] `/images/mymenu/`에 이미지 추가
- [ ] `/cm zip`으로 리소스팩 생성
- [ ] YAML에서 메뉴 설정
- [ ] `/cm open mymenu`로 메뉴 작동 확인
- [ ] 클라이언트에 리소스팩 적용

---

## 일반적인 문제

### "메뉴가 로드되지 않음"

```bash
/cm reload
/cm list  # 메뉴가 표시되는지 확인
```

### 커서가 나타나지 않음

**해결책**: YAML에 커서가 있고 비주얼이 설정되어 있는지 확인

### 이미지가 "?"로 표시됨

```bash
/cm images scan    # 이미지가 발견되었는지 확인
/cm zip            # 리소스팩 재생성
/cm reload         # 다시 로드
```

### 리소스팩이 다운로드되지 않음

플레이어가 해야 할 일:
1. 수동 설치: `/plugins/CraftMenu/craftmenu.zip`을 `.minecraft/resourcepacks/`에 복사
2. 또는 `server.properties`에서 설정 (웹 호스팅 필요)

---

## 다음 단계

1. [메뉴 문서 전체](MENU_CREATION.md)
3. [고급 기능](FEATURES.md)

---

## 유용한 리소스

- **예제 이미지**: "minecraft UI icons" 검색 또는 직접 제작
- **권장 크기**: 64x64, 128x128
- **포맷**: 투명도가 있는 PNG
- **마인크래프트 사운드**: [전체 목록](https://minecraft.fandom.com/wiki/Sounds.json)

---

최종 업데이트: 2026-02-02
