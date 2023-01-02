#!/bin/bash
set -e

rm -rf *.crx
rm -rf lakmusz.hu-header-fix.zip

chrome \
	--pack-extension=extension \
	--pack-extension-key=lakmusz.hu-header-fix.pem \
	--no-message-box

mv extension.crx lakmusz.hu-header-fix.crx

cd extension
7z a ../lakmusz.hu-header-fix.zip manifest.json ../lakmusz.hu-header-fix.crx images scripts
cd ..
rm -rf manifest.json