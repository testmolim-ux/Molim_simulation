param(
  [string]$Message = "Sync: $(Get-Date -Format o)"
)

Write-Host "Staging all changes..."
git add -A

Write-Host "Committing with message: $Message"
git commit -m "$Message" 2>$null | Out-Null

Write-Host "Pushing to origin main..."
git push origin main

Write-Host "Done."
