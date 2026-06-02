@echo off
chcp 65001 >nul
echo ========================================
echo   游略阁 Gitee Pages 一键配置
echo ========================================
echo.

set /p GITEE_USER=请输入你的 Gitee 用户名: 
set /p GITEE_TOKEN=请输入 Gitee 私人令牌(设置-私人令牌-生成): 
set /p GITEE_PWD=请输入 Gitee 登录密码(用于部署Pages): 

echo.
echo [1/3] 写入 GitHub Secrets ...
gh secret set GITEE_USERNAME --body "%GITEE_USER%"
gh secret set GITEE_TOKEN --body "%GITEE_TOKEN%"
gh secret set GITEE_PASSWORD --body "%GITEE_PWD%"

echo [2/3] 触发自动部署 ...
gh workflow run gitee-pages.yml

echo [3/3] 打开部署进度 ...
timeout /t 3 >nul
start https://github.com/chenxingyu12138/youluoge/actions/workflows/gitee-pages.yml

echo.
echo 完成后访问: https://%GITEE_USER%.gitee.io/youluoge/
echo 若尚未注册 Gitee，请先打开: https://gitee.com/signup
echo 也可从 GitHub 导入: https://gitee.com/projects/import/url?url=https://github.com/chenxingyu12138/youluoge
pause
