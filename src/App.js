import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  changeHandler,
  addHandler,
  completeHandler,
  removeHandler,
  editinputHandler,
  editHandler,
  cancelEdit,
  saveEdit
} from './actions/action';

class App extends Component {
  // state = {
  //   task: "",
  //   tasklist: [],
  //   iscompleted: []
  // };
  // changeHandler = event => {
  //   this.setState({ task: event.target.value });
  // };
  // addHandler = () => {
  //   if (this.state.task.trim() !== "")
  //     this.setState({
  //       task: "",
  //       tasklist: [...this.state.tasklist, this.state.task],
  //       iscompleted: [...this.state.iscompleted, false]
  //     });
  //   console.log(this.state.tasklist);
  // };
  // completeHandler = index => {
  //   let arr = [...this.state.iscompleted];
  //   arr[index] = !this.state.iscompleted[index];
  //   this.setState({ iscompleted: arr });
  // };
  // removeHandler = index => {
  //   let arr1 = [...this.state.tasklist];
  //   let arr2 = [...this.state.iscompleted];
  //   this.setState({
  //     tasklist: arr1.filter((e, i) => i !== index),
  //     iscompleted: arr2.filter((e, i) => i !== index)
  //   });
  // };

  render() {
    return (
      <div className="App w-50 p-4 m-auto border border-primary">
        <div className="border border-primary p-4">
          <h1 className="text-right font-weight-bold text-primary m-3">
            To-Do App!!
          </h1>
          <h5 className="text-right text-primary m-3">Add New To-Do</h5>
          <input
            type="text"
            placeholder="Enter new task"
            className="rounded w-100 p-3 m-2 text-primary"
            id="new-task"
            onChange={event => this.props.changeHandler(event)}
            value={this.props.task}
          />
          <div className="d-flex justify-content-end m-2">
            <button
              className="btn btn-primary btn-outline-primary border-primary pl-3 pr-3 btn-lg"
              id="add"
              onClick={this.props.addHandler}
            >
              Add
            </button>
          </div>
        </div>
        <h2 className="text-center m-5 text-primary">
          Let's get some work done
        </h2>

        <ul className="list-group list-group-flush">
          {this.props.tasklist.map((e, i) => (
            <li key={i} className="list-group-item row text-left">
              <button
                className="btn btn-danger m-1 col-2"
                onClick={() => this.props.removeHandler(i)}
              >
                Remove
              </button>
              <button
                className={
                  'btn m-1 col-2 ' +
                  (this.props.iscompleted[i]
                    ? ' btn-secondary'
                    : ' btn-primary')
                }
                onClick={() => this.props.completeHandler(i)}
              >
                {!this.props.iscompleted[i] ? 'Complete' : 'Undo'}
              </button>
              <span
                className={
                  'task-text m-1 col-2 ' +
                  (this.props.iscompleted[i] ? 'text-secondary task-comp' : '')
                }
              >
                {e}
              </span>
              <button
                className="bg-transparent border-0 float-right col-1 m-1"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => this.props.editHandler(i)}
              >
                <img src={'quill-drawing-a-line.png'}></img>
              </button>
            </li>
          ))}
        </ul>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit task
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.cancelEdit}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className=" w-100 p-3"
                  onChange={event => this.props.editinputHandler(event)}
                  value={this.props.edittask}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.props.cancelEdit}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.props.saveEdit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    task: state.task,
    tasklist: state.tasklist,
    iscompleted: state.iscompleted,
    edittask: state.edittask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // changeHandler: event =>
    //   dispatch({ type: 'CHANGEHANDLER', payload: event.target.value }),
    changeHandler: event => {
      dispatch(changeHandler(event));
    },
    // addHandler: () => dispatch({ type: 'ADDHANDLER' }),
    addHandler: () => {
      dispatch(addHandler());
    },
    // completeHandler: index => dispatch({ type: 'COMPLETEHANDLER', index }),
    completeHandler: index => {
      dispatch(completeHandler(index));
    },
    // removeHandler: index => dispatch({ type: 'REMOVEHANDLER', index }),
    removeHandler: index => {
      dispatch(removeHandler(index));
    },
    // editinputHandler: event =>
    //   dispatch({ type: 'EDITINPUTHANDLER', payload: event.target.value }),
    editinputHandler: event => {
      dispatch(editinputHandler(event));
    },
    // editHandler: index => dispatch({ type: 'EDITHANDLER', index }),
    editHandler: index => {
      dispatch(editHandler(index));
    },
    // cancelEdit: () => dispatch({ type: 'CANCELEDIT' }),
    cancelEdit: () => {
      dispatch(cancelEdit());
    },
    // saveEdit: () => dispatch({ type: 'SAVEEDIT' })
    saveEdit: () => dispatch(saveEdit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
