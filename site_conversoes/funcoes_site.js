//funcoes conversoes velocidade-----------------------------------------------------------------------------------------------------------------------------------------------------------
function kmH_mS(){
	var kmH = document.getElementById('inputVel').value;
	document.getElementById('resultado').innerHTML = "A velocidade de " + kmH + "km/h é equivalente a " + (kmH/3.6).toFixed(4) + "m/s";
	document.getElementById('conversaoAtual').innerHTML = "Km/h para m/s";
}

function mS_kmH(){
	var mS = document.getElementById('inputVel').value;
	document.getElementById('resultado').innerHTML = "A velocidade de " + mS + "m/s é equivalente a " + (mS*3.6).toFixed(4) + "km/h";
	document.getElementById('conversaoAtual').innerHTML = "m/s para km/h";
}

//funcoes conversoes temperatura------------------------------------------------------------------------------------------------------------------------------------------------------------
function gC_gF(){
	var gC = document.getElementById('inputTemp').value;
	document.getElementById('resultado').innerHTML = "A temperatura de " + gC + "°C é equivalente a " + (((gC/5)*9)+32).toFixed(2) + "°F";
	document.getElementById('conversaoAtual').innerHTML = "°C para °F";
}
function gC_K(){
		var gCs = document.getElementById('inputTemp').value;
		var gC = Number(gCs);
		document.getElementById('resultado').innerHTML = "A temperatura de " + (gC) + "°C é equivalente a " + ((gC+273)).toFixed(2) + "K";
		document.getElementById('conversaoAtual').innerHTML = "°C para K";
}

function gF_gC(){
	var gF = document.getElementById('inputTemp').value;
	document.getElementById('resultado').innerHTML = "A temperatura de " + gF + "°F é equivalente a " + (((gF-32)/9)*5).toFixed(2) + "°C";
	document.getElementById('conversaoAtual').innerHTML = "°F para °C";
}
function gF_K(){
	var gF = document.getElementById('inputTemp').value;
	document.getElementById('resultado').innerHTML = "A temperatura de " + gF + "°F é equivalenet a " + ((((gF-32)/9)*5)+273).toFixed(2) + "K";
	document.getElementById('conversaoAtual').innerHTML = "°F para K";
}

function K_gC(){
	var K = document.getElementById('inputTemp').value;
	document.getElementById('resultado').innerHTML = "A temperatura de " + K + "K é equivalente a " + (K-273).toFixed(2) + "°C";
	document.getElementById('conversaoAtual').innerHTML = "K para°C";
}
function K_gF(){
	var K = document.getElementById('inputTemp').value;
	document.getElementById('resultado').innerHTML = "A temperatura de " + K + "K é equivalente a " + ((((K-273)/5)*9)+32).toFixed(2) + "°F";
	document.getElementById('conversaoAtual').innerHTML = "K para °F";
}

//funcoes conversoes massa-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function kG_G(){
	var kG = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + kG + "Kg é equivalente a " + (kG*1000) + "g";
	document.getElementById('conversaoAtual').innerHTML = "Kg para g";
}
function kG_T(){
	var kG = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + kG + "Kg é equivalente a " + (kG*0.001) + " Tonelada(s)";
	document.getElementById('conversaoAtual').innerHTML = "Kg para Tonelada";
}
function kG_L(){
	var kG = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + kG + "Kg é equivalente a " + (kG*2.20462).toFixed(3) + " Libras";
	document.getElementById('conversaoAtual').innerHTML = "Kg para Libras";
}

function G_Kg(){
	var G = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + G + "g é equivalente a " + (G*0.001) + "Kg";
	document.getElementById('conversaoAtual').innerHTML = "g para Kg";
}
function G_T(){
	var G = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + G + "g é equivalente a " + (G*1e-6) + " Tonelda(s)";
	document.getElementById('conversaoAtual').innerHTML = "g para Tonelada";
}
function G_L(){
	var G = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + G + "g é equialente a " + (G*0.00220462).toFixed(4) + " Libra(s)";
	document.getElementById('conversaoAtual').innerHTML = "g para Libra";
}

function T_Kg(){
	var T = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + T + " Tonelada(s) é equivalente a " + (T*1000) + "Kg";
	document.getElementById('conversaoAtual').innerHTML = "Tonelada para Kg";
}
function T_G(){
	var T = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + T + " Tonelada(s) é equivalente a " + (T*1e6) + "g";
	document.getElementById('conversaoAtual').innerHTML = "Tonelada para g";
}
function T_L(){
	var T = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + T + " Tonelada(s) é equivalente a " + (T*2204.62) + " Libra(s)";
	document.getElementById('conversaoAtual').innerHTML = "Tonelada para Libra";
}

function L_Kg(){
	var L = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + L + " Libra(s) é equivalente a " + (L*0.453592).toFixed(3) + "Kg";
	document.getElementById('conversaoAtual').innerHTML = "Libra para Kg";
}
function L_G(){
	var L = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + L + " Libra(s) é equivalente a " + (L*453.592) + "g";
	document.getElementById('conversaoAtual').innerHTML = "Libra para g";
}
function L_T(){
	var L = document.getElementById('inputMassa').value;
	document.getElementById('resultado').innerHTML = "A massa de " + L + " Libra(s) é equivalente a " + (L*0.000453592).toFixed(6) + " Tonelada(s)";
	document.getElementById('conversaoAtual').innerHTML = "Libra para Tonelada";
}

//funcoes conversoes tempo-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function H_M(){
	var H = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = H + " horas equivalem a " + (H*60) + "min";
	document.getElementById('conversaoAtual').innerHTML = "h para min";
}
function H_S(){
	var H = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = H + " horas equivalem a " + (H*3600) + "s";
	document.getElementById('conversaoAtual').innerHTML = "h pra s";
}
function H_D(){
	var H = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = H + " horas equivalem a " + (H*0.0416) +" Dia(s)";
	document.getElementById('conversaoAtual').innerHTML = "h para Dia";
}
function H_A(){
	var H = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = H + " horas equivalem a " + (H*0.000114155).toFixed(7) + " Ano(s)";
	document.getElementById('conversaoAtual').innerHTML = "h para Ano";
}

function M_H(){
	var M = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = M + "min equivalem a " + (M*0.016) + " hora(s)";
	document.getElementById('conversaoAtual').innerHTML = "min para h";
}
function M_S(){
	var M = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = M + "min equivalem a " + (M*60) + "s";
	document.getElementById('conversaoAtual').innerHTML = "min para s";
}
function M_D(){
	var M = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = M + "min equivalem a " + (M*0.0006944) + " Dia(s)";
	document.getElementById('conversaoAtual').innerHTML = "min para Dia";
}
function M_A(){
	var M = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = M + "min equivalem a " + (M*1.9026e-6) + " Ano(s)";
	document.getElementById('conversaoAtual').innerHTML = "min para Ano";
}

function S_H(){
	var S = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = S + "s equivalem a " + (S*0.000277778) + "h";
	document.getElementById('conversaoAtual').innerHTML = "s para h";
}
function S_M(){
	var S = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = S + "s equivalem a " + (S*0.0166667) + "min";
	document.getElementById('conversaoAtual').innerHTML = "s para min";
}
function S_D(){
	var S = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = S + "s equivalem a " + (S*1.1574e-5) + " Dia(s)";
	document.getElementById('conversaoAtual').innerHTML = "s para Dia";
}
function S_A(){
	var S = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = S + "s equivalem a " + (S*3.171e-8) + " Ano(s)";
	document.getElementById('conversaoAtual').innerHTML = "s para Ano";
}

function D_H(){
	var D = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = D + " dia(s) equivalem a " + (D*24) + "h";
	document.getElementById('conversaoAtual').innerHTML = "Dia para h";
}
function D_M(){
	var D  = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = D +" dia(s) equivalem a " + (D*1440) + "min";
	document.getElementById('conversaoAtual').innerHTML = "Dia para min";
}
function D_S(){
	var D = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = D + " dia(s) equivalem a " + (D*86400) + "s";
	document.getElementById('conversaoAtual').innerHTML = "Dia para s";
}
function D_A(){
	var D = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = D + " dia(s) equivalem a " + (D/365).toFixed(6) + " ano(s)";
	document.getElementById('conversaoAtual').innerHTML = "Dia para Ano";
}

function A_H(){
	var A = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = A + " ano(s) equivalem a " + (A*8760) + "h";
	document.getElementById('conversaoAtual').innerHTML = "Ano para h";
}
function A_M(){
	var A = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = A + "  ano(s) equivalem a " + (A*525600) + "min";
	document.getElementById('conversaoAtual').innerHTML = "Ano para min";
}
function A_S(){
	var A = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = A + " ano(s) equivalem a " + (A*31536000) + "s";
	document.getElementById('conversaoAtual').innerHTML = "Ano para s";
}
function A_D(){
	var A = document.getElementById('inputTime').value;
	document.getElementById('resultado').innerHTML = A + " ano(s) equivalem a " + (A*365)+ " dia(s)";
	document.getElementById('conversaoAtual').innerHTML = "Ano para Dia";
}