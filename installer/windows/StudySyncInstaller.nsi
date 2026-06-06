; NSIS installer template for StudySync
; Replace placeholder files with real binaries before building
Name "StudySync"
OutFile "StudySyncInstaller.exe"
InstallDir "$PROGRAMFILES\\StudySync"
SetOutPath "$INSTDIR"

Section "Install"
  ; Extract files from zipped package included next to installer
  ; Users should replace these lines with real executable and resources.
  SetOutPath "$INSTDIR"
  File /r "${NSISDIR}\\..\\downloads\\*"
  CreateShortCut "$DESKTOP\\StudySync.lnk" "$INSTDIR\\index.html" "$INSTDIR\\downloads\\icon.png"
SectionEnd

Section "Uninstall"
  Delete "$DESKTOP\\StudySync.lnk"
  RMDir /r "$INSTDIR"
SectionEnd
