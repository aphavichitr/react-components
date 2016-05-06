// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    }
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

let GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['Apples', 'Oranges']}/>, document.getElementById("app"));
