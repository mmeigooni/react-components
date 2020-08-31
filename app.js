class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  onMouseEnterListener() {
    this.setState({
      hovered: true
    });
  }

  onMouseLeaveListener() {
    this.setState({
      hovered: false
    });
  }

  // onListItemClick() {
  //   this.setState({
  //     clicked: !this.state.clicked
  //   });
  // }

  render() {

    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    }

    // use onMouseEnter and onMouseLeave handlers
    return (
      <li style={style} onMouseEnter={this.onMouseEnterListener.bind(this)} onMouseLeave={this.onMouseLeaveListener.bind(this)}>
        {this.props.item}
      </li>
    )
  }
};

var GroceryList = () => {
  const items = ['Coffee', 'Tea', 'Sugar'];
  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <GroceryListItem item={item} key={item}/>)}
      </ul>
    </div>
  );
}



ReactDOM.render(<GroceryList />, document.getElementById("app"));



