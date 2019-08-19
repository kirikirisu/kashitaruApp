import { CHANGE_NAME, CHANGE_AGE, INITIALIZE_FORM } from '../Action/index';

const initialState = {
  form: {
    name: '',
    age: '',
  },
}

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,  // actionのnameプロパティに入力された名前を入れることにする
      }
    case CHANGE_AGE:
      return {
        ...state,
        age: action.age,  // nameと同様
      }
    case INITIALIZE_FORM:
      return initialState.form  // 初期状態を返す
    default:
      return state
  }
}

export default formReducer;
