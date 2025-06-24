#!/bin/sh
# Installiere Wasp CLI
curl -sSL https://get.wasp.sh/installer.sh | sh
# Füge Wasp zum PATH hinzu
export PATH="/root/.local/bin:$PATH"
# Führe den übergebenen Befehl aus
exec "$@"
