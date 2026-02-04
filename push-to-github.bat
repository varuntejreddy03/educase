@echo off
echo ==========================================
echo   PopX UI - Push to GitHub
echo ==========================================
echo.

cd /d "C:\Users\varun\Downloads\assment\popx-ui"

echo [1/5] Initializing Git repository...
git init

echo.
echo [2/5] Adding all files...
git add .

echo.
echo [3/5] Creating commit...
git commit -m "PopX UI - Complete React Mobile App with Tests"

echo.
echo [4/5] Setting up remote...
git remote remove origin 2>nul
git remote add origin https://github.com/varuntejreddy03/educase.git

echo.
echo [5/5] Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ==========================================
echo   SUCCESS! Code pushed to GitHub
echo   https://github.com/varuntejreddy03/educase
echo ==========================================
echo.
pause
