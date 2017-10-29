const LoginForm = () => (
<form action="/signin/twitter" method="post">
    <h1>Please login</h1>
<button type="submit">Login</button>
    </form>
);

const LogoutComponent = (props) => (
<div>
<h2>Welcome {props.name}</h2>
<button onClick={props.logout}>Logout</button>
    <button onClick={props.dashboard}>Go to Dashboard</button>
</div>
);

class Main extends React.Component {

    constructor(...args) {
    super(...args);
    this.state = {name: null};
    this.dashboard = this.dashboard.bind(this);
}

componentDidMount() {
    fetch('/api/session', {credentials: 'same-origin'})
        .then(res => res.json())
.then(session => this.setState({name: session.name}));
}

logout() {
    console.log("logout");
    fetch('/api/session', {method: 'delete', credentials: 'same-origin'})
        .then(res => this.setState({name: null}));
}

dashboard() {
        window.location = 'dashboard.html'
}
render() {
    const profile = this.state.name ?
<LogoutComponent name={this.state.name} logout={() => this.logout()} dashboard={() => this.dashboard()}/> :
    <LoginForm />;
    return (
        <div>
        {profile}
        </div>
)
}
}

ReactDOM.render(<Main />, document.getElementById('container'));