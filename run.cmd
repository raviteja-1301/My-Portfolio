@echo off
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 ( echo Install Node.js from https://nodejs.org/ & exit /b 1 )
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 ( echo npm is required. & exit /b 1 )
if not exist node_modules ( npm install )
npm run dev
