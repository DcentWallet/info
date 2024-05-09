# `network-status-list.json` 작성 가이드

'network-status-list.json' 파일은 디센트가 지원하는 다양한 네트워크의 현재 상태를 기록하는 데 사용되며, 네트워크가 여유(light), 원활(moderate), 혼잡(heavy)한지를 알려주기 위한 상태값을 저장합니다.

## 구조 및 작성 방법

1. 각 항목은 다음과 같은 **key-value** 쌍입니다.

   - **key**: 네트워크 이름을 나타냅니다.
   - **value**: 여유(`light`), 원활(`moderate`), 혼잡(`heavy`) 중 하나일 수 있는 네트워크 상태를 나타냅니다.

   ```json
   {
     "network_status": {
       "SOLANA": "heavy",
       "POLYGON": "moderate",
       "ETHEREUM": "light"
     }
   }
   ```

2. `network_status` 객체 내부 하단에 추가하고자 하는 네트워크 이름을 key로, 해당 네트워크의 상태를 value로 사용하여 항목을 추가합니다.

## 가이드라인

1. 네트워크 이름은 코인의 `groupName`을 사용합니다.
2. 상태값으로는 'light', 'moderate', 'heavy'만 사용하세요.
3. 구문 오류를 방지하려면 JSON 형식의 유효성을 검사하세요.
