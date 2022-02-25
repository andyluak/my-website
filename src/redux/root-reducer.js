import { combineReducers } from "redux";

import { authReducer } from "./auth/auth.reducer";
import { postsReducer } from "./posts/posts.reducer";

const rootReducer = combineReducers({
	  auth: authReducer,
	  posts: postsReducer
});

 export default rootReducer;