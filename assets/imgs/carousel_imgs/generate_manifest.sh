#!/usr/bin/env bash

APPEND="../../assets/imgs/carousel_imgs/"
FILES=$(ls *.png)
MANIFEST=carousel_manifest.ts

echo "export const manifest = [" > $MANIFEST

for file in ${FILES[@]}; do
	echo -e "\t\"$APPEND$file\"," >> $MANIFEST
done

echo "]" >> $MANIFEST
