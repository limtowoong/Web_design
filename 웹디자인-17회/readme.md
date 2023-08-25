![image](https://github.com/limtowoong/Web_design/assets/104752202/12f9db88-669c-4cf2-a37a-00a2d7fcb3dd)

## 메뉴


![image](https://github.com/limtowoong/Web_design/assets/104752202/c7d2e443-2804-40cf-85c6-a3376d831424)

```css
.main{
    width: calc(180px - 4px);    //양쪽에 margin 값을 준 만큼 100%에서 뺀다.
    margin: 0 8px;               //위 아래 : 0, 왼쪽 오른쪽 : 8px 
    border: 2px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
```

![image](https://github.com/limtowoong/Web_design/assets/104752202/f44528ba-d87e-4138-a82d-47f1f2941f34)

```css
.main>li>a{
    width: 100%;
    height: calc(30px - 2px);
    line-height: calc(30px - 2px);
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
```

![image](https://github.com/limtowoong/Web_design/assets/104752202/9838e06b-c3a2-4e05-896f-30461463aca1)

```css
.sub{
    display: none;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
}
```

## 공지사항

![image](https://github.com/limtowoong/Web_design/assets/104752202/1d05820a-cda2-4a97-bc02-c5bf49c0bd0d)

### html

![image](https://github.com/limtowoong/Web_design/assets/104752202/ba55ecac-451c-40aa-86bc-5ec902b25833)

공지사항(notice)를 제목(notitle)과 목록(nobody)으로 나눈다.

### css

```css
.notitle{
    width: calc(80px - 4px);
    height: calc(30px - 4px);
    line-height: calc(30px - 4px);    //수직 가운데 맞춤
    text-align: center;               //수평 가운데 맞춤
    border: 2px solid gray;           //박스 전체에 바깥선을 만들어줌
    border-bottom: 2px solid white;   //박스 밑에는 하얀선으로 바꿔줌
    z-index: 1;                       //nobody에 있는 바깥선과 겹치면 밑에 있는 흰색선이 안보이기 때문에 올려줌
    position: relative;               //z-index를 사용할려면 position이 있어야함
    margin-left: 20px;
    margin-top: 10px;
    float: left;                      
}
```

```
.nobody{
    width: 100%;
    height: calc(100% - 40px + 2px);
    margin-top: -2px;            //notitle 선과 nobody에 위쪽 선이 겹치게 만듦
    float: left;
}
```

## 링크

![image](https://github.com/limtowoong/Web_design/assets/104752202/7e8570dd-d254-440a-9b92-b712642e87d3)

```css
.link li{
    margin-left: 33px;
    width: calc(100% / 4);         //반응형으로 가로 길이를 늘리면 사진에 간격도 늘어가게함
    height: 100%;
    float: left;                   //왼쪽으로 정렬
}
```

## 이미지 슬라이드

![image](https://github.com/limtowoong/Web_design/assets/104752202/7e0fc935-ac1d-4a09-a2e6-f2473fa10328)

### css

```css
.imgslide{
    width: calc(100% - 200px - 400px - 4px);    //반응형으로 크기를 만들어줌
    height: calc(100% - 120px - 4px);
    float: left;                                //왼쪽으로 정렬
    border: 2px solid black;
    overflow: hidden;                           //이미지가 바깥쪽으로 나가면 숨겨줌
}
```

```css
.imglen{
    width: calc(100% * 3);         //이미지 3개가 들어갈 공간을 만듦  ( 100%는 부모(imgslide)의 크기 )
    height: 100%;
}
```

```css
.imglen li{                       //li에 크기를 줘야지 이미지 사이에 공백이 안 생김
    width: calc(100% / 3);        //imglen(부모)의 크기를 3으로 나눈 값
    height: 100%;
    float: left;                  //width를 늘렸기 때문에 왼쪽으로 정렬해줌
    position: relative;           //기준을 li로 정해서 absolute를 주면 li를 따라가게됨
}
```

### javascript

```javascript
setInterval(function(){
  $(".imglen").delay(2000)
  .animate({marginLeft:-100+"%"},1000,function(){      //이미지 전체 위치를 왼쪽으로 -100% 만큼 옮겨줌 ( marginLeft 에서 -100%는 width 기준임 )
    $(".imglen li:first").appendTo(".imglen>ul")       //처음 사진을 마지막으로 옮겨줌
    $(".imglen").css({marginLeft:0})                   //이미지 전체 위치를 다시 돌려놓음
  })
})
```

## 푸터 메뉴

![image](https://github.com/limtowoong/Web_design/assets/104752202/8bbc325a-9443-4124-9665-65ca88830af7)

.fmenu a{
    color: blue;                          //하이퍼링크 처럼 글씨색을 파란색으로 바꿈
    text-decoration: underline;           //글씨 밑에 줄을 넣어줌
    font-size: 14px;                      //글 크기
}

## overflow 활용

![image](https://github.com/limtowoong/Web_design/assets/104752202/2d2d7594-7274-4cb5-8cd1-2251862797bf)
![image](https://github.com/limtowoong/Web_design/assets/104752202/abd6aad6-9808-48e2-a21e-041fd0fb3241)

overflow를 사용하여 겹치는 것을 방지할 수 있음



