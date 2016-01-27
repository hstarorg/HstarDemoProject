
@echo off
rem 当前bat的作用

echo ==================begin========================

cls

SET GOPATH = %CD%/../1_hello
cd %CD%/../1_hello/src

color 0a
TITLE Go Program Management Tool

CLS

ECHO.
ECHO. * Go Program Management Tool * 
ECHO. * create by Jay at 2016-1-27 * 
ECHO.

:MENU
ECHO.
ECHO.
ECHO.
ECHO. * Please enter a number to continue* 

ECHO.
    ECHO.  [1] Build 
    ECHO.  [2] Run
    ECHO.  [3] Install Dependencies
    ECHO.  [4] Exit
ECHO.

ECHO.Pelase enter:
set /p ID=
    IF "%id%"=="1" GOTO build
    IF "%id%"=="2" GOTO run
    IF "%id%"=="3" GOTO installDependencies
    IF "%id%"=="4" EXIT
PAUSE

:build
    call :doBuild
    GOTO MENU

:run
    call :doRun
    GOTO MENU

:installDependencies
    call :doInstallDependencies
    GOTO MENU


:doBuild
    ECHO.
    go build
    ECHO. build succeed.
    goto :eof

:doRun
    ECHO.
    go run ./main.go
    ECHO. run succeed.
    goto :eof

:doInstallDependencies
    ECHO.

    go get 11

    ECHO. install dependencies succeed.
    goto :eof 

@echo off