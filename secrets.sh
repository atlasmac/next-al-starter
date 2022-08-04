#!/bin/bash 
rm secrets.json
echo { >> secrets.json
echo "\"a\": \""$PWD"\"" >> secrets.json
echo } >> secrets.jsonn