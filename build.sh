#!/usr/bin/env bash

script_name=$(basename "$0")

log() {
  echo 1>&2 "[INFO] $script_name - $@"
}

usage() {
  cat <<EOM
Usage: '$script_name' [options]
  serve                        Run local server
  
EOM
}

CMD=$1
ARG_1=$2

case "$CMD" in
"" | help) usage ;;
*)
  log "Unsupported command [$CMD]"
  exit 1
  ;;
esac
