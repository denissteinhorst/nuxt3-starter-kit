#!/bin/sh

# This script is used to clean up the project from all demo files
# to have a clean project to start with.

# print horizontal line
echo "------------------------------------------------------------------------------"

# ask for confirmation to delete all demo contents, inform that this is irreversible
echo "This script will remove all demo related files and folders from the project."
echo "This is irreversible, are you sure you want to continue? (y/n)"
read -r answer

# if no, exit
if [ "$answer" != "${answer#[Nn]}" ] ;then
    echo "Ok, exiting..."
    exit 1
fi

# Nuxi cleanup the project folder but regenerate nuxt types.."
echo "Cleaning up project folder..."
pnpm cleanup && pnpm postinstall

# select *demo* files and folders
echo "Selecting files and folders to remove..."
files+=( $(find . -type f -name "*demo*" -not -path "*/node_modules/*" -print) )
folders+=( $(find . -type d -name "*demo*" -not -path "*/node_modules/*" -print) )

# select all files within: "assets/scss/"
files+=( $(find assets/scss -type f -print) )

# select all files within: "e2e/"
files+=( $(find e2e -type f -print) )

# select all files within: "locales/"
files+=( $(find locales -type f -print) )

# select all files within: "docs/"
files+=( $(find docs -type f -print) )

# select all files within: "docs/"
files+=( $(find public -type f -print) )

# select stray files and folders
files+=( "pages/index.vue", "i18n.config.js", "TODO.md", "README.md" )
folders+=( ".DS_Store", "components", "composables", docs", "e2e, "locales", "middleware", "public", "server", "stores")

# remove all selected files and folders
echo "Removing files and folders..."
for file in "${files[@]}"; do rm -rf $file; done
for folder in "${folders[@]}"; do rm -rf $folder; done

# create new: "assets/scss/app.scss" file with no content
echo "Generating clean: \"assets/scss/app.scss\"" 
touch assets/scss/app2.scss

# create new: "pages/index.vue" file with default vue content
echo "Generating clean: \"pages/index.vue\"" 
echo "<script setup lang=\"ts\"></script>

<template>
  <h1>Enjoy your clean Nuxt3-Starter-Kit!</h1>
</template>

<style scoped lang=\"scss\"></style>" > pages/index2.vue

# chreate new: "i18n.config.js" file with default nuxt-i18n config
echo "Generating clean: \"i18n.config.js\"" 
echo "export default {
  // https://i18n.nuxtjs.org/options-reference/
}" > i18n.config2.js

# ask if the user wants to create clean env files
echo "Do you want to create clean .env files? (y/n)"
read -r answer

# if yes, create clean env files
if [ "$answer" != "${answer#[Yy]}" ] ;then
    echo "Generating clean: \".env files\""
    for target in .env.development2 .env.staging2 .env.production2; do cp .env $target; done
fi

echo "Done! Enjoy your clean Nuxt3-Starter-Kit! :)"
echo "------------------------------------------------------------------------------"