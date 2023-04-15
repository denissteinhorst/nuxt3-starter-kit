# This script is used to clean up the project from all demo files
# to have a clean project to start with.

Write-Host "------------------------------------------------------------------------------"

# ask for confirmation to delete all demo contents
Write-Host "This script will remove all demo related files and folders from the project."
Write-Host "This is irreversible, are you sure you want to continue? (y/n)"
$answer = Read-Host

# if no, exit
if ($answer -eq "n") {
    Write-Host "Ok, exiting..."
    exit 1
}

# Nuxi cleanup the project folder but regenerate nuxt types.."
Write-Host "Cleaning up project folder..."
pnpm cleanup; pnpm postinstall

# select *demo* files and folders
Write-Host "Selecting files and folders to remove..."
$files = @()
$folders = @()
Get-ChildItem -Path . -Recurse -Filter "*demo*" -Exclude "node_modules" -File | ForEach-Object { $files += $_.FullName }
Get-ChildItem -Path . -Recurse -Filter "*demo*" -Exclude "node_modules" -Directory | ForEach-Object { $folders += $_.FullName }

$markForDeletion = @(".DS_Store", "assets/scss", "e2e", "locales", "docs", "public", "server", "components", "composables", "middleware", "stores")

foreach ($folder in $markForDeletion) {
    Get-ChildItem -Path $folder -Recurse -File | ForEach-Object { $files += $_.FullName }
    Get-ChildItem -Path $folder -Recurse -Directory | ForEach-Object { $folders += $_.FullName }
    $folders += $folder
}

# select stray files
$files += "pages/index.vue", "i18n.config.js", "TODO.md", "README.md"

# remove all selected files and folders
Write-Host "Removing files and folders..."
foreach ($file in $files) {
    Remove-Item -Path $file -Force -Recurse
}
foreach ($folder in $folders) {
    Remove-Item -Path $folder -Force -Recurse
}

# create new: "assets/scss/app.scss" file with no content
Write-Host "Generating clean: `"`"assets/scss/app.scss`"`""
mkdir "assets/scss" | Out-Null
New-Item -ItemType File "assets/scss/app.scss" | Out-Null

# create new: "pages/index.vue" file with default vue content
Write-Host "Generating clean: `"`"pages/index.vue`"`""
@"
<script setup lang="ts"></script>

<template>
  <h1>Enjoy your clean Nuxt3-Starter-Kit!</h1>
</template>

<style scoped lang="scss"></style>
"@ | Out-File -FilePath "pages/index.vue" -Encoding utf8

# create new: "i18n.config.js" file with default nuxt-i18n config
Write-Host "Generating clean: `"`"i18n.config.js`"`""
@"
export default {
  // https://i18n.nuxtjs.org/options-reference/
}
"@ | Out-File -FilePath "i18n.config.js" -Encoding utf8

# ask if the user wants to create clean env files
Write-Host "Do you also want to create clean .env files? (y/n)"
$answer = Read-Host

# if yes, create clean env files
if ($answer -eq "y" -or $answer -eq "Y") {
  Write-Host "Generating clean: \".env files\""
  Copy-Item -Path ".env" -Destination ".env.development"
  Copy-Item -Path ".env" -Destination ".env.staging"
  Copy-Item -Path ".env" -Destination ".env.production"
}

Write-Host "Done! Enjoy your clean Nuxt3-Starter-Kit! :)"
Write-Host "------------------------------------------------------------------------------"
