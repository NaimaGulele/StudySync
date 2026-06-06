#!/usr/bin/env bash
# Simple DMG creation scaffold. Requires 'create-dmg' (npm) or hdiutil on macOS.
set -euo pipefail
ROOT=$(cd "$(dirname "$0")/.." && pwd)
OUT=$ROOT/releases
mkdir -p "$OUT"
DMG="$OUT/StudySync.dmg"
# Using hdiutil (macOS): create a compressed read-only DMG
# This is a scaffold — replace with actual .app bundle before packaging.
if command -v hdiutil >/dev/null 2>&1; then
  TMPDIR=$(mktemp -d)
  mkdir -p "$TMPDIR/StudySync"
  cp -R "$ROOT"/downloads "$TMPDIR/StudySync/"
  hdiutil create -volname "StudySync" -srcfolder "$TMPDIR/StudySync" -ov -format UDZO "$DMG"
  rm -rf "$TMPDIR"
  echo "Created $DMG"
else
  echo "hdiutil not found — install on macOS or use create-dmg npm package"
  exit 1
fi
