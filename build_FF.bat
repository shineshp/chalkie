:: ==06-05-2010 10:32 AM  =Shinesh==
cls
set x=%cd%
md build\content
md build\content\chalkieextension
md build\skin
md build\locale
md build\locale\en-US

copy install.rdf build
copy chrome.manifest build
::copy content\* build\content\chalkieextension

XCOPY locale\* build\locale /s /i
XCOPY skin\* build\skin /s /i
XCOPY content\* build\content\chalkieextension /s /i

cd build
"C:\Program Files\WinRAR\winrar.exe" a -s -ibck -r -m5 -afzip "%x%.xpi"
::move "%x%.xpi"
cd ..
rd build /s/q
"C:\Program Files\Mozilla Firefox\firefox.exe" "%x%.xpi"