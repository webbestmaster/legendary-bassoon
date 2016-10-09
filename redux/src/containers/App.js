import React, { Component } from 'react'
import { connect } from 'react-redux'
class App extends Component {
    render() {
        const { name } = this.props.user // (1)
        const { year, photos } = this.props.page // (2)
        return <div>
            <p>Привет, {name}!</p>
            <p>У тебя {photos.length} фото за {year} год</p>
        </div>
    }
}
function mapStateToProps (state) {
    return {
        user: state.user, // (1)
        page: state.page // (2)
    }
}
export default connect(mapStateToProps)(App)