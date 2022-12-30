# 배너 작성 가이드

먼저 images 폴더에 배너에 올릴 이미지를 업로드합니다.  

이미지를 업로드한 뒤 **en/banenrlist.json** 과 **ko/bannerlist.json** 을 수정합니다.


## (New version) banner-list.json 작성 예시

**실제 json 작성시에는 // 뒤에 있는 주석은 전부 제거하셔야 합니다.**  

```json
[
    {
        "name": "2022_EndOfYear",
        "title": "2022 End OF Year",
        "bgColor": "#9D242B",  // image 사이즈가 화면과 맞지 않은 경우 보는 바탕색
        "externalWindow": true, // 외부 브라우져 연결시 true, discovery 에서 연결시 false 
        "startTimestamp": 0, // 배너가 보여지기 시작하는 시간 0이면 바로 지금 시작
        "endTimestamp": 0, // 배너가 더이상 보여지지 않는 시간 0이만 기한 없음. 
        "en": {  // 영문앱에 보이는 배너 내용 
            "description": "",  // 배너 이미지 위로 출력되는 텍스트 
            "link": "https://store.dcentwallet.com/pages/end-of-year-2022?utm_source=discovery_banner&utm_medium=dcent-app&utm_campaign=202212_end-of-year-promotion_v01",
            "imagePath": "360X160_2022_EndOfYear_EN.png",  
            "imagePath_480": "480X160_2022_EndOfYear_EN.png",  // 큰화면에서 보여지는 배너 이미지 
            "button": "" // 이 property가 있으면 버튼이 보여지고 해당 text 가 보임.
        },
        "ko": {  // 한글 앱에서 보이는 배너 내용 
            "description": "",
            "link": "https://store-kr.dcentwallet.com/pages/end-of-year-2022?utm_source=discovery_banner&utm_medium=dcent-app&utm_campaign=202212_end-of-year-promotion_v01",
            "imagePath": "360X160_2022_EndOfYear_KO.png",
            "imagePath_480": "480X160_2022_EndOfYear_KO.png"            
        }
    },
    {
        "name": "awc_all_in_one",
        "title": "AWC all-in-one",
        "bgColor": "#21A2FE",
        "externalWindow": true,
        "startTimestamp": 0,
        "endTimestamp": 0,
        "ko": {
            "description": "",
            "link": "https://dcentwallet.com/events/20221208-AWC-promotion?utm_source=discovery_banner&utm_medium=dcent-app&utm_campaign=202212_awc-collab-promotion_v01",
            "imagePath": "360X160_AWC_All_in_one_KO.png",
            "imagePath_480": "480X160_AWC_All_in_one_KO.png"
        }
    },
```
## (Old version) {language}/banenrlist.json 작성 예시  

**실제 json 작성시에는 // 뒤에 있는 주석은 전부 제거하셔야 합니다.**  
이벤트 배너를 전부 내려도 디센트 기본 배너를 이용해서 배너가 최소 한개는 보이게 해야합니다.
```json
{
  "list": [
    {
      "name": "naver",
      "title": "NAVER",
      "description": "",
      "link": "https://naver.com", // 클릭 시 이동할 링크
      "imagePath": "banner_naver.png", // 보여 줄 이미지
      "externalWindow": true  // 디센트 댑 브라우저가 아닌 외부 인터넷 앱을 통해 링크를 열 시 true
    },
    {
      "name": "dcent",
      "title": "D'CENT",
      "description": "",
      "link": "https://dcentwallet.com", // 클릭 시 이동할 링크
      "imagePath": "banner_dcent.png", // 보여 줄 이미지
      "externalWindow": true // 디센트 댑 브라우저가 아닌 외부 인터넷 앱을 통해 링크를 열 시 true
    }
  ]
}
```
