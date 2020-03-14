#!/bin/sh

# set -euo pipefail
IFS=$'\n\t'

echo "=========================================="
echo "=  Jukebox - API - Docker Container ="
echo "= run.sh - version 1.0 - Julien S ="
echo "=========================================="
echo "VARIABLES"
echo "=========================================="
echo "Nothing for now"
echo "=========================================="

ELAPSED=0
while true; do
    http_code=$(curl -k -s -o /dev/null -w '%{http_code}' http://elasticsearch:9200/_cat/health)
    case $http_code in
        "200")
        echo "########## ✅ ES Running ##########"
        break
        ;;
        *)
        echo "Attempt $ELAPSED - ES is NOT up. Code : $http_code, waiting"
        sleep 2
        # after 20 secs return exit 1 to not block ci
        (( ELAPSED++ ))
        if [ $ELAPSED -eq 10 ]
        then
            exit 1
        fi
        ;;
    esac
done
yarn start
