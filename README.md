# Vue3 学习
Vue3 在原有 v2 的基础之上修改了大量的核心源代码。从 Observer 的方式修改成为了 Proxy，reflace 的方式。在核心速度上有了大量的提升。从原来的 webpack 修改为 vite。大量的引用了 ES Moudel 的概念，极大程度的提高了浏览器的响应速度。由于 V3 版本彻底使用了 TS 技术。完美的集成了 TypeScript 的特性。仅使用 ```<script lang="ts">```即刻就可以开启TS模式。而Vite的良好支持再次提供了语言的顺利集成。

其次 Vue 对我觉得耳目一新，解决了实际问题的就是他对于代码逻辑关注点的聚合。日常开发中，构建组件时一旦代码的逻辑过于复杂。就会导致代码分片和 data 变量引用写得满屏都是，如图：
<image src="https://user-images.githubusercontent.com/499550/62783021-7ce24400-ba89-11e9-9dd3-36f4f6b1fae2.png">

这种碎片化使得理解和维护复杂组件变得困难。选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块。

如果我们能够将与同一个逻辑关注点相关的代码配置在一起会更好。而这正是组合式 API 使我们能够做到的。

## 新特性之-组合式API
在 Vue 组件中，我们将此位置称为 ```setup```

### setup 组件选项
setup 组件选项在创建组件之前执行一旦```props```被解析，并充当合成 API 的入口点。请注意setup 时尚未创建组件实例，因此在```setup```选项中没有```this```。这意味着，除了```props```之外，你将无法访问组件中声明的任何属性——本地状态、计算属性或方法。




# Vue 生命周期
- beforeCreate
    - 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
- created
    - 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- beforeUnmount
- unmounted
- errorCaptured
- renderTracked
- renderTriggered

# 生命周期图示
<image src="https://vue3js.cn/docs/zh/images/lifecycle.png" />
[生命周期图示](https://vue3js.cn/docs/zh/images/lifecycle.png)


