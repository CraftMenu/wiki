# CraftMenu 기능

## 목차
1. [통합 사운드 시스템](#통합-사운드-시스템)
2. [위젯 이벤트](#위젯-이벤트)
3. [상태 시스템](#상태-시스템)
4. [설정 가능한 경계 피드백](#설정-가능한-경계-피드백)
5. [특수 명령어](#특수-명령어)

---

## 통합 사운드 시스템

모든 사운드 필드는 두 가지 유형을 지원합니다:

### 마인크래프트 사운드

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # 마인크래프트 기본 사운드
  volume: 0.8
  pitch: 1.0
```

**마인크래프트 사운드 예시**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### 커스텀 사운드 (리소스팩)

```yaml
- action: sound
  file: "template/click.ogg"         # 자동으로 해석됨
  # 또는
  file: "craftmenu:template/click"   # 네임스페이스 명시
  volume: 1.0
  pitch: 1.2
```

**커스텀 사운드 단계**:
1. `/plugins/CraftMenu/sounds/template/click.ogg`에 `.ogg` 파일 추가
2. `/cm zip` 실행
3. 리소스팩에 사운드가 자동으로 포함됨

---

## 위젯 이벤트

### on_menu_open

메뉴가 열릴 때 자동으로 발생합니다. 배경 음악에 유용합니다.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

커서가 위젯 영역에 진입할 때.

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

커서가 위젯 영역을 떠날 때.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

위젯을 클릭할 때.

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (커서 전용)

위젯 외부를 포함한 모든 클릭에서 발생합니다.

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## 상태 시스템

여러 동작을 가진 위젯을 허용합니다 (예: 토글 버튼 on/off).

### 기본 상태

- `normal`: 초기 상태
- `hover`: 마우스가 위젯 위에 있을 때
- `pressed`: 위젯이 클릭됨
- `disabled`: 위젯이 비활성화됨
- `fallback`: 비주얼이 로드되지 않을 때

### 커스텀 상태

자신만의 상태를 만들 수 있습니다:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # 사운드 켜짐
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # 사운드 꺼짐 (커스텀 상태)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # 꺼진 상태에서 호버 (커스텀 상태)
      type: image
      value: template/sound-mute-hover.png
```

### 상태 액션

#### toggle_state

상태 목록 사이를 토글합니다.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # 상태 간 순환
```

#### visual_change_conditional

현재 상태가 X일 때만 비주얼을 변경합니다.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # 상태가 "normal"이면
  to: hover                      # "hover"로 변경
- action: visual_change_conditional
  if_state: disabled            # 상태가 "disabled"이면
  to: disabled_hover             # "disabled_hover"로 변경
```

#### command_conditional

상태가 X일 때만 명령어를 실행합니다.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # "disabled"가 되면
  command: '[STOP_MUSIC]'        # 음악 중지
- action: command_conditional
  if_state: normal              # "normal"이 되면
  command: '[PLAY_MUSIC] template/background.ogg'  # 음악 재생
```

### 완성 예제: 토글 버튼

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

  events:
    on_cursor_hover:
    - action: visual_change_conditional
      if_state: normal
      to: hover
    - action: visual_change_conditional
      if_state: disabled
      to: disabled_hover

    on_cursor_hover_exit:
    - action: visual_change_conditional
      if_state: normal
      to: normal
    - action: visual_change_conditional
      if_state: disabled
      to: disabled

    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## 설정 가능한 경계 피드백

커서가 이동 제한에 도달할 때의 피드백을 사용자 정의합니다.

### 설정

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # 제한에 도달했을 때 사운드
      volume: 0.5                          # 볼륨 0.0-1.0
      pitch: 0.6                           # 피치 0.5-2.0
      message: "&c&l커서 제한에 도달했습니다!" # 액션바 메시지
```

### 권장 사운드

- `minecraft:ui.button.click` - 부드러운 클릭
- `minecraft:block.note_block.bass` - 낮은 음
- `craftmenu:template/warning.ogg` - 커스텀 사운드

---

## 특수 명령어

`action: command`와 함께 사용됩니다.

### [TELEPORT]

플레이어를 텔레포트합니다.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    월드  x   y   z yaw pitch
```

### [MESSAGE]

플레이어에게 메시지를 보냅니다.

```yaml
- action: command
  command: '[MESSAGE] &a게임에 오신 것을 환영합니다!'
  delay: 500  # 전송 전 500ms 대기
```

### [CLOSE]

메뉴를 닫습니다.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # 1초 후 닫기
```

### [PLAY_MUSIC]

위젯용 음악을 재생합니다 (위젯당 하나의 사운드만).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**네임스페이스 지원**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

이 위젯에서 현재 재생 중인 사운드를 중지합니다.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**중요**: `[STOP_MUSIC]`은 이 위젯의 사운드만 중지하며, 다른 위젯이나 글로벌 사운드에는 영향을 주지 않습니다.

**기술 참고**: `player.stopSound(key)`가 커스텀 리소스팩 사운드에서 작동하지 않기 때문에 내부적으로 `player.stopAllSounds()`를 사용합니다. 그러나 특정 위젯에 의해서만 트리거됩니다.

### [OPEN_URL]

플레이어의 브라우저에서 URL을 엽니다 (확인 필요).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## 자동 사운드 중지

**메뉴가 닫힐 때**, 플레이어의 모든 사운드가 자동으로 중지됩니다. 여기에는 다음이 포함됩니다:

- `[PLAY_MUSIC]`을 통해 재생된 배경 음악
- 위젯 호버/클릭 사운드
- 닫히는 시점에 활성화된 모든 사운드

### 작동 방식

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← close() 전에 호출됨
}
menuInstance.close();
```

### 기술적 제한

시스템이 `player.stopAllSounds()`를 사용하는 이유:
- `player.stopSound(key)`는 커스텀 리소스팩 사운드에서 **작동하지 않음**
- `player.stopSound(key, category)`도 **작동하지 않음**
- `stopAllSounds()`가 **유일한 안정적인 해결책**

이는 메뉴를 닫을 때 메뉴 사운드뿐만 아니라 **모든** 플레이어 사운드가 중지됨을 의미합니다. 이것은 CraftMenu가 아닌 Minecraft/Bukkit의 제한입니다.

### 대안: 수동 제어

자동으로 사운드를 중지하지 않으려면 메뉴에서 토글 버튼을 사용하세요:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # 수동으로 음악 중지
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## 비주얼 액션

### visual_change

비주얼 상태를 무조건 변경합니다.

```yaml
- action: visual_change
  to: hover
```

### scale

위젯 크기를 일시적으로 애니메이션합니다.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 크기의 120%
  duration: 300                     # ms 단위 지속 시간
```

### scale_reset

원래 크기로 스케일을 재설정합니다.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

위젯을 완전히 제거합니다 (비주얼, 충돌, 사운드).

```yaml
- action: hide_widget
  widget: fov_warning  # 숨길 위젯 이름
```

**참고**: 숨겨진 위젯은 메뉴를 다시 열지 않으면 복구할 수 없습니다.

---

## 완성 예제: 모든 기능이 포함된 메뉴

```yaml
menu:
  name: complete_example
  title: '&b&l완성 메뉴 예제'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &c커서가 가장자리에 도달했습니다!"

  widgets:
    # 배경 음악이 있는 버튼
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # 완전한 피드백이 있는 액션 버튼
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &a게임을 시작합니다...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # 사운드 피드백이 있는 커서
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
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
          volume: 0.4
          pitch: 1.0
```

---

최종 업데이트: 2026-02-02
플러그인 버전: 2.0
