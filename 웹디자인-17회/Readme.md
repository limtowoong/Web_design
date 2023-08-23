![image](https://github.com/limtowoong/Web_design/assets/104752202/4e09d68b-b19b-4294-8751-802e99593307)

## 메뉴

![image](https://github.com/limtowoong/Web_design/assets/104752202/7b9878fe-e75e-41c3-af4b-e6627cdbfcac)




## 팝업

![image](https://github.com/limtowoong/Web_design/assets/104752202/6c5d5053-7f6c-4a37-9ab0-7a1b2082149a)

```css
.menu{
    width: 100%;
    height: calc(100% - 120px - 30px);
    margin-top: 30px;
}
```

메뉴에 틀을 만들어줍니다.

![image](https://github.com/limtowoong/Web_design/assets/104752202/92938f2f-a004-4c01-9c8d-39cb8a08727e)

```css
.main{
    width: calc(180px - 4px);
    margin: 0 8px;
    border: 2px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
```

main 클래스에 크기와 선을 만들어줍니다.

![image](https://github.com/limtowoong/Web_design/assets/104752202/1098559a-f788-47a0-b0de-5a9facc1fba0)

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

main클래스 밑에 있는 a에 위 아래로 선을 만들어 줍니다.

![image](https://github.com/limtowoong/Web_design/assets/104752202/6d2b4662-afb1-4c99-bc04-de4258680986)

```css
.main>li:hover>a{
    background-color: lightgray;
}
```

main클래스 밑에 li에 마우스를 올리면 main클래스 밑에 있는 a에 색상을 변경시킵니다.

![image](https://github.com/limtowoong/Web_design/assets/104752202/efb2219b-5e40-4e66-98f9-e5c75abac258)

```css
.sub>li>a{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
```
sub클래스에 크기와 위치를 잡아줍니다.

![image](https://github.com/limtowoong/Web_design/assets/104752202/e5c3787d-edbc-40fb-99cb-9577ee382909)

```css
.sub>li>a:hover{
    background-color: lightgray;
}
```

sub클래스 밑에 있는 a에 마우스를 올리면 a에 색상을 변경시킵니다.

![image](https://github.com/limtowoong/Web_design/assets/104752202/4db61a06-1015-48bf-b20f-4d28ce4fd495)

```css
.sub{
    display: none;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
}
```
sub클래스 전체를 숨깁니다.

![image](https://github.com/limtowoong/Web_design/assets/104752202/00655b96-9e2d-46ed-8e1e-5f1be8a7d715)

```javascript
$(".main>li").mouseover(function(){
  $(this).find(".sub").stop().slideDown()
}).mouseout(function(){
  $(this).find(".sub").stop().slideUp()
})
```

main클래스 밑에 있는 li에 마우스를 올리면 해당 클래스 밑에 있는 sub클래스에서 하던걸 멈추고 내려줍니다.
만약 마우스가 나가면 하던걸 멈추고 올려줍니다.


