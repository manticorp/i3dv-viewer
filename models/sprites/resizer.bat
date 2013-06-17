echo %1%
@Echo OFF
Set "AbsolutePath=%1%"
for /f "delims=" %%A in (%AbsolutePath%) do (
    set foldername=%%~nxA
)
Echo %foldername%
cd %1
md 960
Echo Now doing montage...
montage %foldername%* -tile 36x1 -geometry +0+0 960/sprite.jpg
xcopy 960 720 /s /y /i
xcopy 960 460 /s /y /i
xcopy 960 380 /s /y /i
cd 380
mogrify -quality 75 -resize x380 *.jpg
cd ..
cd 460
mogrify -quality 75 -resize x460 *.jpg
cd ..
cd 720
mogrify -quality 75 -resize x720 *.jpg
cd ..
cd 960
mogrify -quality 75 *.jpg
cd ..
DEL %foldername%* /F /Q