#!/usr/bin/env bash
set -e

echo "==> Avvio build pulita..."

echo "==> Rimozione cartella dist..."
rm -rf dist

echo "==> Rimozione cache di build precedente (node_modules/.vite)..."
rm -rf node_modules/.vite

echo "==> Installazione pulita delle dipendenze (npm ci)..."
npm ci

echo "==> Esecuzione build (npm run build)..."
npm run build

if [ ! -d "dist" ] || [ -z "$(ls -A dist 2>/dev/null)" ]; then
  echo "ERRORE: la cartella dist non è stata creata o è vuota." >&2
  exit 1
fi

echo "==> Build completata con successo."
echo "==> Dimensione cartella dist: $(du -sh dist | cut -f1)"
echo "==> Pronta per l'upload al percorso: $(pwd)/dist"
