docker run --name rofl-test-container --platform linux/amd64 --volume ./:/src -it ghcr.io/oasisprotocol/rofl-dev:main

docker start rofl-test-container

docker exec -it rofl-test-container /bin/bash

docker run -it --platform linux/x86_64 -p8544-8548:8544-8548 -v rofl:/rofls ghcr.io/oasisprotocol/sapphire-localnet


oasis rofl init --network testnet --paratime sapphire && oasis r update 

# step 1
docker-compose -f docker.build.yml build &&  docker push ghoulouis/test-rofl:latest 

# step 2
oasis r build --output test.orc --update-manifest  && oasis r update 

# step 3
git add . && git commit -m "update test.orc" && git push 

# test 

docker-compose -f compose.yaml up --build   

docker-compose -f compose.yaml down --rmi all -vv

