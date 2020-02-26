import React, { Component } from 'react'
import {TextField,SelectField, MenuItem} from 'material-ui'
import axios from 'axios'
import ImageResults from '../image-result/image-result'

class Search extends Component {
    state = {
        searchText:'',
        amount:15,
        apiURL:'https://pixabay.com/api',
        apiKEY:'12788588-0eba884af80d20dcbe56eff0c',
        images:[]
    }
    
    onTextChange = (e) =>{
        let val = e.target.value
        this.setState({[e.target.name]:val},()=>{
            if(val === ''){
                this.setState({images:[]})
            }else{
            axios.get(`${this.state.apiURL}/?key=${this.state.apiKEY}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then((res)=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err))
            }
        })
    }
    onAmountChange = (e,index,value) =>{
        console.log(e,'event')
        console.log(index,'index')
        console.log(value,'value')
        this.setState({amount:value})
    }
    render() {
        console.log(this.state.images)
        return (
            <div>
                <TextField 
                name='searchText'
                value={this.state.searchText}
                onChange={this.onTextChange}
                floatingLabelText='Search For Images'
                fullWidth={true}
                />
                <br/>
                <SelectField 
                name='amount'
                value={this.state.amount}
                onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText='5'/>
                    <MenuItem value={10} primaryText='10'/>
                    <MenuItem value={15} primaryText='15'/>
                    <MenuItem value={30} primaryText='30'/>
                    <MenuItem value={50} primaryText='50'/>
                </SelectField>
                <br/>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
            </div>
        )
    }
}
export default Search