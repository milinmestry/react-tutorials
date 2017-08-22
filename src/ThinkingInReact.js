import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colspan="2">{this.props.category}</th></tr>
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked
      ? this.props.product.name
      : <span style={{color: 'red'}}>{this.props.product.name}</span>;
    var stockStr = this.props.product.stocked ? 'Yes' : 'No';
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
        <td>{stockStr}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1
        || (!product.stocked && this.props.inStockOnly)
      ) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow key={product.category} category={product.category} />
        );
      }
      rows.push(<ProductRow key={product.name} product={product} />);
      lastCategory = product.category;
    });

    return(
      <table className="border-black-1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>In stock?</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }

  render() {
    return(
      <form>
        <input type="text" placeholder="search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return(
      <div className="border-black-1 margin-top-10px padding-all-5px width-300px">
        <h2>Search Products</h2>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;