#!/usr/bin/env bash
set -e
if ! command -v node >/dev/null 2>&1; then echo "Install Node.js from https://nodejs.org/"; exit 1; fi
if ! command -v npm >/dev/null 2>&1; then echo "npm is required."; exit 1; fi
[ -d node_modules ] || npm install
npm run dev
