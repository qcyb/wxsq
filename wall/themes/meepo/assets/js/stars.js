/*! weixinwall 2017-07-06 */

var initEffect=function(a){function b(a,b){return Math.random()*(b-a)+a}function c(){var a=b(k,l),c=(b(0,1)>.5?-1:1)*b(m,n),e=b(o,p),f=b(0,g),i=b(0,h),j=b(q,r),v=b(0,2*Math.PI),x=Math.cos(v)*j,y=Math.sin(v)*j,z=w(50,100)+"%";color="hsla(hue, 80%, diaosi, alp)".replace("hue",t%360).replace("diaosi",z);for(var A=0;A<5;++A)u.push(new d(a,c,v+s*A,e*A,f+Math.cos(s*A)*a,i+Math.sin(s*A)*a,x,y,f,i,color))}function d(a,b,c,d,e,f,g,h,i,k,l){this.size=a,this.rotSpeed=b,this.rot=c,this.delay=j+d,this.life=0,this.ox=i,this.oy=k,this.x,this.y,this.vx=g,this.vy=h,this.color=l}function e(){window.requestAnimationFrame(e),++t,v.clearRect(0,0,$("#effect").width(),$("#effect").height()),Math.random()<i&&c();for(var a=0;a<u.length;++a){var b=u[a];b.use(),(b.x<0||b.x>g||b.y<0||b.y>h||b.life>200)&&(u.splice(a,1),--a)}}var a=a,f=document.createElement("canvas"),g=f.width=$("#effect").width(),h=f.height=$("#effect").height(),i=.02,j=50,k=5,l=10,m=.01,n=.1,o=3,p=5,q=1,r=5,s=2*Math.PI/5,t=0,u=[];a.appendChild(f);var v=f.getContext("2d");window.innerWidth>500&&window.innerHeight>350?(q=5,r=10):r=5;var w=function(a,b){return parseInt(Math.random()*(1+(b>a?b-a:a-b))+(b>a?a:b))};d.prototype.use=function(){++this.life,this.life>=this.delay?(this.x+=3*Math.cos(this.rot),this.y+=3*Math.sin(this.rot)):(this.life<=j&&(this.rot+=this.rotSpeed,this.ox+=this.vx,this.oy+=this.vy),this.x=this.ox+Math.cos(this.rot)*this.size,this.y=this.oy+Math.sin(this.rot)*this.size);var a=Math.min(this.life,j)/j;this.life>100&&(a=(200-this.life)/100),v.lineWidth=this.size/3,v.strokeStyle=this.color.replace("alp",a),v.translate(this.x,this.y),v.rotate(this.rot),v.beginPath(),v.moveTo(-this.size/3,-this.size/2),v.lineTo(this.size,0),v.lineTo(-this.size/3,this.size/2),v.stroke(),v.rotate(-this.rot),v.translate(-this.x,-this.y)},e(),$(window).bind("resize",function(){window.innerWidth>500&&window.innerHeight>350?(q=5,r=10):r=4,g=f.width=$("#effect").width(),h=f.height=$("#effect").height(),v.clearRect(0,0,$("#effect").width(),$("#effect").height())})};
//# sourceMappingURL=stars.js.map