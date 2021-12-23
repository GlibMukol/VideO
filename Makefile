start: run_client run_server

run_server:
	cd ./server/ && make start
run_client:
	cd ./client/ && make start

install: install_server install_client
install_server:
	cd ./server/ && make install
install_client:
	cd ./client/ && make install