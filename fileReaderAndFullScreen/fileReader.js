window.onload = function () {
    document.querySelector('#file').addEventListener('change',function(e){
        let reader = new FileReader();
            // setTimeout(function(){
            // },10)
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function(){
            document.querySelector('#img').src = reader.result;
        }
        reader.onloadstart=function(e){//开始读取
            // alert('start');
            console.log({start:e});
        }
        reader.onProgress=function(e){//读取中
            console.log({Progress:e});
        }
        reader.onerror = function(e){//发生错误
            console.log({error:e});
        }
        reader.onloadend=function(e){//读取结束，不管是都成功只要结束就触发
            console.log({'end':e})
        }
        reader.onabort=function(e){
            console.log({abort:e});
        }
    })
    document.querySelector('#closeLaunch').addEventListener('click',function(){
        let controls = new FullScreen();
        controls.exitFullscreen();
    });
    document.querySelector('#launch').addEventListener('click',function(){
        let controls = new FullScreen();
        controls.launchFullScreen(document.querySelector('.imgs'));
    })
    function FullScreen(){}
    FullScreen.prototype ={
        launchFullScreen : function (element){
            if(element.requestFullscreen){
                element.requestFullscreen();
            }else if(element.webkitRequestFullscreen){
                element.webkitRequestFullscreen();
            }else if(element.mozRequestFullscreen){
                element.mozRequestFullscreen();
            }else if(element.msRequestFullscreen){
                element.msRequestFullscreen();
            }else if(element.oRequestFullscreen){
                element.oRequestFullscreen();
            }
        },
        exitFullscreen: function(){
            if(document.exitFullscreen){
                document.exitFullscreen();
            }else if(document.msExitFullscreen){
                document.msExitFullscreen();
            }else if(document.mozExitFullscreen){
                document.mozExitFullscreen();
            }else if(document.webkitExitFullscreen){
                document.webkitExitFullscreen();
            }
        }
    }

}