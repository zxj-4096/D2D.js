/**
 * H5 Canvas 2D/3D JS Library 0.0.1
 * @author zhangxj
 * Create on:2017-12-07
 * Last Updated:2017-12-11
 */

/**
 * 2D版本基本模块
 * 帧频 sprite 动画
 */

var FPS = 60;
var HCCList=[];
function HCC() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.checked = false;
    this.image = null;
    this.text = null;
    //动画用数组来实现
    this.anmi = [];
    this.AddHCC = function(type,x,y,w,h,url){
        //var h = new HCC();
        HCCList.push(this);
        this.image = url;
        this.x = 10;
        this.y = 20;
        this.checked = false;
        this.width = img.width;
        this.height = img.height;
        this.draw();

        console.log("add");
    }
    this.draw = function () {
        if (this.image != null) {
            ctx.drawImage(this.image, this.x, this.y);

            if (this.checked) {
                //选中框
                ctx.strokeStyle = "";
                ctx.rect(this.x, this.y, this.width, this.height);
                //显示关闭图标
                ctx.rect(this.x + this.width, this.y - 10, 10, 10);
                ctx.moveTo(this.x + this.width, this.y);
                ctx.lineTo(this.x + this.width + 10, this.y - 10);
                ctx.moveTo(this.x + this.width, this.y - 10);
                ctx.lineTo(this.x + this.width + 10, this.y);

            }
            ctx.stroke();
        }
        if (this.text != null) {
            ctx.strokeText(this.text, this.x, this.y);
        }
    }
}