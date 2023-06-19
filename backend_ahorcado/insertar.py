import http.client, json


#conexion con el servidor
conn = http.client.HTTPConnection("localhost", 5000)

def insertar():
    #POST ADDPLAYERS
    parametros= {'username':'zzz','password':'zzz'}  
    parametrosjson = json.dumps(parametros)   #body :  informacion que va al servidor
    headers = {"Content-type": "application/json"}  #headers son el tipo de dato del body

    conn.request("POST", "/player", parametrosjson, headers)
    response = conn.getresponse()
    print("Status: ", response.status)
    print("Response", response.read().decode())

def test_player_login():
    parametros= {'username':'david','password':'password'}  
    parametrosjson = json.dumps(parametros)   #body :  informacion que va al servidor
    headers = {"Content-type": "application/json"}  #headers son el tipo de dato del body

    conn.request("GET", "/player/login", parametrosjson, headers)
    response = conn.getresponse()
    print("Status: ", response.status)
    print("Response", response.read().decode())


test_player_login()