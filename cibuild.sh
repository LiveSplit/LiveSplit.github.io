#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site

if [ "$TRAVIS_BRANCH" = "master" ]; then
	echo "Starting to upload..."
	cd _site
	find . -type f -exec curl -u livesplit@livesplit.org:$FTP_PASS --ftp-create-dirs -T {} ftp://livesplit.org/{} \;
	echo "Upload finished."
fi
