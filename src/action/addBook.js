export const ADD_BOOK_REQUEST="ADD_BOOK_REQUEST";
export const ADD_BOOK_SUCCESS="ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE="ADD_BOOK_FAILURE";
const url='https://www.googleapis.com/books/v1/volumes?projection=lite&langRestrict=en&q='


//ACCEPT_REQUEST will trigger REMOVE_BOOK from owner,
// and ADD_BOOK to requester (add book first then remove)

const addBookRequest =(name)=>{
	return {
		type:ADD_BOOK_REQUEST,
		name
	}
};

const addBookSuccess=(user,json)=>{
	return {
		type:ADD_BOOK_SUCCESS,
		bookReceived:{
			title:json.items[0].volumeInfo.title,
			img:json.items[0].volumeInfo.imageLinks.thumbnail,
			id:new Date()
		},
		user
	}
};

const addBookFailure =(error)=>{
	return {
		type:ADD_BOOK_FAILURE,
		error
	}
}

export const fetchBook=(name,user)=>{//put user here to get the user name in the all book
	return dispatch =>{
		dispatch(addBookRequest(name));
		fetch(url+name)
		.then(res=>res.json())
		// .then(res=>{
		// 	fetch('/user/books',{//update user data in the database first, then update state
		// 		type:'put',
		// 		data:{
		// 			title:json.items[0].volumeInfo.title,
		//			img:json.items[0].volumeInfo.imageLinks.thumbnail,
		// 			addAt:new Date();
		// 		}
		// 	})
		// })
		.then(json=>{
			dispatch(addBookSuccess(user,json))
		})
		.catch(error=>{dispatch(addBookFailure(error))})
	}
}