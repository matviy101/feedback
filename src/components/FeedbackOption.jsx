import { Component } from "react"

class FeedbackOption extends Component {
    render() {
        return (<>
            <p>good: {this.props.good}</p>
            <p>Neutral: {this.props.neutral}</p>
            <p>bad: {this.props.bad}</p>
            <p>Total: {this.props.total}</p>
            <p>Positive feedback: {this.props.good > 0 ? this.props.positivePercentage : 0}%</p>
        </>
        )
    }
}

export default FeedbackOption