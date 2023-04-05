import styled from 'styled-components'

export const Button=styled.button`
background-color:${(props)=>props.getbuttonColor};
color:  white;
padding:10px;
width:150px;
justify-content:center;
margin-top:8%;
// margin-left:20%;
`

export const Center=styled.div`
display:flex;
justify-content:center;
flex-direction:column;
margin-top:20%;
text-align:center;
padding:'10px';
`

