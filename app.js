class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }


  onGroceryListItemMouseEnter() {
    this.setState({
      isHovering: true
    });
  }

  onGroceryListItemMouseLeave() {
    this.setState({
      isHovering: false
    });
  }

  render() {

    var style = {
      fontWeight: this.state.isHovering ? 'bold' : 'normal'
    };

    return (
      <li style={style} onHover={this.onGroceryListItemMouseEnter.bind(this)} onLeave={this.onGroceryListItemMouseLeave.bind(this)}>
        {this.props.listItem}
      </li>
    );
  }

}

var GroceryList = (props) => {
  const groceryList = ['Kale', 'Cucumber', 'Spinach'];
  return (
    <div>
      <h1>My grocery list</h1>
      <ul>
        {groceryList.map(function(listItem) {
          return <GroceryListItem listItem={listItem + '!'} />
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));


