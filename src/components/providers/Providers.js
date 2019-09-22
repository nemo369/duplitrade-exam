import React, { Component } from "react"
import {getProvidersData} from "../../api"
import Table from './Table'
import TableHeader from './TableHeader'
class Providers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      providers: null,
      sortByBiggest: true
    }
  }
  async componentDidMount() {
    this.fetchData()
  }
  async fetchData() {
    try {
      const providers = await getProvidersData()
      // const providers =  FAKE()
      this.setState({
        loading: false,
        providers
      })
    } catch {
      this.setState({
        loading: false,
        error: true,
      })
    }
  }
  reSort = (key, row) =>{
      if(!this.state.providers) return;
      if(key=== 'followers'){
          let rows = [...this.state.providers.rows];
          rows.sort((a,b) =>{
            if(this.state.sortByBiggest){
                return parseInt(a[key]) - parseInt(b[key])
            } else{
                return parseInt(b[key]) - parseInt(a[key])
            }
        })
        const newProviders = {
            columns: this.state.providers.columns,
            rows
        }
        this.setState({
            sortByBiggest: !this.state.sortByBiggest,
            providers:newProviders
        })
      }
      
  }
  handleDuplicate(cell){
      console.log('The Duplicate button should have an action attached to it that does nothing', {cell});
      
  }
  render() {
    return (
      <section className="table">
        {this.state.providers && <TableHeader columns={this.state.providers.columns}  sortByBiggest={this.state.sortByBiggest} reSort={this.reSort}/>}
        {this.state.loading && <div className="loader">...</div>}
        {this.state.error && (
          <div className="error">Oh no...we have a problem</div>
        )}
        {this.state.providers && <Table rows={this.state.providers.rows} handleDuplicate={this.handleDuplicate}/>}
      </section>
    )
  }
}
export default Providers
