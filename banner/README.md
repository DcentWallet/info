# 배너 작성 가이드

먼저 images 폴더에 배너에 올릴 이미지를 업로드합니다.  
en 에는 영어에서 보일 이미지, ko 에는 한국어에서 보일 이미지를 업로드하면 됩니다.

이미지를 업로드한 뒤 thin-banner-info-list.json 을 수정합니다.


## thin-banner-info-list.json 작성 예시  
**실제 json 작성시에는 // 뒤에 있는 주석은 전부 제거하셔야 합니다.**
```json
[
  {
    "img": {
      "en": {
        "desktop": {
          "path": "../images/en/images_desktop.png", //가로 1440px 이상일 때 보일 이미지
          "height": "90px", // 배너 높이
          "background-color": "#1969FF" // 배경 색
        },
        "tablet": {
          "path": "../images/en/images_tablet.png", //가로 768 ~ 1439 px 에서 보일 이미지
          "height": "65px",
          "background-color": "#1969FF"
        },
        "mobile": {
          "path": "../images/en/images_mobile.png", //가로 767 이하일때 보일 이미지
          "height": "15.64vw",
          "background-color": "#1969FF"
        }
      },
      "ko": {
        "desktop": {
          "path": "../images/ko/images_desktop.png", //가로 1440px 이상일 때 보일 이미지
          "height": "90px", // 배너 높이
          "background-color": "#1969FF" // 배경 색
        },
        "tablet": {
          "path": "../images/ko/images_tablet.png", //가로 768 ~ 1439 px 에서 보일 이미지
          "height": "65px",
          "background-color": "#1969FF"
        },
        "mobile": {
          "path": "../images/ko/images_mobile.png", //가로 767 이하일때 보일 이미지
          "height": "15.64vw",
          "background-color": "#1969FF"
        }
      }
    },
    "link": { // 클릭시 이동할 링크 지정
      "en": {
        "internal": false,
        "external": "https://google.com" // dcentwallet.com 외부 링크로 이동시 여기에 작성
      },
      "ko": {
        "internal": "/ShopList", // dcentwallet.com/ShopList 로 이동함
        "extenral": false
      }
    }
  }
]
```

## 한국어 배너만 존재할 시
en 관련 전부 제거
```json
[
  {
    "img": {
      "ko": {
        "desktop": {
          "path": "../images/ko/images_desktop.png", //가로 1440px 이상일 때 보일 이미지
          "height": "90px", // 배너 높이
          "background-color": "#1969FF" // 배경 색
        },
        "tablet": {
          "path": "../images/ko/images_tablet.png", //가로 768 ~ 1439 px 에서 보일 이미지
          "height": "65px",
          "background-color": "#1969FF"
        },
        "mobile": {
          "path": "../images/ko/images_mobile.png", //가로 767 이하일때 보일 이미지
          "height": "15.64vw",
          "background-color": "#1969FF"
        }
      }
    },
    "link": { // 클릭시 이동할 링크 지정
      "ko": {
        "internal": "/ShopList", // dcentwallet.com/ShopList 로 이동함
        "extenral": false
      }
    }
  }
]
```

## 배너 제거
```json
[]
```