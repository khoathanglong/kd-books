import {
	ADD_BOOK_REQUEST,
	ADD_BOOK_SUCCESS,
	ADD_BOOK_FAILURE,
} from '../action/addBook.js'
import{
	REMOVE_BOOK_REQUEST,
	REMOVE_BOOK_SUCCESS,
	REMOVE_BOOK_FAILURE,
} from '../action/removeBook.js'
//only action name needed in reducer

const user = (state={}, action)=>{
	switch(action.type){
		case ADD_BOOK_REQUEST:{
			return {...state, fetching:true};
			break;
		}
		case ADD_BOOK_SUCCESS:{
			return {
				...state,
				 fetching:false, 
				 books_own:state.books_own.concat(action.bookReceived)
			};
			break;
		}
		case ADD_BOOK_FAILURE:{
			return {
				...state,
				error:action.error
			}
			break;
		}
		case REMOVE_BOOK_SUCCESS:{
			let books_own=state.books_own.slice();
			books_own.splice(books_own.findIndex(e=>e.id===action.id),1)
			return {
				...state,books_own
			}
		}
	}
	return state
}


export default user