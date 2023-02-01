// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="background-color">
        <div className="background-color2">
          <h1 className="text">FAQs</h1>
          <ul className="Faqs-container">
            {faqsList.map(eachFaq => (
              <FaqItem FaqDetails={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
