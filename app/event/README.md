# DCENT APP Event List

D'CENT App에서 Event를 진행하기 위해 필요한 정보를 정의 합니다.

- 페이지 ID를 기준으로 이벤트를 나눠서 정의 합니다.
- 추후에 디센트 앱의 여러 page에서 서로 다른 이벤트가 진행 될 수 있습니다.

### Example

```
{
    "swapComplete": {  //페이지 ID 역할, 이후 다른 페이지에서 동일하게 이벤트 배너를 추가해야 하는 경우 다른 ID로 정의
        "name": "event_swap_complete",  // 임의로 name을 넣었습니다. 추후 이벤트 추적등과 같은 용도로 사용 가능.
        "start": "2025-02-12T09:00:00.000Z", // 시작 시간
        "end": "2025-02-24T09:00:00.000Z", // 종료 시간
        "external": "true", // 링크를 외부 브라우저 연결, false 인 경우에는 discovery tab 으로 이동하여 열기(바로 필요 없음)
        bgColor: "#171719", // 이미지 양 옆 배경 색상
        strokeColor: "#DBDCDF", // 다크테마의 경우 경계가 안 보일 수 있어 stroke 구분선 필요
        "en": { // 영어 정보
            "image": "event_swap_complete_en.png",
            "wideImage": "event_swap_complete_en_wide.png",
            "link": "https://store.dcentwallet.com/"
        },
        "ko": { // 한국어 정보
            "image": "event_swap_complete_ko.png",
            "wideImage": "event_swap_complete_ko_wide.png",
            "link": "https://store-kr.dcentwallet.com/"
        },
        "ja": { // 일본어 정보
            "image": "event_swap_complete_1920x60_ja.png",
            "wideImage": "event_swap_complete_ja_wide.png",
            "link": "https://store.dcentwallet.com/ja"
        }
    }
}
```

## 추후 정의 가능한 내용

- `platform` : 이벤트 대상이 ios/android 로 나뉘는 경우
- 언어 설정이 되지 않은 경우 이벤트 대상이 아님
  - 예를 들면 위 json 정의 에서 "ja" 가 정의 되지 않으면, 해당 이벤트는 일본어 앱에서는 진행하지 않음을 의미합니다.
- `appVersion`: 특정 버전 이상 앱에서만 이벤트 진행
- `currency` : 특정 currency 와 관계된 사용자에게만 이벤트 진행
  - swap의 경우 from, to 각각에 대한 currency 정의 가능함
  - swap이 아닌 다른 페이지에서 이벤트를 진행하는 경우, 특정 자신을 가진 사람 또는 특정 자산이 없는 사람등 여러 조건이 가능할 수 있음.
