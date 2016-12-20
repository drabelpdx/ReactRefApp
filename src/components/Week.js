import React, { Component } from 'react';
import './Week.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Week extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
      key: '',
      title: '',
      addLinkForm: false,
      addLinkButton: true,
      updateLinkForm: false,
      editDeleteWeek: false
    };
    // console.log("Construtor");
  }

  handleChange(e) {
    e.preventDefault();
    const newName = this.state.name;
    const newUrl = this.state.url;
    const weekId = this.props.weekId
    this.props.addLink(newName, newUrl, weekId);
    this.setState({name: ''});
    this.setState({url: ''});
    this.onChangeLinkForm();
  }

  updateName(e) {
    this.setState({name: e.target.value})
  }

  updateUrl(e) {
    this.setState({url: e.target.value})
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }

  onChangeLinkForm() {
    this.setState({
      addLinkForm: !this.state.addLinkForm,
      addLinkButton: !this.state.addLinkButton
    });
  }

  onShowWeek() {
    this.setState({
      editDeleteWeek: !this.state.editDeleteWeek,
      title: this.props.week.title
    });
  }

  onChangeUpdateLinkForm(key) {
    this.setState({
      updateLinkForm: !this.state.updateLinkForm,
      addLinkButton: !this.state.addLinkButton,
      name: this.props.week.links[key].name,
      url: this.props.week.links[key].url,
      key: key
    });
  }

  onCloseUpdateLinkForm() {
    this.setState({
      updateLinkForm: !this.state.updateLinkForm,
      addLinkButton: !this.state.addLinkButton,
      name: '',
      url: '',
      key: ''
    });
  }

  handleRemoveLink(key) {
    const weekId = this.props.weekId
    this.props.removeLink(weekId, key);
  }

  handleEditLink(e) {
    e.preventDefault();
    const key = this.state.key
    const weekId = this.props.weekId
    const editName = this.state.name
    const editUrl = this.state.url
    this.props.editLink(weekId, key, editName, editUrl);
    this.setState({
      name: '',
      url: '',
      key: '',
      updateLinkForm: !this.state.updateLinkForm,
      addLinkButton: !this.state.addLinkButton,
    });
  }

  handleRemoveWeek() {
    const weekId = this.props.weekId
    this.props.removeWeek(weekId);
  }

  handleEditWeek(e) {
    e.preventDefault();
    const weekId = this.props.weekId
    const editTitle = this.state.title
    this.props.editWeek(weekId, editTitle);
    this.setState({
      title: '',
      editDeleteWeek: !this.state.editDeleteWeek
    });
  }

  render() {
    let links = [];
    if(this.props.week.links !== undefined) {
      links = Object.keys(this.props.week.links).map((key) => {
        return (
          <li key={ key }>
            <span onClick={this.onChangeUpdateLinkForm.bind(this, key)}
                  className="glyphicon glyphicon-pencil"></span>
            <span onClick={this.handleRemoveLink.bind(this, key)}
                  className="glyphicon glyphicon-remove"></span>
            <a href={ this.props.week.links[key].url } target="blank"
                  className="links">{ this.props.week.links[key].name }</a>
          </li>
        )
      })
    }

    return (
      <div className='Week-layout'>
        {this.state.editDeleteWeek ?
          <div className="WeekForm-layout">
          <p onClick={this.onShowWeek.bind(this)}
             className="glyphicon glyphicon-remove-circle"></p>
            <input type="text" value={this.state.title}
                   onChange={this.updateTitle.bind(this)}/><br />
            <button className="btn btn btn-default linkSave" id="editTitleButton"
                    onClick={this.handleEditWeek.bind(this)}>Update</button>
            <button className="btn btn btn-danger linkSave" id="deleteWeekButton"
                    onClick={this.handleRemoveWeek.bind(this)}>Delete</button>
                    <br /><br />
          </div>
        : <h2 id="weekTitle" onClick={this.onShowWeek.bind(this)}>
              { this.props.week.title }</h2>}
        <ul>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            { links }
          </ReactCSSTransitionGroup>
        </ul>
        <br />
        {this.state.addLinkForm ?
          <div className="LinkForm-layout" id="addLinkForm">
            <p onClick={this.onChangeLinkForm.bind(this)}
               className="glyphicon glyphicon-remove-circle"></p>
            <form onSubmit={this.handleChange.bind(this)} >
              <input type="text" placeholder="link name" value={this.state.name}
                  onChange={this.updateName.bind(this)}/><br />
              <input type="text" placeholder="link url" value={this.state.url}
                  onChange={this.updateUrl.bind(this)}/><br />
              <button className="btn btn-info linkSave"
                  type="submit">Add Link</button>
            </form>
          </div>
        : null}
        {this.state.updateLinkForm ?
          <div className="LinkForm-layout" id="updateLinkForm">
            <p onClick={this.onCloseUpdateLinkForm.bind(this)}
               className="glyphicon glyphicon-remove-circle"></p>
            <form onSubmit={this.handleEditLink.bind(this)} >
              <input type="text" value={this.state.name}
                  onChange={this.updateName.bind(this)}/><br />
              <input type="text" value={this.state.url}
                  onChange={this.updateUrl.bind(this)}/><br />
              <button className="btn btn-info linkSave"
                  type="submit">Update Link</button>
            </form>
          </div>
        : null}
        {this.state.addLinkButton ?
          <button className="btn btn-info linkSave" id="addLinkButton"
                  onClick={this.onChangeLinkForm.bind(this)}>Add Link</button>
        : null}
      </div>
    );
  }

  /*
    componentWillMount() {
      console.log("Component will mount");
    }

    componentDidMount() {
      console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps) {
      console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log("Should component update", nextProps, nextState);
      return true;
    }

    componentWillUpdate(nextProps, nextState) {
      console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
      console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
      console.log("Component will unmount");
    }
  */
}
