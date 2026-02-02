# 완전한 애니메이션 가이드 - CraftMenu

이 문서는 CraftMenu에서 사용 가능한 모든 애니메이션 유형과 실용적인 YAML 사용 예제를 제공합니다.

---

## 목차

1. [기본 애니메이션](#기본-애니메이션)
2. [이동 애니메이션](#이동-애니메이션)
3. [고급 애니메이션](#고급-애니메이션)
4. [애니메이션 결합](#애니메이션-결합)
5. [공통 속성](#공통-속성)

---

## 기본 애니메이션

### SCALE - 크기 변경

X, Y, Z 축에서 위젯 크기를 변경합니다.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 원래 크기의 120%
    easing_style: out
```

**속성**:
- `scaleX`: X축 스케일 (기본값: intensity)
- `scaleY`: Y축 스케일 (기본값: intensity)
- `scaleZ`: Z축 스케일 (기본값: intensity)

---

### ROTATE - 회전

X, Y, Z 축을 중심으로 위젯을 회전합니다.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Y축에서 전체 회전
    easing_style: in_out
```

**속성**:
- `rotationX`: X축에서 도 단위 회전
- `rotationY`: Y축에서 도 단위 회전
- `rotationZ`: Z축에서 도 단위 회전

---

### TRANSLATE - 이동

위젯을 새 위치로 이동합니다.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # 블록 단위 변위
    easing_style: out
```

**속성**:
- `offsetX`: X축 변위
- `offsetY`: Y축 변위
- `offsetZ`: Z축 변위

---

### FADE - 페이드 인/아웃

위젯의 불투명도/가시성을 제어합니다.

```yaml
# 페이드 아웃 (사라짐)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = 페이드 아웃, false = 페이드 인
    easing_style: in

# 페이드 인 (나타남)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**속성**:
- `fadeOut`: true면 사라짐, false면 나타남

---

## 이동 애니메이션

### PULSE - 맥동

리듬감 있는 스케일링으로 호흡/심장박동 효과.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # 연속 애니메이션
    easing_style: in_out
```

---

### BOUNCE - 바운스

공이 튀는 물리를 수직으로 시뮬레이션합니다.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # 점프 높이
    easing_style: out
```

---

### SWING - 진자 스윙

진자/스윙 동작.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # 스윙 진폭
    loop: true
    easing_style: in_out
```

---

### FLOAT - 부유

부드러운 수직 상하 이동.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # 부유 높이
    loop: true
    easing_style: in_out
```

---

### SHAKE - 떨림

빠르고 무작위한 진동.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # 진동 강도
    easing_style: linear
```

---

### JIGGLE - 탄성 떨림

탄성 효과가 있는 더 부드럽고 제어된 흔들림.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # 떨림 진폭
    easing_style: out
```

---

## 고급 애니메이션

### SLIDE - 화면 밖에서 슬라이드

위젯이 화면 밖에서 슬라이드하며 들어옵니다.

```yaml
# 왼쪽에서 슬라이드
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # 블록 단위 거리
    easing_style: out

# 위에서 슬라이드
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**속성**:
- `direction`: 진입 방향 (left, right, top, bottom, front, back)
- `distance`: 블록 단위 초기 거리 (기본값: intensity * 2.0)

**일반 사용**: CRITICAL 우선순위로 `on_menu_open` 애니메이션에 이상적.

---

### ZOOM_IN - 오버슈트 진입

0에서 1로 스케일하며 "오버슈트" (과하게 갔다가 돌아옴).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # 1.0으로 돌아오기 전 최대 스케일
    easing_style: out
```

**속성**:
- `overshoot`: 1.0에서 안정화되기 전 최대 스케일 (기본값: 1.2)

**일반 사용**: `on_menu_open`에서 드라마틱한 진입 애니메이션.

---

### SQUEEZE - 압축 효과

한 축을 납작하게 하면서 다른 축을 확장합니다.

```yaml
# 수평 압축
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # 압축 강도
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# 수직 압축
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**속성**:
- `axis`: 압축할 축 (x, y, z)
- `intensity`: 압축 강도

---

### FLIP - 180도 회전

특정 축에서 180도 회전.

```yaml
# 수직 뒤집기 (카드 뒤집기처럼)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# 수평 뒤집기
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**속성**:
- `axis`: 회전 축 (x, y, z)

**일반 사용**: 상태 전환, 대체 콘텐츠 공개.

---

### WOBBLE - 젤리 스윙

좌우로 "젤리" 스타일 스윙.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # 스윙 강도
    loop: true
    easing_style: in_out
```

**일반 사용**: 주목 애니메이션, 호버 피드백.

---

### ORBIT - 궤도 운동

위젯이 중심점 주위를 원형으로 공전합니다.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # 블록 단위 궤도 반경
    speed: 1.0  # 속도 배율
    loop: true
    easing_style: linear
```

**속성**:
- `radius`: 궤도 반경 (기본값: intensity * 0.5)
- `speed`: 회전 속도 (기본값: 1.0)

**일반 사용**: 장식용 배경 애니메이션.

---

### SPIRAL - 나선 운동

회전과 원형 움직임을 결합합니다.

```yaml
# 시계방향 나선
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # 나선 반경
    clockwise: true  # 시계방향
    loop: true
    easing_style: linear

# 반시계방향 나선
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**속성**:
- `radius`: 나선 반경 (기본값: intensity * 0.3)
- `clockwise`: 이동 방향 (true/false)

---

### WAVE - 파동 운동

사인 함수를 사용한 부드러운 파동.

```yaml
# 수평 파동
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # 파동 진폭
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# 수직 파동
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**속성**:
- `axis`: 파동 방향 (horizontal, vertical)

---

### GLOW - 맥동하는 발광

미묘한 맥동과 불투명도 변화를 결합합니다.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # 발광 강도
    loop: true
    easing_style: in_out
```

**일반 사용**: 중요한 요소 강조, 주목 표시기.

---

## 애니메이션 결합

여러 애니메이션을 순차적으로 또는 동시에 결합할 수 있습니다.

### 예제 1: 드라마틱한 진입

```yaml
on_menu_open:
  # 1. 왼쪽에서 슬라이드
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - 다음 액션 차단
      easing_style: out

  # 2. 오버슈트로 줌 (슬라이드 후 실행)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. 연속 부유 (줌 후 시작)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### 예제 2: 복잡한 인터랙티브 버튼

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # 호버 사운드
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # 비주얼 변경
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # 미묘한 맥동
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # 비주얼 복원
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # 클릭 사운드
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # 애니메이션 시퀀스
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # 명령어 (애니메이션 후 실행)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### 예제 3: 여러 애니메이션이 있는 장식 위젯

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # 원형 궤도
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # 궤도를 도는 동안 회전
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # 맥동하는 발광
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## 공통 속성

모든 애니메이션은 다음 속성을 지원합니다:

### type
액션 유형 (항상 `animation`).

### effect
애니메이션 이름 (scale, rotate, pulse 등).

### duration
밀리초 단위 지속 시간.

```yaml
duration: 1000  # 1초
```

### intensity
일반 애니메이션 강도 (의미는 유형에 따라 다름).

```yaml
intensity: 0.5  # 기본 강도의 절반
```

### loop
애니메이션이 무한 반복되어야 하는지 여부.

```yaml
loop: true  # 연속 애니메이션
loop: false # 단일 애니메이션 (기본값)
```

### delay
애니메이션 시작 전 지연 (ms 단위).

```yaml
delay: 500  # 시작 전 500ms 대기
```

### easing_style
애니메이션 부드러움을 위한 이징 유형.

```yaml
easing_style: linear      # 일정한 속도
easing_style: in          # 시작 시 가속
easing_style: out         # 끝에서 감속
easing_style: in_out      # 가속 및 감속
```

### priority
애니메이션 우선순위 (중단에 영향).

```yaml
priority: true   # CRITICAL - 중단되지 않음, 다음 액션 차단
priority: false  # INTERRUPTIBLE - 중단 가능 (기본값)
```

**참고**: 연속 애니메이션 (`loop: true`)은 항상 BACKGROUND 우선순위입니다.

---

## 컨텍스트별 사용 가이드

### on_menu_open용 애니메이션

```yaml
on_menu_open:
  - effect: slide       # 슬라이드 진입
  - effect: zoom_in     # 오버슈트 진입
  - effect: fade        # 부드러운 페이드 인
```

### on_cursor_hover용 애니메이션

```yaml
on_cursor_hover:
  - effect: scale       # 크기 증가
  - effect: pulse       # 부드럽게 맥동
  - effect: glow        # 강조 발광
  - effect: wobble      # 주목 스윙
```

### on_cursor_click용 애니메이션

```yaml
on_cursor_click:
  - effect: squeeze     # 압력 피드백
  - effect: bounce      # 확인 점프
  - effect: shake       # 충격 떨림
  - effect: flip        # 뒤집기/공개
```

### 연속 애니메이션 (장식)

```yaml
continuous-animations:
  - effect: float       # 부드러운 부유
  - effect: rotate      # 일정한 회전
  - effect: orbit       # 궤도 운동
  - effect: spiral      # 장식용 나선
  - effect: wave        # 파동 운동
  - effect: glow        # 맥동하는 발광
```

---

## 빠른 참조 표

| 애니메이션 | 유형 | 주요 사용 | 루프? | 기본 우선순위 |
|-----------|------|----------|-------|---------------|
| SCALE | 변환 | 호버, 클릭 | 아니오 | INTERRUPTIBLE |
| ROTATE | 변환 | 장식 | 예 | BACKGROUND |
| TRANSLATE | 변환 | 이동 | 아니오 | CRITICAL |
| PULSE | 이동 | 연속 | 예 | BACKGROUND |
| BOUNCE | 이동 | 클릭 | 아니오 | INTERRUPTIBLE |
| SWING | 이동 | 호버 | 예 | INTERRUPTIBLE |
| FLOAT | 이동 | 연속 | 예 | BACKGROUND |
| SHAKE | 이동 | 클릭 | 아니오 | INTERRUPTIBLE |
| FADE | 비주얼 | 진입/퇴장 | 아니오 | CRITICAL |
| SLIDE | 고급 | 진입 | 아니오 | CRITICAL |
| ZOOM_IN | 고급 | 진입 | 아니오 | CRITICAL |
| SQUEEZE | 고급 | 클릭 | 아니오/예 | INTERRUPTIBLE |
| FLIP | 고급 | 상태 | 아니오 | CRITICAL |
| WOBBLE | 고급 | 호버 | 예 | BACKGROUND |
| ORBIT | 고급 | 장식 | 예 | BACKGROUND |
| SPIRAL | 고급 | 장식 | 예 | BACKGROUND |
| WAVE | 고급 | 장식 | 예 | BACKGROUND |
| JIGGLE | 고급 | 호버 | 아니오 | INTERRUPTIBLE |
| GLOW | 고급 | 강조 | 예 | BACKGROUND |

---

**최종 업데이트**: 2025-10-15
**플러그인 버전**: 2.0
**작성자**: Zodunix
