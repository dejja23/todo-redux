import {
  CHANGEHANDLER,
  ADDHANDLER,
  COMPLETEHANDLER,
  REMOVEHANDLER,
  EDITINPUTHANDLER,
  EDITHANDLER,
  CANCELEDIT,
  SAVEEDIT
} from '../actions/action';

const inialState = {
  task: '',
  tasklist: [],
  iscompleted: [],
  isedited: [],
  edittask: ''
};
const reducer = (state = inialState, action) => {
  switch (action.type) {
    case CHANGEHANDLER:
      return { ...state, task: action.event.target.value };

    case ADDHANDLER:
      return state.task.trim() !== ''
        ? {
            ...state,
            task: '',
            tasklist: [...state.tasklist, state.task],
            iscompleted: [...state.iscompleted, false],
            isedited: [...state.isedited, false]
          }
        : { ...state };

    case COMPLETEHANDLER:
      let arr1 = [...state.iscompleted];
      arr1[action.index] = !state.iscompleted[action.index];
      return { ...state, iscompleted: arr1 };

    case REMOVEHANDLER:
      return {
        ...state,
        tasklist: state.tasklist.filter(
          (task, index) => index !== action.index
        ),
        iscompleted: state.iscompleted.filter(
          (task, index) => index !== action.index
        )
      };

    case EDITHANDLER:
      let arr2 = [...state.isedited];
      arr2[action.index] = true;
      return { ...state, isedited: arr2 };

    case EDITINPUTHANDLER:
      return { ...state, edittask: action.event.target.value };

    case CANCELEDIT:
      return {
        ...state,
        edittask: '',
        isedited: state.isedited.map(e => (e = false))
      };

    case SAVEEDIT:
      let arr3 = [...state.tasklist];
      state.edittask.trim() &&
        (arr3[state.isedited.indexOf(true)] = state.edittask);

      console.log(arr3);
      return {
        ...state,
        tasklist: arr3,
        edittask: '',
        isedited: state.isedited.map(e => (e = false))
      };
  }

  return state;
};

export default reducer;
