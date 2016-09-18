/**
 * Created by wzwang on 2016/9/14.
 */

//组件注册语法糖

//part1:使用Vue.component()直接创建和注册组件

Vue.component("my-component", {
    template: '<div>This is this first component!</div>'
})

var vm1 = new Vue({
    el: '#app1'
})

//Vue.component()的第一个参数是标签名称，第二个参数是一个选项对象，使用选项对象的template属性定义组件模板。
//使用这种方式，Vue在背后会自动的调用Vue.extend()。



//part2:在选项对象的components属性中实现局部注册
var vm2 = new Vue({
    el: '#app2',
    components: {
        'my-component2': {
            template: '<div>This is the second component!</div>'
        },
        'my-component3': {
            template: '<div>This is the Third component!</div>'
        }
    }
});