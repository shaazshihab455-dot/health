# Medicine Leaflet Explainer Launcher
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "Starting Medicine Leaflet Explainer..." -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan

$indexPath = Join-Path $PSScriptRoot "public\index.html"
Write-Host "Opening application in your default browser: $indexPath" -ForegroundColor Yellow
Start-Process $indexPath
Write-Host "Application launched successfully!" -ForegroundColor Green
