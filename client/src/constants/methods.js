// export const handleSubmit = (action) => {
//     const product = {};
//     Object.keys(this.state).forEach(key => {
//         product[key] = this.state.key;
//     });
//     this.props[action](product);
// };

// export const handleChange = (event) => {
//     const { name, value } = event.target; ''.to
//     if (this['validate' + name.toUpperCase()]) {
//         this.setState({
//             [name]: value
//         });
//     }
// }

export const urlValidator = (url) => {
    return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url);
}