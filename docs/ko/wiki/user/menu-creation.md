# 메뉴 생성

이 가이드는 CraftMenu에서 사용자 정의 메뉴를 생성하는 방법을 다룹니다.

## 메뉴 구조

메뉴는 `plugins/CraftMenu/menus/`의 YAML 파일에 정의됩니다.

### 기본 메뉴 템플릿

```yaml
menu:
  name: my_menu
  title: "&b&l내 커스텀 메뉴"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # 위젯 정의는 여기에
```

## 메뉴 속성

### 기본 속성

| 속성 | 타입 | 설명 |
|-----|------|------|
| `name` | String | 메뉴의 고유 식별자 |
| `title` | String | 표시 제목 (색상 코드 지원) |
| `main` | Boolean | 메인 메뉴인가요? |
| `open-on-join` | Boolean | 플레이어가 월드에 접속할 때 자동 열기 |
| `open-on-teleport` | Boolean | 플레이어가 월드로 텔레포트할 때 자동 열기 |

### 위치

```yaml
location:
  world: world               # 월드 이름
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # 수평 회전 (-180 ~ 180)
    pitch: 0.0               # 수직 회전 (-90 ~ 90)
```

### 설정

```yaml
settings:
  cursor-sensitivity: 1.0    # 마우스 감도 (1.0 = 기본)
  max-yaw-offset: 61.0       # 수평 한계 (도)
  max-pitch-offset: 36.0     # 수직 한계 (도)
  camera-lock-enabled: true  # 메뉴가 열릴 때 플레이어 카메라 잠금
  camera-lock-strength: 0.4  # 잠금 강도 (0.0-1.0)
```

### 가시성 설정

```yaml
settings:
  visibility:
    hide_players: false      # 다른 플레이어 숨기기
    hide_mobs: false         # 몹 숨기기
    hide_items: false        # 드롭된 아이템 숨기기
    whitelist_players: []    # 계속 보이게 할 플레이어
```

## 위젯 추가

위젯은 메뉴의 대화형 요소입니다.

### 이미지 위젯

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### 텍스트 위젯

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&l환영합니다!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## 명령어로 빠르게 생성

현재 위치에 메뉴를 빠르게 생성하려면 `/cm saengsong <이름>`을 사용하세요.

## 사용자 정의 이미지 추가

1. 폴더 생성: `plugins/CraftMenu/images/my_menu/`
2. PNG 이미지를 이 폴더에 추가
3. `/cm paekij`를 실행하여 리소스팩 재생성
4. `my_menu/image_name.png`로 이미지 참조

## 메뉴 테스트

1. YAML 파일 저장
2. `/cm jaelodeu` 실행
3. `/cm yeolda my_menu` 실행

## 모범 사례

- 하위 폴더를 사용하여 메뉴별로 이미지 정리
- 이미지 크기를 적절하게 유지 (버튼은 최대 128x128)
- 배포 전 메뉴를 철저히 테스트
- 설명적인 위젯 이름 사용
- 복잡한 구성에 주석 추가
