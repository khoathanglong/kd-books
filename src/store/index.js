import {createStore,applyMiddleware } from 'redux';
import data from '../data/books.js';//change later
import user from '../data/user.js';//change later
import rootReducer from '../reducer/rootReducer.js'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

export const initialData={
	books:{
		booklist:data,
		fetching:false,
		fetched:false,
		err:null
	},
	user 
}


//create store
const store = createStore(rootReducer,initialData,applyMiddleware(thunk,createLogger()))
store.subscribe(()=>{
	console.log('store',store.getState().books.booklist)
})
export default store