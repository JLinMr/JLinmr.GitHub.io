var posts=["posts/21998/","posts/1806/","posts/d0612c0e/","posts/9642fffa/","posts/37e1f95c/","posts/9a5bb761/","posts/78e9208e/","posts/20211b6/","posts/33483/","posts/22714023/","posts/5c8fac61/","posts/609bcdb9/","posts/ae8e1de1/","posts/37257/","posts/1e0a6e20/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"张洪Heo",link:"https://blog.zhheo.com/",avatar:"https://bu.dusays.com/2022/12/28/63ac2812183aa.png",descr:"分享设计与科技生活",recommend:!0},{name:"無名小栈",link:"https://blog.imsyy.top/",avatar:"https://cdn.bsgun.cn/2024/08/24/405739.webp",descr:"分享技术与科技生活",recommend:!0},{name:"朽丘博",link:"https://koxiuqiu.cn/",avatar:"https://koxiuqiu.cn/img/favicon.png",descr:"朽丘，阿丘！秋风秋雨",recommend:!0},{name:"猫不吃鱼.",link:"https://starsei.com/",avatar:"https://starsei.com/favicon.ico",descr:"雾散处，玫瑰花开"},{name:"❖星港◎Star☆",link:"https://blog.starsharbor.com/",avatar:"https://bu.dusays.com/2023/09/27/6513053bebdb2.webp",descr:"以博客记录生活与热爱！"},{name:"刘郎阁",link:"https://yjvc.cn/",avatar:"https://yjvc.cn/usr/uploads/logo.jpeg",descr:"一个积极向上的生活探索者！",recommend:!0},{name:"FloatSheep",link:"https://blog.hesiy.cn/",avatar:"https://cdn.bsgun.cn/2024/08/24/516939.webp",descr:"On the other side of obstacles",recommend:!0},{name:"白丁往事 `Blog",link:"https://blog.rayvv.com/",avatar:"https://blog.rayvv.com/img/logo.png",descr:"起风而行，风静安宁",recommend:!0},{name:"青桔气球",link:"https://blog.qjqq.cn/",avatar:"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar",descr:"分享网络安全与科技生活"},{name:"前尘小筑",link:"https://mnchen.cn/",avatar:"https://image.mnchen.cn/2023/12/mnochen.jpg",descr:"虽多尘色染，犹见墨痕浓"},{name:"葱苓sama",link:"https://blog.ciraos.top/",avatar:"https://cdn.bsgun.cn/2024/07/27/979950.webp",descr:"Don't worry, Be happy."},{name:"辉辉博客",link:"https://www.hui.vin/",avatar:"https://www.hui.vin/img/logo.png",descr:"乘风破浪逐水流,一路晴空月参差"},{name:"谢幕",link:"https://blog.xiemu.top/",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=1041291&spec=100",descr:"须知少时凌云志，曾许人间第一流！"},{name:"凌尘Blog",link:"https://blog.lck68.xyz/",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=2276842367&spec=100",descr:"苦逼大学生的技术&日常"},{name:"清羽飞扬",link:"https://blog.liushen.fun/",avatar:"https://blog.liushen.fun/info/avatar.ico",descr:"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜",recommend:!0},{name:"捞月亮の小北",link:"https://lunanorth.zeabur.app/",avatar:"https://vip.helloimg.com/i/2024/08/09/66b5acf975072.jpg",descr:"言念君子 ，温其如玉"},{name:"纸鹿摸鱼处",link:"https://blog.zhilu.cyou/",avatar:"https://wsrv.nl/?url=github.com/L33Z22L11.png",descr:"纸鹿至麓不知路，支炉制露不止漉",recommend:!0},{name:"东方月初",link:"https://blog.200038.xyz/",avatar:"https://img.200038.xyz/file/27355c13027fd5f145871.jpg",descr:"东方月初，涂山红红"},{name:"AI悦创",link:"https://blog.bornforthis.cn/",avatar:"https://bornforthis.cn/aiyc.svg",descr:"AI悦创·创造不同～"},{name:"RisingIce",link:"https://www.imrising.cn",avatar:"https://cdn.bsgun.cn/2024/09/02/566781.webp",descr:"自由摇曳 生生不息"},{name:"Elykia",link:"https://blog.elykia.cn/",avatar:"https://img.elykia.cn/2024/E_0.gif",descr:"致以无暇之人"},{name:"XingJiのBlog",link:"https://love.xingji.fun/",avatar:"https://cdn.bsgun.cn/2024/09/17/112089.webp",descr:"迄今所有人生都大写着失败，但不妨碍我继续向前✨"},{name:"Imz’s Blog",link:"https://blog.imz.me/",avatar:"https://pic.imgdb.cn/item/66cfd951d9c307b7e96dcfea.webp",descr:"仰望星空，脚踏实地。"},{name:"TWindyの小站",link:"https://www.twindy.top/",avatar:"https://imgbed.twindy.top/file/1727007009146_touxiang456.png",descr:"「离开世界之前 一切都是过程」"},{name:"Mo的记事簿",link:"https://blog.xiowo.net/",avatar:"https://blog.xiowo.net/img/avatar.png",descr:"万年鸽王，哈哈OvO"},{name:"青稚の空间",link:"https://blog.linux-qitong.top/",avatar:"https://blog.linux-qitong.top/img/avatar.jpg",descr:"越努力，越幸运."},{name:"龙窝",link:"https://blog.qiyao.us.kg/",descr:"随便发点啥啦ouo",avatar:"https://blog.qiyao.us.kg/images/atiq.png"},{name:"一只小白菜’Blog",link:"https://blog.1zxbc.cn",descr:"分享白菜的快乐，努力地工作",avatar:"https://q2.qlogo.cn/g?b=qq&nk=2694199949&s=100"},{name:"晓寒的互联网自留之地",link:"https://xiaohan-kaka.me/",avatar:"https://f003.backblazeb2.com/file/blog-v3/120887894_p1.jpg",descr:"醉后不知天在水，满船清梦压星河"}],refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:a,link:n}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往跳转随机友链，不保证跳转网站的安全性和可用性",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(n,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const a=[];let n=0;for(;friend_link_list.length&&n<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:s,link:e,avatar:o}=friend_link_list.splice(t,1)[0];a.push({name:s,link:e,avatar:o}),n++}let s=a.map((({name:t,link:a})=>"<a class='footer-item' href='"+a+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");s+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=s,setTimeout((()=>{t.style.opacity="1"}),300)}
//# sourceMappingURL=../maps/anzhiyu/random.js.map
