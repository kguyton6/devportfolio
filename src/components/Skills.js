import React from 'react'
import styled from 'styled-components'
import sql from '../assets/postgres.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import redux from '../assets/redux.png'
import js from '../assets/js.png'
import express from '../assets/express.png'

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: auto auto auto auto;
    grid-gap: 20px;
    padding: 20px;
    .grid-item {
        height: 300px;
        width: auto;
    }
`

const Skills = () => {
    return (
        <Grid>
            <img className='grid-item' src={sql} alt='icon' />
            <img className='grid-item' src={css} alt='icon' />
            <img className='grid-item' src={node} alt='icon' />
            <img className='grid-item' src={react} alt='icon' />
            <img className='grid-item' src={redux} alt='icon' />
            <img className='grid-item' src={js} alt='icon' />
            <img className='grid-item' src={html} alt='icon' />
            <img className='grid-item' src={express} alt='icon' />
            


        </Grid>
    )
}


export default Skills