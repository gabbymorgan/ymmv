export const handleSubmit = (action) => {
    const product = {};
    Object.keys(this.state).forEach(key => {
        product[key] = this.state.key;
    });
    this.props[action](product);
};

export const handleChange = (event) => {
    const { name, value } = event.target; ''.to
    if (this['validate' + name.toUpperCase()]) {
        this.setState({
            [name]: value
        });
    }
}