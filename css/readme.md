## 选择器优先级及其权重
- !important 
- 行内样式 1 0 0 0
- id        1 0 0
- class | 属性[] | 伪类  1 0
- 标签 | 伪元素 1
- 通配符 0

## 父子选择器 并列选择器 分组选择器
- strong em {}(父子)
  .wrapper .em {}

- div > strong > em {} (直接子元素)

- div.wrapper {}(并列)

- strong, 
  em, 
  span {}(分组)

## 画三角形(border)
- div {
            width: 0;
            height: 0;
            border: 100px solid black;
            border-left-color: black;
            border-top-color: transparent;
            border-right-color: transparent;
        }


- text-indent: 2em (首行缩进)

- 行级元素 内联元素 inline
  内容决定元素所占位置，不可以通过css改变宽高
  span strong em a del


- 块级元素 block
  独占一行 可以通过css改变宽高
  div p ul li ol form address

- 行级块元素 inline-block
  内容决定大小 可以改变宽高
  img

- 盒模型
  margin
  border
  padding
  content


## 计算盒子的可视大小
div {
            width: 100px;
            height: 100px;
            background-color:red;
            border: 10px solid black;
            border-left-color: black;
            padding: 10px 20px 30px;
            margin: 10px 20px;
        }

realWidth: 160px
realHeight: 160px

## 定位 position
- absolute
  脱离原来位置进行定位
  相对于最近的有定位的父级进行定位，如果没有，那么相对于文档进行定位

- relative
  保留原来位置进行定位

- fixed 固定定位

经验：relative作为参照物，absolute进行定位

## 水平垂直居中
div{
    
}

- ES6中，有所改变：var、function声明的全局变量，依然是顶层对象的属性；let、const、class声明的全局变量不属于顶层对象的属性，也就是说ES6开始，全局变量和顶层对象的属性开始分离、脱钩


## 预编译四步
- 创建AO对象(Activation Object) 作用域 执行期上下文
- 找形参和变量声明，将变量和形参名作为AO属性名，值为undefined
- 将实参值和形参统一
- 在函数体里面找函数声明，值赋予函数体

eg:function fn (a) {
            console.log(a);
            var a = 123;
            console.log(a);
            function a () {}
            console.log(a);
            var b = function () {}
            console.log(b);
            function d () {}
        }
        fn(1)
        AO {
            a: function a (){},
            b: undefined,
            d:function d(){}
        }
  
  
