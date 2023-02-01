// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {isPlusBtnClick: false}
  }

  OnclickPlusButton = () => {
    this.setState(prevState => ({
      isPlusBtnClick: !prevState.isPlusBtnClick,
    }))
  }

  render() {
    const {FaqDetails} = this.props
    const {questionText, answerText} = FaqDetails
    const {isPlusBtnClick} = this.state

    return (
      <li className="list-item">
        <div className="list-container">
          <div className="list-container2">
            <h1 className="heading">{questionText}</h1>
            <button
              className="plus-button"
              type="button"
              onClick={this.OnclickPlusButton}
            >
              {isPlusBtnClick ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                  alt="minus"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                  alt="plus"
                />
              )}
            </button>
          </div>
          <hr className="hr-style" />
          <>{isPlusBtnClick ? <p className="para1">{answerText}</p> : null}</>
        </div>
      </li>
    )
  }
}

export default FaqItem
