#!/bin/bash
set -e

# Install Wasp
curl -sSL https://get.wasp.sh/installer.sh | sh
export PATH="$HOME/.wasp/bin:$PATH"

# Build the project
wasp build

# Install server dependencies
cd .wasp/build
npm install --production
