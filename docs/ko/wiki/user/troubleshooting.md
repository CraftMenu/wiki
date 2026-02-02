# 문제 해결

CraftMenu의 일반적인 문제와 해결 방법입니다.

## 이미지가 표시되지 않음

**증상:** 이미지가 "?" 또는 누락된 문자로 표시됩니다.

**해결 방법:**

1. **리소스팩 재생성:**
   ```
   /cm paekij
   ```

2. **이미지 위치 확인:**
   - 이미지는 하위 폴더에 있어야 합니다: `plugins/CraftMenu/images/folder/image.png`
   - 루트에 있으면 안 됩니다: `plugins/CraftMenu/images/image.png`

3. **이미지 형식 확인:**
   - PNG 파일만 지원됩니다
   - 올바른 파일 확장자 확인 (`.png`, `.PNG` 아님)

4. **리소스팩이 로드되었는지 확인:**
   - 서버 리소스팩이 구성되어야 합니다
   - 플레이어가 리소스팩을 수락해야 합니다

5. **플러그인 리로드:**
   ```
   /cm jaelodeu
   ```

## 메뉴가 열리지 않음

**증상:** `/cm yeolda` 명령어가 아무 반응이 없습니다.

**해결 방법:**

1. **메뉴 존재 확인:**
   ```
   /cm mogrok
   ```

2. 명령어 실행 후 **콘솔에서 오류 확인**

3. **YAML 구문 확인:**
   - YAML 검증기 사용
   - 잘못된 들여쓰기 확인

4. **스폰 위치가 유효한지 확인:**
   - 월드가 로드되어야 함
   - 위치에 접근 가능해야 함

## 충돌이 작동하지 않음

**증상:** 커서가 위젯을 감지하지 못합니다.

**해결 방법:**

1. **디버그 파티클 활성화:**
   ```
   /debugcollision toggle
   ```

2. **충돌 설정 확인:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. 너무 작으면 **충돌 박스 크기 증가**

4. **위젯 위치 확인** - 충돌이 오프셋될 수 있음

## 사운드가 재생되지 않음

**증상:** 사운드 액션이 효과가 없습니다.

**해결 방법:**

1. **커스텀 사운드의 경우:**
   - `.ogg` 파일을 `plugins/CraftMenu/sounds/folder/`에 넣기
   - 리소스팩 재생성: `/cm paekij`

2. **마인크래프트 사운드의 경우:**
   - 올바른 형식 사용: `minecraft:ui.button.click`

3. 액션 설정에서 **볼륨 설정 확인**

## 성능 문제

**증상:** 메뉴 사용 시 랙이 발생합니다.

**해결 방법:**

1. **이미지 최적화:**
   ```
   /cm imiji scan
   /cm imiji fix --backup
   ```

2. 복잡한 메뉴에서 **애니메이션 빈도 줄이기**

3. **디버그 모드 비활성화:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **업데이트 간격 증가:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## 플러그인이 로드되지 않음

**증상:** 시작 시 플러그인이 오류를 표시합니다.

**해결 방법:**

1. **Java 버전 확인:**
   - Java 17 이상 필요

2. **의존성 확인:**
   - PacketEvents가 설치되어야 함

3. **서버 버전 확인:**
   - Minecraft 1.20.4+ 필요

4. 특정 오류에 대해 **시작 로그 검토**

5. **복구 시도:**
   ```
   /cm bogwon
   ```

## YAML 오류

**증상:** YAML 파싱 오류가 언급됩니다.

**일반적인 문제:**

1. **잘못된 들여쓰기:**
   ```yaml
   # 틀림
   widgets:
   my_widget:
     type: IMAGE

   # 맞음
   widgets:
     my_widget:
       type: IMAGE
   ```

2. **특수 값에 따옴표 누락:**
   ```yaml
   # 틀림 - &는 특수 의미가 있음
   title: &bHello

   # 맞음
   title: "&bHello"
   ```

3. **잘못된 리스트 형식:**
   ```yaml
   # 틀림
   events:
     on_cursor_click:
       action: sound

   # 맞음
   events:
     on_cursor_click:
       - action: sound
   ```

## 도움 받기

여전히 문제가 있다면:

1. 디버그 모드 활성화 후 콘솔 출력 확인
2. GitHub issues에서 알려진 문제 확인
3. 다음 정보와 함께 새 이슈 생성:
   - 서버 버전
   - 플러그인 버전
   - 콘솔 로그
   - 설정 파일 (민감한 데이터 제거)
