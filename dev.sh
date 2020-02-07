#!/bin/bash

function build
{
    gatsby build
}

function deploy
{
    netlify deploy --dir=public --prod --open
}

while [ "$1" != "" ]
do
    case $1 in
        build)
            build
        ;;
        deploy)
            deploy
        ;;
    *)
    esac
    shift
done