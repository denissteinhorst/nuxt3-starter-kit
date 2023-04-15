#!/bin/bash

# This script is used to clean up the project from all demo files
# to have a clean project to start with.

echo "------------------------------------------------------------------------------"

# ask for confirmation to delete all demo contents
echo "This script will remove all demo related files and folders from the project."
echo "This is irreversible, are you sure you want to continue? (y/n)"
read -r answer

# if no, exit
if [[ "$answer" =~ ^[Nn]$ ]]; then
    echo "Ok, exiting..."
    exit 1
fi

# Nuxi cleanup the project folder but regenerate nuxt types.."
echo "Cleaning up project folder..."
pnpm cleanup && pnpm postinstall

# select *demo* files and folders
echo "Selecting files and folders to remove..."
declare -a files=()
declare -a folders=()
while IFS= read -r -d '' file; do
    files+=("$file")
done < <(find . -type f -name "*demo*" -not -path "*/node_modules/*" -print0)
while IFS= read -r -d '' folder; do
    folders+=("$folder")
done < <(find . -type d -name "*demo*" -not -path "*/node_modules/*" -print0)

markForDeletion=( ".DS_Store" "assets/scss" "e2e" "locales" "docs" "public" "server" "components" "composables" "middleware" "stores" )

for folder in "${markForDeletion[@]}"; do
    while IFS= read -r -d '' file; do
        files+=("$file")
    done < <(find "$folder" -type f -print0)
    while IFS= read -r -d '' folder; do
        folders+=("$folder")
    done < <(find "$folder" -type d -print0)
    folders+=("$folder")
done

# select stray files
files+=( "pages/index.vue" "i18n.config.js" "TODO.md" "README.md" )

# remove all selected files and folders
echo "Removing files and folders..."
for file in "${files[@]}"; do
    rm -rf "$file"
done
for folder in "${folders[@]}"; do
    rm -rf "$folder"
done

# create new: "assets/scss/app.scss" file with no content
echo "Generating clean: \"assets/scss/app.scss\""
mkdir -p "assets/scss"
touch "assets/scss/app.scss"

# create new: "pages/index.vue" file with default vue content
echo "Generating clean: \"pages/index.vue\""
cat > "pages/index.vue" <<EOF
<script setup lang="ts"></script>

<template>
  <h1>Enjoy your clean Nuxt3-Starter-Kit!</h1>
</template>

<style scoped lang="scss"></style>
EOF

# create new: "i18n.config.js" file with default nuxt-i18n config
echo "Generating clean: \"i18n.config.js\""
cat > "i18n.config.js" <<EOF
export default {
  // https://i18n.nuxtjs.org/options-reference/
}
EOF

# ask if the user wants to create clean env files
echo "Do you also want to create clean .env files? (y/n)"
read -r answer

# if yes, create clean env files
if [[ "$answer" =~ ^[Yy]$ ]]; then
  echo "Generating clean: \".env files\""
  for target in .env.development .env.staging .env.production; do cp .env $target; done
fi

echo "Done! Enjoy your clean Nuxt3-Starter-Kit! :)"
echo "------------------------------------------------------------------------------"
