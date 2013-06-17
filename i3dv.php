<!DOCTYPE HTML>
<html>
    <head>
        <title>i3dv Viewer</title>
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1,maximum-scale=1">
                  
        <link href="i3dv.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="i3dv.js" ></script>
        <style>
            body {
                position: absolute;
                height: 100%;
                width: 100%;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                border: 0;
                margin: 0;
                overflow: hidden;
                text-align: centre;
            }
            
            .viewer{
                display: block;
                float: left;
                min-width: 200px;
                min-height: 100px;
                width:  25%;
                height: 50%;
            }
        </style>
        
    </head>
    <body unselectable="on" onLoad="doViewer();">
        <div class="i3dv_viewer viewer" data-modelid="buddha"></div>
        <div class="i3dv_viewer viewer" data-modelid="Harrier"></div>
        <div class="i3dv_viewer viewer" data-modelid="milosaphrodite"></div>
        <div class="i3dv_viewer viewer" data-modelid="tesseract" data-maximise=true></div>
        <div class="i3dv_viewer viewer" data-modelid="tesseract"></div>
        <div class="i3dv_viewer viewer" data-modelid="milosaphrodite"></div>
        <div class="i3dv_viewer viewer" data-modelid="Harrier" data-trans=true data-playertype="canvas" ></div>
        <div class="i3dv_viewer viewer" data-modelid="buddha"></div>
        <script type="text/javascript">
            var i3dv = new _i3dv_();
            function doViewer(){
                i3dv.init();
            }
        </script>
    </body>
</html> 