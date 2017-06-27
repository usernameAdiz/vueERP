<template>
    <dl class="list-logo-dl">
        <dd v-for="obj in dllist" class="list-logo-dd">
            <router-link :to="'/listList/?brand='+obj.mark">
                <img :src="'src/assets/imgs/list-logo/'+obj.url">
                <p>{{obj.mark}}</p>
            </router-link>
        </dd>
    </dl>
</template>
<script>
    import './logo.scss'
    export default{
        data:function(){
            return {
                dllist:[
                    {url:'logo1.jpg',mark:'鼎盛'},
                    {url:'logo2.jpg',mark:'春哥'},
                    {url:'logo3.jpg',mark:'唐夫人'},
                    {url:'logo4.jpg',mark:'莫瑞小黑包'},
                    {url:'logo5.jpg',mark:'美姿妍'},
                    {url:'logo6.jpg',mark:'伊米妮'},
                    {url:'logo7.jpg',mark:'Zatchels'},
                    {url:'logo8.jpg',mark:'FLON菲安妮'},
                    {url:'logo9.jpg',mark:'Yogci优姿'},
                    {url:'logo10.jpg',mark:'皮尔卡丹'},
                    {url:'logo11.jpg',mark:'Daybreak'},
                    {url:'logo12.jpg',mark:'guess'},
                    {url:'logo13.jpg',mark:'乐代'},
                    {url:'logo14.jpg',mark:'拉菲斯汀'},
                    {url:'logo15.jpg',mark:'khdesign'},
                    {url:'logo16.jpg',mark:'金狐狸FOXER'},
                    {url:'logo17.jpg',mark:'稻草人'},
                    {url:'logo18.jpg',mark:'Mickael Kors'},
                    {url:'logo19.jpg',mark:'elle'},
                    {url:'logo20.jpg',mark:'salad'},
                    {url:'logo21.jpg',mark:'vanessahogan'},
                    {url:'logo22.jpg',mark:'COACH蔻驰'},
                    {url:'logo23.jpg',mark:'朱尔'},
                    {url:'logo24.jpg',mark:'丹希路'},
                    {url:'logo25.jpg',mark:'旗王'},
                    {url:'logo26.jpg',mark:'Charles keith'},
                    {url:'logo27.jpg',mark:'Lesportsac'},
                    {url:'logo28.jpg',mark:'七黛'},
                    {url:'logo29.jpg',mark:'viney'},
                    {url:'logo30.jpg',mark:'欧思曼'},
                ],
            }
        }
    }
</script>
