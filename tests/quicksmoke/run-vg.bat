@echo off
echo Running quicksmoke tests for VG project...
set PROJECT=VG
npx playwright test tests/quicksmoke/all-games.smoke.ts