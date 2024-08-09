var posts=["posts/21998/","posts/1806/","posts/9642fffa/","posts/37e1f95c/","posts/14441/","posts/26735/","posts/63693/","posts/78e9208e/","posts/49303/","posts/33483/","posts/5c8fac61/","posts/609bcdb9/","posts/ae8e1de1/","posts/37257/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","recommend":true},{"name":"無名小栈","link":"https://blog.imsyy.top/","avatar":"https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png","descr":"分享技术与科技生活","recommend":true},{"name":"朽丘博","link":"https://koxiuqiu.cn/","avatar":"https://koxiuqiu.cn/img/favicon.png","descr":"朽丘，阿丘！秋风秋雨","recommend":true},{"name":"猫不吃鱼.","link":"https://starsei.com/","avatar":"https://starsei.com/favicon.ico","descr":"雾散处，玫瑰花开"},{"name":"❖星港◎Star☆","link":"https://blog.starsharbor.com/","avatar":"https://bu.dusays.com/2023/09/27/6513053bebdb2.webp","descr":"以博客记录生活与热爱！"},{"name":"刘郎阁","link":"https://yjvc.cn/","avatar":"https://yjvc.cn/usr/uploads/logo.jpeg","descr":"一个积极向上的生活探索者！"},{"name":"FloatSheep","link":"https://blog.hesiy.cn/","avatar":"https://registry.npmmirror.com/@floatsheep/fsl-fim/1.0.9/files/avatar.webp","descr":"On the other side of obstacles"},{"name":"白丁往事 `Blog","link":"https://blog.rayvv.com/","avatar":"https://blog.rayvv.com/img/logo.png","descr":"起风而行，风静安宁"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar","descr":"分享网络安全与科技生活"},{"name":"前尘小筑","link":"https://mnchen.cn/","avatar":"https://image.mnchen.cn/2023/12/mnochen.jpg","descr":"虽多尘色染，犹见墨痕浓"},{"name":"葱苓sama","link":"https://blog.ciraos.top/","avatar":"https://oss-cdn.bsgun.cn/2024/07/27/979950.webp","descr":"Don't worry, Be happy."},{"name":"辉辉博客","link":"https://www.hui.vin/","avatar":"https://www.hui.vin/img/logo.png","descr":"乘风破浪逐水流,一路晴空月参差"},{"name":"谢幕","link":"https://blog.xiemu.top/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=1041291&spec=100","descr":"须知少时凌云志，曾许人间第一流！"},{"name":"凌尘Blog","link":"https://blog.lck68.xyz/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=2276842367&spec=100","descr":"苦逼大学生的技术&日常"},{"name":"清羽飞扬","link":"https://blog.qyliu.top/","avatar":"https://blog.qyliu.top/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜"},{"name":"陆小启","link":"https://www.lxqhc.cn/","avatar":"https://bu.dusays.com/2024/07/22/669e7878a565f.png","descr":"充满故事的世界"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 4) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };