











handleClick = () => {
    this.setState({
        toggle: !this.state.toggle,
    });
};
render() {
    if(this.state.toggle) {
        return (
            <div>
                <h1>{this.state.message1}</h1>
                <button onClick={this.handleClick}>Change Message</button>
            </div>
        );
    }
}

    export default Conditional;