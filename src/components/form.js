import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      version: '',
    }
  }
  

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}`)
  }
  render() {
    const codeString = `
    # Which version of the consensus rules to use
    version: ${this.state.version}
    `

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Version
          <input 
            type="text" 
            name="version"
            value={this.state.version}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name
          <input 
            type="text" 
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange} />
        </label>
      </form>
      <SyntaxHighlighter language="yaml">
        {codeString}
      </SyntaxHighlighter>
      </>
    )
  }
}

export default Form