/*export function PostData(type, userData){

	let BaseUrl = '';

	return new Promise((resolve, reject){

		fetch(BaseUrl+type,{
			 method: 'POST',
			 body: JSON.stringify(userData)
		})
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });


	});






}*/