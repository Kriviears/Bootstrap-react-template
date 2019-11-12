/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Navitem from './Navitem';
import lfpContext from '../../lfpContext'


export default class Navbar extends Component{

    static contextType = lfpContext;

    render(){
        const {currentPage, changePage} = this.context
        
        return(
        <header className='card-header'>
            <div className='row'>
                <div className='col-2'>
                    <a onClick={()=>changePage("Center for Arts and Community")} href='#home'>
                        <img
                        src='http://www.l5pcc.org/wp-content/uploads/2014/08/l5pcac_290.jpg' 
                        alt='Little 5 Points Community Center' className='img-fluid'
                        />
                    </a>
                </div>
                <div className='col-6 text-center'>
                    <h2>{currentPage}</h2>
                </div>
                <div className='col-4'>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </header>
        );
    }
}