export const roundRect=(ctx,x,y,width,height,radius=1)=>{
    if (radius!==0) {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
      } else {
        radius = {tl: 0, tr: 0, br: 0, bl: 0};
      }
      ctx.beginPath();
      ctx.moveTo(x + radius.tl, y);
      ctx.lineTo(x + width - radius.tr, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
      ctx.lineTo(x + width, y + height - radius.br);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
      ctx.lineTo(x + radius.bl, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
      ctx.lineTo(x, y + radius.tl);
      ctx.quadraticCurveTo(x, y, x + radius.tl, y);
      ctx.closePath();
    ctx.fill();
    ctx.lineWidth=0.088;
    ctx.strokeStyle="white";
    ctx.stroke();

}