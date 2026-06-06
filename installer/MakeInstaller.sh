#!/usr/bin/env bash
# Minimal packaging script for StudySync — creates a distributable zip with icon
set -euo pipefail
ROOT=$(cd "$(dirname "$0")/.." && pwd)
OUT=$ROOT/releases
PKG=$OUT/StudySync-distribution.zip
mkdir -p "$OUT"
rm -f "$PKG"
(cd "$ROOT" && zip -r "$PKG" downloads icon.png index.html css js README.md)
echo "Created $PKG"
# For real installers, replace with NSIS, InnoSetup, or platform-specific commands.
