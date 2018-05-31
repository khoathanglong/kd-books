//api: https://www.googleapis.com/books/v1/volumes?q=harry%20potter&projection=lite&langRestrict=en
import {ADD_BOOK_SUCCESS} from '../action/addBook.js';
import {REMOVE_BOOK_SUCCESS} from '../action/removeBook.js'
const books = (state={}, action)=>{
	switch(action.type){
		case ADD_BOOK_SUCCESS:{
			let booklist=state.booklist.concat({...action.bookReceived, owner:action.user});
			return {...state,booklist}
			break;
		}
		case REMOVE_BOOK_SUCCESS:{
			let booklist=state.booklist.slice();
			booklist.splice(booklist.findIndex(e=>e.id===action.id),1);
			return {...state,booklist}
			break;
		}
	}
	return state
}

export default books