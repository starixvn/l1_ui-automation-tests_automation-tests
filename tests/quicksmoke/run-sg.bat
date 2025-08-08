@echo off
echo Running quicksmoke tests for SG project...
set PROJECT=SG
npx playwright test tests/quicksmoke/all-games.smoke.ts