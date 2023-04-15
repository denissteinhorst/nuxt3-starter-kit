# This script is used to clean up the project from all demo files
# to have a clean project to start with.

# print horizontal line
Write-Host "------------------------------------------------------------------------------"

# ask for confirmation to delete all demo contents, inform that this is irreversible
Write-Host "This script will remove all demo related files and folders from the project."
Write-Host "This is irreversible, are you sure you want to continue? (y/n)"
$answer = Read-Host

# if no, exit
if ($answer -eq "n" -or $answer -eq "N") {
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
$files += Get-ChildItem -Path . -Recurse -File -Filter "*demo*" -Exclude "*/node_modules/*" | Select-Object -ExpandProperty FullName
$folders += Get-ChildItem -Path . -Recurse -Directory -Filter "*demo*" -Exclude "*/node_modules/*" | Select-Object -ExpandProperty FullName

# select all files within: "assets/scss/"
$files += Get-ChildItem -Path .\assets\scss -Recurse -File | Select-Object -ExpandProperty FullName

# select all files within: "e2e/"
$files += Get-ChildItem -Path .\e2e -Recurse -File | Select-Object -ExpandProperty FullName

# select all files within: "locales/"
$files += Get-ChildItem -Path .\locales -Recurse -File | Select-Object -ExpandProperty FullName

# select all files within: "docs/"
$files += Get-ChildItem -Path .\docs -Recurse -File | Select-Object -ExpandProperty FullName

# select all files within: "docs/"
$files += Get-ChildItem -Path .\public -Recurse -File | Select-Object -ExpandProperty FullName

# select stray files and folders
$files += "pages\index.vue", "i18n.config.js", "TODO.md", "README.md"
$folders += ".DS_Store", "components", "composables", "docs", "e2e", "locales", "middleware", "public", "server", "stores"

# remove all selected files and folders
Write-Host "Removing files and folders..."
foreach ($file in $files) { Remove-Item -Path $file -Force -Recurse }
foreach ($folder in $folders) { Remove-Item -Path $folder -Force -Recurse }

# create new: "assets/scss/app.scss" file with no content
Write-Host "Generating clean: `"`"assets/scss/app.scss`"`"" 
New-Item -ItemType File -Path .\assets\scss\app2.scss -Force

# create new: "pages/index.vue" file with default vue content
Write-Host "Generating clean: `"`"pages/index.vue`"`"" 
@"
<script setup lang="ts"></script>

<template>
  <h1>Enjoy your clean Nuxt3-Starter-Kit!</h1>
</template>

<style scoped lang="scss"></style>
"@ | Out-File -FilePath .\pages\index2.vue -Force -Encoding utf8

# create new: "i18n.config.js" file with default nuxt-i18n config
echo "Generating clean: \"i18n.config.js\"" 
@"
export default {
  // https://i18n.nuxtjs.org/options-reference/
}
"@ | Out-File -FilePath i18n.config2.js -Encoding utf8

# ask if the user wants to create clean env files
echo "Do you want to create clean .env files? (y/n)"
$answer = Read-Host

# if yes, create clean env files
if ($answer.ToLower() -eq "y") {
    echo "Generating clean: \".env files\""
    Copy-Item -Path .env -Destination .env.development2
    Copy-Item -Path .env -Destination .env.staging2
    Copy-Item -Path .env -Destination .env.production2
}

echo "Done! Enjoy your clean Nuxt3-Starter-Kit! :)"
echo "------------------------------------------------------------------------------"
