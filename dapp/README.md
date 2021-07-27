# 배너 작성 가이드

먼저 images 폴더에 배너에 올릴 이미지를 업로드합니다.  

이미지를 업로드한 뒤 **en/banenrlist.json** 과 **ko/bannerlist.json** 을 수정합니다.


## banenrlist.json 작성 예시  
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
