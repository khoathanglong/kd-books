export const REMOVE_BOOK_REQUEST="REMOVE_BOOK_REQUEST";
export const REMOVE_BOOK_SUCCESS="REMOVE_BOOK_SUCCESS";
export const REMOVE_BOOK_FAILURE="REMOVE_BOOK_FAILURE";

const remove_book_request=()=>{
	return {
		type:REMOVE_BOOK_REQUEST
	}
}

const remove_book_success=(id)=>{
	return {
		type:REMOVE_BOOK_SUCCESS,
		id
	}
}

const remove_book_failure=(error)=>{
	return {
		type:REMOVE_BOOK_FAILURE,
		error
	}
}

export const fetchRemoveBook=(id)=>{
	return dispatch =>{
		dispatch(remove_book_request());
		// fetch('/user/books',{
		// 	type:'delete',
		// 	data:{id}
		// })//later used
		dispatch(remove_book_success(id))
	}
}