var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList list={['Potatoes', 'Eggs', 'Bread']}/>
  </div>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = { //style is a react html
      fontWeight: this.state.done ? 'bold' : 'normal' //how to bold
    };

    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.list}</li>
    );

  }

}


var GroceryList = (props) => (
  <ul>
    {props.list.map(list =>
      <GroceryListItem list={list} />
    )}
  </ul>
);





  ReactDOM.render(<App />, document.getElementById("app"));