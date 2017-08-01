#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site

if [ "$TRAVIS_BRANCH" = "master" ]; then
	echo "Starting to upload..."
	lftp -c "open -u livesplit@livesplit.org,$FTP_PASS ftp://livesplit.org; mirror -R -i .*$ '_site/' ."
	echo "Upload finished."
fi
