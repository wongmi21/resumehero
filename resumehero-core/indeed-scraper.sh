#!/usr/bin/env bash

while read p; do
    url=http://localhost:8080/submit?q=$p

    curl -s ${url} 2>/dev/null > /dev/null &
    echo -n 'GET '${url}'  '


    pid=$! # Process Id of the previous running command
    spin='-\|/'
    i=0
    while kill -0 $pid 2>/dev/null
    do
      i=$(( (i+1) %4 ))
      printf "\b${spin:$i:1}"
      sleep .1
    done

    printf "\bSUCCESS\n"
done < queries.txt