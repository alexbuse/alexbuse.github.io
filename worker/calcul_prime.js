function este_prim(n)
{
	for(var i = 2; i * i <= n ; i++)
		if(n % i == 0)
			return true;
	return false;
}

for (var i = 1E11;i < 1E12 ; i++) //1E9 inseamna 1 urmat de 9 zerouri, un miliard
	if(este_prim(i)){
		postMessage(i);
	}