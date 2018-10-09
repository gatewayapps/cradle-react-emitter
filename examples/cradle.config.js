const CradleConfig = require('../dist/lib/CradleConfig').default
const LoaderOptions = require('../dist/lib/LoaderOptions').default

const loaderOptions = new LoaderOptions('spec', {
  source: './examples/test.yml'
}, console)

module.exports = new CradleConfig(loaderOptions, [{module: 'cradle-react-emitter', name: 'react', options: {

  /** You must return a string  */
  getOutputPath: (model, componentType) => {
      const fileName = `${model.Name}${componentType}.ts`
      return `./src/client/components/${model.Name}/${fileName}`
  },
  renderModelForComponentType: (model, componentType, renderedProperties) =>{
    return (
      `<div>
        ${renderedProperties.join('\n')}
       </div>
      `
    )
  },
  /** This method is used when rendering the editable component for a model */
  renderEditProperty: (propertyName, propertyType, model) => {
    /*
      In here, you could do a switch on propertyType.TypeName to render
      different JSX for different property types
    */
    return (
    `<div>
      <label>${propertyName}</label>
      <input type='text' value={this.props.${model.Name}[${propertyName}]} onChange={(e)=>{this.props.set${propertyName}(e.target.value)} />
    </div>`)
  },
  /** This method is used when rendering the detail component for a model */
  renderDetailsProperty: (propertyName, propertyType, model) => {
    return (
      `<div>
        <label>${propertyName}</label>
        {this.props.${model.Name}[${propertyName}]}
      </div>`)
  },
  renderListProperty: (propertyName, propertyType, model) => {
    return (
      `<td>{this.props.${model.Name}[${propertyName}]}</td>`)
  },
  renderSelectProperty: (propertyName, propertyType, model) => {
    return (
      `<Option value={this.props.${model.Name}.id}>{this.props.${model.Name}.name}</Option>`
    )
  }
  
}}])