const CradleConfig = require('../dist/lib/CradleConfig').default
const LoaderOptions = require('../dist/lib/LoaderOptions').default

const loaderOptions = new LoaderOptions('spec', {
  source: './examples/test.yml'
}, console)

module.exports = new CradleConfig(loaderOptions, [{module: 'cradle-react-emitter', name: 'react', options: {

  /** You must return a string  */
  getOutputPath: (model, componentType) => {
    
  },

  /** This method is used when rendering the editable component for a model */
  renderEditProperty: (propertyName, propertyType, modelName) => {
    /*
      In here, you could do a switch on propertyType.TypeName to render
      different JSX for different property types
    */
    return (
    `<div>
      <label>${propertyName}</label>
      <input type='text' value={this.props.${modelName}[${propertyName}]} onChange={(e)=>{this.props.set${propertyName}(e.target.value)} />
    </div>`)
  },

  /** This method is used when rendering the detail component for a model */
  renderDetailsProperty: (propertyName, modelName, propertyType) => {
    return (
      `<div>
        <label>${propertyName}</label>
        {this.props.${modelName}[${propertyName}]}
      </div>`)
  },
  
}}])