/*! weixinwall 2017-07-06 */

THREE.CSS3DObject=function(a){THREE.Object3D.call(this),this.element=a,this.element.style.position="absolute",this.addEventListener("removed",function(a){null!==this.element.parentNode&&this.element.parentNode.removeChild(this.element)})},THREE.CSS3DObject.prototype=Object.create(THREE.Object3D.prototype),THREE.CSS3DObject.prototype.constructor=THREE.CSS3DObject,THREE.CSS3DSprite=function(a){THREE.CSS3DObject.call(this,a)},THREE.CSS3DSprite.prototype=Object.create(THREE.CSS3DObject.prototype),THREE.CSS3DSprite.prototype.constructor=THREE.CSS3DSprite,THREE.CSS3DRenderer=function(){console.log("THREE.CSS3DRenderer",THREE.REVISION);var a,b,c,d,e=new THREE.Matrix4,f={camera:{fov:0,style:""},objects:{}},g=document.createElement("div");g.style.overflow="hidden",g.style.WebkitTransformStyle="preserve-3d",g.style.MozTransformStyle="preserve-3d",g.style.oTransformStyle="preserve-3d",g.style.transformStyle="preserve-3d",this.domElement=g;var h=document.createElement("div");h.style.WebkitTransformStyle="preserve-3d",h.style.MozTransformStyle="preserve-3d",h.style.oTransformStyle="preserve-3d",h.style.transformStyle="preserve-3d",g.appendChild(h),this.setClearColor=function(){},this.getSize=function(){return{width:a,height:b}},this.setSize=function(e,f){a=e,b=f,c=a/2,d=b/2,g.style.width=e+"px",g.style.height=f+"px",h.style.width=e+"px",h.style.height=f+"px"};var i=function(a){return Math.abs(a)<Number.EPSILON?0:a},j=function(a){var b=a.elements;return"matrix3d("+i(b[0])+","+i(-b[1])+","+i(b[2])+","+i(b[3])+","+i(b[4])+","+i(-b[5])+","+i(b[6])+","+i(b[7])+","+i(b[8])+","+i(-b[9])+","+i(b[10])+","+i(b[11])+","+i(b[12])+","+i(-b[13])+","+i(b[14])+","+i(b[15])+")"},k=function(a){var b=a.elements;return"translate3d(-50%,-50%,0) matrix3d("+i(b[0])+","+i(b[1])+","+i(b[2])+","+i(b[3])+","+i(-b[4])+","+i(-b[5])+","+i(-b[6])+","+i(-b[7])+","+i(b[8])+","+i(b[9])+","+i(b[10])+","+i(b[11])+","+i(b[12])+","+i(b[13])+","+i(b[14])+","+i(b[15])+")"},l=function(a,b){if(a instanceof THREE.CSS3DObject){var c;a instanceof THREE.CSS3DSprite?(e.copy(b.matrixWorldInverse),e.transpose(),e.copyPosition(a.matrixWorld),e.scale(a.scale),e.elements[3]=0,e.elements[7]=0,e.elements[11]=0,e.elements[15]=1,c=k(e)):c=k(a.matrixWorld);var d=a.element,g=f.objects[a.id];void 0!==g&&g===c||(d.style.WebkitTransform=c,d.style.MozTransform=c,d.style.oTransform=c,d.style.transform=c,f.objects[a.id]=c),d.parentNode!==h&&h.appendChild(d)}for(var i=0,j=a.children.length;i<j;i++)l(a.children[i],b)};this.render=function(a,e){var i=.5/Math.tan(THREE.Math.degToRad(.5*e.fov))*b;f.camera.fov!==i&&(g.style.WebkitPerspective=i+"px",g.style.MozPerspective=i+"px",g.style.oPerspective=i+"px",g.style.perspective=i+"px",f.camera.fov=i),a.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),e.matrixWorldInverse.getInverse(e.matrixWorld);var k="translate3d(0,0,"+i+"px)"+j(e.matrixWorldInverse)+" translate3d("+c+"px,"+d+"px, 0)";f.camera.style!==k&&(h.style.WebkitTransform=k,h.style.MozTransform=k,h.style.oTransform=k,h.style.transform=k,f.camera.style=k),l(a,e)}};
//# sourceMappingURL=CSS3DRenderer.js.map